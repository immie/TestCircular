var Game = require("/ui/common/Game");

function FeatureView() {
	var self = Ti.UI.createView({
		backgroundColor : '#004080'
	});
	
	var gameButton = Titanium.UI.createButton({
		backgroundColor : '#FFFF00',
		title: 'Click Me to Start',
		width : 250,
		height : 250
	});

	self.add(gameButton);

	gameButton.addEventListener("click", gameView);

	function gameView() {
		var gameView = new Game();
		self.add(gameView);
	}


	return self;
}

module.exports = FeatureView;
