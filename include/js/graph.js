function buildGraphFinal() {
    var ctx = $('#fotoChart');

    if ((maxChart(consumos_balanco_prd) > maxChart(excedente_mes_total_graph)) && (maxChart(consumos_balanco_prd) > maxChart(producao_upp)) && (maxChart(consumos_balanco_prd) > maxChart(producao_upac))) {
        var maxChartValue = maxChart(consumos_balanco_prd);
    } else if ((maxChart(excedente_mes_total_graph) > maxChart(consumos_balanco_prd)) && (maxChart(excedente_mes_total_graph) > maxChart(producao_upp)) && (maxChart(excedente_mes_total_graph) > maxChart(producao_upac))) {
        var maxChartValue = maxChart(excedente_mes_total_graph);
    } else if ((maxChart(producao_upp) > maxChart(consumos_balanco_prd)) && (maxChart(producao_upp) > maxChart(excedente_mes_total_graph)) && (maxChart(producao_upp) > maxChart(producao_upac))) {
        var maxChartValue = maxChart(producao_upp);
    } else {
        var maxChartValue = maxChart(producao_upac);
    }
    
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
                        max: maxChartValue
                    }
                }]
            }
        }
    });
}

function maxChart(array) {
    var max = 0;
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] > max || max == 0) {
                max = array[i];
            }
        }
    }
    max += (max * 0.10);

    return max;
}