$(document).ready(function(){
  $("#agregar").click(function(){
    var $nuevoContacto = $("#nuevoContacto");
    var $obtenerNombre = $("#nombre").val();
    var $obtenerTelefono = $("#telefono").val();

    // creamos elementos
    var $contenedorContacto = $("<div/>", {"class":"row"})
    var $nombreNuevo = $("<p/>", {"class":"col-xs-8 col-xs-offset-1"});
    var $telefonoNuevo = $("<p/>", {"class":"col-xs-8 col-xs-offset-1"});
    var $botonBorrar = $("<button class='borrar btn'><span class='glyphicon glyphicon-trash'></span></button>");

    $botonBorrar.click(function(){
      $(this).parent().remove();
    })

    //escribimos el valor en el documento
    $nombreNuevo.text($obtenerNombre);
    $telefonoNuevo.text($obtenerTelefono);


    // agregamos los elementos
    $contenedorContacto.append($nombreNuevo);
    $contenedorContacto.append($telefonoNuevo);
    $contenedorContacto.append($botonBorrar);

    $nuevoContacto.prepend($contenedorContacto);

    $("#nombre").val("");
    $("#telefono").val("");
    $("#myModal").modal("hide");

		$("#agregar").attr("disabled");



  });

  $("#cancelar").click(function(){
    $("#nombre").val("");
    $("#telefono").val("");
    $("#myModal").modal("hide");
  });
});
