app
.controller('accessCtrl', function($scope, accessService){
	
	
		
		popList();

	$(function() {

	      $('#mod-access').change(function(){
	        popList();
	    });
	    
	});

	function popList(){
	    cat=$('#mod-access').val();
	    $('#level-access').html('');
	    
	       eval(cat).forEach(function(t) { 
	            $('#level-access').append('<option>'+t+'</option>');
	        });
	    }
});