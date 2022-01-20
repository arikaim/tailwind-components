'use strict';

arikaim.component.onLoaded(function(component) {

    component.getButton = function() {
        return $(component.getElement()).find('.border-pick-button');
    }

    component.select = function(element) {
        var bgColor = $(element).attr('bg-color'); 
        var selected = component.get('background');
        var value = $(element).attr('value');

        $(this.getButton()).removeClass(selected).addClass(bgColor);
        component.set('background',bgColor);
        component.set('selected',value);
        
        $(component.getElement()).find('input').val();
        component.toggleMenu();
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
    
        var closeButton = $(component.getElement()).find('.border-picker-close');
        $(closeButton).on('click',function() {
            component.toggleMenu();
        });

        var widthItems = $(component.getElement()).find('borderWidth');
        $(widthItems).on('click',function() {
            var value = $(this).attr('value');
            console.log(value);

        });

        var styleItems = $(component.getElement()).find('borderStyle');
        $(styleItems).on('click',function() {
            var value = $(this).attr('value');
            console.log(value);

        });

        var radiusItems = $(component.getElement()).find('borderRadius');
        $(radiusItems).on('click',function() {
            var value = $(this).attr('value');
            console.log(value);

        });
    };

    component.init();

    return component;
});
