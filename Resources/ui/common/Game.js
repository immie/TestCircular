function GameView() {
	var self = Ti.UI.createWindow({
	//	fullscreen : true,
		navBarHidden : true,
		backgroundColor : '#999999'
	});

	var TiCircularSlider = require('de.marcelpociot.circularslider');

	var sliderView = TiCircularSlider.createView({
		height : 250,
		width : 250,
		lineWidth : 25,
		filledColor : 'blue',
		unfilledColor : 'gray'
	});
	sliderView.addEventListener('change', function(e) {
		Ti.API.info("Value is: ", e.value);
	});
	self.add(sliderView);

	var colorButton = Titanium.UI.createButton({
		backgroundColor : '#FFFF00',
		title : 'Click Me Change Color',
		bottom : 50,
		width : 250,
		height : 50
	});

	self.add(colorButton);

	colorButton.addEventListener("click", changeColor);

	function changeColor() {
		sliderView.filledColor = 'red';
		sliderView.unfilledColor = 'green';
	}

	return self;
}

module.exports = GameView;
