'use strict';

arikaim.component.onLoaded(function(component) { 

    component.close = function() {             
        $(this.getElement()).fadeOut(500);
    };

    component.setContent = function(content) {
        $(this.getElement()).find('.dialog-content').html(content);
    };

    component.setTitle = function(title) {
        $(this.getElement()).find('.dialog-title').html(title);
    };

    component.open = function() {     
        $(this.getElement()).removeClass('hidden').fadeIn(500);  
    };

    component.init = function() {        
        var buttons = $(this.getElement()).find('.dialog-close');
        if (isEmpty(buttons) == false) {
            $(buttons).off('click');
            $(buttons).on('click',function() {
                component.close();
            });
        }       
    };

    component.init();
});