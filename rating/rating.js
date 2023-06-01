'use strict';

arikaim.component.onLoaded(function(component) {  
    
    component.init = function() {
        var buttons = $(component.getElement()).find('.rating-button');

        arikaim.ui.button(buttons,function(element) {
            var value = $(element).val();
            var type = component.get('type');
            var objectId = component.get('object-id');
        
            ratingApi.add(objectId,type,value,function(result) {  
                $(component.getElement()).find('.rating-panel').remove();
                component.set('saved',true);
                arikaim.events.emit('rating.saved',{
                    object_id: objectId,
                    type: type
                });

            },function(error) {
                console.log(error);
            });
        });
    };

    component.init();

    return component;
});