/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 * 
 *  Accordion component
*/
'use strict';

function Accordion(selector, options) {
    var self = this;

    this.selector = (isEmpty(selector) == true) ? '#accordion' : selector;
    this.options = options;

    this.init = function() {
        $('.alert-close-button').off();
        $('.alert-close-button').on('click',function() {           
            var alert = $(this).parent();
            self.hide(alert);
        });       
    };
}

Accordion.init = function(selector, options) {
    var accordion = new Accordion(selector,options);
    accordion.init();  

    return accordion;  
};
