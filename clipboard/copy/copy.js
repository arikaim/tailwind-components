'use strict';

arikaim.component.onLoaded(function(component) {

    arikaim.ui.button('.clipboard-copy',function(element) {
        var type = $(element).attr('content-type');
        var selector = $(element).attr('content-selector');
        var escape = $(element).attr('escape-content');
        var options = $(element).attr('content-options');
        var focusElement = $(element).attr('focus-element');
      
        clipboardCopy(selector,type,escape,options,focusElement);        
    });

    function clipboardCopy(selector, type, escape, options, focusElement) {
        var value;
        
        if (type == 'text') {
            value = selector
        } 
        if (type == 'element') {
            value = $(selector).html();
        } 
        if (type == 'input') {
            value = $(selector).val();
        } 
           
        focusElement = (isEmpty(focusElement) == true) ? selector : focusElement;
        if (options == 'trim') {
            value = value.trim();
        }
        
        if (isObject(navigator.clipboard) == true) {
            navigator.clipboard.writeText(value).then(function() {
                if (type !== 'text') {
                    $(focusElement).show();  
                    $(focusElement).focus();         
                    $(focusElement)[0].scrollIntoView(false);  
                }
                return true;
            });
        } else {
            var $input = $('<textarea>'); 
            $('body').append($input);
          
            if (escape == true && isEmpty(value) == false) {
                if (type !== 'text') {
                    var doc = new DOMParser().parseFromString(value,'text/html');
                    value = doc.documentElement.textContent;
                } 
            }
            
            $input.html(value);
            $input.focus();
            $input.select();
            document.execCommand('copy');
            $input.remove();   
        }
    }
});
