'use strict';

arikaim.component.onLoaded(function(component) { 

    component.setStatus = function(status) {
        var button = $(component.getElement()).children('.toggle-button');
        var input = $(component.getElement()).children('input');
        if (status == 1) {          
            button.removeClass('translate-x-0').addClass('translate-x-full');  
            if (isEmpty(this.get('active-color')) == false) {
                $(component.getElement()).removeClass(this.get('color')).addClass(this.get('active-color'));
            }     
        } else {
            if (isEmpty(this.get('active-color')) == false) {
                $(component.getElement()).removeClass(this.get('active-color')).addClass(this.get('color'));
            }   
            button.removeClass('translate-x-full').addClass('translate-x-0');       
        }
        component.checked = status;
        input.val(status);
    }

    component.setChecked = function() {
        this.setStatus(1);
    }

    component.setUnchecked = function() {
        this.setStatus(0);
    }

    component.isChecked = function() {
        return (self.checked == 1 || self.checked == '1');
    };

    component.toggle = function() {
        if (component.checked == 1 || component.checked == '1') {          
            this.setUnchecked();        
        } else {           
            this.setChecked();
        }    
    };
    
    component.on('click',function() {
        component.toggle();
    });  
});