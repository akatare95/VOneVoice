app
.controller('accessCtrl', function($scope, accessService, $uibModal){
	
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
	
		
	
});