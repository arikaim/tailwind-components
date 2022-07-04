'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.button('.panel-close-button',function(element) {       
        var contentId = $(element).attr('content-id');     
        $('#' + contentId).fadeOut($(element).attr('fade-out'));      
    });
});