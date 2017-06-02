$(document).ready(function(){
  $("#agregar").click(function(){
    var $nuevoContacto = $("#nuevoContacto");
    var $obtenerNombre = $("#nombre").val();
    var $obtenerTelefono = $("#telefono").val();

    // creamos elementos
    var $contenedorContacto = $("<section/>")
    var $nombreNuevo = $("<p/>");
    var $telefonoNuevo = $("<p/>");
    var $botonBorrar = $("<button><span class='glyphicon glyphicon-trash'></span></button>", {"class":'borrar'});

    $botonBorrar.click(function(){
      $(this).parent().remove();
    })

    //escribimos el valor en el documento
    $nombreNuevo.text($obtenerNombre);
    $telefonoNuevo.text($obtenerTelefono);


    // agregamos los elementos
    $contenedorContacto.append($botonBorrar);
    $contenedorContacto.append($nombreNuevo);
    $contenedorContacto.append($telefonoNuevo);

    $nuevoContacto.prepend($contenedorContacto);

    $("#nombre").val("");
    $("#telefono").val("");
    $("#myModal").modal("hide");

    // $("#agregar").attr("disabled", true);

  });
});
