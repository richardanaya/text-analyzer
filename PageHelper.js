var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    return Q.Promise(function(resolve, reject, notify) {
        $.ajax({
          url: "http://textance.herokuapp.com/title/"+url,
          async: true,
          success: function(data) {
            var matches = data.match(/<title>(.*?)<\/title>/);
            resolve(matches[0]);
          }   
        });
    });
}
