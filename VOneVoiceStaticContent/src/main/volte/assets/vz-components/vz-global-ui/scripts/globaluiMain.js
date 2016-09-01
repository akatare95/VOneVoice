/***********************************************
 *******
 *******    Enterprise Header Service
 *******
 ***********************************************/
/*
 * @function getGlobalHeaderMenu
 * @description: return's JSON object of Menu
 */
function getGlobalHeaderMenu() {
    return [{
    "title" : "VZWeb",
    "href" : "https://vzweb2.verizon.com",
    "extHref" : null,
    "newWindow" : false,
    "classes" : "vz-gui-icon vz-gui-icon-home",
    "active" : true,
    "submenu" : null
  },{
    "title" : "About You",
    "href" : "https://aboutyou.verizon.com/",
    "extHref" : null,
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : null
  },
    {
      "title" : "Work Tools",
      "href" : "https://vzweb2.verizon.com/work-tools",
      "extHref" : null,
      "newWindow" : false,
      "classes" : null,
      "active" : false,
      "submenu" : null
    }];
}



/***********************************************
 Extranet Service starts
 ***********************************************/

var Extranet = {

    iveUatHostname: 'extranet98.verizon.com',

    iveProdHostname: 'extranet.verizon.com',

    isExtranet: function() {
        return (typeof DanaLoc !== 'undefined');
    },

    rewriteUrl: function(url) {
        if (url && this.isExtranet()) {
            url = DanaUrl(url);
        }
        return url;
    }
};



/***********************************************
 Extranet Service ends
 ***********************************************/




/***********************************************
 *******
 *******    Enterprise Header Service
 *******
 ***********************************************/


// Global Namespace
if (typeof VZGLOBALUI == 'undefined') {
    VZGLOBALUI = {};
}


// Global Variables 

VZGLOBALUI.appName = (typeof VZGLOBALUIClientCustomizer != 'undefined'  && typeof VZGLOBALUIClientCustomizer.applicationName != 'undefined' ) ? VZGLOBALUIClientCustomizer.applicationName: '';

VZGLOBALUI.userProfileImage = ( typeof VZGLOBALUIClientCustomizer != 'undefined' && typeof VZGLOBALUIClientCustomizer.userProfileImageUrl != 'undefined' ) ? Extranet.rewriteUrl(VZGLOBALUIClientCustomizer.userProfileImageUrl) : Extranet.rewriteUrl('https://profilepicture.verizon.com/apps/photoapp/ImageServlet?eid=12345');    // Update the EID



/*
 * @function - setActiveApplication
 * @description - set application's link class active
 *
 */
VZGLOBALUI.setActiveApplication = function(appName) {
    if (appName == VZGLOBALUI.appName)
        return true;
    else
        return false;
}




/*
 * @function - contructHeader
 * @description - To construct DOM wrapper for Global Header wrapper
 *
 */

VZGLOBALUI.constructHeader = function() {
    headerElm = document.createElement("header");
    headerElm.className = "vz-gui-global-header vz-gui-global-header-local"; // Global header wrapper
    headerElm.id = "vz-gui-global-header";
    headerElm.innerHTML = '<nav class="vz-gui-navbar vz-gui-navbar-default">' +
        '<div class="vz-gui-container" id="vz-gui-header-container">' +
            '<div class="vz-gui-navbar-header" id="vz-gui-navbar-header">' +
                '<a href="http://www.verizon.com/" class="vz-gui-navbar-brand"><span>'+VZGLOBALUI.appName+'</span></a>' +
            '</div>' +
        '</div>' +
    '</nav>';
    return headerElm;
}

