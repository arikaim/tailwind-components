'use strict';

arikaim.component.onLoaded(function(component) {

    component.select = function(element) {
        var selected = $(element).attr('value');
        document.activeElement.blur();
        $(component.getElement()).find('.selected-item-title').removeClass(component.get('selected'));   
        component.set('selected',selected);

        var title = $(element).find('.item-title').html().trim();
        $(component.getElement()).find('.selected-item-title').html(title);   
        $(component.getElement()).find('.selected-item-title').addClass(selected);      
    };

    component.init = function() {
        var menuItems = $(component.getElement()).find('.font-item');
        var families = [];

        $(menuItems).each(function() {
            var family = $(this).attr('family');
            families.push(family);
        });

        WebFont.load({
            google: {
              families: families
            }
        });

        $(menuItems).on('click',function() {
            component.select(this);
        });
    };

    component.init();

    return component;
});
