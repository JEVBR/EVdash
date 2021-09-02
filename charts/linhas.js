var linhasSettings = 
{
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                data: [],
                label: 'Sucção',
                backgroundColor: color_1 + "00",
                borderColor:  color_1,
            },
            {
                data: [],
                label: 'Recalque',
                backgroundColor: color_4 + "00",
                borderColor:  color_2,
            },
            {
                data: [],
                label: 'Vazao',
                backgroundColor: color_4 + "88",
                borderColor:  color_3,
            },
            {
                data: [],
                label: 'Densidade',
                backgroundColor: color_4 + "88",
                borderColor:  color_4,
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