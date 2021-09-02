var vazaoSettings = {
    type: 'doughnut',
    data: {
        labels: ["VAZAO m3/h"],
        datasets: [
            {
                data: [80,20],
                label: 'Dataset-3',
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