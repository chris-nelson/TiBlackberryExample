function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');

	var navGroup = Ti.UI.createNavigationGroup();
	
	var masterView = new MasterView(),
		detailView = new DetailView();
	
	var masterWindow = Ti.UI.createWindow({
		title:'Master Window',
		barColor:'#000000',
		backgroundColor:'green'
	});
	masterWindow.add(masterView);
	
	var detailWindow = Ti.UI.createWindow({
		title:'Detail Window',
		backgroundColor:'#ffffff'
	});
	detailWindow.add(detailView);
	
	var rightBtn = Ti.UI.BlackBerry.createNavButton({
		title : "right"
	});
	rightBtn.addEventListener('click', function () {
		alert("I'm rightBtn");
	});
	detailWindow.setRightNavButton(rightBtn);

	var leftBtn = Ti.UI.BlackBerry.createNavButton({
		title : "Left"
	});
	leftBtn.addEventListener('click', function () {
		alert("I'm leftBtn");
	});
	detailWindow.setLeftNavButton(leftBtn);
	
	///unable to find docs for ActionBarPlacement, so currently the only way I could create the overFlow menu on the right was to add more than 3 actions
	
	detailWindow.addAction('Action 1', 'images/icon-globe2.png', function(e){
		alert('clicked action 1');
	});
	
	detailWindow.addAction('Action 2', 'images/icon-flying.png', function(e){
		alert('clicked action 2');
	});
	
	detailWindow.addAction('Action 3', 'images/icon-fuel.png', function(e){
		alert('clicked action 3');
	});
	
	detailWindow.addAction('Action 4', 'images/icon-headphones.png', function(e){
		alert('clicked action 4');
	});
	
	detailWindow.addAction('Action 5', 'images/icon-info.png', function(e){
		alert('clicked action 5');
	});
	
	navGroup.setRootWindow(masterWindow);
	
	///swipe dowm from top to see app menu. app menu is shown throughout all windows
	var appMenu = Ti.UI.BlackBerry.createApplicationMenu({
    items: [
        {title: 'Option 1', icon:'images/icon-globe2.png'},
        {title: 'Option 2', icon:'images/icon-info.png'},
        {title: 'Option 3', icon:'images/icon-flying.png'}
    	]
	});

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		//open detail window within navgroup
		navGroup.push(detailWindow);
		detailView.fireEvent('itemSelected', e);
	});
	
	appMenu.addEventListener('click', function(e){
		switch (e.index){
			case 0:
				alert('clicked 1');
				break;
			case 1:
				alert('clicked 2');
				break;
			case 2:
				alert('clicked 3');
				break;		
		}
	});
	
	/* How to close the last window
  	*
  	* navGroup.pop();
  	*/
 
 	/*
	* How remove a specific window
 	*
 	* navGroup.remove(detailWindow);
 	*/
 
 	/*
 	* How to close the NavigationGroup
 	*
 	* navGroup.close()
 	*/

	return navGroup;
};

module.exports = ApplicationWindow;
