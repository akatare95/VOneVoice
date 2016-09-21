/**
 * 
 */
app
.constant("requestsLocation", "server/json/testTable/requests.json")
.controller("VOVAppCtrl", function($scope,$http,requestsLocation, $filter,$timeout){
	$scope.modules={
			"After Call Survey":{name:"After Call Survey", show:false},
			"ANI Block":{name:"ANI Block", show:false},
			"IMT":{name:"IMT", show:false},
			"Messaging":{name:"Messaging", show:false},
			"Outbound":{name:"Outbound", show:false},
			"Vocab":{name:"Vocab", show:false}
					};
	$scope.requests=[
				{"module":"After Call Survey", "level":"Agent Schedules", "access":"Modify", "reason":"This is the reason", "status":"approved"},
				{"module":"After Call Survey", "level":"Cappings", "access":"Admin", "reason":"This is the reason", "status":"denied"},
				{"module":"After Call Survey", "level":"Agent Schedules", "access":"Admin", "reason":"This is the reason", "status":"pending"},
				{"module":"ANI Block", "level":"Add", "access":"Modify", "reason":"This is the reason", "status":"pending"},
				{"module":"IMT", "level":"Current", "access":"Admin", "reason":"This is the reason", "status":"pending"},
				{"module":"Messaging", "level":"Current", "access":"Admin", "reason":"This is the reason", "status":"pending"},
				{"module":"Messaging", "level":"Retail Routing", "access":"Modify", "reason":"This is the reason", "status":"pending"},
				{"module":"Outbound", "level":"Campaign", "access":"IT User", "reason":"This is the reason", "status":"pending"},
				{"module":"Outbound", "level":"Files", "access":"Admin", "reason":"This is the reason", "status":"pending"},
				{"module":"Vocab", "level":"Config", "access":"Admin", "reason":"This is the reason", "status":"pending"},
				{"module":"Vocab", "level":"Re-Record", "access":"Bus. User", "reason":"This is the reason", "status":"pending"}
			   ];
	$scope.statusTypes=["Approved","Pending","Denied"];
	
	$scope.buildArray=function(object){
		var aray=[];
		var prop;
		for(prop in object)
		{
			aray.push(object[prop]);
		}
		return aray;
	}
	
	angular.element(document).ready(function () {
		//Holder of all checked modules
		$scope.checkedModules=[];
		//Define function
		$scope.moduleFilter=function(){	
			//See which modules are checked to be shown
			$scope.checkedModules=$filter("filter")($scope.buildArray($scope.modules), {show:true});
			//If no modules checked show all modules
	 		$scope.checkedModules=($scope.checkedModules.length===0?$scope.modules:$scope.checkedModules);
		};
		//Call function once so that Request Result Table is initialized
		$scope.moduleFilter();
	});
	$scope.selectedStatus="";
	$scope.statusFilter=function(request){
		if($scope.selectedStatus==""||$scope.selectedStatus==null)
			return true;
		else
			return request.status.toLowerCase()==$scope.selectedStatus.toLowerCase();
	};
	
	$scope.delayedModuleFilter=function(){
		$timeout(function () {$scope.moduleFilter();}, 50);
	};	
//  TODO add levelfilter
// 	$scope.levelFilter=function(){
// 		return ()
// 	};
	$scope.showModules=false;
	$scope.showStatuses=false;
	$scope.toggleModules=function(){
		$scope.showModules=!$scope.showModules;
	};
	$scope.toggleStatuses=function(){
		$scope.showStatuses=!$scope.showStatuses;
	};
})