//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var BaseView = require('ui/common/BaseView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#FFFF00'
	});

	//construct UI
	var baseView = new BaseView();
	self.add(baseView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
