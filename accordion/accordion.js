'use strict';

arikaim.component.onLoaded(function(component) {
    component.getItems = function() {
        return $(component.getElement()).find('item');      
    };

    component.getIcons = function() {
        return component.getItems().children('.accordion-item-title').children('svg');
    };

    component.collapseItem = function(item) {
        $(item).find('svg').removeClass(this.get('icon-rotate')); 
        $(item).next('.accordion-item-content').css('max-height','0px');  
        $(item).removeAttr('open');    
        $(item).next('.accordion-item-content').addClass('overflow-hidden');
    };

    component.expandItem = function(item) {           
        if (isEmpty($(item).attr('disabled')) == false) {
            return false;
        }
        
        if (isEmpty($(item).attr('open')) == false) {               
            this.collapseItem(item);      
            return false;
        };

        this.getItems().children('.accordion-item-title').removeAttr('open');
        this.getItems().children('.accordion-item-content').css('max-height','0px');
        this.getItems().children('.accordion-item-content').addClass('overflow-hidden');
        this.getIcons().removeClass(this.get('icon-rotate'));      
      
        var height = $(item).next('.accordion-item-content').prop('scrollHeight');
        $(item).next('.accordion-item-content').css('max-height',height + 32 + 'px');
        $(item).next('.accordion-item-content').removeClass('overflow-hidden');

        $(item).find('svg').addClass(this.get('icon-rotate'));
        $(item).attr('open',true);
    };

    component.init = function() {
        var items = component.getItems().children('.accordion-item-title');
        $(items).on('click',function() {                    
            component.expandItem(this);
        });
    };

    component.init();

    return component;
});
