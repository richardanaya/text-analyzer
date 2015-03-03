var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    return Q.Promise(function(resolve, reject, notify) {
        var shortUrl = url.replace("http://","");
         shortUrl = url.replace("https://","");
        $.ajax({
              url: "http://textance.herokuapp.com/title/"+shortUrl,
              complete: function(data) {
                resolve(data.responseText);
              },
              error: function(err){
                  resolve("");
              }
        });
    });
}
