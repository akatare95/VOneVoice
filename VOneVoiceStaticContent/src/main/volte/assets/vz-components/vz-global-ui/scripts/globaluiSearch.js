var AutoComplete = null;

/**
 * @desc Function to check blank spaces
 * @param String
 * @return bool - success or failure
 */

function checkBlankChars(datafield) {
	if (datafield === "Search" || datafield.trim().length === 0) {
		alert('Enter a Keyword to search for');
		return false;
	}
	return true;
}
/**
 * @desc Function to submit AY Search Bar form
 * @param none
 * @return none
 */

function searchIntranet(keyword) {
	var str_array = keyword.split('~~');
	keyword = str_array[0];	
	submitSearchHeaderKeyword(keyword);
	
}

function getVZSearchURL() {
	var VZ_SEARCH_URL = '';
	if (window.location.href.indexOf('ebiz') > -1) {
		VZ_SEARCH_URL = 'https://vzsearch.ebiz.verizon.com/search/?search_content=';
	} else {
		VZ_SEARCH_URL = 'https://vzsearch.verizon.com/search/?search_content=';
	}

	return VZ_SEARCH_URL;
}



function submitSearchHeaderKeyword(keyword) {

	var searchText = keyword;

	if (checkBlankChars(searchText) && checkSpecialChars(searchText)) {
		searchText = encodeURIComponent(searchText);		
			window.location.href = Extranet
					.rewriteUrl(getVZSearchURL()
							 + searchText + '&source='
							+ 'All');
		

	}
}



function submitSearchHeader() {

	var searchText =  document.getElementById('vz-gui-edit-search-content-input').value;

	if (checkBlankChars(searchText) && checkSpecialChars(searchText)) {
		searchText = encodeURIComponent(searchText);		
		
			window.location.href = Extranet
					.rewriteUrl(getVZSearchURL()
							 +searchText + '&source='
							+ 'All');
		

	}
}




/**
 * @desc Function to check special characters
 * @param String
 * @return bool - success or failure
 */
