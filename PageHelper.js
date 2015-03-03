var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    return Q.Promise(function(resolve, reject, notify) {
        var shortUrl = url.replace("http://","");
         shortUrl = url.replace("https://","");
        $.ajax({
              url: shortUrl,
              complete: function(data) {
                resolve(data.responseText);
              }
              error: fucntion(){
                  resolve("");
              }
        });
    });
}
