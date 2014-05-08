var Game = require("/ui/common/Game");

function FeatureView() {
	var self = Ti.UI.createView({
		backgroundColor : '#004080'
	});
	
	var gameButton = Titanium.UI.createButton({
		backgroundColor : '#FFFF00',
		title: 'Click Me to Start',
		width : 150,
		height : 150
	});

	self.add(gameButton);

	gameButton.addEventListener("click", gameView);

	function gameView() {
		var gameView = new Game();
		gameView.open();
	}


	return self;
}

module.exports = FeatureView;
