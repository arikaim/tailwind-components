/**
 *  Arikaim
 *  @copyright  Copyright (c) Intersoft <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
*/
'use strict';

arikaim.component.onLoaded(function(component) { 
    
    component.setViewType = function(viewType, onSuccess, onError) {    
        return arikaim.put('/core/api/ui/paginator/view/type',{ 
            view: viewType,
            namespace: component.get('namespace','')  
        },onSuccess,onError);       
    };

    component.init = function() {
    
        arikaim.ui.button($(component.getElement()),function(element) {
            var checked = $(element).prop('checked');         
            var viewType = (checked == true) ? 'table' : 'grid';

            component.setViewType(viewType,function(result) {
                component.set('view-type',result.view);
            });
        });
       
    };

    component.init();

    return component;
});
