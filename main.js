function getToken(){
  $.ajax({
     method: "GET",
     url: "getToken.php"
   })
   .done(function( msg ) {
     $(".boks p").html(msg);
   }).fail(function( jqXHR, textStatus ) {
     alert( "Error: " + textStatus + " / " + jqXHR.statusText);
   });
}

$( document ).ready(function() {
  getToken();
});
