function getToken(){
  var request = new XMLHttpRequest(); //New request object
  request.onload = function() {
    document.getElementById('tokenLoc').innerHTML = this.responseText;
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
