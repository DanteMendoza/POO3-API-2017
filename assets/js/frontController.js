//codigos de paginas a las cuales hace referencia al fichero correspondiente
function goPage(codigo){
	if (codigo==1001){
		$("#div_screen").load("display/bienvenida.html");
	}
	else if (codigo==2001){
		$("#div_screen").load("display/entretenimiento.html");
	}
	else if (codigo==3001){
		$("#div_screen").load("display/lugares_de_interes.html");
	}
	else if (codigo==4001){
		$("#div_screen").load("display/ciencia_y_estadisticas.html");
	}
	else if (codigo==5001){
		$("#div_screen").load("display/contacto.html");
	}
}
$( document ).ready(function() {
    console.log( "ready!" );
    $('.goTop').click(
          function()
          {
                $('html,body').animate({scrollTop:'0px'}, 500);
          }
    );
});