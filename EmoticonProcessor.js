var EmoticonProcessor = function(){

}

EmoticonProcessor.prototype.process = function(input,result){
    return Q.Promise(function(resolve, reject, notify) {
        var re =  /\(([^)]+)\)/g;
        var match, params = {};
        while (match = re.exec(input)) {
            var emo = match[1];
            if(emo.length <= 15){
                if(!result.emoticons){
                    result.emoticons = [];
                }
                result.emoticons.push(emo);
            }
        }
        resolve();
    });
}
