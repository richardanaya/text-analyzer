var EmoticonProcessor = function(){

}

EmoticonProcessor.prototype.process = function(input,result){
    return Q.Promise(function(resolve, reject, notify) {
        var re =  /\(([^)]+)\)/g;
        var match, params = {};
        while (match = re.exec(input)) {
            if(!result.emoticons){
                result.emoticons = [];
            }
            result.emoticons.push(match[1]);
        }
        resolve();
    });
}
