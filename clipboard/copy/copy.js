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
        var value = (type == 'element') ? $(selector).html() : $(selector).val();
        focusElement = (isEmpty(focusElement) == true) ? selector : focusElement;
        if (options == 'trim') {
            value = value.trim();
        }
        
        if (isObject(navigator.clipboard) == true) {
            navigator.clipboard.writeText(value).then(function() {
                $(focusElement).show();  
                $(focusElement).focus();         
                $(focusElement)[0].scrollIntoView(false);  
                return true;
            });
        } else {
            var $input = $('<input>');
            $('body').append($input);
            if (escape == true && isEmpty(value) == false) {
                var doc = new DOMParser().parseFromString(value,'text/html');
                value = doc.documentElement.textContent;
            }
           
            $input.val(value);
            $input.focus();
            $input.select();
            document.execCommand('copy');
            $input.remove();   
        }
           
        $(focusElement).show();  
        $(focusElement).focus();         
        $(focusElement)[0].scrollIntoView(false);               
    }
});