'use strict';

function simplePaginatorInitParams() {
    var paramName = $('.paginator').attr('param-name');
    if (isEmpty(paramName) == false) {
        var paramValue = $('.paginator').attr('param-value');
        var params = {};       
        params[paramName] = paramValue;
        paginator.setParams(params);
    }
};

arikaim.events.on('paginator.load.page',function(result) {    
    var page = parseInt(result.page);
    var lastPage = parseInt(result.last_page);
    simplePaginatorInitParams();

    $('#current_page').html(page);

    if (page < lastPage) {
        arikaim.ui.show('.next-page');     
    } else {
        arikaim.ui.hide('.next-page');   
        arikaim.ui.show('.prev-page');      
    }
    
    if (page == 1) {
        arikaim.ui.hide('.prev-page');
    } else {
        arikaim.ui.show('.prev-page');      
    }
},'simplePaginator');

arikaim.component.onLoaded(function() {
    var init = $('.paginator').attr('init');  
    if (init == true) {      
        paginator.init();
    }

    simplePaginatorInitParams();
});