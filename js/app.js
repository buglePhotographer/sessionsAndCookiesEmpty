var enviarInformacion = function(){
    var json = {
        'nombre' :  $('#txtNombre').val(),
        'descripcion' : $('#txtDescripcion').val(),
        'funcion' : 'Add'
    };
    
    $.ajax({
      url: 'api.php',
      type: 'POST',
      data: json,
      success: function(data, textStatus, jqXHR)
      {
          alert("Te recordare por siempre " + $('#txtNombre').val());
      }
    });
};

var borrarCookies = function(){
    var json = {
        'nombre' :  $('#txtNombre').val(),
        'descripcion' : $('#txtDescripcion').val(),
        'funcion' : 'Delete'
    };
    
    $.ajax({
      url: 'api.php',
      type: 'POST',
      data: json,
      success: function(data, textStatus, jqXHR)
      {
          alert("Ya te olvide ");
      }
    });
};

$('#submitButton').on('click', function(){
    enviarInformacion();
});

$('#removeCookiesButton').on('click', function(){
    borrarCookies();
});
