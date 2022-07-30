'use strict';

arikaim.component.onLoaded(function(component) {

    component.select = function(element) {
        var selected = $(element).attr('value');
        document.activeElement.blur();
        component.set('selected',selected);

        $(component.getElement()).find('.selected-item-icon').html($(element).find('.item-icon').html().trim());
        $(component.getElement()).find('.selected-item-title').html($(element).find('.item-title').html().trim());      
    };

    component.init = function() {
        var menuItems = $(component.getElement()).find('.text-align-item');
        $(menuItems).on('click',function() {
            component.select(this);
        });
    };

    component.init();

    return component;
});
