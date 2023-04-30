  function index() {
  document.getElementById("index").style.display = "block";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
    }
    function gameselect() {
  document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "block";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
         }
    function webretro() {
  document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "block";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
    }

        function chatgpt() {
      document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "block";
      document.getElementById("scratchinide").style.display = "none";
         }

    function offlinedownloads() {
  document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "block";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
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
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
                  }
                  function scratchanide() {
  document.getElementById("index").style.display = "none";
      document.getElementById("chatgpt").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "block";
      document.getElementById("settings").style.display = "none";
                  }
                  function hidenav() {
document.getElementById("navbar").style.display = "none";
document.getElementById("nbaccess").style.display = "block";
                  }
                  function shownav() {
document.getElementById("navbar").style.display = "block";
document.getElementById("nbaccess").style.display = "none";
                  }
         function loadscratchProject() {
  var projectID = document.getElementById('scratch-loader').value;
  var newTab = window.open();
  newTab.document.write(`<html><head><style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }
    
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  </style></head>
  <body>
    <embed src="https://scratch.mit.edu/projects/${projectID}/embed"></embed>
  </body></html>`);
}
         function aboutblank() {
  var win = window.open(); var url = ''; iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;"; iframe.src = url; win.document.body.appendChild(iframe);
}