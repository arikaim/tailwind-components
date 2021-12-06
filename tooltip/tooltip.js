'use strict';

arikaim.component.onLoaded(function(component) { 

    component.init = function() {
        var items = $('body').find('.show-tooltip');
    
        $(items).on('mouseover',function() {   
            $(this).addClass('relative');  
            $(component.getElement()).find('span').html('');      
            var content = $(this).attr('tooltip-content');
            content = (isEmpty(content) == true) ? $(this).attr('title') : content;
            $(component.getElement()).find('span').html(content);
           
            if (isEmpty(content) == false) {
                $(component.getElement()).detach().appendTo(this);
                $(component.getElement()).css('opacity',1);   
            }                
        });
        $(items).on('mouseout',function() {          
            $(this).removeClass('relative');  
            $(component.getElement()).css('opacity',0);      
        });
    };

    component.init();
});