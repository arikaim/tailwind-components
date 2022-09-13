'use strict';

arikaim.component.onLoaded(function(component) {

    component.getTimestamp = function() {
        return component.getVar('datepicker').getDate().getTime();
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
            title: component.get('detepicker-title')         
        });

        component.setVar('datepicker',datepicker);
    };

    component.init();

    return component;
});
