function buildGraphFinal() {
    var ctx = $('#myChart');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Consumo',
                data: [0, 20, 23, 98, 54],
                backgroundColor: "rgba(255,0,0,1)"
            }, {
                label: 'Line Dataset',
                data: [0, 29, 40, 35, 0],

                // Changes this dataset to become a line
                type: 'line'
            }],
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

