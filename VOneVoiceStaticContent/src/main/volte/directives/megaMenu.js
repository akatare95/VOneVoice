/**
 * 
 */
angular.module("VOVApp")
.directive("megaMenu", function(){

	return{
		link:function(scope, element, attrs){
			scope.data=scope[attrs["menuSrc"]];
		},
		restrict:"E",
		replace:"true",
		templateUrl:"partials/menuBar/megaMenu.html"
		
		
	};
}).controller("menuCtrl", function($scope){	   
	
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
});
