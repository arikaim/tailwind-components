'use strict';

arikaim.component.onLoaded(function(component) {

    component.getButton = function() {
        return $(component.getElement()).find('.border-pick-button');
    };

    component.removeSelectedBorderStyle = function() {
        var width = component.get('border-width');
        var style = component.get('border-style');
        var radius = component.get('border-radius');
        var selectedElement = $(component.getElement()).find('selected');
        $(selectedElement).removeClass(width).removeClass(style).removeClass(radius);
    };

    component.resolveSelected = function() {
        var width = component.get('border-width');
        var style = component.get('border-style');
        var radius = component.get('border-radius');
        var selectedElement = $(component.getElement()).find('selected');

        $(selectedElement).addClass(width).addClass(style).addClass(radius);

        component.set('selected',width + ' ' + style + ' ' + radius);
    };

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
            component.removeSelectedBorderStyle();
            var value = $(this).attr('value');
            component.set('border-width',value);
            component.resolveSelected();

            var selectedColor = component.get('selected-color');  
    
            $(widthItems).removeClass(selectedColor);       
            $(this).removeClass('border-gray-500').addClass(selectedColor);
        });

        var styleItems = $(component.getElement()).find('borderStyle');
        $(styleItems).on('click',function() {
            component.removeSelectedBorderStyle();
            var value = $(this).attr('value');
            component.set('border-style',value);
            component.resolveSelected();

            var selectedColor = component.get('selected-color');  

            $(styleItems).removeClass(selectedColor);       
            $(this).removeClass('border-gray-500').addClass(selectedColor);
        });

        var radiusItems = $(component.getElement()).find('borderRadius');
        $(radiusItems).on('click',function() {
            component.removeSelectedBorderStyle();
            var value = $(this).attr('value');
            component.set('border-radius',value);
            component.resolveSelected();

            var selectedColor = component.get('selected-color');  

            $(radiusItems).removeClass(selectedColor);       
            $(this).removeClass('border-gray-500').addClass(selectedColor);
        });
    };

    component.init();

    return component;
});
