document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // Open links in browser
    var el = document.getElementById("main-webview");
    el.onnewwindow = function(e) {
      window.open(e.targetUrl);
    };
  }
}
