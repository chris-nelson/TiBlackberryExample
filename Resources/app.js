// This is a single context application with mutliple windows in a stack
(function() {
	
  var osname = Ti.Platform.osname,
    version = Ti.Platform.version,
    height = Ti.Platform.displayCaps.platformHeight,
    width = Ti.Platform.displayCaps.platformWidth;


   var Window = require('ui/ApplicationWindow');
   new Window().open();
   
})();
