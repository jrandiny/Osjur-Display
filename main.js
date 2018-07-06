function getToken(){
  $.ajax({
     method: "GET",
     url: "getToken.php"
   })
   .done(function( msg ) {
     $(".boks p").html(msg);

     var currTime = new Date(); // for now

     var waitTime = (5-(currTime.getMinutes()%5))*60
     waitTime = waitTime - currTime.getSeconds();

     setTimeout(getToken(),waitTime*1000);

   }).fail(function( jqXHR, textStatus ) {
     alert( "Error: " + textStatus + " / " + jqXHR.statusText);
   });
}

$( document ).ready(function() {
  getToken();
});
