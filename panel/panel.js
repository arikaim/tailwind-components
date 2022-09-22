'use strict';

arikaim.component.onLoaded(function(component) {
    arikaim.ui.button('.panel-close-button',function(element) {       
        var contentId = $(element).attr('content-id');     
        $('#' + contentId).fadeOut($(element).attr('fade-out'));      
    });

    return component;
});