function checkSpecialChars(datafield) {

	if (/[^a-zA-Z0-9\s\.\$\(\)\-\?\&\*\:\;\,\'\"\/\\]/.test(datafield)) {
		alert("Your input has special characters. \n Please remove them and try again.");
		return false;
	}
	return true;
}

function autoCompleletTrackPeople(title, url) {
		window.open(Extranet.rewriteUrl(url), "_blank");	

}

function autoCompleletTrack(title, url) {
	
	document.getElementById('vz-gui-search-results').style.display = 'none';		
	searchIntranet(title);

}

function autoCompleletTrackSuggested(title, url) {
	
	document.getElementById('vz-gui-search-results').style.display = 'none';
	window.open(url, "_self");
	return false;

}

function autoCompleletTrackTransactions(title, url) {
	
	window.open(url, "_blank").focus();		
	document.getElementById('vz-gui-search-results').style.display = 'none';	
	return false;

}

function GotoAllPeople(title) {
	
	var searchType = title.split('~~');
	url = Extranet.rewriteUrl(getVZSearchURL()
			+ encodeURIComponent(searchType[0]) + '&source=People');
	
	window.open(url, "_blank");		
	document.getElementById('vz-gui-search-results').style.display = 'none';
	return false;	

}

function GotoAllSearchResults(title) {

	
	var searchType = title.split('~~');
	var url = '';

	
	

	if (searchType[1] == 'vz-gui-edit-search-content-input') {
		
		
		
			url = Extranet.rewriteUrl(getVZSearchURL()
					+ '"' + encodeURIComponent(searchType[0]) + '"' + '&source='+'All');
			window.open(url, "_blank");
			document.getElementById('vz-gui-search-results').style.display = 'none';
			document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
			document.getElementById('vz-gui-search-clear').style.display = 'none';

	}
	
	
	return false;

}

function strip(html) {
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText;
}



//(function() {

	/**
	 * This file contains JavaScript functions used for both wireline and
	 * wireless. The file only contains functions used for entire portal.
	 * 
	 */

	/***************************************************************************
	 * AY Search AutoSuggestion functions
	 **************************************************************************/

	/*
	 * ---------------------------------------------------------------------------------------------------------
	 * base code lifted from globalalert.js and formatted for reusability
	 * ---------------------------------------------------------------------------------------------------------
	 */

	var CookieHandler = {
		put : function(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			} else
				var expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		},

		get : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for ( var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ')
					c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0)
					return c.substring(nameEQ.length, c.length);
			}
			return null;
		},

		del : function(name) {
			this.put(name, "", -1);
		}
	};

	String.prototype.capitalize = function() {
		return this.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
			return p1 + p2.toUpperCase();
		});
	};

	function toTitleCase(str) {
		return str.replace(/(\b\w)([a-zA-Z0-9]+)/gi, function(t, a, b) {
			return a.toUpperCase() + b.toLowerCase();
		});

		// return str.replace(/\w\S*/g, function(txt){return
		// txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	
	function filterTypeAhead(user_input) {

	    if (user_input != null && user_input != undefined && (user_input).length >= 2) return true;

	    else return false;

	} 	

	/*
	 * ---------------------------------------------------------------------------------------------------------
	 * AutoComplete - Generic function for auto-suggestion
	 * ---------------------------------------------------------------------------------------------------------
	 */

	//(function() {
		//var _tag = _tag || new WebTrends();
		var time = null;

		AutoComplete = function(input, url, clas) {

			this.input = input.tagName ? input : document.getElementById(input);
			this.url = url;
			this.sPhrases = new Array();
			this.sURLs = new Array();
			this.index = 0;
			this.sDiv = null;
			this.sInnerDiv = null;
			this.autoSearchScriptTag = null;
			this.srDivs = new Array();
			this.keyDown = function(e) {
				var self = arguments.callee.self;
				var pi = pix = self.index;
				e = e || window.event;
				var x = 1;
				switch (e.keyCode) {
				case 13:
					// searchIntranet(self.input.value);
					self.fireSearch();
					break;
				case 27:
					self.close();
					break;
				case 38:
					x = -1;
				case 40:
					if (self.srDivs.length < 1)
						return;
					do {
						pi = pix + x;
						if (e.keyCode == 38) {
							pix = pi < 0 ? self.srDivs.length - 1 : pi
						} else {
							pix = pi >= self.srDivs.length ? 0 : pi
						}
						if (!pix) {
							break;
						}
					} while (self.srDivs[pix].parentNode.style.display == 'none');
          //To remove extra active on Keyup and Keydown
          for (i = 0; i < self.srDivs.length; i++) {
            self.srDivs[i].className = 'vz-gui-result';
          }
					self.updateSelection(pix);
					break;
				}
				;
			};
			this.keyDown.self = this;
			this.keyUp = function(e) {
				var self = arguments.callee.self;
				// this.className+=' vz-gui-active';
				e = e || window.event;
				if (e.keyCode in {
					13 : '',
					27 : '',
					37 : '',
					38 : '',
					39 : '',
					40 : ''
				})
					return;
				self.clear();
				// commented by sathiya on 05-26-2014 to remove time delay
				/*
				 * if(time != null) { window.clearInterval(time); }
				 */
				// time=self.setInterval(function(){
				/*
				 * time=window.setInterval(function(){
				 * self.sPhrases[0]=self.input.value; self.updateList(); },500);
				 */

				self.sPhrases[0] = self.input.value;
				// alert(self.input.value);
				self.updateList();
			};
			this.keyUp.self = this;
			this.chosen = function(e) {
				var self = arguments.callee.self;
				// this.className+=' vz-gui-active';
				e = e || window.event;
				var tar = e.srcElement || e.target;
				if (tar.tagName == 'A') {
					return;
				}
				self.fireSearch();
			};
			this.chosen.self = this;
			this.fireSearch = function() {
				// alert(this.index);
				if (this.index) {
					var x = this.sURLs[this.index];
					if (x.length > 0) {
						window.location = x;
					} else {
						// Comment out by dawei, for search war, so page will
						// not refresh, simply update iframe
						// this.input.form.submit();
						searchIntranet(this.sPhrases[this.index] + '~~'
								+ this.input.id);
					}
				} else {
					// Comment out by dawei, for search war, so page will not
					// refresh, simply update iframe
					// this.input.form.submit();
					// alert("before");
					searchIntranet(this.sPhrases[this.index] + '~~'
							+ this.input.id);
					// alert("after");
				}
			};
			this.search = function() {
			};
			this.updateSelection = function(pi) {
          this.open();
          this.index = pi;
          this.input.value = this.sPhrases[pi];

          //this.highlight();
          //this.nohighlight(); 
          if (this.index) {
              //added by JSUN to remove extra active
              if ((this.srDivs[this.index].className).indexOf('vz-gui-active') == -1)
                  this.srDivs[this.index].className += ' vz-gui-active';
          }
      };
			this.highlight = function() {
          var self = arguments.callee.self;
          //self.index=self.nohighlight(this);
          //self.input.value=self.sPhrases[self.index];
          //added by JSUN to remove extra active 
          if ((this.className).indexOf('vz-gui-active') == -1)
              this.className += ' vz-gui-active';
      };
      this.highlight.self = this;

      this.nohighlight = function(find) {
          var ret = null;
          for (i in this.srDivs) {
              i = parseInt(i);
              if (i) {
                  this.srDivs[i].className = this.srDivs[i].className.replace(' vz-gui-active', '')
              }
              if (this.srDivs[i] == find) {
                  ret = i
              }
          }
          return ret;
      };
			this.divMouseOut = function(e) {				
            var self = arguments.callee.self;
            e = e || window.event;            
            var tar = e.srcElement || e.target;
            var rel = e.relatedTarget || e.toElement;
            //if (rel != null || rel != 'undefined') {
            if (rel != null || typeof rel != 'undefined') {
                while (rel != this && rel.nodeName != 'BODY' && rel.tagName != 'HTML') {                	
                    rel = rel.parentNode;
                }
            }
            if (rel == this)
                return;
            self.nohighlight();
        };
        this.divMouseOut.self = this;
			this.open = function() {
				this.sDiv.style.display = 'block';
			};
			this.close = function() {
				var self = arguments.callee.self;
				self.timer = setTimeout(function() {
					self.closereal()
				}, 150);
			};
			this.close.self = this;
			this.closereal = function() {
				this.sDiv.style.display = 'none';
				this.index = 0;
			};
			this.clear = function() {
				var self = arguments.callee.self;
				clearTimeout(self.timer);
				self.timer = null;
				self.input.focus();
			};
			this.clear.self = this;
			this.on = function() {
				var self = arguments.callee.self;
				CookieHandler.del('autoComplete');
				self.sInnerDiv.style.display = 'block';
			};
			this.on.self = this;
			this.off = function() {
				var self = arguments.callee.self;
				CookieHandler.put('autoComplete', '1', 365);
				self.sInnerDiv.style.display = 'none';
			};
			this.off.self = this;
			this.toggleSection = function() {
				var self = arguments.callee.self;
				var x = this.nextSibling;
				while (x.nodeType != 1 || x.tagName != 'DIV') {
					x = x.nextSibling;
				}
				x.style.display = x.style.display == 'none' ? 'block' : 'none';
				this.className = this.className == 'vz-gui-open' ? '' : 'vz-gui-open';
				var ch = CookieHandler;
				var cookie = 'autoComplete_' + this.getAttribute('type');
				ch.get(cookie) ? ch.del(cookie) : ch.put(cookie, 1, 365)
			};
			this.toggleSection.self = this;
			var callCounter = 0;
			var temp = '';
			this.updateList = function() {
				var self = arguments.callee.self;
				if (this.input.value.length >= 1) {
					

					if (this.input.id == 'vz-gui-edit-search-content-input') {
						/*document.getElementById('vz-gui-search-overlay-top').style.display = 'block';
						document.getElementById('vz-gui-search-results').style.display = 'block';
						document.getElementById('vz-gui-search-span-arrow').style.display = 'block';*/
						document.getElementById('vz-gui-search-clear').style.display = 'block';
					} 
					

					var sc = '';
				
					if (this.input.id == 'vz-gui-edit-search-content-input') {						
						
						var vMetaTag = document.getElementsByTagName("META");
					    var vSupervisorMetaContent = "";
					    var vMetaTagIdx;
					    for (vMetaTagIdx = 0; vMetaTagIdx < vMetaTag.length; vMetaTagIdx++) {
					        if (vMetaTag[vMetaTagIdx].name==="DCSext.isSupervisor")
					        {					        	
					        	vSupervisorMetaContent = vMetaTag[vMetaTagIdx].content;
					        	break;
					         }
					    }    
					     
						if(vSupervisorMetaContent ==='N' || vSupervisorMetaContent ===""){
							sc = Extranet.rewriteUrl(this.url
									+ '&source='
									+ 'All' + '&str='
									+ encodeURIComponent(this.input.value));

							}else{
							sc = Extranet.rewriteUrl(this.url
									+ '&source='
									+ 'All' + '&str='
									+ encodeURIComponent(this.input.value)+'&supervisor=Yes'); 
							}						
					} 

   		            if (filterTypeAhead(this.input.value)) {

						//Prevent duplicate requests due to multiple trigger of keyup for same keyword
   		            	if(temp!=this.input.value){	
   		            		var url = sc + "&callCounter="+ (++callCounter) +"&callback=";

							if(this.autoSearchScriptTag !== null){
								document.getElementsByTagName('head')[0].removeChild(this.autoSearchScriptTag);

								var script1 = document.createElement('script');
								script1.src = url + 'IntranetAutoSuggest.parseList';
								script1.id = 'autoSuggestScriptId';
								document.getElementsByTagName('head')[0].appendChild(script1);
								this.autoSearchScriptTag = script1;
							}else{
								var script = document.createElement('script');
								script.src = url + 'IntranetAutoSuggest.parseList';
								script.id = 'autoSuggestScriptId';
								document.getElementsByTagName('head')[0].appendChild(script);
								this.autoSearchScriptTag = script;
							}
   		              
						}
   		            	temp = this.input.value;
					
   		            	this.open();
   		            }

				} else {
					this.close();
					this.sPhrases = [];
					this.srDivs = [];
					this.sInnerDiv.innerHTML = "";
					document.getElementById('vz-gui-search-results').style.display = 'none';
					document.getElementById('vz-gui-search-overlay-top').style.display = 'none';
					document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
					document.getElementById('vz-gui-search-clear').style.display = 'none';
				}

				if (time != null) {
					window.clearInterval(time);
				}
				time = null;
			};

			this.updateList.self = this;
			
			this.parseList = function(json) {
          		if(json['COUNTER'] == callCounter) {

				var text = '';
				var cnt = 1;
				var peoplecnt = 1;
				var searchcnt = 1;
				var suggestedcnt = 1;
				var takeActcnt = 1;
				var url = lbl = lblx = type = title = '';
				var validLoop = false;
				for ( var i in json) {
					//var types = [ 'Suggested', 'Search', 'People' ];
					var types = ['Take Action', 'Suggested', 'Search', 'People' ];
					for ( var k = 0; k < types.length; k++) {
						for ( var j in json[i]) {
							var types_val = types[k];
							if (types_val == 'Take Action') {
								var types_val = 'Suggested';
							}
							if (!json[i][j]['TYPE'] && types[k] != 'Search') {
								continue;
							} else if (!json[i][j]['TYPE']
									|| json[i][j]['TYPE'].match(new RegExp(types_val, 'i'))) {
								if (j == "first" || j == "last") {
									continue;
								}
								if (type != types[k]) {
									if (type != '') {
										text += '</div>';
									}
									var ck = CookieHandler.get('autoComplete_'
											+ types[k]);
									var type;
									if (types[k] == 'Search') {
										type = 'Additional Search Keywords';
									} else if (types[k] == 'People') {
										type = 'People';
									} else if (types[k] == 'Suggested') {
										type = 'Featured/Info/Guidelines';
									} else if (types[k] == 'Take Action') {
										type = 'Take Action';
									}
									//if ((type == 'Content') || (type=='Suggested') || ((type == 'People') && (!Extranet.isExtranet()))) {
									if ((type == 'Additional Search Keywords') || (type=='Featured/Info/Guidelines') || (type == 'People')  || (type=='Take Action')) {
									title = '<span type="' + types[k]
											+ '" class="' + (ck ? '' : 'vz-gui-search-section-heading')
											+ '">' + type
											+ '</span>';
 									}
									type = types[k];

								}
								url = json[i][j]['URL'];
								lbl = json[i][j]['LABEL'];
								if (lbl != null) {

									lblx = lbl.replace(new RegExp("("
											+ this.input.value + ")", "i"),
											'<strong>$1</strong>');

								}
							
								
								edirurl = json[i][j]['EDIRURL'];
								avatarurl = json[i][j]['IMAGEURL'];
								
								
								if(edirurl != "" && edirurl != null){
									   edirurl = Extranet
										.rewriteUrl(edirurl);
								}
								
								if(avatarurl != "" && avatarurl != null){
									avatarurl = Extranet
										.rewriteUrl(avatarurl);
								}
								
								
								
								email = json[i][j]['EMAIL'];
								//state = json[i][j]['STATE'];
								//city = json[i][j]['CITY'];
								phone = json[i][j]['PHONE'];
								job = json[i][j]['JOBTITLE'];
								lob=json[i][j]['LOB'];
								

								if (types[k] == 'People') {
									if (peoplecnt <= 5) {
										if (peoplecnt == 1) {
											text += title;
										}
										peoplecnt = peoplecnt + 1;
										validLoop = true;
										// alert(peoplecnt);
										var imgurl = '';
										var showUrl = url ? url : "";
										if (showUrl != "" && showUrl != null) {
											showUrl = Extranet
													.rewriteUrl(showUrl);
										}
										var rlblx = lblx.replace(/'/g, "\\\'");
										rlblx += '~~' + this.input.id;

										text += '<div sr="1" class="vz-gui-result vz-gui-result-people' + (url ? ' vz-gui-search-url' : '') + '" >';

											text += '<div class="vz-gui-avatar" onclick="autoCompleletTrackPeople(\''
												+ strip(rlblx) + '\',\''
												+ edirurl + '\');"><img src="'
												+ avatarurl + '" /></div>';   // avatar image
											text += '<div class="vz-gui-people-info">';
												text+= '<div class="vz-gui-title vz-gui-title-name" onclick="autoCompleletTrackPeople(\'' + strip(rlblx) + '\',\''+ edirurl + '\');"><h4>'+ lblx.replace(',', ' ') + '</h4></div>';
												text+= job?'<div class="vz-gui-title vz-gui-title-job">'+job+'</div>':'';
												text+= lob?'<div class="vz-gui-title vz-gui-title-lob">'+lob+'</div>':'';
												text+= phone?'<div class="vz-gui-title vz-gui-title-phone"><a href="tel:'+phone+'">'+phone+'</a></div>':'';
												text+= email?'<div class="vz-gui-title vz-gui-title-email"><a href="mailto:'+email+'">'+email+'</a></div>':'';

											text+= '</div>';
											text+= '<div class="vz-gui-clearfix"></div>';

										text+= '</div>';
									}

								} else if ((types[k] == 'Suggested') && (json[i][j]['TRANSACTION'] != 'Yes')) {
									// text+='<a href="'+url+'">'+lblx+'</a>';
									// alert(url);
									if (suggestedcnt <= 5) {
										if (suggestedcnt == 1) {
											text += title;
										}
										suggestedcnt = suggestedcnt + 1;
										validLoop = true;
										text += '<div sr="1" class="vz-gui-result '
												+ (url ? ' vz-gui-search-url' : '') + '">';

										var showUrl = url ? url : "";
										if (showUrl != "" && showUrl != null) {
											showUrl = Extranet
													.rewriteUrl(showUrl);
										}
										var rlblx = lblx.replace(/'/g, "\\\'");
										rlblx += '~~' + this.input.id;
										text += '<div><a onclick="autoCompleletTrackSuggested(\''
												+ strip(rlblx)
												+ '\',\''
												+ showUrl
												+ '\');" href="#">'
												+ lblx + '</a></div>';
										/*
										 * if(url){ text+='<br /><span>'+url+'</span>' }
										 */
										text += '</div>';
									}
								} else if ((types[k] == 'Take Action') && ((json[i][j]['TYPE'] == 'Suggested') && (json[i][j]['TRANSACTION'] == 'Yes'))) {
									if (takeActcnt <= 5) {
										if (takeActcnt == 1) {
											text += title;
										}
										takeActcnt = takeActcnt + 1;
										text += '<div sr="1" class="vz-gui-result '
												+ (url ? ' vz-gui-search-url' : '') + '">';
										validLoop = true;
										var showUrl = url ? url : "";
										if (showUrl != "" && showUrl != null) {
											 showUrl =
											 Extranet.rewriteUrl(showUrl);
										}
										var rlblx = lblx.replace(/'/g, "\\\'");
										rlblx += '~~' + this.input.id;
										text += '<div><a onclick="autoCompleletTrackTransactions(\''
												+ strip(rlblx)
												+ '\',\''
												+ showUrl
												+ '\');" href="#">'
												+ lblx + '</a></div>';
										/*
										 * if(url){ text+='<br /><span>'+url+'</span>' }
										 */
										text += '</div>';
									}
								} else if (types[k] == 'Search') {
									// text+='<a href="'+url+'">'+lblx+'</a>';
									if (searchcnt <= 5 && null != lbl) {
										if (searchcnt == 1) {
											text += title;
										}
										searchcnt = searchcnt + 1;
										validLoop = true;
										text += '<div sr="1" class="vz-gui-result '
												+ (url ? ' vz-gui-search-url' : '') + '">';

										var showUrl = url ? url : "";
										if (showUrl != "" && showUrl != null) {
											showUrl = Extranet
													.rewriteUrl(showUrl);
										}
										var rlblx = lblx.replace(/'/g, "\\\'");
										rlblx += '~~' + this.input.id;
										text += '<div onclick="autoCompleletTrack(\''
												+ strip(rlblx)
												+ '\',\''
												+ showUrl
												+ '\');">'
												+ lblx
												+ '</div>';
										/*
										 * if(url){ text+='<br /><span>'+url+'</span>' }
										 */
									} else if (searchcnt == 6) {

										this.input = input.tagName ? input
												: document
														.getElementById(input);
										var sn = document.getElementById(input).value
												+ '~~'
												+ document
														.getElementById(input).id;
										text += '<div class="vz-gui-view-all"><a onclick="GotoAllSearchResults(\''
												+ sn
												+ '\');">See all search results</a></div>';
										searchcnt = searchcnt + 1;

									}
								}
								//jQuery('#searchOverlay div').removeClass(
								//		"loadinggif");
								//jQuery('#searchOverlayTop div').removeClass(
								//		"loadinggif");
								// jQuery('.intro-text').hide();
								text += '</div>';
								if (null != lbl && validLoop != false) {
									this.sPhrases[cnt] = lbl;
									this.sURLs[cnt++] = url ? url : "";
								}

							}
							validLoop = false;
						}
					}

				}

				if (peoplecnt > 5) {
					this.input = input.tagName ? input : document
							.getElementById(input);
					// alert(input);
					var sn = document.getElementById(input).value;
					// alert(sn);
					/*
					 * if(sn == '' || 'Search Intranet & People') { sn =
					 * document.getElementById('edit-search-content').value; }
					 */
					// alert(sn);
					text += '<div class="vz-gui-view-all"><a onclick="GotoAllPeople(\''
							+ sn
							+ '\');">See all people results</a></div>';

				}
				if (peoplecnt == 1 && searchcnt == 1 && suggestedcnt == 1 && takeActcnt == 1) {
					text = "";
					document.getElementById('vz-gui-search-overlay-top').style.display = 'none';
					document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
				}
				if(text == ""){
				}
				

				this.sInnerDiv.innerHTML = text;
				//$(this.sInnerDiv).show();
				this.sInnerDiv.style.display = 'block';
				document.getElementById('vz-gui-search-span-arrow').style.display = 'block';
				var spans = this.sInnerDiv.getElementsByTagName('SPAN');
				for (i = 0; i < spans.length; i++) {
					if (spans[i].parentNode == this.sInnerDiv) {
						spans[i].onclick = this.toggleSection;
					}
				}
				this.srDivs = [ '' ]
				var divs = this.sInnerDiv.getElementsByTagName('DIV');
				for (i = 0; i < divs.length; i++) {
					if (divs[i].getAttribute('sr')) {
						divs[i].onmouseover = this.highlight;
						// divs[i].onclick=this.chosen;
						divs[i].onmouseout = this.divMouseOut;
						this.srDivs[this.srDivs.length] = divs[i];
					}
				}
          	}
			};
			this.init = function(clas) {				
				var inputevent = this.input;				
				inputevent.onkeydown = this.keyDown;
				inputevent.onkeyup = this.keyUp;
				this.arrowDiv = document.getElementById('vz-gui-search-span-arrow');
				this.arrowDiv.style.display	= 'none';
				this.clearSearch = document.getElementById('vz-gui-search-clear');
				this.clearSearch.style.display = 'none';
				this.sDiv = document.getElementById('vz-gui-search-overlay-top');
				this.sDiv.style.display = 'none';
				this.sInnerDiv = document.getElementById('vz-gui-search-results');
				if (CookieHandler.get('autoComplete')) {
					this.sInnerDiv.style.display = 'none'
				}
				
			};
			this.init(clas);
		};

	//} )();

//} )();