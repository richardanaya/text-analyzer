document.getElementById('buttonAnalyze').addEventListener('click',function(){
    var analyzer = new Analyzer();
    analyzer.analyze(document.getElementById('inputArea').value).then(function(result){
        document.getElementById('resultArea').innerHTML = JSON.stringify(result);
    });
});


//SOME TESTS
var assertObjects = function(msg,obja,objb){
    console.assert(JSON.stringify(obja)==JSON.stringify(objb),msg);
}

var analyzer = new Analyzer()
var expectedA = {"mentions":["chris"]};
analyzer.analyze("@chris you around?").then(function(result){
    assertObjects("Test mentions work",result,expectedA);
});
var expectedB = {"emoticons":["megusta","coffee"]};
analyzer.analyze("Good morning! (megusta) (coffee)").then(function(result){
    assertObjects("Test emoticons work",result,expectedB);
});
var expectedC = {"links":[{"url":"http://www.nbcolympics.com","title":"Lolcats! - Learn more about lolcats"}]};
analyzer.analyze("Olympics are starting soon; http://www.nbcolympics.com").then(function(result){
    assertObjects("Test links work",result,expectedC);
});
var expectedD = {"emoticons":["success"],"mentions":["bob","john"],"links":[{"url":"https://twitter.com/jdorfman/status/430511497475670016","title":"Lolcats! - Learn more about lolcats"}]};
analyzer.analyze("@bob @john (success) such a cool feature; https://twitter.com/jdorfman/status/430511497475670016").then(function(result){
    assertObjects("Test all works",result,expectedD);
});
