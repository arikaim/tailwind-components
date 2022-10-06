'use strict';

arikaim.component.onLoaded(function(component) { 

    component.close = function() {             
        $(this.getElement()).removeClass('modal-open');  
    };

    component.setContent = function(content) {
        $(this.getElement()).find('.modal-content').html(content);
    };

    component.getContentElement = function() {
        return $(this.getElement()).find('.modal-content');
    };

    component.setTitle = function(title) {
        $(this.getElement()).find('.modal-title').html(title);
    };

    component.open = function(onConfirm, onCancel) {            
        component.setVar('onConfirm',onConfirm);
        component.setVar('onCancel',onCancel);
        
        $(this.getElement()).addClass('modal-open');  
    };

    component.init = function() {        
        var closeButton = $(this.getElement()).find('.modal-cancel-button');
        var confirmButton = $(this.getElement()).find('.modal-confirm-button');

        $(closeButton).on('click',function() {
            callFunction(component.getVar('onCancel'));
            component.close();
        });

        $(confirmButton).on('click',function() {
            callFunction(component.getVar('onConfirm'));
            component.close();
        });
    };

    component.init();

    return component;
});