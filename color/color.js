'use strict';

arikaim.component.onLoaded(function(component) {

    component.getButton = function() {
        return $(component.getElement()).find('.color-pick-button');
    }

    component.select = function(element) {
        var bgColor = $(element).attr('bg-color');        
        var value = $(element).attr('value');
      
        this.selectColor(value,bgColor);
        component.toggleMenu();
    };

    component.selectColor = function(color, bgColor) {
        // remove bg color class
        var background = component.get('background');
        $(this.getButton()).removeClass(background).addClass(bgColor);

        component.set('background',bgColor);
        $(component.getElement()).find('input').val(color);      
        // set prop
        component.set('selected',color);
    };

    component.toggleMenu = function() {
        var menu = $(component.getElement()).find('menu');      
        if ($(menu).is(":visible") == true) {
            menu.fadeOut(500);
        } else {
            menu.fadeIn(500);
        }    
    };

    component.hideMenu = function() {
        $(component.getElement()).find('menu').fadeOut(500);                            
    };

    component.init = function() {
        $(component.getButton()).on('click',function(event) {       
            component.toggleMenu();
        });    
        $(component.getElement()).find('menu').on('mouseleave',function() { 
            component.hideMenu();
        });  
        
        var closeButton = $(component.getElement()).find('.color-picker-close');
        $(closeButton).on('click',function() {
            component.toggleMenu();
        });

        var colors = $(component.getElement()).find('color');
        $(colors).on('click',function() {
            component.select(this);
        });
    };

    component.init();

    return component;
});
