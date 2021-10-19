const ws = new WebSocket('ws://localhost:3001');

ws.onopen = function() {
    console.log("open")
}

ws.onmessage = function(msg) { display(msg) }

function display(msg){
    // console.clear()
    filter_inv(msg.data)
    update_inv_charts()
    update_inv_texts() 
}

var values = {
    counter:0
}

function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}

var maximumPoints = 50;// with this variable you can decide how many points are display on the chart
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        var d = data[0];
        dataset.data.push(d);
        data.shift();
    });


    var canRemoveData = false;
    chart.data.datasets.forEach((dataset) => {
        if (dataset.data.length > maximumPoints) {

            if (!canRemoveData) {
                canRemoveData = true;
                chart.data.labels.shift();                
            }

            dataset.data.shift();

        }

    });
    chart.update();
}

var myLineChart
Chart.defaults.global.defaultFontSize = 30;
function chartFunction(){ 
    var ctx = document.getElementById('myChart');
    myLineChart = new Chart(ctx, linesSettings);
    Plotly.newPlot('Id10div', Id10ChartData, Id10ChartLayout);
    Plotly.newPlot('Iq10div', Iq10ChartData, Iq10ChartLayout);
}

function pageReload(){
    location.reload();
}

var screen = false

function openFullScreen() {
    var elem = document.documentElement;
    elem.requestFullscreen();
    screen = true
}

function exitFullScreen() {
    document.exitFullscreen();
    screen = false
}

function changeFullScreen() {
    screen ? exitFullScreen() : openFullScreen()
}