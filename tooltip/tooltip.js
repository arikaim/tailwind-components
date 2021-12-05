'use strict';

arikaim.component.onLoaded(function(component) { 

    component.init = function() {
        var items = $('body').find('.show-tooltip');
    
        $(items).on('mouseover',function() {     
            $(component.getElement()).find('span').html('');      
            var content = $(this).attr('tooltip-content');
            content = (isEmpty(content) == true) ? $(this).attr('title') : content;
            $(component.getElement()).find('span').html(content);
           
            if (isEmpty(content) == false) {
                $(component.getElement()).detach().prependTo(this);
                $(component.getElement()).removeClass('.opacity-0').css('opacity',1);   
            }                
        });
        $(items).on('mouseout',function() {          
           $(component.getElement()).css('opacity',0);      
        });
    };

    component.init();
});