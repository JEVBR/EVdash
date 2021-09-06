const ws = new WebSocket('ws://localhost:3001');

ws.onopen = function() {
    console.log("open")
}

ws.onmessage = function(msg) { display(msg) }

function display(msg){

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
    // var ctx = document.getElementById('myChart');
    // myLineChart = new Chart(ctx, linhasSettings);

    // var ctx1 = document.getElementById('Succao');
    // myLineChart1 = new Chart(ctx1, succaoSettings);

    Plotly.newPlot('myDiv', testChartData, testChartLayout);

    var ctx2 = document.getElementById('Recalque');
    myLineChart2 = new Chart(ctx2, recalqueSettings);

    // var ctx3 = document.getElementById('Vazao');
    // myLineChart3 = new Chart(ctx3, vazaoSettings);

    // var ctx4 = document.getElementById('Densidade');
    // myLineChart4 = new Chart(ctx4, densidadeSettings);
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