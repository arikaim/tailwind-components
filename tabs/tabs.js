'use strict';

arikaim.component.onLoaded(function(component) { 

    component.toggle = function(button) {
        var buttons = $(component.getElement()).children('tabItem');
        $(buttons).removeClass(this.get('active-color'));
        $(button).addClass(this.get('active-color'));
        var value = $(button).attr('value');
        var componentName = $(button).attr('component');
        var attributes = $(button)[0].attributes;
        var params = {};
        if (isObject(attributes) == true) {          
            for (var i = 0, len = attributes.length; i < len; i++) {
                params[attributes[i].name] = attributes[i].value;
            }
        }
       
        this.set('selected',value);
        
        if (isEmpty(componentName) == false) {
            arikaim.ui.loadComponent({
                mountTo: $(component.getElement()).attr('tab-content-id'),
                component: componentName,
                params: params
            });
        }
    };

    component.init = function() {
        var buttons = $(component.getElement()).children('tabItem');
        buttons.on('click',function() {
            console.log(this);
            component.toggle(this);
        });  
    };

    component.init();
    
    return component;
});