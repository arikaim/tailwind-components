'use strict';

arikaim.component.onLoaded(function(component) {   

    component.setPageSize = function(pageSize, onSuccess, onError) { 
        pageSize = (isEmpty(pageSize) == true) ? 1 : pageSize;
        var namespace = component.get('namespace');
     
        arikaim.put('/core/api/ui/paginator/page-size',{ 
            page_size: pageSize,
            namespace: namespace 
        },function(result) {
            callFunction(onSuccess,result.page_size);      
        },function(error) {
            callFunction(onError,error);  
        });        
    };

    component.init = function() {
        arikaim.ui.button('.page-size-select',function(element) {
            var pageSize = $(element).attr('page-size-value');
            $('.page-size-select').removeClass('active');
            $(element).addClass('active');

            component.setPageSize(pageSize,function(pageSize) {
                component.set('pageSize',pageSize); 
                $('#current_page_size').html(pageSize);                  
            });
        });  
    };
    
    component.init();

    return component;
});