var PageHelper = function(){

}

PageHelper.getTitleForUrl = function(url){
    return Q.Promise(function(resolve, reject, notify) {
        //TODO: use real backend service to get titles of other pages by url cross-domainly
        resolve("Lolcats! - Learn more about lolcats");
    });
}
