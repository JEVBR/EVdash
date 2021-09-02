var densidadeSettings = {
    type: 'doughnut',
    data: {
        labels: ["DENSIDADE kg/m3"],
        font: {
            size: 50
        },
        datasets: [
            {
                data: [80,40],
                label: 'Dataset-4',
                backgroundColor: [color_4 ,"#00000000"],
                borderColor:  [color_1 ,"#ffffff00"],
            }
        ],

    },
    options: {
        animation: false,
        responsive: false,
        maintainAspectRatio: false,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
    }
}