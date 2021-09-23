var linesSettings = 
{
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                data: [],
                label: 'Id x 10',
                backgroundColor: color_1 + "00",
                borderColor:  color_1,
            },
            {
                data: [],
                label: 'Iq x 10',
                backgroundColor: color_4 + "00",
                borderColor:  color_2,
            },
            {
                data: [],
                label: 'Ia',
                backgroundColor: color_4 + "88",
                borderColor:  color_3,
            },
            {
                data: [],
                label: 'Ib',
                backgroundColor: color_1 + "88",
                borderColor:  color_5,
            }
        ],

    },
    options: {
        animation: false,
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }] 
        }
    }
}