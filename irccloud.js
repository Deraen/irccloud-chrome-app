"use strict";

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('irccloud.html', {
    'id': 'main-view',
    'width': 1024,
    'height': 600,
    'minWidth': 450,
    'minHeight': 500
  });
});
