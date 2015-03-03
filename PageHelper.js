var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    return Q.Promise(function(resolve, reject, notify) {
        var shortUrl = url.replace("http://","");
        shortUrl = shortUrl.replace("https://","");
        $.ajax({
              url: "http://textance.herokuapp.com/title/"+shortUrl,
              complete: function(data) {
                if(data.status == 200){
                    resolve(data.responseText);
                }
                else {
                    resolve("");
                }
              }
        });
    });
}