VZGLOBALUI.constructHeaderMobile = function() {

    var buttonNav = document.createElement('button');
    buttonNav.className = "vz-gui-navbar-toggle vz-gui-visible-xs";

    var buttonSearchToggle = document.createElement('button');
    buttonSearchToggle.className = "vz-gui-search-toggle vz-gui-visible-xs";

    var buttonProfileToggle = document.createElement('button');
    buttonProfileToggle.className = "vz-gui-profile-toggle vz-gui-visible-xs";

    var imgMobile = document.createElement('img');
    var imgMobileVal = VZGLOBALUI.userProfileImage;

    imgMobile.setAttribute("src", imgMobileVal);
    imgMobile.setAttribute("alt", "User\'s Profile Avatar");

    buttonProfileToggle.appendChild(imgMobile);

    var navBarHeader = document.getElementById("vz-gui-navbar-header");
    navBarHeader.appendChild(buttonProfileToggle);
    navBarHeader.appendChild(buttonSearchToggle);
    navBarHeader.appendChild(buttonNav);

}



/*
 * @function - injectHeader
 * @description -  To inject the the header wrapper element into the DOM Body node
 *
 */

VZGLOBALUI.injectHeader = function() {
    var headerWrapper = VZGLOBALUI.constructHeader();
    var body = document.body;
    if 
        (body.firstChild) body.insertBefore(headerWrapper, body.firstChild);
    else 
        body.appendChild(headerWrapper);
}




/*
 * @function - constructGlobalMenuWrapper
 * @description - To contruct a wrapper for the global dropdown menu navigation
 */

VZGLOBALUI.constructGlobalMenuWrapper = function() {
    var navMenu = document.createElement("div");
    navMenu.className = "vz-gui-navbar-collapse vz-gui-toggle";
    navMenu.id = "vz-gui-navmenu";
    navMenu.setAttribute("style", "display: none");
    return navMenu;
}




/*
 * @function - injectGlobalMenuWrapper
 * @description - Injects the Global Menu into the Global Header wrapper 
 */

VZGLOBALUI.injectGlobalMenuWrapper = function() {
    var menuElm = VZGLOBALUI.constructGlobalMenuWrapper();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    headerWrapper.appendChild(menuElm);
}


function getDefaultGlobalHeaderMenu(){
  return [{
    "title" : "VZWeb",
    "href" : "https://vzweb2.verizon.com",
    "extHref" : null,
    "newWindow" : false,
    "classes" : "vz-gui-icon vz-gui-icon-home",
    "active" : true,
    "submenu" : null
  },{
    "title" : "About You",
    "href" : "https://aboutyou.verizon.com/",
    "extHref" : null,
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : null
  },
    {
      "title" : "Work Tools",
      "href" : "https://vzweb2.verizon.com/work-tools",
      "extHref" : null,
      "newWindow" : false,
      "classes" : null,
      "active" : false,
      "submenu" : null
    }];
  }
/*
 * @function - constructSecondaryMenu
 * @description - 
 */

