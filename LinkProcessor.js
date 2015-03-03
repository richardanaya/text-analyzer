var LinkProcessor = function(){

}

LinkProcessor.prototype.addUrl = function(url,result){
    return Q.Promise(function(resolve, reject, notify) {
        PageHelper.getTitleForUrl(url).then(function(title){
            if(!result.links){
                result.links = [];
            }
            result.links.push({url:url,title:title});
            resolve();
        })
    })
}

LinkProcessor.prototype.process = function(input,result){
    var _this = this;
    return Q.Promise(function(resolve, reject, notify) {
        var re = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var match, params = {};
        var promises = [];
        while (match = re.exec(input)) {
            var url = match[0];
            promises.push(_this.addUrl(url,result))
        }
        return Q.all(promises).then(function(){
            resolve();
        });
    });
}
