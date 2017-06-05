$(document).ready(function(){
  $("#agregar").click(function(){
    var $nuevoContacto = $("#nuevoContacto");
    var $obtenerNombre = $("#nombre").val();
    var $obtenerTelefono = $("#telefono").val();

    // creamos elementos
    var $contenedorContacto = $("<article/>", {"class":"container jumbotron marginBottom"})
    var $row = $("<div/>", {"class":"row"})
    var $nombreNuevo = $("<h3/>", {"class":"col-xs-4 col-xs-offset-1"});
    var $row2 = $("<div/>", {"class":"row"})
    var $telefonoNuevo = $("<h5/>", {"class":"col-xs-4 col-xs-offset-1"});
    var $botonBorrar = $("<button class='borrar btn col-xs-offset-5'><span class='glyphicon glyphicon-trash'></span></button>");

    $botonBorrar.click(function(){
      $(this).parent().remove();
    })

    //escribimos el valor en el documento
    $nombreNuevo.text($obtenerNombre);
    $telefonoNuevo.text($obtenerTelefono);


    // agregamos los elementos
    $row.append($nombreNuevo);
    $row2.append($telefonoNuevo);
    $row2.append($botonBorrar);

    $contenedorContacto.prepend($row2);
    $contenedorContacto.prepend($row);

    $nuevoContacto.prepend($contenedorContacto);

    $("#nombre").val("");
    $("#telefono").val("");
    $("#myModal").modal("hide");

		$(this).attr("disabled", true);
  });

  $("#cancelar").click(function(){
    $("#nombre").val("");
    $("#telefono").val("");
    $("#myModal").modal("hide");
  });
});
