'use strict';

arikaim.component.onLoaded(function(component) {   

    component.getCurrentPage = function(onSuccess, onError) { 
        return arikaim.get('/core/api/ui/paginator/' + component.get('namespace'),onSuccess,onError);
    }

    component.clear = function(onSuccess, onError) {
        return arikaim.delete('/core/api/ui/paginator/' + component.get('namespace'),onSuccess,onError);
    };

    component.setPage = function(page, onSuccess, onError) {
        return arikaim.put('/core/api/ui/paginator/page',{ 
            page: (isEmpty(page) == true) ? 1 : page,
            namespace: component.get('namespace') 
        },function(result) {           
            component.setCurrentPage(result.page);
            callFunction(onSuccess,result);      
        },function(error) {
            callFunction(onError,error);  
        });
    };

    component.setCurrentPage = function(page) {
        component.set('current-page',page);

        $('.page-link').removeClass('paginator-active');       
        $('.page-' + page).addClass('paginator-active');   
    };

    component.initButtons = function() {
        var page = component.get('current-page');
        var lastPage = component.get('last-page');
       
        $('.page-link').removeClass('paginator-active');       
        $('.page-' + page).addClass('paginator-active');    
        
        if (page == 1) {                 
            $('.first-page').addClass('hidden');
            $('.prev-page').addClass('hidden');    
        } else {           
            $('.first-page').removeClass('hidden');
            $('.prev-page').removeClass('hidden');              
        }
           
        if (page == lastPage) {          
            $('.next-page').addClass('hidden');
            $('.last-page').addClass('hidden');          
        } else {
            $('.next-page').removeClass('hidden'); 
            $('.last-page').removeClass('hidden'); 
        } 
    };

    component.loadRows = function(onSuccess) {  
        var rowsElement = $('#' + component.get('rows_selector'));
    
        return arikaim.page.loadContent({
            mountTo: component.get('rows_selector'),
            component: component.get('component'),
            params: arikaim.ui.getAttributes(rowsElement)
        },function(result) {
            callFunction(onSuccess,result);
        });
    };

    component.load = function(page, onSuccess) {
        return component.setPage(page,function(result) {   
            // set current page                                                    
            arikaim.events.emit('paginator.load.page',result); 

            component.loadRows(function() {
                arikaim.events.emit('paginator.load.items',page);       
                callFunction(onSuccess,result);
            });  
        }); 
    };

    component.init = function() {
        arikaim.ui.button('.page-link',function(element) {
            var page = $(element).attr('page'); 
            
            return component.load(page);  
        },function() {
            component.initButtons();
        });

        component.initButtons();
    };
    
    component.init();

    return component;
});