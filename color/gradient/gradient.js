'use strict';

arikaim.component.onLoaded(function(component) {

    component.setDirection = function(value) {
        var sample = $(component.getElement()).find('gradientSample')[0];
        $(sample).removeClass('bg-' + component.get('direction'));
        $(sample).addClass('bg-' + value);
        component.set('direction',value);
    };

    component.setColor = function(value, type) {
        var sample = $(component.getElement()).find('gradientSample')[0];
        var color = component.get(type + '-color');

        $(sample).removeClass(type + '-' + color);
        $(sample).addClass(type + '-' + value);
       
        component.set(type + '-color',value);
    };

    component.getGradient = function() {
        return component.get('direction') + ' from-' + component.get('from-color') + ' via-' + component.get('via-color') + ' to-' + component.get('to-color');
    };

    component.updateParent = function() {
        var parentId = component.get('parent-id');
        var gradient = component.getGradient();

        if (isEmpty(parentId) == false) {
            arikaim.ui.withComponent(parentId,function(component) {
                component.selectColor(gradient,'bg-' + gradient);
            });
        }
    };

    component.init = function() {    
        arikaim.ui.subscribe(component.getId() + '_directions','selected',function(value) {               
            component.setDirection(value);
            component.updateParent();
        });

        arikaim.ui.subscribe(component.getId() + '_from_color','selected',function(value) {               
            component.setColor(value,'from');
            component.updateParent();
        });

        arikaim.ui.subscribe(component.getId() + '_via_color','selected',function(value) { 
            component.setColor(value,'via');
            component.updateParent();
        });

        arikaim.ui.subscribe(component.getId() + '_to_color','selected',function(value) {               
            component.setColor(value,'to');
            component.updateParent();
        });       
    };

    component.init();

    return component;
});
