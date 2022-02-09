'use strict';

arikaim.component.onLoaded(function(component) {  

    component.init = function() {
        arikaim.ui.button('#language-button',function(element) {
            $('#language-menu').fadeToggle(500);
        });
        arikaim.ui.button('.language-item',function(element) {
            var language = $(element).attr('data-value');
            arikaim.setLanguage(language);
            component.set('selected',language);
        });   
    
        $('#language-menu').mouseleave(function() { 
            $('#language-menu').fadeOut(600); 
        });  
    };

    component.init();

    return component;
});