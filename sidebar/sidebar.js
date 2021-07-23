'use strict';

arikaim.component.onLoaded(function() {   
    function reizeWindowSidebarHandler() {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){         
            $('.sidebar').hide(100)
            $(window).off('resize');
        },250);
    }

    arikaim.ui.button('.home-button',function(element) {     
        $('.sidebar').fadeToggle(800);

        if ($('.sidebar').is(":hidden") == true || $('.sidebar').is(":visible") == false) {
            $(window).off('resize');
        } else {
            $(window).resize(reizeWindowSidebarHandler);  
        }
    });
});