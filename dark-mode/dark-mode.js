'use strict';

arikaim.component.onLoaded(function(component) { 

    component.setDarkMode = function() {
        document.documentElement.classList.add('dark');
        this.set('mode','dark');
        if (isObject(localStorage) == true) {
            localStorage.theme = 'dark';
        }
        $(component.getElement()).prop('checked',false);
    };

    component.setLightMode = function() {
        document.documentElement.classList.remove('dark');
        this.set('mode','light');
        if (isObject(localStorage) == true) {
            localStorage.theme = 'light';
        }

        $(component.getElement()).prop('checked',true);
    };

    component.init = function() {
        
        arikaim.ui.button($(component.getElement()),function(element) {
            var checked = $(element).prop('checked');          
            if (checked == true) {
                component.setLightMode();
            } else {
                component.setDarkMode();
            }
        });
       
        if (isObject(localStorage) == true) {
            if (localStorage.theme === 'dark') {
                this.setDarkMode();
                return;
            }
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
            this.setDarkMode();
            return;
        }
        
        component.setLightMode();
    };

    // init
    component.init();

    return component;
});