'use strict';

arikaim.component.onLoaded(function(component) {

    component.getTimestamp = function() {
        return (component.getVar('datepicker').getDate().getTime() / 1000);
    }

    component.getDatepicker = function() {
        return component.getVar('datepicker');
    }

    component.init = function() {
        var datepicker = new Datepicker(component.getElement(),{
            autohide: component.get('autohide',false),
            calendarWeeks: component.get('calendarWeeks',false),
            format: component.get('date-format'),
            orientation: component.get('orientation'),
            todayBtn: component.get('todayBtn'),
            clearBtn: component.get('clearBtn'),
            title: component.get('detepicker-title')         
        });

        var value = $(component.getElement()).val().trim();
        if (isEmpty(value) == false) {
            datepicker.setDate(value)
        }

        component.setVar('datepicker',datepicker);
    };

    component.init();

    return component;
});
