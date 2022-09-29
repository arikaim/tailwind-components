'use strict';

arikaim.component.onLoaded(function(component) {       

    component.selectItem = function(element) {
        var selectedClass = $(component.getElement()).attr('selected-class');
        var items = $(component.getElement()).find('.item');
        $(items).removeClass(selectedClass);

        var value = $(element).attr('value');         
        $(element).addClass(selectedClass);          
        // set prop
        component.set('selected',value);
    };

    component.init = function() {       
        var items = $(component.getElement()).find('.item');
        
        $(items).off();
        $(items).on('click',function(event) {
            event.stopPropagation();            
            component.selectItem(this);
        });
    };

    component.init();

    return component;
});