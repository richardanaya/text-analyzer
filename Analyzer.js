var Analyzer = function(){
    this.processors = [
        new EmoticonProcessor(),
        new LinkProcessor(),
        new PeopleProcessor()
    ]
};

Analyzer.prototype.analyze = function(input){
    var _this = this;
    return Q.Promise(function(resolve, reject, notify) {
        var result = {};
        var promises = [];
        for(var p in _this.processors){
            promises.push(_this.processors[p].process(input,result));
        }
        return Q.all(promises).then(function(){
            resolve(result);
        });
    });
}