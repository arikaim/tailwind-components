'use strict';

arikaim.component.onLoaded(function(component) { 

    component.setApproved = function(interval) {
        var interval = component.get('interval',7);      
        arikaim.storage.setCookie('privacy-policy',1,interval);
    };

    component.isApproved = function() {
        var show = arikaim.storage.getCookie('privacy-policy'); 
        return (show == 1 || show == '1') ? true : false;   
    };  

    component.close = function() {    
     //   $(this.getElement()).fadeOut(500);         
        $(this.getElement()).removeClass('modal-open');  
    };

    component.open = function() {   
        //$(this.getElement()).removeClass('hidden').fadeIn(500);           
        $(this.getElement()).addClass('modal-open');  
    };

    component.init = function() {        
        var acceptButton = $(this.getElement()).find('.modal-accept-button');
      
        if (component.isApproved() == false) {
            component.open();
        }

        $(acceptButton).on('click',function() {
            component.setApproved();
            component.close();
        });
    };

    component.init();

    return component;
});