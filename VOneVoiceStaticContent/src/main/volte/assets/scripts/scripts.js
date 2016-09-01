//<![CDATA[
	$(window).load(function(){
	ANI=new Array("Level A","Level B","Level C","Level D","Level E","Level F","Level G","Level H");
IMEI=new Array("Level I","Level J","Level K","Level L","Level M","Level N","Level O","Level P");
Messaging=new Array("Level Q","Level R","Level S","Level T","Level U","Level V","Level W","Level X");
AccessOne=new Array("Level Y","Level Z","Level AA","Level BB","Level CC","Level DD","Level EE","Level FF");
	
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
});//]]>