/**
 *
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