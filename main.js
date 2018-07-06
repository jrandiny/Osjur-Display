var runs = 0;

function getToken(){
  var request = new XMLHttpRequest(); //New request object
  request.onload = function() {
    var token = this.responseText;
    var element = document.getElementById("tokenLoc");
    element.classList.add("hide");

    setTimeout(function(){
      element.setAttribute("data-content",token);
      element.classList.remove("hide");
    },1000);

    runs++;

    if(runs == 2){
      document.getElementById("tokenProgress").classList.add("go");
    }

  };

  request.open("get", "getToken.php", true);
  request.send();


  var currTime = new Date(); // for now

  var waitTime = (5-(currTime.getMinutes()%5))*60;
  waitTime = waitTime - currTime.getSeconds();
  waitTime = waitTime * 1000;

  setTimeout(getToken,waitTime);
}

document.addEventListener('DOMContentLoaded', function(){
  getToken();
});
