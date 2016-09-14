
'use strict';

/**
 * @ngdoc overview
 * @name vovApp
 * @description
 * # vovApp
 *
 * Main module of the application.
 */
angular
  .module('vovApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .state('/secondroute3', {
    //   templateUrl: 'views/secondroute3.html',
    //   controller: 'Secondroute3Ctrl'
    // })
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('access', {
      url: '/',
      templateUrl: 'views/access.html',
      controller: 'AccessCtrl'
    })
}]);

'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vovApp
 */
angular.module('vovApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('vovApp')
  .controller('Secondroute3Ctrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the vovApp, for only the footer section. Gets the year.
 */
angular.module('vovApp')
  .controller('FooterCtrl', ["$scope", function ($scope) {
    $scope.year = new Date().getFullYear(); //get the year for the footer
  }]);

'use strict';

/**
 * @ngdoc service
 * @name vovApp.accessService
 * @description
 * # accessService
 * Service in the vovApp.
 */
angular.module('vovApp')
  .service('accessService', function () {
    //return the service object
    return {
      //modules and their access levels
      mods: [
             {
            name:"ANI",
            levels:["Level A","Level B","Level C","Level D","Level E","Level F","Level G","Level H"]
             },
             {
               name: "IMEI",
               levels: ["Level I","Level J","Level K","Level L","Level M","Level N","Level O","Level P"]
             },
             {
               name: "Messaging",
               levels: ["Level Q","Level R","Level S","Level T","Level U","Level V","Level W","Level X"]
             },
             {
               name: "AccessOne",
               levels: ["Level Y","Level Z","Level AA","Level BB","Level CC","Level DD","Level EE","Level FF"]
             }
      ],
      //get every module
      getModules: function(){
        return this.mods;
      },
      //get levels
      getLevels: function(currentModule){
        return currentModule.levels;
      }
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name vovApp.ActionLocation
 * @description
 * # ActionLocation
 * Constant in the vovApp.
 */
angular.module('vovApp')
  .constant('ActionLocation', "server/json/searchbar/action.json");

'use strict';

/**
 * @ngdoc service
 * @name vovApp.InfoLocation
 * @description
 * # InfoLocation
 * Constant in the vovApp.
 */
angular.module('vovApp')
  .constant('InfoLocation', "server/json/searchbar/info.json");

'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:AccessCtrl
 * @description
 * # AccessCtrl
 * Controller of the vovApp
 */
angular.module('vovApp')
  .controller('AccessCtrl', ["$scope", "accessService", function ($scope, accessService) {

    $scope.access = {};
    //get modules
    $scope.access.modules = accessService.getModules();
    //current module
    $scope.access.currentModule = $scope.access.modules[0];
    //current levels
    $scope.access.levels = function(){
      return accessService.getLevels($scope.access.currentModule);
    };
    //access level
    //$scope.access.currentLevel = $scope.access.currentModule.levels[0];
    //reason
    //$scope.access.currentReason
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name vovApp.directive:helpFeedback
 * @description
 * # helpFeedback
 */
angular.module('vovApp')
  .directive('helpFeedback', function () {

return{
      restrict: "E",
      replace: 'true',
      template: "<ul id='help-feedback'>" +
          "<li class='help'>" +
          "<a title='Help' href='#'></a>" +
          "</li>" +
          "<li class='feedback'>" +
          "<a title='Feedback' href='#'><span></span></a>" +
          "</li>" +
          "</ul>"
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the vovApp
 */
angular.module('vovApp')
  .controller('MenuCtrl', ["$scope", function ($scope) {

    $scope.menuContent=[
                         {label:"OneVoice", link:"#",
                subheadings:[{label:"Active Call Survey", link:"#"},{label:"CTI Dialer", link:"#"},{label:"CTI Admin", link:"#"},
                 {label:"CTI Dashboard", link:"#"},{label:"DB ANI", link:"#"},{label:"Mgmt Tool (IMT)", link:"#"},
                 {label:"Messaging", link:"#"},{label:"Outbound", link:"#"},{label:"Vocab", link:"#"},
                      ]
              },
              {label:"User Admin", link:"https://aboutyou.verizon.com", subheadings:[]},
              {label:"Approval Queue", link:"#", subheadings:[]}
               ];
    $scope.firstHeading=function(){
      var ans=$index===0?true:false;
      return ans;
    };
    $scope.putSubheadings=function(label){
      var ans=label.subheadings.length>0?true:false;
      return ans;
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name vovApp.directive:megaMenu
 * @description
 * # megaMenu
 */
angular.module('vovApp')
  .directive('megaMenu', function () {
    return{
      link:function(scope, element, attrs){
        scope.data=scope[attrs["menuSrc"]];
      },
      restrict:"E",
      replace:"true",
      templateUrl:"views/menubar/megaMenu.html"


    };
  });

'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:SearchbarCtrl
 * @description
 * # SearchbarCtrl
 * Controller of the vovApp
 */
angular.module('vovApp')
  .controller('SearchbarCtrl', ["$scope", "ActionLocation", "InfoLocation", "$http", function ($scope, ActionLocation, InfoLocation, $http) {
    $scope.search = {};//search data
  	//get the data for action TODO Handle problem if error
  	$http.get(ActionLocation).success(function(data){
  		$scope.search.action = data;
  	});
  	//get data for info section
  	$http.get(InfoLocation).success(function(data){
  		$scope.search.info = data;
  	});

  	//function to register search behaviors
  	function registerSearch() {
  	    // -------------------------
  	    // Mobile Search & Menu Toggle
  	    // -------------------------
  	    $(".navbar-toggle").click(function() {
  	        $("#navmenu").toggle();
  	        $("#vz-search-form").hide();
  	        $(this).toggleClass("active-btn");
  	        $(".search-toggle").removeClass("active-btn");
  	    });

  	    $(".search-toggle").click(function() {
  	        $('#navmenu').hide();
  	        $('#vz-search-form').toggle();
  	        $(this).toggleClass('active-btn');
  	        $('button.navbar-toggle').removeClass('active-btn');
  	    });

  	    $('#vz-search-mobile-close').click(function(){
  	        $('#vz-search-form').hide();
  	    });

  	    // -------------------------
  	    //  Search Auto Suggest Dropdown
  	    // -------------------------
  	    $('#search_content').keyup(function() {
  	        if ($(this).val().length > 1) {
  	            $('#searchOverlayTop1, #span_arrow_top').show();
  	        } else {
  	            $('#searchOverlayTop1, #span_arrow_top').hide();
  	        }

  	        $('body').on("click", closeSarchDD);

  	        function closeSarchDD(event) {
  	            if (!$(event.target).closest('#searchOverlayTop1').length) {
  	                $("#searchOverlayTop1, #span_arrow_top").hide();
  	                $('body').unbind();
  	            }
  	        }
  	    });

  	}
  	$scope.$on('$includeContentLoaded', registerSearch());

  	$scope.searchFilterFunction = function(result){
  		return $scope.searchInput == null || $scope.searchInput == '' ||
  			result.name.includes($scope.searchInput);
  	};

  	$scope.resultClick = function(result){
  		///autoCompleletTrackTakeaction(result.name,result.destination);
  		return false;
  	};
  }]);

'use strict';

/**
 * @ngdoc filter
 * @name vovApp.filter:searchResultFilter
 * @function
 * @description
 * # searchResultFilter
 * Filter in the vovApp.
 */
angular.module('vovApp')
  .filter('searchResultFilter', function () {
    //filter to attempt to make the selected term bold in the results
  	return function(value, searchTerm){
  		//check if the value is a string, as is the searchTerm
  		if(angular.isString(value) && angular.isString(searchTerm)){
  			//find search term in lowercase string
  			var index = value.toLowerCase().indexOf(searchTerm.toLowerCase());
  			var endDex = index + searchTerm.length;//end of string
  			//index shouldn't be -1, but if so, return value
  			if(index == -1)
  				return value;
  			//at this point start index is known, create 3 substrings
  			//first part
  			var startStr = value.substring(0, index);
  			//searched for part
  			var searchStr = value.substring(index, endDex);
  			//final bit of string
  			var endStr = value.substring(endDex, value.length);
  			//TODO apparently, lowercase start of end string

  			//concat the three parts with strong on term
  			var result = startStr + "<strong>"
  				+ searchStr + "</strong>" + endStr;
  			//return html?
  			return result;
  		}else{
  			//one is not a string, return unfiltered value
  			return value;
  		}
  	};
  });

angular.module('vovApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/access.html',
    "<div class=\"row\"> <div class=\"col-md-3\"> <div class=\"subnav\"> <ul> <li>ACS FE</li> <li>CTI Admin</li> <li>CTI Dashboard</li> </ul> </div> </div><!-- /.col-md-3 --> <div class=\"col-md-9\" ng-controller=\"AccessCtrl\"> <div class=\"subnav\"> <ul class=\"list-container-one\"> <li> <p class=\"super-note\">Module</p> <select id=\"mod-access\" class=\"module-item-name\" ng-model=\"access.currentModule\" ng-options=\"module.name for module in access.modules\"> </select> </li> <li class=\"list-container-item-one\"> <p class=\"super-note\">Level</p> <select id=\"level-access\" class=\"module-item-name\" ng-model=\"access.currentLevel\" ng-options=\"level for level in access.currentModule.levels\"> </select> </li> <li> <p class=\"super-note\">Reason</p> <textarea ng-model=\"access.currentReason\"></textarea> </li> </ul> <a role=\"button\" class=\"btn-submit\">Request</a> </div> </div><!-- /.col-md-3 --></div>"
  );


  $templateCache.put('views/layout/footer.html',
    "<!-- Global Footer --> <footer class=\"container disclaimer padding-left-right-zero\" ng-controller=\"FooterCtrl\"> <div class=\"row\"> <div class=\"col-md-8 col-xs-8\"> <p>Proprietary and Confidential. Not for disclosure outside of Verizon.</p> </div> <div class=\"col-md-4 col-xs-4\"> <p class=\"pull-right pull-mobile-none\">Copyright &copy; {{year}} </p> </div> </div> </footer>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/menubar/megaMenu.html',
    "<div id=\"navbar\" class=\"collapse navbar-collapse\"> <ul class=\"nav navbar-nav\"> <!-- VZ Home Dropdown menu for consuming apps --> <li ng-class=\"{'dropdown hidden-xs hidden-sm vz-home-dropdown':{{$first}}}\" ng-repeat=\"tab in data\"><a href=\"{{tab.link}}\" class=\"vz-home-icon-link\"> <i ng-if=\"putSubheadings(tab)\" class=\"fa fa-lg fa-home\"></i>{{tab.label}} </a> <ul ng-if=\"putSubheadings(tab)\" class=\"dropdown-menu fullwidth\"> <li class=\"dropdown-content withdesc\"> <div class=\"row-eq-height\"> <div class=\"col-sm-3\"> <ul> <li><a href=\"#\">Active Call Survey</a></li> <li><a href=\"#\">DB ANI</a></li> <li><a href=\"#\">Vocab</a></li> </ul> </div> <div class=\"col-sm-3\"> <ul> <li><a href=\"#\">CTI Dialer</a></li> <li><a href=\"#\">Mgmt Tool (IMT)</a></li> </ul> </div> <div class=\"col-sm-3\"> <ul> <li><a href=\"#\">CTI Admin</a></li> <li><a href=\"#\">Messaging</a></li> </ul> </div> <div class=\"col-sm-3\"> <ul> <li><a href=\"#\">CTI Dashboard</a></li> <li><a href=\"#\">Outbound</a></li> </ul> </div> </div> </li> </ul></li> </ul> </div>"
  );


  $templateCache.put('views/searchbar/searchCategory.html',
    "<span class=\"open\" id=\"autocomplete_0\" ng-show=\"search.action.elements | filter:searchFilterFunction\">{{search.action.name}}</span> <div class=\"Suggested\" style=\"display:block\"> <div class=\"r url\" ng-repeat=\"result in search.action.elements | filter:searchFilterFunction\"> <div> <a href=\"javascript:void(0)\" onclick=\"resultClick(result)\" ng-bind-html=\"result.name | searchResultFilter:searchInput\"> </a> </div> </div> </div>"
  );


  $templateCache.put('views/searchbar/searchbar.html',
    "<!-- search form starts --> <div id=\"vz-search-form\" ng-controller=\"SearchbarCtrl\"> <div class=\"search_inner\"> <!-- search options starts --> <div class=\"search_options\"> <div role=\"application\" class=\"form-item\"> <span id=\"vz-search-mobile-close\" class=\"vz-search-mobile-close visible-xs\"></span> <div class=\"form-item\"> <div id=\"edit-search-content\" class=\"form-text\"> <!-- search results starts --> <span id=\"span_arrow_top\" class=\"span_arrow\" style=\"display: none\"></span> <div class=\"searchOverlayTop\" id=\"searchOverlayTop1\"> <!-- search results for people starts --> <div class=\"results\"> <span class=\"open\" id=\"autocomplete_0\" ng-show=\"search.action.elements | filter:searchFilterFunction\">{{search.action.name}}</span> <div class=\"Suggested\" style=\"display:block\"> <div class=\"r url\" ng-repeat=\"result in search.action.elements | filter:searchFilterFunction\"> <div> <a href=\"javascript:void(0)\" onclick=\"resultClick(result)\" ng-bind-html=\"result.name | searchResultFilter:searchInput\"> </a> </div> </div> </div><span class=\"open\" id=\"autocomplete_1\" ng-show=\"search.info.elements | filter:searchFilterFunction\">{{search.info.name}}</span> <div class=\"Suggested\" style=\"display:block\"> <div class=\"r url\" ng-repeat=\"result in search.info.elements | filter:searchFilterFunction\"> <div> <a href=\"javascript:void(0)\" onclick=\"resultClick(result)\"> {{result.name}}</a> </div> </div> </div><span class=\"open\" id=\"autocomplete_2\">Additional Search Keywords</span> <div class=\"Search\" style=\"display:block\"> <div class=\"r url\"> <div> <a href=\"javascript:void(0)\" onclick=\"autoCompleletTrack('time entry')\"><strong>time</strong> entry</a> </div> </div> <div class=\"r url\"> <div> <a href=\"javascript:void(0)\" onclick=\"autoCompleletTrack('trs time entry')\">trs <strong>time</strong> entry</a> </div> </div> <div class=\"r url\"> <div> <a href=\"javascript:void(0)\" onclick=\"autoCompleletTrack('timeentry')\"><strong>time</strong>entry</a> </div> </div> <div class=\"r url\"> <div> <a href=\"javascript:void(0)\" onclick=\"autoCompleletTrack('flex time')\">flex <strong>time</strong></a> </div> </div> <div class=\"r url\"> <div> <a href=\"javascript:void(0)\" onclick=\"autoCompleletTrack('tr time entry')\">tr <strong>time</strong> entry</a> </div> </div> </div> <div class=\"view-all\"> <a href=\"javascript:void(0)\" onclick=\"autoCompleletTrack('time')\">See all search results &gt;</a> </div><span class=\"open\" type=\"Search\">People</span> <div class=\"people\"> <div class=\"r\"> <div> <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII=\"> <h4>User <strong>name</strong></h4> </div> <div class=\"title-location title-job\">tech mgr-system dev</div> <div class=\"title-location title-lob\">wireline enterprise solutions</div> <div class=\"title-location title-phone\"><a class=\"phone-url\">999-999-9999</a></div> <div class=\"title-location title-email\"><a href=\"mailto:username@email.com\">username@email.com</a></div> </div> <div class=\"r\"> <div> <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII=\"> <h4>User <strong>name</strong></h4> </div> <div class=\"title-location title-job\">tech mgr-system dev</div> <div class=\"title-location title-lob\">wireline enterprise solutions</div> <div class=\"title-location title-phone\"><a class=\"phone-url\">999-999-9999</a></div> <div class=\"title-location title-email\"><a href=\"mailto:username@email.com\">username@email.com</a></div> </div> <div class=\"r\"> <div> <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII=\"> <h4>User <strong>name</strong></h4> </div> <div class=\"title-location title-job\">tech mgr-system dev</div> <div class=\"title-location title-lob\">wireline enterprise solutions</div> <div class=\"title-location title-phone\"><a class=\"phone-url\">999-999-9999</a></div> <div class=\"title-location title-email\"><a href=\"mailto:username@email.com\">username@email.com</a></div> </div> <div class=\"r\"> <div> <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII=\"> <h4>User <strong>name</strong></h4> </div> <div class=\"title-location title-job\">tech mgr-system dev</div> <div class=\"title-location title-lob\">wireline enterprise solutions</div> <div class=\"title-location title-phone\"><a class=\"phone-url\">999-999-9999</a></div> <div class=\"title-location title-email\"><a href=\"mailto:username@email.com\">username@email.com</a></div> </div> </div> <div class=\"view-all\"><a href=\"javascript:;\">See All People Results ></a></div> </div> <!-- search results for people ends --> </div> <!-- search results ends --> <label class=\"sr-only\" for=\"search_content\">Search Content</label> <input type=\"text\" class=\"formInput\" placeholder=\"Search\" name=\"search_content\" id=\"search_content\" tabindex=\"4\" ng-model=\"searchInput\"> <a id=\"hrefHeaderSearch\" title=\"Search\" href=\"javascript:;\" class=\"form-submit\"></a> </div> </div> <div class=\"org_chart\"><a tabindex=\"8\" href=\"javascript:;\" class=\"adv-search-link plus_icon\" title=\"Advanced edirectory Search\"><span>Advanced Search</span></a></div></div> </div> <!-- search options ends --> </div> </div> <!-- search form ends -->"
  );


  $templateCache.put('views/secondroute3.html',
    "<p>This is the secondroute3 view.</p>"
  );

}]);
