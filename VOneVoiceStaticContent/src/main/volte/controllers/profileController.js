app.controller("profileController", function($scope) {
	    $scope.showProfile = true;
	    $scope.username = "Username"; //User Service Call/ but for now hard coded in
	    $scope.profile = "My Profile";
	    $scope.notuser = "Not User Name?";
	    $scope.reverseName = function(){
	      $scope.name = $scope.name.split('').reverse().join('');
	    };
	    $scope.profileClick = function(){
	      $scope.showProfile = !$scope.showProfile;
	    }
})


//<!-- Code For inclusion on the Index page/ but it is already included on the index page. -->
//  <!-- <ul class="dropdown">
//						<a style="text-decoration: none; margin: 0 0 0 840px;" role="button" href="#" class="dropdown-toggle" 
//						   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ng-app="profileDirective"> 
//							<span class="username"><font color="black">Username</font> <span style="color: red;"
//								  class="glyphicon glyphicon-menu-down"></span></span> <img
//								  alt="Users Profile Avatar" style="height:30px; width:30px;"
//								  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgDEYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOofIYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3orCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII=">
//						</a>
//						<div ng-controller="profileController" profile class="dropdown-menu col-md-4" 
//							 style="margin:20px 0 0 857px; height:150px; width:300px;"></div>
//					</ul> -->