VZGLOBALUI.contructGlobalMenu = function() {
    var GlobalMenu, menuData, mainMenu, linkTitle, linkUrl, menuItem, li;
    // Global menu namespace
    GlobalMenu = {};

    GlobalMenu.factory = function() {
        // fetch menu data
        menuData = getGlobalHeaderMenu();
      if(menuData == null ){
        menuData = getDefaultGlobalHeaderMenu();
      }
        // render main menu
        mainMenu = document.createElement('UL');
        mainMenu.className = 'vz-gui-nav vz-gui-navbar-nav';

        for (var i = 0; i < menuData.length; i++) {
          menuItem = menuData[i];
          linkTitle = document.createTextNode(menuItem.title);
          linkUrl = document.createElement('A');
          if ((menuItem.extHref !== null) && (menuItem.extHref !== '') && (menuItem.extHref !== undefined)) {
            linkUrl.setAttribute('href', menuItem.extHref);
          } else {
            if (menuItem.href !== null)
              linkUrl.setAttribute('href', Extranet.rewriteUrl(menuItem.href));
          }

          if (menuItem.newWindow)
            linkUrl.setAttribute('target', '_blank');
          if (menuItem.classes)
            GlobalMenu.addClasses(linkUrl, menuItem.classes);
          if (menuItem.lib)
            GlobalMenu.addLibs(linkUrl, menuItem.lib);
          linkUrl.appendChild(linkTitle);
          li = document.createElement('LI');
          // handle if there is a submenu for dropdown
          li.appendChild(linkUrl);
          if (menuItem.submenu !== null) {
            li.className = 'vz-gui-dropdown vz-gui-dropdown-primary vz-gui-' + menuItem.lib;
            var span = document.createElement('span');
            span.className = 'vz-gui-span-hover';
            li.appendChild(span);
            li.appendChild(GlobalMenu.buildDropDownMenu(menuData[i].submenu));
          }
          //console.log(menuItem.title);
          if (VZGLOBALUI.setActiveApplication(menuItem.title))
            li.className += ' vz-gui-active';
          if(menuItem.classes == 'vz-gui-search-pilot-button'){
            li.className = menuItem.classes;
            var iconSpan = document.createElement('SPAN');
            iconSpan.className = 'vz-gui-icon-arrow-right';

            linkUrl.appendChild(iconSpan);
            var cln = li.cloneNode(true);
            var prof = document.getElementById('vz-gui-navbar-header');
            //prof.insertBefore(cln, prof.firstChild);

            function insertAfter(referenceNode, newNode) {
              referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
            insertAfter(prof, cln);


          }
          mainMenu.appendChild(li);
        }


        return mainMenu;
    };




    /* @function buildMenu
     * @description: Function to iterate through the global menu object and produce the menu hierarchy structure
     */
    GlobalMenu.buildMenu = function() {
        mainMenu = this.factory();
        // add the menu to the page
        document.getElementById('vz-gui-navmenu').appendChild(mainMenu);
    };




    /* @function buildDropDownMenu
     * @description: Function to iterate through menu object and construct a dropdown menu structure
     */
    GlobalMenu.buildDropDownMenu = function(menuData) {
        // calculate total elements and total menus with submenus
        var i, ulist, list, div, span, columnDiv;

        // render the dropdown menu container wrapper
        ulist = document.createElement('UL');
        ulist.className = 'vz-gui-dropdown-menu';
        ulist.setAttribute("style", "display: none");
        list = document.createElement('LI');
        list.className = 'vz-gui-dropdown-content';
        ulist.appendChild(list);

        // render the columns
        for (i = 0; i < menuData.length; i++) {
            GlobalMenu.buildMenuColumn(list, menuData[i]);
        }
        // return the dropdown menu container
        return ulist;
    };




    /* @function buildMenuColumn
     * @description: Function to fetch and associate the menu links
     */
    GlobalMenu.buildMenuColumn = function(columnDiv, menuData) {
        var titleText, h3;
        h3 = document.createElement('H3');
        h3.className = 'vz-gui-title';
        linkTitle = document.createTextNode(menuData.title);
        linkUrl = document.createElement('A');
        if (menuData.lib)
            GlobalMenu.addLibs(linkUrl, menuData.lib);
        if ((menuData.extHref !== null) && (menuData.extHref !== '') && (menuData.extHref !== undefined)) {
            linkUrl.setAttribute('href', menuData.extHref);
            /* else */
            if (menuData.newWindow)
                linkUrl.setAttribute('target', '_blank');
            linkUrl.appendChild(linkTitle);
            h3.appendChild(linkUrl);
        } else {
            if ((menuData.href !== null) && (menuData.href !== '') && (menuData.href !== undefined)) {
                linkUrl.setAttribute('href', Extranet.rewriteUrl(menuData.href));
                /* else */
                if (menuData.newWindow)
                    linkUrl.setAttribute('target', '_blank');
                linkUrl.appendChild(linkTitle);
                h3.appendChild(linkUrl);
            } else {
                titleText = document.createTextNode(menuData.title);
                h3.appendChild(titleText);
            }
        }

        if (menuData.classes)
            GlobalMenu.addClasses(h3, menuData.classes);
        var ulist, list;
        ulist = document.createElement('UL');
        ulist.className = 'vz-gui-sub-dropdown';
        list = document.createElement('LI');

        list.appendChild(h3);

        if (menuData.submenu !== null) {
            list.className += 'vz-gui-dropdown';
            var listData = GlobalMenu.buildSubmenu(columnDiv, menuData.submenu);
            list.appendChild(listData);
        }
        ulist.appendChild(list);
        columnDiv.appendChild(ulist);
    };




    /* @function buildSubmenu
     * @description: Function to iterate through the menu object and constructs the submenu structure
     */
    GlobalMenu.buildSubmenu = function(columnDiv, menuData) {
        var ul, t, a, li, ulist, list;
        ul = document.createElement('UL');
        ul.className = 'vz-gui-dropdown-menu';
        //ul.setAttribute("style", "display: none");

        list = document.createElement('LI');
        list.className = 'vz-gui-dropdown-content';

        ul.appendChild(list);

        ulist = document.createElement('UL');
        list.appendChild(ulist);

        for (var i = 0; i < menuData.length; i++) {
            var tspan, ispan;
            tspan = document.createElement('SPAN');
            ispan = document.createElement('SPAN');
            t = document.createTextNode(menuData[i].title);
            var s =
                a = document.createElement('A');
            if ((menuData[i].extHref !== null) && (menuData[i].extHref !== '') && (menuData[i].extHref !== undefined)) {
                a.setAttribute('href', menuData[i].extHref);
            } else {
                if (menuData[i].href !== null)
                    a.setAttribute('href', Extranet.rewriteUrl(menuData[i].href));
            }

            if (menuData[i].newWindow)
                a.setAttribute('target', '_blank');
            ispan.className = 'vz-gui-icon';
            if (menuData[i].classes)
                GlobalMenu.addClasses(ispan, menuData[i].classes);
            if (menuData[i].lib)
                GlobalMenu.addLibs(a, menuData[i].lib);
            tspan.appendChild(t);
            a.appendChild(ispan);
            a.appendChild(tspan);
            li = document.createElement('LI');
            li.appendChild(a);
            ulist.appendChild(li);
        }

        return ul;
    };




    /* @function addClasses
     * @description: Function eliminate null values within class elements
     */
    GlobalMenu.addClasses = function(element, classes) {
        if (classes !== null) {
            if (element.className !== null)
                element.className += ' ' + classes;
            else
                element.className = classes;
        }
    }

    /* @function addLibs
     * @description: Function to add Lib attribute to links for Adobe analytics and tracking
     */
    GlobalMenu.addLibs = function(element, lib) {
        if (lib !== null)
            element.setAttribute('lib', lib);
    }



    // Return the GlobalMenuObject
    return GlobalMenu;
};




/*
 * @function - constructSearch
 * @description - To construct a wrapper for Search component
 */

VZGLOBALUI.constructSearch = function() {
    var searchWrapper = document.createElement("div");
    searchWrapper.className = "vz-gui-search-form";
    searchWrapper.id = "vz-gui-search-form";
    searchWrapper.innerHTML = '<div class="vz-gui-search-inner vz-gui-toggle" style="display: none;">' +
        '<span class="vz-gui-search-mobile-close" id="vz-gui-search-mobile-close"></span>' +
        '<div id="vz-gui-search-span-arrow" class="vz-gui-glyphicon vz-gui-glyphicon-arrow-up" style="display: none;"></div>' +
        '<div id="vz-gui-search-overlay-top" class="vz-gui-search-overlay-top vz-gui-toggle" style="display: none;">' +
        '<div id="vz-gui-search-results" class="vz-gui-search-results" style="display: none;"></div></div>' +
        '<div class="vz-gui-search-options"><div class="vz-gui-form-item">' +
        '<div id="vz-gui-edit-search-content" class="vz-gui-form-text vz-gui-select-dropdown-inner">' +
        '<label class="vz-gui-sr-only" for="vz-gui-search-content">Search Intranet & People</label>' +
        '<input type="text" class="vz-gui-form-input" onfocus="if(this.value == \'Search Intranet & People\') { this.value = \'\'; }" onblur="if(this.value == \'\') { this.value = \'Search Intranet & People\'; }" value="Search Intranet & People" name="vz-gui-search-content" id="vz-gui-edit-search-content-input" tabindex="4"><span id="vz-gui-search-clear" class="vz-gui-search-clear" style="display: none;"></span></div></div>' +
        '<a id="vz-gui-href-header-search" title="Search" href="javascript:submitSearchHeader()" class="vz-gui-form-submit"></a></div></div>';
    return searchWrapper;
}




/*
 * @function - injectSearch
 * @description - Injects search wrapper into the Global Headerv wrapper
 */

VZGLOBALUI.injectSearch = function() {
    var searchElm = VZGLOBALUI.constructSearch();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    headerWrapper.appendChild(searchElm);
}

var IntranetAutoSuggest = "";
VZGLOBALUI.initializeAutoCompleteObj = function() {
    //IntranetAutoSuggest = new AutoComplete('edit-search-content-input','https://vzsearch.ebiz.verizon.com/search/cgi-bin/velocity?v.app=nav-autocomplete-json-ayng&division=wireline&position=Top&num=10', 'vz-gui-search-overlay-top');
    IntranetAutoSuggest = new AutoComplete('vz-gui-edit-search-content-input', 'https://vzsearch.verizon.com/search/cgi-bin/velocity?v.app=nav-autocomplete-json-ayng&division=wireline&position=Top&num=10', 'vz-gui-search-overlay-top');

}



/*
 * @function - constructProfile
 * @description - To construct DOM for User profile dropdown
 */
VZGLOBALUI.constructProfile = function() {

    var profileWrapperElm, profileContentElm, userLogoutUrl;

    userLogoutUrl = 'https://login.verizon.com/siteminderagent/forms/logout.jsp';
    userName ='Anonymous';
    userFullName = 'Anonymous';

    profileWrapperElm = document.createElement("div");
    profileWrapperElm.className = "vz-gui-dropdown vz-gui-pull-right vz-gui-pull-mobile-none";
    profileWrapperElm.id = "vz-gui-profile-menu";
    profileWrapperElm.style.display = "none";
    profileWrapperElm.innerHTML = '<a class="vz-gui-dropdown-toggle" href="javascript:void(0)">' +
    '<span class="vz-gui-name">' + userName + '</span>' + 
    '<span class="vz-gui-glyphicon vz-gui-glyphicon-chevron-down"></span>' +
    '<img alt="User\'s Profile Avatar" src="' + VZGLOBALUI.userProfileImage + '"></a>' +
    '<div class="vz-gui-dropdown-menu vz-gui-profile-dropdown vz-gui-toggle" id="vz-gui-profile-dropdown" role="menu" style="display: none;">'+
        '<div class="vz-gui-ui-tooltip-tip"><span class="vz-gui-glyphicon vz-gui-glyphicon-triangle-top"></span></div>' +
        '<div class="vz-gui-user-info">'+
            '<div class="vz-gui-user-avatar"><img alt="User Profile Picture" class="vz-gui-user vz-gui-pull-left" src="' + VZGLOBALUI.userProfileImage + '"title="User Profile Picture"></div>'+
            '<div class="vz-gui-user-links">'+
                '<h4><span>' + userFullName + '</span></h4>'+
                '<ul class="vz-gui-list-unstyled">'+
                     getUserProfileLinks() +
                    '<li><a href="' + userLogoutUrl + '" title="Not User">Not ' + userName + '?</a></li>' +
                    '<li><a class="vz-gui-pull-right" href="' + userLogoutUrl + '" title="Signout">Sign Out</a></li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
        '<div class="vz-gui-clearfix"></div>' +
    '</div>';

    function getUserProfileLinks(){
        var userProfileLinksArray, profileLinks;
        profileLinks = '';
        if (typeof VZGLOBALUIClientCustomizer != 'undefined' && typeof VZGLOBALUIClientCustomizer.userProfileLinks != 'undefined'){
            userProfileLinksArray = VZGLOBALUIClientCustomizer.userProfileLinks;
            for(var i=0; i<userProfileLinksArray.length; i++){
                profileLinks += '<li><a href="'+ Extranet.rewriteUrl(userProfileLinksArray[i].url) + '" title="'+ userProfileLinksArray[i].label + '">'+ userProfileLinksArray[i].label + '</a></li>';
            }
        }
        return profileLinks;
    } 

    return profileWrapperElm;
}




/*
 * @function - injectProfile
 * @description - Injects User profile element into the Global Header wrapper
 */

VZGLOBALUI.injectProfile = function() {
    var profileElm = VZGLOBALUI.constructProfile();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    headerWrapper.appendChild(profileElm);
}


/*
 * @function - toggleElements
 * @description - Function to toggle show/hide components
 */

VZGLOBALUI.toggleElements = function() {
    var profileElm, searchElm, searchCloseElm, searchContainer, searchClearElm, menuElm, subMenuElm;

    // Search toggle for mobile menu
    searchElm = document.getElementsByClassName("vz-gui-search-toggle")[0];
    searchContainer = document.getElementById("vz-gui-search-form").getElementsByClassName("vz-gui-search-inner")[0];
    searchContainer.setAttribute("id", "vz-gui-search-container");
    searchElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-search-container', searchElm);
        document.getElementById('vz-gui-edit-search-content-input').focus();
    }, false);

    // Close search for mobile menu
    searchCloseElm = document.getElementById("vz-gui-search-mobile-close");
    searchCloseElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-search-container', searchCloseElm);
        document.getElementById('vz-gui-edit-search-content-input').value = 'Search Intranet & People';
    }, false);

    // Clear search and toggle for mobile menu
    searchClearElm = document.getElementById("vz-gui-search-clear");
    searchClearElm.addEventListener("click", function() {
        document.getElementById('vz-gui-search-overlay-top').style.display = 'none';
        searchClearElm.style.display = "none";
        document.getElementById('vz-gui-edit-search-content-input').value = "Search Intranet & People";
        document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
    }, false);

    // User Profile menu toggle for mobile
    mobileProfileElm = document.getElementsByClassName('vz-gui-profile-toggle')[0];
    mobileProfileElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-profile-dropdown', mobileProfileElm);
    }, false);

    // User Profile menu toggle for desktop
    profileElm = document.getElementsByClassName('vz-gui-dropdown-toggle')[0];
    /* addListenerMulti(profileElm, 'click focus focusout', function(){
         VZGLOBALUI.toggleThis('vz-gui-profile-dropdown', profileElm);
     });*/

    profileElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-profile-dropdown', profileElm);
    }, false);


    // Global navigation menu toggle for mobile
    document.querySelector('a.vz-gui-navbar-brand > span').addEventListener('click', function(event) {
        event.preventDefault();
    });
    menuElm = document.getElementsByClassName('vz-gui-navbar-toggle')[0];
    menuElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-navmenu', menuElm);
    }, false);

    // Toggle Menu only for mobile breakpoints 
    if (parseInt(window.innerWidth) < 767)
        toggleMobileMenu();
       /* window.onresize = function() {
            if (parseInt(window.innerWidth) <= 767) {
                toggleMobileMenu();
            }
        }*/

    // Toggle hover menu only for medium and up breakpoints
    if (parseInt(window.innerWidth) > 767){
        menuDropdownToggle();
        toggleAlternate();
    }

    // Mobile menu toggle function 
    function toggleMobileMenu() {
        // Sub menu navigation toggle for mobile
        subMenuElm = document.getElementById("vz-gui-navmenu").querySelectorAll("ul.vz-gui-navbar-nav  > li.vz-gui-dropdown");
        var subMenuLinkElm, subMenuContentElm, listArray, listId;
        subMenuLinkElm = [];
        listArray = [];

        for (var i = 0; i < subMenuElm.length; i++) {
            subMenuElm[i].getElementsByClassName("vz-gui-dropdown-menu")[0].setAttribute("id", "vz-gui-sub-dropdown-" + i);
            listArray.push('vz-gui-sub-dropdown-' + i);
            subMenuLinkElm.push(subMenuElm[i].firstChild);
            iterateClickHandler(subMenuLinkElm, listArray, i);
        }

        /*
         * @function iterateClickHandler
         */

        function iterateClickHandler(link, elm, i) {
            link[i].addEventListener('click', function(e) {
                e.preventDefault();
                VZGLOBALUI.toggleThis(elm[i], link[i]);
            }, false)
        }

    }

    // Menu toggle on hover for desktop
    function menuDropdownToggle() {
        //Global Dropdown menu hover
        var menuDropElms, menuElm, menuList, menuhoverContent, timer;
        menuList = [];
        menuContentList = [];
        menuDropElms = document.querySelectorAll('li.vz-gui-dropdown-primary');
        for (var i = 0; i < menuDropElms.length; i++) {
            menuList.push(menuDropElms[i]);
            menuContentList.push(menuDropElms[i].getElementsByTagName('UL')[0]);
            iterateToggleHandler(menuContentList, menuList, i);
        }

        var profileDrop = document.getElementById('vz-gui-profile-dropdown');
        var searchArrow = document.getElementById('vz-gui-search-span-arrow');
        var searchResultsContainer = document.getElementById('vz-gui-search-overlay-top');

        function iterateToggleHandler(menuContentList, menuList, i) {
            menuList[i].addEventListener('mouseenter', function(e) {
                timer = setTimeout(function() {
                    menuContentList[i].style.display = 'block';
                    // hide profile, search dropdowns on menu link hover
                    profileDrop.style.display = 'none';
                    searchArrow.style.display = 'none';
                    searchResultsContainer.style.display = 'none';
                }, 500);
            });

            menuList[i].addEventListener('mouseleave', function(e) {
                //menuContentList[i].style.display ='none';
                clearTimeout(timer);
                menuContentList[i].style.display = 'none';
            });
        }
    }


    // Providing multiple even't to a EventListner 
    function addListenerMulti(el, s, fn) {
        var evts = s.split(' ');
        for (var i = 0, iLen = evts.length; i < iLen; i++) {
            el.addEventListener(evts[i], fn, false);
        }
    }

    // hide elements when clicked anywhere else on the body DOM element.
    function toggleAlternate(){
        var profileDrop = document.getElementById('vz-gui-profile-dropdown');
        var searchArrow = document.getElementById('vz-gui-search-span-arrow');
        var searchResultsContainer = document.getElementById('vz-gui-search-overlay-top');
        var menuLinks = document.querySelectorAll('li.vz-gui-dropdown-primary');

        document.onclick = function(evt) {
            var evt=window.event || evt; // window.event for IE
            var elmClicked = (evt.target.parentElement != null && evt.target.parentElement.parentElement != null) ? evt.target.parentElement.parentElement.id : null;

            if (!evt.target) evt.target=evt.srcElement; // extend target property for IE
            
            if (elmClicked != 'vz-gui-profile-menu'){
                profileDrop.style.display = 'none';
            }
            if (elmClicked != 'vz-gui-search-container'){
                searchArrow.style.display = 'none';
                searchResultsContainer.style.display = 'none';
            }
        }
    }
    
}


