'use strict';

arikaim.component.onLoaded(function(component) {

    component.getButton = function() {
        return $(component.getElement()).children('.color-pick-button')[0];
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
        var input = $(component.getElement()).find('input')[0];
        $(input).val(color);      
        // set prop
        component.set('selected',color);
    };

    component.toggleMenu = function() {
        var menu = $(component.getElement()).find('menu')[0];  
        if ($(menu).is(":visible") == true) {
            $(menu).fadeOut(500);
        } else {
            $(menu).fadeIn(500);
        }    
    };

    component.hideMenu = function() {
        var menu = $(component.getElement()).find('menu')[0];
        $(menu).fadeOut(500);                            
    };

    component.init = function() {
        var gradientButton = $(component.getElement()).find('.color-type-buttons');

        arikaim.ui.button($(gradientButton).children('.gradient-button'),function(element) {
            var type = $(element).val();
            var gradientContent = $(component.getElement()).children('menu').children('.gradient-content')[0];
            var colorContent = $(component.getElement()).children('menu').children('.color-content')[0];
           
            if (type == 'gradient') {
                $(gradientContent).show();
                $(colorContent).hide();
            } else {
                $(gradientContent).hide();
                $(colorContent).show();
            }
        });

        $(component.getButton()).off();
        $(component.getButton()).on('click',function(event) {  
            event.stopPropagation();     
            component.toggleMenu();
        }); 
           
        if (component.get('hideOnBlur') == 'true') {
            var menu = $(component.getElement()).find('menu')[0];
            $(menu).off();
            $(menu).on('mouseleave',function(event) { 
                event.stopPropagation();
                component.hideMenu();
            });  
        }
       
        var closeButton = $(component.getElement()).find('.color-picker-close')[0];
        $(closeButton).off();
        $(closeButton).on('click',function(event) {
            event.stopPropagation();
            component.toggleMenu();
        });

        var colorsMenu = $(component.getElement()).find('.colors-menu')[0];
        var colors = $(colorsMenu).children('color');
        $(colors).off();
        $(colors).on('click',function(event) {
            event.stopPropagation();
            component.select(this);
        });
    };

    component.init();

    return component;
});
