function buildGraphFinal() {
    var ctx = $('#fotoChart');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [{
                label: 'Consumo',
                data: consumos_balanco_prd,
                backgroundColor: 'rgba(75, 135, 203, 1)',
                borderColor: 'rgba(75, 135, 203, 1)',
                borderWidth: 1
            }, {
                label: 'Excedente',
                data: excedente_mes_total_graph,
                borderWidth: 1,
                backgroundColor: 'rgba(236, 130, 37, .8)',
                borderColor: 'rgba(236, 130, 37, .8)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                type: 'line'
            }, {
                label: 'UPAC',
                data: producao_upac,
                borderWidth: 1,
                backgroundColor: 'rgba(251, 194, 36, .8)',
                borderColor: 'rgba(251, 194, 36, .8)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                type: 'line'
            }, {
                label: 'UPP',
                data: producao_upp,
                borderWidth: 1,                
                backgroundColor: 'rgba(253, 256, 136, .8)',
                borderColor: 'rgba(253, 256, 136, .8)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                type: 'line'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        //max: maxCustos + 40
                    }
                }]
            }
        }
    });
}

