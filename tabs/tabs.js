'use strict';

arikaim.component.onLoaded(function(component) { 

    component.toggle = function(button) {
        var buttons = $(component.getElement()).children('tabItem');
        $(buttons).removeClass(this.get('active-color'));
        $(button).addClass(this.get('active-color'));
        var value = $(button).attr('value');
        var componentName = $(button).attr('component');

        this.set('selected',value);
        if (isEmpty(componentName) == false) {
            arikaim.ui.loadComponent({
                mountTo: $(component.getElement()).attr('tab-content-id'),
                component: componentName
            });
        }
    };

    component.init = function() {
        var buttons = $(component.getElement()).children('tabItem');
        buttons.on('click',function() {
            component.toggle(this);
        });  
    };

    component.init();
    
    return component;
});