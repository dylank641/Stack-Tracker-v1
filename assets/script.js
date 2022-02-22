let apiKey = 'UKQlypBI2midimpHVquAw5X9IhvSQK9k';
// let stockInput = document.getElementById('stockName').value;
// let date = document.getElementById('data').value;

//stock data for previous day close
var cords = function () {
    let stockInput = document.getElementById('stockName').value;
    fetch(`https://api.polygon.io/v2/aggs/ticker/${stockInput}/prev?adjusted=true&apiKey=UKQlypBI2midimpHVquAw5X9IhvSQK9k`)
    .then(data=>data.json())
    .then(function(results){
        document.getElementById('test').innerHTML = results.results[0].c;
        console.log(results);
    });
}

//Gets stock data like open, close, etc.
var basicData = function(){
    let stockInput = document.getElementById('stockName').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    fetch(`https://api.polygon.io/v2/aggs/ticker/${stockInput}/range/30/minute/${startDate}/${endDate}?adjusted=true&sort=asc&limit=5000&apiKey=UKQlypBI2midimpHVquAw5X9IhvSQK9k`)
    .then(data=>data.json())
    .then(function(results){
        document.getElementById('priceAtOpen').innerHTML = results.results[11].o;
        document.getElementById('priceAtClose').innerHTML = results.results[23].c;
        document.getElementById('vwap').innerHTML = results.results[28].vw;
        let zero = results.results[0].v;
        let one = results.results[1].v;
        let two = results.results[2].v;
        let three = results.results[3].v;
        let four = results.results[4].v;
        let five = results.results[5].v;
        let six = results.results[6].v;
        let seven = results.results[7].v;
        let eight = results.results[8].v;
        let nine = results.results[9].v;
        let ten = results.results[10].v;
        let volumeSum = zero + one + two + three + four + five + six + seven + eight + nine + ten;
        document.getElementById('preMarketV').innerHTML = volumeSum;
        

        console.log(results);
    });
}

//stock data for weighted shares outstanding
var sharesOut = function(){
    let stockInput = document.getElementById('stockName').value;
    let startDate = document.getElementById('startDate').value;
    fetch(`https://api.polygon.io/v3/reference/tickers/${stockInput}?date=${startDate}&apiKey=UKQlypBI2midimpHVquAw5X9IhvSQK9k`)
    .then(data=>data.json())
    .then(function(results){
        document.getElementById('sharesOut').innerHTML = results.results.weighted_shares_outstanding;
        console.log(results);
    });
}

//stock data for daily volume
var dayVolume = function(){
    let stockInput = document.getElementById('stockName').value;
    let startDate = document.getElementById('startDate').value;
    fetch(`https://api.polygon.io/v1/open-close/${stockInput}/${startDate}?adjusted=true&apiKey=UKQlypBI2midimpHVquAw5X9IhvSQK9k`)
    .then(data=>data.json())
    .then(function(results){
        document.getElementById('volume').innerHTML = results.volume;
        console.log(results);
    });
}


document.getElementById('searchB').addEventListener('click', function(){
    cords();
    basicData();
    sharesOut();
    dayVolume();
})
