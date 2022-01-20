'use strict';

arikaim.component.onLoaded(function(component) {
    component.on('mouseleave',function() {
        $('.dropdown-menu').fadeOut(600); 
    });    

    return component;
});