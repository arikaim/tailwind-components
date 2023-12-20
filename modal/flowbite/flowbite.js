'use strict';

arikaim.component.onLoaded(function(component) { 
    var modal;

    component.getModal = function() {
        return modal;
    }

    component.close = function() {             
        component.getModal().hide(); 
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
        
       component.getModal().show(); 
    };

    component.init = function() {      
        var modalEl = $(component.getElement())[0];

        modal = new Modal(modalEl,{
            placement: 'center',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
            closable: true,
            onToggle: () => {
                $(button).find('.button-icon').toggleClass('rotate-180');
            }
        },{
            id: modalEl,
            override: true
        });

        var closeButton = $(this.getElement()).find('.modal-cancel-button');
        var confirmButton = $(this.getElement()).find('.modal-confirm-button');

        $(closeButton).off();
        $(closeButton).on('click',function() {
            callFunction(component.getVar('onCancel'));
            component.close();
        });

        $(confirmButton).off();
        $(confirmButton).on('click',function() {
            callFunction(component.getVar('onConfirm'));
            component.close();
        });
    };

    component.init();

    return component;
});