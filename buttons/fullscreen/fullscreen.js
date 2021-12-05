'use strict';

arikaim.component.onLoaded(function(component) {
    component.on('click',function() {
        var targetId = component.get('iframe-id');
        var doc = (isEmpty(targetId) == false) ? $('#' + targetId)[0] : document;
     
        var fullScreen = doc.requestFullscreen
        || doc.webkitRequestFullScreen
        || doc.mozRequestFullScreen
        || doc.msRequestFullscreen;

        if (isEmpty(fullScreen) == false) {
            fullScreen.call(doc);
        }
    });
});