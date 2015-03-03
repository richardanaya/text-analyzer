var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    //TODO - do some serverside cross-domain screen scraping to get title
    return Q.Promise(function(resolve, reject, notify) {
         resolve("Lolcats! - Learn more about lolcats");
    });
}
