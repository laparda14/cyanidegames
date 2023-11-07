  function index() {
  document.getElementById("index").style.display = "block";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("extras").style.display = "none";
      document.getElementById("bookmarklets").style.display = "none";
      document.getElementById("themes").style.display = "none";
    }
    function gameselect() {
  document.getElementById("index").style.display = "none";
      document.getElementById("games").style.display = "block";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("extras").style.display = "none";
      document.getElementById("bookmarklets").style.display = "none";
      document.getElementById("themes").style.display = "none";
         }

    function offlinedownloads() {
  document.getElementById("index").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("extras").style.display = "none";
      document.getElementById("themes").style.display = "none";
         }
        function gamepicked() {
      document.getElementById("games").style.display = "none";
         }
                  function aboutbl() {
  document.getElementById("index").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "block";
      document.getElementById("scratchanide").style.display = "none";
      document.getElementById("extras").style.display = "none";
      document.getElementById("themes").style.display = "none";
                  }

                  function scratchanide() {
  document.getElementById("index").style.display = "none";
      document.getElementById("games").style.display = "none";
      document.getElementById("aboutblank").style.display = "none";
      document.getElementById("scratchanide").style.display = "block";
      document.getElementById("extras").style.display = "none";
      document.getElementById("themes").style.display = "none";
                  }

function extras() {
  document.getElementById("index").style.display = "none";
  document.getElementById("games").style.display = "none";
  document.getElementById("aboutblank").style.display = "none";
  document.getElementById("scratchanide").style.display = "none";
  document.getElementById("bookmarklets").style.display = "none";
  document.getElementById("extras").style.display = "block";
  document.getElementById("themes").style.display = "none";
}

function themes() {
  document.getElementById("index").style.display = "none";
  document.getElementById("games").style.display = "none";
  document.getElementById("aboutblank").style.display = "none";
  document.getElementById("scratchanide").style.display = "none";
  document.getElementById("bookmarklets").style.display = "none";
  document.getElementById("extras").style.display = "none";
  document.getElementById("themes").style.display = "block";
}

function bookmarklets() {
  document.getElementById("extras").style.display = "none";
    document.getElementById("bookmarklets").style.display = "block";
}


         function loadscratchProject() {
  var projectID = document.getElementById('scratch-loader').value;
  var newTab = window.open();
  newTab.document.write(`<html>
  <body>
    <iframe src="<iframe src="https://rawcdn.githack.com/moondoges/cyanidegames/b29d0eb4989d6a25451e4db91b13e62f4661ad64/!games/forkphorus/index.htmlembed.html?id=${projectID}&ui=false" width="480" height="360" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>
  </body></html>`);
}

function loadWebsite() {
  var url = document.getElementById("websiteInput").value;
  var newTab = window.open("about:blank", "_blank");
  newTab.document.open();
  newTab.document.write('<iframe src="' + url + '" style="width: 100%; height: 100%;"></iframe>');
  newTab.document.close();
}




