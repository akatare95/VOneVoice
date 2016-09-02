app
.constant("ActionLocation", "server/json/searchbar/action.json")
.constant("InfoLocation", "server/json/searchbar/info.json")
.controller("searchBarCtrl", function($scope, ActionLocation, $http, InfoLocation){
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
});