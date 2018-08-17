$(document).ready(function(){
	 contar =0;
		
 // *****Comodin 50 y 50 *****
 $('#cincuenta').click(function() 
 	{
 		  
      if (contar < 1){

 		contar = contar + 1
 		$('#resp3').addClass('ocultar');
 		$('#resp2').addClass('ocultar');
 		
 		
 	}else {
 		alert("Comodin no disponible");
 	}
 	
})

$('#cincuenta2').click(function() 
 	{
 		  
      if (contar < 1){

 		contar = contar + 1
 		$('#resp1').addClass('ocultar');
 		$('#resp4').addClass('ocultar');
 		
 		
 	}else {
 		alert("Comodin no disponible");
 	}
 	
})

   // ******comodin de la audiencia*******

$('#audiencia').click(function() 
 	{
 		/*$('#resp1').css("background", "lime");*/
 		$('#resp1').css({background: "lime",color:"black"});
 		
 	})

$('#audiencia2').click(function() 
 	{
 		/*$('#resp1').css("background", "lime");*/
 		$('#resp2').css({background: "lime",color:"black"});
 		
 	})

$('#audiencia3').click(function() 
 	{
 		/*$('#resp1').css("background", "lime");*/
 		$('#resp3').css({background: "lime",color:"black"});
 		
 	})

$('#audiencia4').click(function() 
 	{
 		/*$('#resp1').css("background", "lime");*/
 		$('#resp4').css({background: "lime",color:"black"});
 		
 	})


// *****Comodin Llamar a un amigo*****



$('#llamar').click(function() 
 	{
 		alert(contar);
 	})



})