var PeopleProcessor = function(){

}

PeopleProcessor.prototype.process = function(input,result){
    return Q.Promise(function(resolve, reject, notify) {
        var re = /@([a-zA-Z\d_]+)/g;
        var match, params = {};
        while (match = re.exec(input)) {
            if(!result.mentions){
                result.mentions = [];
            }
            if(result.mentions.indexOf(name)==-1){
                result.mentions.push(name);
            }
        }
        resolve();
    });
}
