'use strict';

arikaim.component.onLoaded(function(component) {   

    component.getBarElement = function() {
        return $(component.getElement()).find('.slider-bar');
    };

    component.getToggleElement = function() {
        return $(component.getElement()).find('.slider-toggle');
    };

    component.init = function() {
        var bars = $(component.getElement()).find('.slider-parts');
        $(bars).off();
        $(bars).on('click',function(e) {
            var value = $(this).attr('bar-value');              
            value = (isEmpty(value) == true) ? component.get('min') : value;
            component.setValue(value);
        });

        $(bars).on('dragenter',function(e) {
            e.preventDefault();    
            var barValue = $(this).attr('bar-value');
            if (isEmpty(barValue) == false) {
                component.setValue(barValue);
            }
        });

        $(bars).on('dragover',function(e) {
            e.preventDefault();          
            this.style.cursor = 'pointer';
            return true;
        });

        $(this.getToggleElement()).on('dragstart',function(e) {       
            var target = isObject(e.toElement) ? e.toElement : e.currentTarget;        
            target.style.cursor = 'move'; 

            this.style.cursor = 'pointer';          
            return true;
        }); 

        $(this.getToggleElement()).on('drag',function(e) {
            e.preventDefault();         
            this.style.cursor = 'pointer';
            return true;
        });       
    }

    component.setValue = function(value) {
        var value = (isEmpty(value) == true) ? 0 : value; 
        var max = parseInt(component.get('max'));
        var min = parseInt(component.get('min'));
        value = (value > max) ? max : value;
        value = (value < min) ? min : value;
               
        // set width
        $(component.getBarElement()).css('width',value + '%');
        // set toggle button
        $(component.getToggleElement()).css('left',value + '%');
        
        component.set('value',value);
    };

    component.clear = function() {
        var min = parseInt(this.get('min'));
        this.setValue(min);
    };

    component.increment = function(value) {
        value = (isEmpty(value) == true) ? 1 : value;
        var currentValue = parseInt(component.get('value'));
        this.setValue(currentValue + value);
    };

    // init
    component.init();

    return component;
});