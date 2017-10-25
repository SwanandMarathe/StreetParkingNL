function firstWindow() {
	var baseWindow = require(appControllerPath.BASEVIEW);
	var firstView = new createBaseView("OMDb",false,false);
	firstView.headerView.hide();
	
	firstView.searchButtonBase = Ti.UI.createView({
		top : 25*yratio,
		width : 70*xratio,
		height : 15*xratio,
		borderRadius : 7.5*xratio,
		borderColor : '#ffffff',
		borderWidth : .2*xratio
	});
	firstView.add(firstView.searchButtonBase);
	
	firstView.searchLabel = Ti.UI.createLabel({
		text : 'Search Based on target Address',
		color : '#ffffff',
		font : { fontSize : 4.5*xratio},
		touchEnabled : false
	});
	firstView.searchButtonBase.add(firstView.searchLabel);
	
	firstView.searchButtonBaseOne = Ti.UI.createView({
		top : 60*yratio,
		width : 70*xratio,
		height : 15*xratio,
		borderRadius : 7.5*xratio,
		borderColor : '#ffffff',
		borderWidth : .2*xratio
	});
	firstView.add(firstView.searchButtonBaseOne);
	
	firstView.searchLabelOne = Ti.UI.createLabel({
		text : 'Search ased on current location',
		color : '#ffffff',
		font : { fontSize : 4.5*xratio},
		touchEnabled : false
	});
	firstView.searchButtonBaseOne.add(firstView.searchLabelOne);
	
	return firstView;
};
module.exports = firstWindow;