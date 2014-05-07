var FeatureView = require('/ui/common/FeatureView');

function BaseView() {
	//create object instance, a parasitic subclass of Observable

	var self = Titanium.UI.createView({
		backgroundColor : '#00FF80'
	});

	var featureButton = Titanium.UI.createButton({
		backgroundColor : '#FF0000',
		title: 'Click Me',
		width : 50,
		height : 50
	});

	self.add(featureButton);

	featureButton.addEventListener("click", featureView);

	function featureView() {
		var featureView = new FeatureView();
		self.add(featureView);
	}

	return self;
};

module.exports = BaseView;
