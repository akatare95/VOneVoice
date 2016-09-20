/**
 * app
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
 */
app
.filter("filterByModulesSelected", function($filter){
	return function(requests, modules){
		
		if(angular.isArray(requests))
		{
			var filteredRequests=[];
			for(var req=0;req<requests.length;req++)
			{
				var name=requests[req].module;
				if(modules[name].show)		
					filteredRequests.push(requests[req]);		
			}
			
			if(filteredRequests.length===0)
				return requests;
			
			return filteredRequests;
		}
		else
		{
			return requests;
		}
	}
})