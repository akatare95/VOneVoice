"use strict";angular.module("vovApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("access",{url:"/",templateUrl:"views/access.html",controller:"AccessCtrl"})}]),angular.module("vovApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("vovApp").controller("Secondroute3Ctrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("vovApp").controller("FooterCtrl",["$scope",function(a){a.year=(new Date).getFullYear()}]),angular.module("vovApp").service("accessService",function(){return{mods:[{name:"ANI",levels:["Level A","Level B","Level C","Level D","Level E","Level F","Level G","Level H"]},{name:"IMEI",levels:["Level I","Level J","Level K","Level L","Level M","Level N","Level O","Level P"]},{name:"Messaging",levels:["Level Q","Level R","Level S","Level T","Level U","Level V","Level W","Level X"]},{name:"AccessOne",levels:["Level Y","Level Z","Level AA","Level BB","Level CC","Level DD","Level EE","Level FF"]}],getModules:function(){return this.mods},getLevels:function(a){return a.levels}}}),angular.module("vovApp").constant("ActionLocation","server/json/searchbar/action.json"),angular.module("vovApp").constant("InfoLocation","server/json/searchbar/info.json"),angular.module("vovApp").controller("AccessCtrl",["$scope","accessService",function(a,b){a.access={},a.access.modules=b.getModules(),a.access.currentModule=a.access.modules[0],a.access.levels=function(){return b.getLevels(a.access.currentModule)}}]),angular.module("vovApp").directive("helpFeedback",function(){return{restrict:"E",replace:"true",template:"<ul id='help-feedback'><li class='help'><a title='Help' href='#'></a></li><li class='feedback'><a title='Feedback' href='#'><span></span></a></li></ul>"}}),angular.module("vovApp").controller("MenuCtrl",["$scope",function(a){a.menuContent=[{label:"OneVoice",link:"#",subheadings:[{label:"Active Call Survey",link:"#"},{label:"CTI Dialer",link:"#"},{label:"CTI Admin",link:"#"},{label:"CTI Dashboard",link:"#"},{label:"DB ANI",link:"#"},{label:"Mgmt Tool (IMT)",link:"#"},{label:"Messaging",link:"#"},{label:"Outbound",link:"#"},{label:"Vocab",link:"#"}]},{label:"User Admin",link:"https://aboutyou.verizon.com",subheadings:[]},{label:"Approval Queue",link:"#",subheadings:[]}],a.firstHeading=function(){var a=0===$index?!0:!1;return a},a.putSubheadings=function(a){var b=a.subheadings.length>0?!0:!1;return b}}]),angular.module("vovApp").directive("megaMenu",function(){return{link:function(a,b,c){a.data=a[c.menuSrc]},restrict:"E",replace:"true",templateUrl:"views/menubar/megaMenu.html"}}),angular.module("vovApp").controller("SearchbarCtrl",["$scope","ActionLocation","InfoLocation","$http",function(a,b,c,d){function e(){$(".navbar-toggle").click(function(){$("#navmenu").toggle(),$("#vz-search-form").hide(),$(this).toggleClass("active-btn"),$(".search-toggle").removeClass("active-btn")}),$(".search-toggle").click(function(){$("#navmenu").hide(),$("#vz-search-form").toggle(),$(this).toggleClass("active-btn"),$("button.navbar-toggle").removeClass("active-btn")}),$("#vz-search-mobile-close").click(function(){$("#vz-search-form").hide()}),$("#search_content").keyup(function(){function a(a){$(a.target).closest("#searchOverlayTop1").length||($("#searchOverlayTop1, #span_arrow_top").hide(),$("body").unbind())}$(this).val().length>1?$("#searchOverlayTop1, #span_arrow_top").show():$("#searchOverlayTop1, #span_arrow_top").hide(),$("body").on("click",a)})}a.search={},d.get(b).success(function(b){a.search.action=b}),d.get(c).success(function(b){a.search.info=b}),a.$on("$includeContentLoaded",e()),a.searchFilterFunction=function(b){return null==a.searchInput||""==a.searchInput||b.name.includes(a.searchInput)},a.resultClick=function(a){return!1}}]),angular.module("vovApp").filter("searchResultFilter",function(){return function(a,b){if(angular.isString(a)&&angular.isString(b)){var c=a.toLowerCase().indexOf(b.toLowerCase()),d=c+b.length;if(-1==c)return a;var e=a.substring(0,c),f=a.substring(c,d),g=a.substring(d,a.length),h=e+"<strong>"+f+"</strong>"+g;return h}return a}}),angular.module("vovApp").run(["$templateCache",function(a){a.put("views/access.html",'<div class="row"> <div class="col-md-3"> <div class="subnav"> <ul> <li>ACS FE</li> <li>CTI Admin</li> <li>CTI Dashboard</li> </ul> </div> </div><!-- /.col-md-3 --> <div class="col-md-9" ng-controller="AccessCtrl"> <div class="subnav"> <ul class="list-container-one"> <li> <p class="super-note">Module</p> <select id="mod-access" class="module-item-name" ng-model="access.currentModule" ng-options="module.name for module in access.modules"> </select> </li> <li class="list-container-item-one"> <p class="super-note">Level</p> <select id="level-access" class="module-item-name" ng-model="access.currentLevel" ng-options="level for level in access.currentModule.levels"> </select> </li> <li> <p class="super-note">Reason</p> <textarea ng-model="access.currentReason"></textarea> </li> </ul> <a role="button" class="btn-submit">Request</a> </div> </div><!-- /.col-md-3 --></div>'),a.put("views/layout/footer.html",'<!-- Global Footer --> <footer class="container disclaimer padding-left-right-zero" ng-controller="FooterCtrl"> <div class="row"> <div class="col-md-8 col-xs-8"> <p>Proprietary and Confidential. Not for disclosure outside of Verizon.</p> </div> <div class="col-md-4 col-xs-4"> <p class="pull-right pull-mobile-none">Copyright &copy; {{year}} </p> </div> </div> </footer>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/menubar/megaMenu.html",'<div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <!-- VZ Home Dropdown menu for consuming apps --> <li ng-class="{\'dropdown hidden-xs hidden-sm vz-home-dropdown\':{{$first}}}" ng-repeat="tab in data"><a href="{{tab.link}}" class="vz-home-icon-link"> <i ng-if="putSubheadings(tab)" class="fa fa-lg fa-home"></i>{{tab.label}} </a> <ul ng-if="putSubheadings(tab)" class="dropdown-menu fullwidth"> <li class="dropdown-content withdesc"> <div class="row-eq-height"> <div class="col-sm-3"> <ul> <li><a href="#">Active Call Survey</a></li> <li><a href="#">DB ANI</a></li> <li><a href="#">Vocab</a></li> </ul> </div> <div class="col-sm-3"> <ul> <li><a href="#">CTI Dialer</a></li> <li><a href="#">Mgmt Tool (IMT)</a></li> </ul> </div> <div class="col-sm-3"> <ul> <li><a href="#">CTI Admin</a></li> <li><a href="#">Messaging</a></li> </ul> </div> <div class="col-sm-3"> <ul> <li><a href="#">CTI Dashboard</a></li> <li><a href="#">Outbound</a></li> </ul> </div> </div> </li> </ul></li> </ul> </div>'),a.put("views/searchbar/searchCategory.html",'<span class="open" id="autocomplete_0" ng-show="search.action.elements | filter:searchFilterFunction">{{search.action.name}}</span> <div class="Suggested" style="display:block"> <div class="r url" ng-repeat="result in search.action.elements | filter:searchFilterFunction"> <div> <a href="javascript:void(0)" onclick="resultClick(result)" ng-bind-html="result.name | searchResultFilter:searchInput"> </a> </div> </div> </div>'),a.put("views/searchbar/searchbar.html",'<!-- search form starts --> <div id="vz-search-form" ng-controller="SearchbarCtrl"> <div class="search_inner"> <!-- search options starts --> <div class="search_options"> <div role="application" class="form-item"> <span id="vz-search-mobile-close" class="vz-search-mobile-close visible-xs"></span> <div class="form-item"> <div id="edit-search-content" class="form-text"> <!-- search results starts --> <span id="span_arrow_top" class="span_arrow" style="display: none"></span> <div class="searchOverlayTop" id="searchOverlayTop1"> <!-- search results for people starts --> <div class="results"> <span class="open" id="autocomplete_0" ng-show="search.action.elements | filter:searchFilterFunction">{{search.action.name}}</span> <div class="Suggested" style="display:block"> <div class="r url" ng-repeat="result in search.action.elements | filter:searchFilterFunction"> <div> <a href="javascript:void(0)" onclick="resultClick(result)" ng-bind-html="result.name | searchResultFilter:searchInput"> </a> </div> </div> </div><span class="open" id="autocomplete_1" ng-show="search.info.elements | filter:searchFilterFunction">{{search.info.name}}</span> <div class="Suggested" style="display:block"> <div class="r url" ng-repeat="result in search.info.elements | filter:searchFilterFunction"> <div> <a href="javascript:void(0)" onclick="resultClick(result)"> {{result.name}}</a> </div> </div> </div><span class="open" id="autocomplete_2">Additional Search Keywords</span> <div class="Search" style="display:block"> <div class="r url"> <div> <a href="javascript:void(0)" onclick="autoCompleletTrack(\'time entry\')"><strong>time</strong> entry</a> </div> </div> <div class="r url"> <div> <a href="javascript:void(0)" onclick="autoCompleletTrack(\'trs time entry\')">trs <strong>time</strong> entry</a> </div> </div> <div class="r url"> <div> <a href="javascript:void(0)" onclick="autoCompleletTrack(\'timeentry\')"><strong>time</strong>entry</a> </div> </div> <div class="r url"> <div> <a href="javascript:void(0)" onclick="autoCompleletTrack(\'flex time\')">flex <strong>time</strong></a> </div> </div> <div class="r url"> <div> <a href="javascript:void(0)" onclick="autoCompleletTrack(\'tr time entry\')">tr <strong>time</strong> entry</a> </div> </div> </div> <div class="view-all"> <a href="javascript:void(0)" onclick="autoCompleletTrack(\'time\')">See all search results &gt;</a> </div><span class="open" type="Search">People</span> <div class="people"> <div class="r"> <div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII="> <h4>User <strong>name</strong></h4> </div> <div class="title-location title-job">tech mgr-system dev</div> <div class="title-location title-lob">wireline enterprise solutions</div> <div class="title-location title-phone"><a class="phone-url">999-999-9999</a></div> <div class="title-location title-email"><a href="mailto:username@email.com">username@email.com</a></div> </div> <div class="r"> <div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII="> <h4>User <strong>name</strong></h4> </div> <div class="title-location title-job">tech mgr-system dev</div> <div class="title-location title-lob">wireline enterprise solutions</div> <div class="title-location title-phone"><a class="phone-url">999-999-9999</a></div> <div class="title-location title-email"><a href="mailto:username@email.com">username@email.com</a></div> </div> <div class="r"> <div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII="> <h4>User <strong>name</strong></h4> </div> <div class="title-location title-job">tech mgr-system dev</div> <div class="title-location title-lob">wireline enterprise solutions</div> <div class="title-location title-phone"><a class="phone-url">999-999-9999</a></div> <div class="title-location title-email"><a href="mailto:username@email.com">username@email.com</a></div> </div> <div class="r"> <div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII="> <h4>User <strong>name</strong></h4> </div> <div class="title-location title-job">tech mgr-system dev</div> <div class="title-location title-lob">wireline enterprise solutions</div> <div class="title-location title-phone"><a class="phone-url">999-999-9999</a></div> <div class="title-location title-email"><a href="mailto:username@email.com">username@email.com</a></div> </div> </div> <div class="view-all"><a href="javascript:;">See All People Results ></a></div> </div> <!-- search results for people ends --> </div> <!-- search results ends --> <label class="sr-only" for="search_content">Search Content</label> <input type="text" class="formInput" placeholder="Search" name="search_content" id="search_content" tabindex="4" ng-model="searchInput"> <a id="hrefHeaderSearch" title="Search" href="javascript:;" class="form-submit"></a> </div> </div> <div class="org_chart"><a tabindex="8" href="javascript:;" class="adv-search-link plus_icon" title="Advanced edirectory Search"><span>Advanced Search</span></a></div></div> </div> <!-- search options ends --> </div> </div> <!-- search form ends -->'),a.put("views/secondroute3.html","<p>This is the secondroute3 view.</p>")}]);