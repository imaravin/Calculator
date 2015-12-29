chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', 
  	{
  	id: "calcWinID",
    'outerBounds': {
      'width': 320,
      'height': 320
    }
  });

});
