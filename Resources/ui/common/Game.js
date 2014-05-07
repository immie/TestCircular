function GameView() {
	var self = Ti.UI.createView({
		backgroundColor : '#999999'
	});

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

	return self;
}

module.exports = GameView;
