'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.form.addRules('#address_form',{});

    $('#country_dropdown').dropdown({
        onChange: function(value, text, el) {          
            var code = $(el).attr('country-code');
            arikaim.ui.loadComponent({
                mountTo: 'state_content',
                component: 'tailwind~address.state',
                params: {
                    country_code: code,
                    class: 'mini'
                }
            });
        }
    });
});