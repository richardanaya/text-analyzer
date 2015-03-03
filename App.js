document.getElementById('buttonAnalyze').addEventListener('click',function(){
    var analyzer = new Analyzer();
    analyzer.analyze(document.getElementById('inputArea').value).then(function(result){
        document.getElementById('resultArea').innerHTML = JSON.stringify(result);
    });
});