/*
 * @function toggle
 * @description: Funtion to toggle element
 */

VZGLOBALUI.toggleThis = function(obj, srcElm) {
    var el, srcElm, dropdownElms, toggleClassElms;
    dropdownElms = document.querySelectorAll('.vz-gui-toggle');
    toggleClassElms = document.querySelectorAll("[toggle='vz-gui-expanded']");
    el = document.getElementById(obj);
    if (el.style.display != 'none' || el.style.display == null) {
        el.style.display = 'none';
        if (srcElm != undefined)
            srcElm.setAttribute('toggle', 'vz-gui-collapsed');
    } else {
        if (el.id.indexOf('vz-gui-sub-dropdown') == -1) {
            for (var i = 0; i < dropdownElms.length; i++) {
                //console.log(dropdownElms[i]);
                dropdownElms[i].style.display = 'none';
            }
            for (var i = 0; i < toggleClassElms.length; i++) {
                toggleClassElms[i].setAttribute('toggle', 'vz-gui-collapsed');
            }
        }
        el.style.display = 'block';
        if (srcElm != undefined)
            srcElm.setAttribute('toggle', 'vz-gui-expanded');
    }
}



/*
 * @function modifyHeaders
 * @description: Funtion to inject meta and body class to the HTML DOM
 */

