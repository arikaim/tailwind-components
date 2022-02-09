'use strict';

arikaim.component.onLoaded(function(component) {
    
    var fileUpload = new FileUpload('#file_form',{
        url: '/api/storage/upload',
        maxFiles: 1,
        allowMultiple: true,
        acceptedFileTypes: [],
        formFields: {            
            note: '#note'
        },
        onStart: function(file) {
        },
        onSuccess: function(result) {      
        },
        onError: function(result) {          
        }
    });   

    return component;
});