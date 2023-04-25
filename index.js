  function index() {
      document.getElementById("index").style.display = "block";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
    }
    function gameselect() {
      document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
    document.getElementById("aboutblank").style.display = "none";
      document.getElementById("games").style.display = "block";
      document.getElementById("webretro").style.display = "none";
         }
    function webretro() {
      document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "block";
    }

        function chatgpt() {
      document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "block";
         }

    function offlinedownloads() {
      document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "block";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "block";
         }
        function gamepicked() {
      document.getElementById("games").style.display = "none";
         }
                  function aboutbl() {
  document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "block";
      document.getElementById("webretro").style.display = "none";
                  }
                  function hidenav() {
document.getElementById("navbar").style.display = "none";
document.getElementById("nbaccess").style.display = "block";
                  }
                  function shownav() {
document.getElementById("navbar").style.display = "block";
document.getElementById("nbaccess").style.display = "none";
                  }
         function aboutblank() {
  var win = window.open(); var url = ''; iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;"; iframe.src = url; win.document.body.appendChild(iframe);
}