VZGLOBALUI.modifyHeaders = function() {

    // Compatibility meta
    /*var httpMeta = document.createElement('meta');
    httpMeta.setAttribute("content", "IE=Edge");
    httpMeta.setAttribute("http-equiv", "X-UA-Compatible");
    document.getElementsByTagName('head')[0].appendChild(httpMeta);*/

    // viewport meta 
    /*var viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute("name", "viewport");
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1");
    document.getElementsByTagName('head')[0].appendChild(viewportMeta);*/

    // append body class
    var htmlBody = document.getElementsByTagName('body')[0];
    htmlBody.className += ' vz-gui-body';


    /* 
     * Append class for bootstrap enabled applications
     */

    var bs = isBootstrap();
    if (bs && bs != 'undefined')
        htmlBody.className += ' vz-gui-bootstrap-body';

    // function to check if end application has Bootstrap loaded
    function isBootstrap(){
      var st = document.styleSheets;
      for (var i=0; i< st.length; i++){
        if (st[i].href != null && st[i].href.indexOf("bootstrap") > -1){  
          return true;
        }
      }
    }

    /* 
     * Custom Width for header
     */

    var headerWidth = (typeof VZGLOBALUIClientCustomizer != 'undefined'  && typeof VZGLOBALUIClientCustomizer.customHeaderwidth != 'undefined' ) ? VZGLOBALUIClientCustomizer.customHeaderwidth: '';

    switch(headerWidth) {
        case '100%':
            htmlBody.className += ' vz-gui-fullwidth';
            break;
        case '1200px':
            htmlBody.className += ' vz-gui-expandedwidth';
            break;
        default:
            htmlBody.className += '';
    } 
    
}
VZGLOBALUI.displayUserProfile = function() {
    var userProfileDropDown = document.getElementById('vz-gui-profile-menu');
    userProfileDropDown.style.display = 'block';
}

/*
 * Methods Initialization
 */

VZGLOBALUI.modifyHeaders(); // modify html meta information
VZGLOBALUI.injectHeader(); // inject Global header wraper
VZGLOBALUI.constructHeaderMobile();
VZGLOBALUI.injectProfile(); // inject User profile
var thisGlobalMenu = VZGLOBALUI.contructGlobalMenu();
VZGLOBALUI.injectGlobalMenuWrapper(); // inject Global dropdown menu
VZGLOBALUI.injectSearch(); // inject header search
thisGlobalMenu.buildMenu(); // contruct the menu from the menu JSON object
VZGLOBALUI.displayUserProfile();
window.onload = function() {  
    VZGLOBALUI.initializeAutoCompleteObj(); // search autocomplete
    VZGLOBALUI.toggleElements(); // trigger function for toggle UI elements
}
