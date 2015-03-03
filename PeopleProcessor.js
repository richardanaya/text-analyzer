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
            result.mentions.push(match[1]);
        }
        resolve();
    });
}
