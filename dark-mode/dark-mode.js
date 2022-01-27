'use strict';

arikaim.component.onLoaded(function(component) { 

    component.setDarkMode = function(pushToggle) {
        document.documentElement.classList.add('dark');
        this.set('mode','dark');
        if (isObject(localStorage) == true) {
            localStorage.theme = 'dark';
        }
        if (pushToggle == true) {
            arikaim.ui.withComponent('dark-mode-toggle',function(component) {
                component.setChecked();
            });
        }
    };

    component.setLightMode = function() {
        document.documentElement.classList.remove('dark');
        this.set('mode','light');
        if (isObject(localStorage) == true) {
            localStorage.theme = 'light';
        }
    };

    component.init = function() {
        arikaim.ui.subscribe('dark-mode-toggle','checked',function(value) {
            if (value == 1) {
                component.setDarkMode();
            } else {
                component.setLightMode();
            }
        });

        if (isObject(localStorage) == true) {
            if (localStorage.theme === 'dark') {
                this.setDarkMode(true);
                return;
            }
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
            this.setDarkMode(true);
            return;
        }
        
        if (this.get('mode') == 'dark') {
            this.setDarkMode();
        }
    };

    // init
    component.init();

    return component;
});