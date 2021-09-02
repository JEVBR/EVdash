var recalqueSettings = {
    type: 'doughnut',
    data: {
        labels: ["Recalque"],
        datasets: [
            {
                data: [80,20],
                label: 'Dataset-2',
                backgroundColor: [color_3 ,"#00000000"],
                borderColor:  [color_4 ,"#ffffff00"],
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
