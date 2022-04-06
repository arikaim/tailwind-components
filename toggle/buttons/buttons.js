'use strict';

arikaim.component.onLoaded(function(component) { 

    component.toggle = function(button) {
        var buttons = $(component.getElement()).children('toggleButton');
        $(buttons).removeClass(this.get('active-color'));
        $(button).addClass(this.get('active-color'));
        var value = $(button).attr('value');

        this.set('selected',value);
    };

    component.init = function() {
        var buttons = $(component.getElement()).children('toggleButton');
       
        buttons.on('click',function() {
            component.toggle(this);
        });  
    };

    component.init();
    
    return component;
});