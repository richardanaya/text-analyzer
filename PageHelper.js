var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    return Q.Promise(function(resolve, reject, notify) {
        $.ajax({
          url: url,
          async: true,
          success: function(data) {
            var matches = data.match(/<title>(.*?)<\/title>/);
            resolve(matches[0]);
          }   
        });
    });
}
