'use strict';

arikaim.component.onLoaded(function() {  
    $('.dropdown-menu').mouseleave(function() { 
        $('.dropdown-menu').fadeOut(600); 
    });  
});