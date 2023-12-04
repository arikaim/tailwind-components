'use strict';

arikaim.component.onLoaded(function(component) {
    var dropdown;

    component.getDropdown = function() {
        return dropdown;
    }

    component.select = function(element) {
        var title = $(element).html().trim();

        document.activeElement.blur();
        component.set('selected',$(element).attr('value'));

        $(component.getElement()).find('.dropdown-title').html(title);   
        $(component.getElement()).find('.dropdown-item').removeClass('active-menu'); 
        $(element).addClass('active-menu');
    };
    
    component.init = function() {
        var menu =  $(component.getElement()).find('.dropdown-menu')[0];
        var button = $(component.getElement()).find('.dropdown-toggle')[0]; 

        dropdown = new Dropdown(menu,button,{
            placement: 'bottom',
            triggerType: 'click',
            offsetSkidding: 0,
            offsetDistance: 10,
            delay: 300,
            ignoreClickOutsideClass: false,
            onToggle: () => {
                $(button).find('.button-icon').toggleClass('rotate-180');
            }
        },{
            id: menu,
            override: true
        });

        arikaim.ui.button($(component.getElement()).find('.dropdown-item'),function(btn) {
            console.log('select');
            component.select(btn);
            console.log( component.get('selected') );
            dropdown.toggle();
        });     
    };

    component.init();

    return component;
});
