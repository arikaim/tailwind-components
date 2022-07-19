'use strict';

arikaim.component.onLoaded(function(component) { 

    component.isDark = function() {
        if (isObject(localStorage) == true) {
            return (localStorage.theme == 'dark');
        }

        return $(element).prop('checked');
    };

    component.setDarkMode = function() {
        document.documentElement.classList.add('dark');
        component.set('mode','dark');
        if (isObject(localStorage) == true) {
            localStorage.theme = 'dark';
        }
        $(component.getElement()).prop('checked',false);
    };

    component.setLightMode = function() {
        document.documentElement.classList.remove('dark');
        component.set('mode','light');
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
                component.setDarkMode();
                return;
            }
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
            component.setDarkMode();
            return;
        }
     
        if (component.get('mode') == 'dark') {
            component.setDarkMode();
        } else {
            component.setLightMode();
        }      
    };

    // init
    component.init();

    return component;
});