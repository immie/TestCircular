///Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
<<<<<<< HEAD
	var BaseView = require('ui/common/BaseView');
	//var BaseView = require('ui/common/Game');
=======
	var BaseView = require('ui/common/Game');
>>>>>>> cc41308f52012535fc086ef409692acaf26f60c6

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor : '#ffffff',
		fullscreen : true,
		navBarHidden : true,
		exitOnClose : true
	});
//	self.orientationModes = [Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT];
	//construct UI
	var baseView = new BaseView();
	self.add(baseView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
