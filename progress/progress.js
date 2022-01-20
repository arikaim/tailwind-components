'use strict';

arikaim.component.onLoaded(function(component) {   

    component.getBarElement = function() {
        return $(component.getElement()).find('.progress-bar');
    };

    component.setValue = function(value) {
        var value = (isEmpty(value) == true) ? 0 : value; 
        var max = parseInt(component.get('max'));
        var min = parseInt(component.get('min'));
        value = (value > max) ? max : value;
        value = (value < min) ? min : value;

        component.set('value',value);
        $(component.getBarElement()).css('width',value + '%');

        if (value == max) {
            component.set('completed',true);
        } else {
            component.set('completed',false);
        }
    };

    component.clear = function() {
        var min = parseInt(component.get('min'));
        component.setValue(min);
    };

    component.increment = function(value) {
        value = (isEmpty(value) == true) ? 1 : value;
        var currentValue = parseInt(component.get('value'));
        component.setValue(currentValue + value);
    };

    return component;
});