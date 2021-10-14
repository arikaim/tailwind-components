/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 * 
 *  Alert component
*/
'use strict';

function Alert(selector, options) {
    var self = this;

    this.selector = (isEmpty(selector) == true) ? '#alert' : selector;
    this.options = options;

    this.init = function() {
        $('.alert-close-button').off();
        $('.alert-close-button').on('click',function() {           
            var alert = $(this).parent();
            self.hide(alert);
        });       
    };

    this.show = function(selector, options) {
        selector = isEmpty(selector) ? this.selector : selector;
        options = this.resoleOptions(selector,options);

        var closeButton = $(selector).find('.alert-close-button');
        if (isEmpty(closeButton) == false) {
            $(closeButton).off();
            $(closeButton).on('click',function() {                                 
                self.hide(selector,options);
            });    
        }

        $(selector).hide();
        $(selector).removeClass('invisible');
        $(selector).removeClass('hidden');
        $(selector).fadeIn(options.fadeIn);
        if (options.hideAfter > 0) {
            $(selector).delay(options.hideAfter).fadeOut(options.fadeOut);
        }     
    };

    this.setDescription = function(description, selector) {
        selector = isEmpty(selector) ? this.selector : selector;
        var alertContent = $(selector).find('.alert-content');
        $(alertContent).find('.alert-description').html(description)
    };

    this.hide = function(selector, options) {
        selector = isEmpty(selector) ? this.selector : selector;
        options = this.resoleOptions(selector,options);

        $(selector).fadeOut(options.fadeOut);       
    };

    this.resoleOptions = function(selector, options) {       
        options = isEmpty(options) ? this.options : options;

        return {
            hideAfter: parseInt(getDefaultValue(getValue('hideAfter',options,$(selector).attr('hide-after')),0)),
            fadeOut: parseInt(getDefaultValue(getValue('fadeOut',options,$(selector).attr('fade-out')),0)),
            fadeIn: parseInt(getDefaultValue(getValue('fadeIn',options,$(selector).attr('fade-in')),0))
        } 
    };
}

Alert.init = function(selector, options) {
    var alert = new Alert(selector,options);
    alert.init();  
    return alert;  
};

Alert.setDescription = function(description,selector) {
    var alert = new Alert(selector);
    alert.setDescription(description);
    return alert;    
};

Alert.show = function(selector, options) {
    var alert = new Alert(selector,options);
    alert.show();    
};

Alert.hide = function(selector, options) {
    var alert = new Alert(selector,options);
    alert.hide();    
}

arikaim.component.onLoaded(function() {   
    Alert.init();
});
