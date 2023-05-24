  function index() {
  document.getElementById("index").style.display = "block";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "none";
    }
    function gameselect() {
  document.getElementById("index").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "block";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "none";
         }
    function webretro() {
  document.getElementById("index").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "block";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "none";
    }

    function offlinedownloads() {
  document.getElementById("index").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "block";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "none";
         }
        function gamepicked() {
      document.getElementById("games").style.display = "none";
         }
                  function aboutbl() {
  document.getElementById("index").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "block";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "none";
                  }

                  function scratchanide() {
  document.getElementById("index").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "block";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "none";
                  }

                  function extras() {
  document.getElementById("index").style.display = "none";
    document.getElementById("offlinedownloads").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("webretro").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("settings").style.display = "none";
      document.getElementById("extras").style.display = "block";
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
  newTab.document.write(`<html>
  <body>
    <iframe src="https://rawcdn.githack.com/moondoges/cyanidegames/b29d0eb4989d6a25451e4db91b13e62f4661ad64/!games/forkphorus/index.htmlembed.html?id=${projectID}&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>
  </body></html>`);
}
         function aboutblank() {
  var win = window.open(); var url = ''; iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;"; iframe.src = url; win.document.body.appendChild(iframe);
}