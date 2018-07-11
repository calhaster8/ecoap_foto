function faturaSoma() {
    var cicloHVal = $('#cicloHorario').val();
    var faturaVal = $('#facturas').val();

    $('#mensal_consumo').on('change', function() {
        var mensalConsumo1 = $('#mensal_consumo').val();

        $('#totalMensal').html(mensalConsumo1);
    });
}

