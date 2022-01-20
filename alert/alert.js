'use strict';

arikaim.component.onLoaded(function(component) {
    
    component.getCloseButtons = function() {
        return $(component.getElement()).find('.alert-close-button');
    };

    component.hide = function() {
        var fadeOut = component.get('fade-out');
        fadeOut = parseInt((isEmpty(fadeOut) == true) ? 0 : fadeOut);

        $(component.getElement()).fadeOut(fadeOut);       
    };

    component.show = function() {
        var fadeIn = component.get('fade-in');
        fadeIn = parseInt((isEmpty(fadeIn) == true) ? 0 : fadeIn);
        var hideAfter = component.get('hide-after');
        hideAfter = parseInt((isEmpty(hideAfter) == true) ? 0 : hideAfter);
        var fadeOut = component.get('fade-out');
        fadeOut = parseInt((isEmpty(fadeOut) == true) ? 0 : fadeOut);
        
        $(component.getElement()).removeClass('invisible');
        $(component.getElement()).removeClass('hidden');

        $(component.getElement()).fadeIn(fadeIn);   
        if (hideAfter > 0) {
            $(component.getElement()).delay(hideAfter).fadeOut(fadeOut);
        }      
    };

    component.setDescription = function(description) {      
        var alertContent = $(component.getElement()).find('.alert-content');
        $(alertContent).find('.alert-description').html(description)
    };

    component.setTitle = function(title) {      
        var alertContent = $(component.getElement()).find('.alert-content');
        $(alertContent).find('.alert-title').html(description)
    };

    component.init = function() {
        var buttons = component.getCloseButtons();
        
        if (isEmpty(buttons) == false) {
            $(buttons).off();
            $(buttons).on('click',function() {
                component.hide();
            });
        }
    };

    // init
    component.init();

    return component;
});
