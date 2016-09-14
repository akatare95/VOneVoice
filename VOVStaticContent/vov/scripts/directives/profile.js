'use strict';

/**
 * @ngdoc directive
 * @name vovApp.directive:profile
 * @description
 * # profile
 */
angular.module('vovApp')
  .directive('profile', function() {
	    return {
	      restrict: 'EA',
	      template: [
	                  '<div class="container-fluid" style="background-color: white;">'+
	                  '<div style="margin:25px 0 0 15px; float: left;>'+
	                  '<a class="profile-toggle collapsed visible-xs" href="#" data-target="#profile-dropdown" data-toggle="collapse" aria-expanded="false">'+
	                  '<img alt="Users Profile Avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEXHyMrJyszMzc/P0NLLzM6'+
	                  'wsrSsrrC2uLqfoaOjpaebnaC6vL6ztbemqKrR0tSWmJqpq63W19jT1NXOz9GHiYzU1deQkpWMjpGYmpyTlZjZ2tuDhYepq67Cw8WqqozrAAABu0lEQVRIx8WUSYKDIBBFFYOgD'+
	                  'EYckNjc/5otELvCkGnVb5XFf/4qNFT/Qf3Ih/FL4APFhy01+77PPUdBehOv6H6iGUKglOPI6v0BjEAp5RGq9RxBpkMpGv7xaOrnGH2ZplBSzrM5pWsaMLJ8I3TKisCIBJ9HOof'+
	                  'IYIAA+YatOVdZMO55iQsCVeo0ogKXl8IUWJTvgAoosEMJskBFXKBWUxJmqxRUQIGUTA9bAS3cUKECjsgVYL31BTRd/FDnQcFE3PQlTDeGLUDwEynFhp4WGMQhKD/TXbgEYam3o'+
	                  'rCR0c0ES5wrLGNHuxxK5RhmyoXqEHLI7akwViKHjC+EG7umtLfbK6H5SbGZAKfkDNwmqCMPpxS/BydUSZ7dC4IQv2kvjDimcUL2ps8lfEWUDwXRtwRLuIrD4I/4Dcbka4WZvCE'+
	                  '4+aNfQv5xIqgIQ8l1ICdCM5dP/3FQ4Qy+rhtnHnH8DHkoSCsUGowxg8CMt5s5IEceCkA4jYkOMX2l5IubrO62lN5CPr1ba077Argu38YWd/QJLcvyjPx0rxCYVYDlV/EecNj1U3'+
	                  'h4fvs5voPgL/AC/wLrhG9wAvsGW/0CxKlP74i8jegAAAAASUVORK5CYII=" style="width:90px"></div>'+
	                  '<div style="margin:20px 0 0 25px; float: left;">'+
	                  '<span style="font-weight: bold; float: left" href="#"><font color="black">{{username}}</font></span><br>'+
	                  '<a style="float: left" href="#"><font color="black">{{profile}}</font></a><br>'+
	                  '<a style="float: left" href="#"><font color="black">{{notuser}}</font></a><br>'+
	                  '<a style="float: left"><font color="black">________________</font></a><br>'+
	                  '<a style="float: left" href="#"><font color="black">Signout</font></a></div>'+
	                  '</div>'
	        ].join("")
	    };
	  });
