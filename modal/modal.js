'use strict';

arikaim.component.onLoaded(function(component) { 

    component.close = function() {             
        $(this.getElement()).fadeOut(500);
    };

    component.setContent = function(content) {
        $(this.getElement()).find('.modal-content').html(content);
    };

    component.setTitle = function(title) {
        $(this.getElement()).find('.modal-title').html(title);
    };

    component.open = function() {     
        $(this.getElement()).removeClass('hidden').fadeIn(500);  
    };

    component.init = function() {        
        var closeButton = $(this.getElement()).find('.modal-close');
        $(closeButton).off('click');
        $(closeButton).on('click',function() {
            component.close();
        });
    };

    component.init();

    return component;
});