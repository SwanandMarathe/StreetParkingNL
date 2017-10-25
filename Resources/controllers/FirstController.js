function firstController(){
    var firstView = null;
    
    // listeners on components
    function setEventListeners(){
       	firstView.addEventListener('viewDidAttach', viewDidAttachListener);
   		firstView.addEventListener('viewDidDeattach', viewDidDeattachListener);
       	firstView.searchButtonBase.addEventListener('click', searchButtonBaseListener);
       	firstView.searchButtonBaseOne.addEventListener('click', searchButtonBaseOneListener);
    };
    
   	function searchButtonBaseListener(e){
   		alert("target");
   	}
   	
   	function searchButtonBaseOneListener(e){
   		alert("location");
   	}
   	
   	function successCallbackGetData(_serviceName,_resultData,_loader){
   		var parseResult = JSON.parse(_resultData);
   		firstView.searchField.value = '';
    	_loader.hideActivityIndicator();
		ViewManager.loadNextController(appControllerPath.MOVIELISTCONTROLLER,parseResult);
   	}
   	
   	function errorCallbackGetData(_serviceName,_resultData,_loader){
   		_loader.hideActivityIndicator();
   		alert(_resultData);
   	}   
   	  
    function viewDidDeattachListener(e){
   		// alert('view remove First');
   		firstView.removeAllChildren();    	    	
    	firstView.searchButtonBase.removeEventListener('click', searchButtonBaseListener);
       	firstView.removeEventListener('viewDidAttach', viewDidAttachListener);
   		firstView.removeEventListener('viewDidDeattach', viewDidDeattachListener);
    	firstView = null;
   	}
    
    function viewDidAttachListener(e){
   		// alert('view add First');
   	}
        
    return{
        init : function(){        	
			firstView = new (require(appControllerPath.FIRSTVIEW));			
			setEventListeners();
			ViewManager.addView(firstView);
        }
    };
};

module.exports= firstController;
