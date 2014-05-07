//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color : '#000000',
		text : String.format(L('welcome'), 'Titanium'),
		height : 'auto',
		width : 'auto'
	});
	//	self.add(label);

	var TiCircularSlider = require('de.marcelpociot.circularslider');

	var sliderView = TiCircularSlider.createView({
		height : 250,
		width : 250,
		lineWidth : 5,
		filledColor : 'blue',
		unfilledColor : 'gray'
	});
	sliderView.addEventListener('change', function(e) {
		Ti.API.info("Value is: ", e.value);
	});
	self.add(sliderView);

	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});

	return self;
}

module.exports = FirstView;
