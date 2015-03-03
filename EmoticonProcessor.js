var EmoticonProcessor = function(){

}

EmoticonProcessor.prototype.process = function(input,result){
    return Q.Promise(function(resolve, reject, notify) {
        var re =  /\(([a-zA-Z]+)\)/g;
        var match, params = {};
        while (match = re.exec(input)) {
            var emo = match[1];
            if(emo.length <= 15){
                if(!result.emoticons){
                    result.emoticons = [];
                }
                if(result.emoticons.indexOf(emo)==-1){
                    result.emoticons.push(emo);
                }
            }
        }
        resolve();
    });
}
