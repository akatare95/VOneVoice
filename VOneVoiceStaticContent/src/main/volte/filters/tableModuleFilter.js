/**
 * 
 */
app
.filter("filterByModulesSelected", function($scope, $filter){
	return function(requests){
		
		if(angular.isArray(requests))
		{
			var checkedModules= $scope.moduleFilter();
			var filteredRequests=[];
			for(var req=0;req<requests.length;req++)
			{
				for(var mod=0;mod<checkedModules.length;mod++)
					if(requests[req].module==checkedModules[mod].name)
					{	
						filteredRequests.push(requests[req]);
						break;
					}
			}
			return filteredRequests;
		}
		else
		{
			return requests;
		}
	}
})