'use strict';

arikaim.component.onLoaded(function(component) {
    
    component.init = function() {
        var items =$(component.getElement()).find('.breadcrumbs-item');
        ariaim.ui.loadComponentButton(items);
    };

    // init
    component.init();

    return component;
});
