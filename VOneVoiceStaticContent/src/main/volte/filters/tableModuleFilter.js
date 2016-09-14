/**
 * 
 */
app
.filter("filterByModulesSelected", function($filter){
	return function(requests, checkedModules){
		
		if(angular.isArray(requests) && angular.isArray(checkedModules))
		{
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