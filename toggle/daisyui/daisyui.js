'use strict';

arikaim.component.onLoaded(function(component) { 

    component.setChecked = function() {
        $(component.getElement()).prop("checked",true)
    }

    component.setUnchecked = function() {
        $(component.getElement()).prop("checked",false)
    }

    component.isChecked = function() {
        return $(component.getElement()).prop("checked");
    };

    component.toggle = function() {
        if (component.isChecked() == true) {          
            this.setUnchecked();        
        } else {           
            this.setChecked();
        }    
    };
    
    component.init = function() {       
        component.on('click',function() {
            var value = (component.isChecked() == true) ? 1 : 0;
            component.set('value',value);
       });  
    }
   
    component.init();

    return component;
});