var ntensao;
var potencia;
var cTarifario;
var cHorario;

function rebuildSelects() {

    resetSelects();

    ntensao = $("#ntensao").val();
    potencia = $("#potencia").val();

    if (ntensao === 'AT') {
        $("#cicloHorario #TTH").attr("selected", true);
        $("#cicloHorario #TH").attr("disabled", true);
        $("#cicloHorario #BH").attr("disabled", true);
        $("#cicloHorario #S").attr("disabled", true);
    } else if (ntensao === 'MT') {
        $("#cicloHorario #TTH").attr("selected", true);
        $("#cicloHorario #TH").attr("disabled", true);
        $("#cicloHorario #BH").attr("disabled", true);
        $("#cicloHorario #S").attr("disabled", true);
    } else if (ntensao === 'BTE') {
        $("#cicloHorario #TTH").attr("selected", true);
        $("#cicloHorario #TH").attr("disabled", true);
        $("#cicloHorario #BH").attr("disabled", true);
        $("#cicloHorario #S").attr("disabled", true);
    } else {
        //BTN
        $("#cicloTarifario").attr("disabled", true);
        if (potencia < 20) {
            $("#cicloHorario #BH").attr("disabled", false);
            $("#cicloHorario #S").attr("disabled", false);
            $("#cicloHorario #TH").attr("disabled", false);
            $("#cicloHorario #TTH").attr("disabled", true);
        } else {
            $("#cicloHorario #BH").attr("disabled", true);
            $("#cicloHorario #S").attr("disabled", true);
            $("#cicloHorario #TTH").attr("disabled", false);
            $("#cicloHorario #TH").attr("disabled", false);
        }
    }

}

function resetSelects() {

    $("#cicloTarifario").attr("disabled", false);
    $("#cicloHorario #TTH").attr("disabled", false);
    $("#cicloHorario #TH").attr("disabled", false);
    $("#cicloHorario #BH").attr("disabled", false);
    $("#cicloHorario #S").attr("disabled", false);
    $("#cicloHorario #TTH").attr("selected", false);
    $("#cicloHorario #TH").attr("selected", false);
    $("#cicloHorario #BH").attr("selected", false);
    $("#cicloHorario #S").attr("selected", false);

}


function buildFacturas() {

    var consumos = $("#consumos").val();
    var cicloHorario = $("#cicloHorario").val();

    html = "";

    if (consumos === 'UFM') {

        html = '<h3>Insira os dados da factura (Irá ser calculada uma média para o ano)</h3><br>';

        if (cicloHorario === 'S') {
            cHorario = 1;

            html += '<table class="table table-bordered"  id="tbl-factura-mensal">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Consumo</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="mensal">' +
                    '<td>Mensal</td>' +
                    '<td><input type="text" class="form-control" id="consumo_ufm_simples" name="consumo_ufm_simples"  onchange="somaRow()"></td>' +
                    '<td id="somatorio_ufm_simples">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_ufm_simples"></td>' +
                    '<td id="somatorio_anual_ufm_simples_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#factura-mensal").html(html);

            $("#facturas-group").show();
            $("#factura-mensal").show();

            $("#consumos-anuais").hide();
            $("#facturas").hide();

        } else if (cicloHorario === 'BH') {
            cHorario = 2;

            html += '<table class="table table-bordered"  id="tbl-factura-mensal">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Fora de Vazio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="mensal">' +
                    '<td>Mensal</td>' +
                    '<td><input type="text" id="consumo_ufm_bh_foravazio" name="consumo_ufm_bh_foravazio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ufm_bh_vazio" name="consumo_ufm_bh_vazio" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ufm_bh">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_ufm_bh_foravazio"></td>' +
                    '<td id="somatorio_anual_ufm_bh_vazio"></td>' +
                    '<td id="somatorio_anual_ufm_bh_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#factura-mensal").html(html);

            $("#facturas-group").show();
            $("#factura-mensal").show();

            $("#consumos-anuais").hide();
            $("#facturas").hide();

        } else if (cicloHorario === 'TH') {
            cHorario = 3;

            html += '<table class="table table-bordered"  id="tbl-factura-mensal">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Ponta</td>' +
                    '<td>Cheio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="mensal">' +
                    '<td>Mensal</td>' +
                    '<td><input type="text" id="consumo_ufm_th_ponta" name="consumo_ufm_th_ponta" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ufm_th_cheio" name="consumo_ufm_th_cheio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ufm_th_vazio" name="consumo_ufm_th_vazio" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ufm_th">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_ufm_th_ponta"></td>' +
                    '<td id="somatorio_anual_ufm_th_cheio"></td>' +
                    '<td id="somatorio_anual_ufm_th_vazio"></td>' +
                    '<td id="somatorio_anual_ufm_th_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#factura-mensal").html(html);

            $("#facturas-group").show();
            $("#factura-mensal").show();

            $("#consumos-anuais").hide();
            $("#facturas").hide();

        } else if (cicloHorario === 'TTH') {
            cHorario = 4;

            html += '<table class="table table-bordered"  id="factura-mensal">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Ponta</td>' +
                    '<td>Cheio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Super Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="mensal">' +
                    '<td>Mensal</td>' +
                    '<td><input type="text" id="consumo_ufm_tth_ponta" name="consumo_ufm_tth_ponta" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ufm_tth_cheio" name="consumo_ufm_tth_cheio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ufm_tth_vazio" name="consumo_ufm_tth_vazio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ufm_tth_svazio" name="consumo_ufm_tth_svazio" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ufm_tth">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_ufm_tth_ponta"></td>' +
                    '<td id="somatorio_anual_ufm_tth_cheio"></td>' +
                    '<td id="somatorio_anual_ufm_tth_vazio"></td>' +
                    '<td id="somatorio_anual_ufm_tth_svazio"></td>' +
                    '<td id="somatorio_anual_ufm_tth_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#factura-mensal").html(html);

            $("#facturas-group").show();
            $("#factura-mensal").show();

            $("#consumos-anuais").hide();
            $("#facturas").hide();
        } else {

            $("#factura-mensal").html("");
            $("#facturas-group").hide();
            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();
            $("#facturas").hide();
        }

    } else if (consumos === 'CA') {

        html = '<h3>Insira os dados de consumos totais anuais</h3><br>';

        if (cicloHorario === 'S') {
            cHorario = 1;

            html += '<table class="table table-bordered"  id="tbl-consumos-anuais">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Consumo</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td><input type="text" id="consumo_ca_simples" name="consumo_ca_simples" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ca_simples_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#consumos-anuais").html(html);

            $("#facturas-group").show();
            $("#consumos-anuais").show();

            $("#factura-mensal").hide();
            $("#facturas").hide();

        } else if (cicloHorario === 'BH') {
            cHorario = 2;

            html += '<table class="table table-bordered"  id="tbl-consumos-anuais">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Fora de Vazio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td><input type="text" id="consumo_ca_bh_foravazio" name="consumo_ca_bh_foravazio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ca_bh_vazio" name="consumo_ca_bh_vazio" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ca_bh_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#consumos-anuais").html(html);

            $("#facturas-group").show();
            $("#consumos-anuais").show();

            $("#factura-mensal").hide();
            $("#facturas").hide();

        } else if (cicloHorario === 'TH') {
            cHorario = 3;

            html += '<table class="table table-bordered"  id="tbl-consumos-anuais">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Ponta</td>' +
                    '<td>Cheio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td><input type="text" id="consumo_ca_th_ponta" name="consumo_ca_th_ponta" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ca_th_cheio" name="consumo_ca_th_cheio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ca_th_vazio" name="consumo_ca_th_vazio" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ca_th_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#consumos-anuais").html(html);

            $("#facturas-group").show();
            $("#consumos-anuais").show();

            $("#factura-mensal").hide();
            $("#facturas").hide();


        } else if (cicloHorario === 'TTH') {
            cHorario = 4;

            html += '<table class="table table-bordered"  id="tbl-consumos-anuais">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Ponta</td>' +
                    '<td>Cheio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Super Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td><input type="text" id="consumo_ca_tth_ponta" name="consumo_ca_tth_ponta" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ca_tth_cheio" name="consumo_ca_tth_cheio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ca_tth_vazio" name="consumo_ca_tth_vazio" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_ca_tth_svazio" name="consumo_ca_tth_svazio" onchange="somaRow()"></td>' +
                    '<td id="somatorio_ca_tth_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';


            $("#consumos-anuais").html(html);

            $("#facturas-group").show();
            $("#consumos-anuais").show();

            $("#factura-mensal").hide();
            $("#facturas").hide();

        } else {

            $("#consumos-anuais").html("");
            $("#facturas-group").hide();
            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();
            $("#facturas").hide();
        }

    } else if (consumos === 'F') {

        html = '<h3>Insira os dados da factura de cada mês</h3><br>';

        if (cicloHorario === 'S') {
            cHorario = 1;

            html += '<table class="table table-bordered"  id="tbl-facturas">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Consumo</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="jan">' +
                    '<td>Janeiro</td>' +
                    '<td><input type="text" id="consumo_f_simples_jan" name="consumo_f_simples_jan" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_jan">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="fev">' +
                    '<td>Fevereiro</td>' +
                    '<td><input type="text" id="consumo_f_simples_fev" name="consumo_f_simples_fev" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_fev">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="mar">' +
                    '<td>Março</td>' +
                    '<td><input type="text" id="consumo_f_simples_mar" name="consumo_f_simples_mar" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_mar">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="abr">' +
                    '<td>Abril</td>' +
                    '<td><input type="text" id="consumo_f_simples_abr" name="consumo_f_simples_abr" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_abr">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="mai">' +
                    '<td>Maio</td>' +
                    '<td><input type="text" id="consumo_f_simples_mai" name="consumo_f_simples_mai" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_mai">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="jun">' +
                    '<td>Junho</td>' +
                    '<td><input type="text" id="consumo_f_simples_jun" name="consumo_f_simples_jun" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_jun">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="jul">' +
                    '<td>Julho</td>' +
                    '<td><input type="text" id="consumo_f_simples_jul" name="consumo_f_simples_jul" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_jul">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="ago">' +
                    '<td>Agosto</td>' +
                    '<td><input type="text" id="consumo_f_simples_ago" name="consumo_f_simples_ago" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_ago">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="set">' +
                    '<td>Setembro</td>' +
                    '<td><input type="text" id="consumo_f_simples_set" name="consumo_f_simples_set" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_set">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="out">' +
                    '<td>Outubro</td>' +
                    '<td><input type="text" id="consumo_f_simples_out" name="consumo_f_simples_out" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_out">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="nov">' +
                    '<td>Novembro</td>' +
                    '<td><input type="text" id="consumo_f_simples_nov" name="consumo_f_simples_nov" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_nov">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="dez">' +
                    '<td>Dezembro</td>' +
                    '<td><input type="text" id="consumo_f_simples_dez" name="consumo_f_simples_dez" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_simples_dez">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_f_simples"></td>' +
                    '<td id="somatorio_anual_f_simples_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';


            $("#facturas").html(html);

            $("#facturas-group").show();
            $("#facturas").show();

            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();

        } else if (cicloHorario === 'BH') {
            cHorario = 2;

            html += '<table class="table table-bordered"  id="tbl-facturas">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Fora de Vazio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr id="jan">' +
                    '<td>Janeiro</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_jan" name="consumo_f_bh_foravazio_jan" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_jan" name="consumo_f_bh_vazio_jan" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_jan">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="fev">' +
                    '<td>Fevereiro</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_fev" name="consumo_f_bh_foravazio_fev" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_fev" name="consumo_f_bh_vazio_fev" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_fev">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="mar">' +
                    '<td>Março</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_mar" name="consumo_f_bh_foravazio_mar" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_mar" name="consumo_f_bh_vazio_mar" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_mar">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="abr">' +
                    '<td>Abril</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_abr" name="consumo_f_bh_foravazio_abr" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_abr" name="consumo_f_bh_vazio_abr" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_abr">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="mai">' +
                    '<td>Maio</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_mai" name="consumo_f_bh_foravazio_mai" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_mai" name="consumo_f_bh_vazio_mai" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_mai">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="jun">' +
                    '<td>Junho</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_jun" name="consumo_f_bh_foravazio_jun" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_jun" name="consumo_f_bh_vazio_jun" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_jun">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="jul">' +
                    '<td>Julho</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_jul" name="consumo_f_bh_foravazio_jul" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_jul" name="consumo_f_bh_vazio_jul" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_jul">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="ago">' +
                    '<td>Agosto</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_ago" name="consumo_f_bh_foravazio_ago" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_ago" name="consumo_f_bh_vazio_ago" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_ago">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="set">' +
                    '<td>Setembro</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_set" name="consumo_f_bh_foravazio_set" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_set" name="consumo_f_bh_vazio_set" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_set">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="out">' +
                    '<td>Outubro</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_out" name="consumo_f_bh_foravazio_out" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_out" name="consumo_f_bh_vazio_out" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_out">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="nov">' +
                    '<td>Novembro</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_nov" name="consumo_f_bh_foravazio_nov" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_nov" name="consumo_f_bh_vazio_nov" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_nov">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="dez">' +
                    '<td>Dezembro</td>' +
                    '<td><input type="text" id="consumo_f_bh_foravazio_dez" name="consumo_f_bh_foravazio_dez" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_bh_vazio_dez" name="consumo_f_bh_vazio_dez" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_bh_dez">&nbsp;</td>' +
                    '</tr>' +
                    '<tr id="anual">' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_f_bh_foravazio"></td>' +
                    '<td id="somatorio_anual_f_bh_vazio"></td>' +
                    '<td id="somatorio_anual_f_bh_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#facturas").html(html);

            $("#facturas-group").show();
            $("#facturas").show();

            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();


        } else if (cicloHorario === 'TH') {
            cHorario = 3;

            html += '<table class="table table-bordered"  id="tbl-facturas">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Ponta</td>' +
                    '<td>Cheio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr>' +
                    '<td>Janeiro</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_jan" name="consumo_f_th_ponta_jan" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_jan" name="consumo_f_th_cheio_jan" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_jan" name="consumo_f_th_vazio_jan" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_jan">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Fevereiro</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_fev" name="consumo_f_th_ponta_fev" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_fev" name="consumo_f_th_cheio_fev" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_fev" name="consumo_f_th_vazio_fev" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_fev">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Março</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_mar" name="consumo_f_th_ponta_mar" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_mar" name="consumo_f_th_cheio_mar" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_mar" name="consumo_f_th_vazio_mar" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_mar">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Abril</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_abr" name="consumo_f_th_ponta_abr" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_abr" name="consumo_f_th_cheio_abr" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_abr" name="consumo_f_th_vazio_abr" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_abr">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Maio</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_mai" name="consumo_f_th_ponta_mai" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_mai" name="consumo_f_th_cheio_mai" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_mai" name="consumo_f_th_vazio_mai" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_mai">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Junho</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_jun" name="consumo_f_th_ponta_jun" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_jun" name="consumo_f_th_cheio_jun" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_jun" name="consumo_f_th_vazio_jun" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_jun">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Julho</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_jul" name="consumo_f_th_ponta_jul" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_jul" name="consumo_f_th_cheio_jul" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_jul" name="consumo_f_th_vazio_jul" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_jul">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Agosto</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_ago" name="consumo_f_th_ponta_ago" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_ago" name="consumo_f_th_cheio_ago" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_ago" name="consumo_f_th_vazio_ago" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_ago">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Setembro</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_set" name="consumo_f_th_ponta_set" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_set" name="consumo_f_th_cheio_set" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_set" name="consumo_f_th_vazio_set" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_set">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Outubro</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_out" name="consumo_f_th_ponta_out" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_out" name="consumo_f_th_cheio_out" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_out" name="consumo_f_th_vazio_out" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_out">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Novembro</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_nov" name="consumo_f_th_ponta_nov" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_nov" name="consumo_f_th_cheio_nov" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_nov" name="consumo_f_th_vazio_nov" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_nov">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Dezembro</td>' +
                    '<td><input type="text" id="consumo_f_th_ponta_dez" name="consumo_f_th_ponta_dez" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_cheio_dez" name="consumo_f_th_cheio_dez" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_th_vazio_dez" name="consumo_f_th_vazio_dez" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_th_dez">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_f_th_ponta"></td>' +
                    '<td id="somatorio_anual_f_th_cheio"></td>' +
                    '<td id="somatorio_anual_f_th_vazio"></td>' +
                    '<td id="somatorio_anual_f_th_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#facturas").html(html);

            $("#facturas-group").show();
            $("#facturas").show();

            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();

        } else if (cicloHorario === 'TTH') {
            cHorario = 4;

            html += '<table class="table table-bordered"  id="tbl-facturas">' +
                    '<thead>' +
                    '<td>&nbsp;</td>' +
                    '<td>Ponta</td>' +
                    '<td>Cheio</td>' +
                    '<td>Vazio</td>' +
                    '<td>Super Vazio</td>' +
                    '<td>Total</td>' +
                    '</thead>' +
                    '<tbody>' +
                    '<tr>' +
                    '<td>Janeiro</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_jan" name="consumo_f_tth_ponta_jan" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_jan" name="consumo_f_tth_cheio_jan" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_jan" name="consumo_f_tth_vazio_jan" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_jan" name="consumo_f_tth_svazio_jan" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_jan">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Fevereiro</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_fev" name="consumo_f_tth_ponta_fev" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_fev" name="consumo_f_tth_cheio_fev" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_fev" name="consumo_f_tth_vazio_fev" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_fev" name="consumo_f_tth_svazio_fev" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_fev">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Março</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_mar" name="consumo_f_tth_ponta_mar" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_mar" name="consumo_f_tth_cheio_mar" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_mar" name="consumo_f_tth_vazio_mar" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_mar" name="consumo_f_tth_svazio_mar" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_mar">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Abril</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_abr" name="consumo_f_tth_ponta_abr" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_abr" name="consumo_f_tth_cheio_abr" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_abr" name="consumo_f_tth_vazio_abr" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_abr" name="consumo_f_tth_svazio_abr" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_abr">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Maio</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_mai" name="consumo_f_tth_ponta_mai" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_mai" name="consumo_f_tth_cheio_mai" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_mai" name="consumo_f_tth_vazio_mai" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_mai" name="consumo_f_tth_svazio_mai" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_mai">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Junho</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_jun" name="consumo_f_tth_ponta_jun" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_jun" name="consumo_f_tth_cheio_jun" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_jun" name="consumo_f_tth_vazio_jun" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_jun" name="consumo_f_tth_svazio_jun" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_jun">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Julho</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_jul" name="consumo_f_tth_ponta_jul" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_jul" name="consumo_f_tth_cheio_jul" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_jul" name="consumo_f_tth_vazio_jul" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_jul" name="consumo_f_tth_svazio_jul" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_jul">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Agosto</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_ago" name="consumo_f_tth_ponta_ago" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_ago" name="consumo_f_tth_cheio_ago" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_ago" name="consumo_f_tth_vazio_ago" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_ago" name="consumo_f_tth_svazio_ago" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_ago">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Setembro</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_set" name="consumo_f_tth_ponta_set" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_set" name="consumo_f_tth_cheio_set" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_set" name="consumo_f_tth_vazio_set" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_set" name="consumo_f_tth_svazio_set" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_set">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Outubro</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_out" name="consumo_f_tth_ponta_out" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_out" name="consumo_f_tth_cheio_out" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_out" name="consumo_f_tth_vazio_out" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_out" name="consumo_f_tth_svazio_out" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_out">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Novembro</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_nov" name="consumo_f_tth_ponta_nov" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_nov" name="consumo_f_tth_cheio_nov" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_nov" name="consumo_f_tth_vazio_nov" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_nov" name="consumo_f_tth_svazio_nov" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_nov">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Dezembro</td>' +
                    '<td><input type="text" id="consumo_f_tth_ponta_dez" name="consumo_f_tth_ponta_dez" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_cheio_dez" name="consumo_f_tth_cheio_dez" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_vazio_dez" name="consumo_f_tth_vazio_dez" onchange="somaRow()"></td>' +
                    '<td><input type="text" id="consumo_f_tth_svazio_dez" name="consumo_f_tth_svazio_dez" onchange="somaRow()"></td>' +
                    '<td id="somatorio_f_tth_dez">&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Anual</td>' +
                    '<td id="somatorio_anual_f_tth_ponta"></td>' +
                    '<td id="somatorio_anual_f_tth_cheio"></td>' +
                    '<td id="somatorio_anual_f_tth_vazio"></td>' +
                    '<td id="somatorio_anual_f_tth_svazio"></td>' +
                    '<td id="somatorio_anual_f_tth_total">&nbsp;</td>' +
                    '</tr>' +
                    '</tbody></table>';

            $("#facturas").html(html);

            $("#facturas-group").show();
            $("#facturas").show();

            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();
        } else {

            $("#facturas").html("");
            $("#facturas-group").hide();
            $("#factura-mensal").hide();
            $("#consumos-anuais").hide();
            $("#facturas").hide();
        }
    }
}

function buildDistricts() {
    for (var i = 0; i < distritos.length; i++) {
        $("#distrito").append($('<option></option>').val(distritos[i].id).html(distritos[i].nome));
    }
}

function getDistrictValues() {

    var id = new Number($("#distrito").val());

    $("#peArea").attr("value", distritos[id - 1].PEPtInstalada);
    $("#peptInstalada").attr("value", distritos[id - 1].PEArea);
}

function uppPotenciaCalc() {
    //TODO implement 
}

function upacPotenciaCalc() {
    //TODO implement 
}

function upacExcedenteCalc() {
    //TODO implement 
}

function uppResultados() {

}

function upacResultados() {
    //TODO implement 
}

function resumoFinal() {
    //TODO implement 
}


function somaRow() {

    resetAllNonInputFields();
    //soma todas as posições da rowId 
    //		$(rowId).
    var consumos = $("#consumos").val();
    var cicloHorario = $("#cicloHorario").val();

    if (consumos === 'UFM') {

        if (cicloHorario === 'S') {
            //consumo simples
            var consumo_ufm_simples = new Number($("#mensal_consumo").val());
            //valor anuais
            var somatorio_anual_ufm_simples = consumo_ufm_simples * 12;
            var somatorio_anual_ufm_simples_total = somatorio_anual_ufm_simples;

            $("#totalMensal").html(consumo_ufm_simples);
            $("#anual_consumo").html(somatorio_anual_ufm_simples);
            $("#total_anual").html(somatorio_anual_ufm_simples_total);

        } else if (cicloHorario === 'BH') {
            //consumos
            var consumo_ufm_bh_foravazio = new Number($("#consumo_ufm_bh_foravazio").val());
            var consumo_ufm_bh_vazio = new Number($("#consumo_ufm_bh_vazio").val());
            var somatorio_ufm_bh = new Number(consumo_ufm_bh_foravazio + consumo_ufm_bh_vazio);
            //anuais
            var somatorio_anual_ufm_bh_foravazio = consumo_ufm_bh_foravazio * 12;
            var somatorio_anual_ufm_bh_vazio = consumo_ufm_bh_vazio * 12;
            var somatorio_anual_ufm_bh_total = somatorio_anual_ufm_bh_foravazio + somatorio_anual_ufm_bh_vazio;

            $("#somatorio_anual_ufm_bh_foravazio").html(somatorio_anual_ufm_bh_foravazio);
            $("#somatorio_anual_ufm_bh_vazio").html(somatorio_anual_ufm_bh_vazio);
            $("#somatorio_ufm_bh").html(somatorio_ufm_bh);
            $("#somatorio_anual_ufm_bh_total").html(somatorio_anual_ufm_bh_total);

        } else if (cicloHorario === 'TH') {
            //consumos 
            var consumo_ufm_th_ponta = new Number($("#consumo_ufm_th_ponta").val());
            var consumo_ufm_th_cheio = new Number($("#consumo_ufm_th_cheio").val());
            var consumo_ufm_th_vazio = new Number($("#consumo_ufm_th_vazio").val());

            var somatorio_ufm_th = consumo_ufm_th_ponta + consumo_ufm_th_cheio + consumo_ufm_th_vazio;
            //anuais
            var somatorio_anual_ufm_th_ponta = consumo_ufm_th_ponta * 12;
            var somatorio_anual_ufm_th_cheio = consumo_ufm_th_cheio * 12;
            var somatorio_anual_ufm_th_vazio = consumo_ufm_th_vazio * 12;
            var somatorio_anual_ufm_th_total = somatorio_anual_ufm_th_ponta + somatorio_anual_ufm_th_cheio + somatorio_anual_ufm_th_vazio;

            $("#somatorio_ufm_th").html(somatorio_ufm_th);
            $("#somatorio_anual_ufm_th_ponta").html(somatorio_anual_ufm_th_ponta);
            $("#somatorio_anual_ufm_th_cheio").html(somatorio_anual_ufm_th_cheio);
            $("#somatorio_anual_ufm_th_vazio").html(somatorio_anual_ufm_th_vazio);
            $("#somatorio_anual_ufm_th_total").html(somatorio_anual_ufm_th_total);

        } else if (cicloHorario === 'TTH') {

            //consumos 
            var consumo_ufm_tth_ponta = new Number($("#consumo_ufm_tth_ponta").val());
            var consumo_ufm_tth_cheio = new Number($("#consumo_ufm_tth_cheio").val());
            var consumo_ufm_tth_vazio = new Number($("#consumo_ufm_tth_vazio").val());
            var consumo_ufm_tth_svazio = new Number($("#consumo_ufm_tth_svazio").val());

            var somatorio_ufm_tth = consumo_ufm_tth_ponta + consumo_ufm_tth_cheio + consumo_ufm_tth_vazio + consumo_ufm_tth_svazio;
            //anuais
            var somatorio_anual_ufm_tth_ponta = consumo_ufm_tth_ponta * 12;
            var somatorio_anual_ufm_tth_cheio = consumo_ufm_tth_cheio * 12;
            var somatorio_anual_ufm_tth_vazio = consumo_ufm_tth_vazio * 12;
            var somatorio_anual_ufm_tth_svazio = consumo_ufm_tth_svazio * 12;
            var somatorio_anual_ufm_tth_total = somatorio_anual_ufm_tth_ponta + somatorio_anual_ufm_tth_cheio + somatorio_anual_ufm_tth_vazio + somatorio_anual_ufm_tth_svazio;

            $("#somatorio_ufm_tth").html(somatorio_ufm_tth);
            $("#somatorio_anual_ufm_tth_ponta").html(somatorio_anual_ufm_tth_ponta);
            $("#somatorio_anual_ufm_tth_cheio").html(somatorio_anual_ufm_tth_cheio);
            $("#somatorio_anual_ufm_tth_vazio").html(somatorio_anual_ufm_tth_vazio);
            $("#somatorio_anual_ufm_tth_svazio").html(somatorio_anual_ufm_tth_svazio);
            $("#somatorio_anual_ufm_tth_total").html(somatorio_anual_ufm_tth_total);
        }

    } else if (consumos === 'CA') {

        if (cicloHorario === 'S') {
            //consumo simples
            var consumo_ca_simples = new Number($("#consumo_ca_simples").val());
            //valor anuais
            var somatorio_ca_simples_total = new Number(consumo_ca_simples);

            $("#somatorio_ca_simples_total").html(somatorio_ca_simples_total);

        } else if (cicloHorario === 'BH') {
            //consumo simples
            var consumo_ca_bh_foravazio = new Number($("#consumo_ca_bh_foravazio").val());
            var consumo_ca_bh_vazio = new Number($("#consumo_ca_bh_vazio").val());
            //valor anuais
            var somatorio_ca_bh_total = consumo_ca_bh_foravazio + consumo_ca_bh_vazio;

            $("#somatorio_ca_bh_total").html(somatorio_ca_bh_total);

        } else if (cicloHorario === 'TH') {
            //consumo simples
            var consumo_ca_th_ponta = new Number($("#consumo_ca_th_ponta").val());
            var consumo_ca_th_cheio = new Number($("#consumo_ca_th_cheio").val());
            var consumo_ca_th_vazio = new Number($("#consumo_ca_th_vazio").val());
            //valor anuais
            var somatorio_ca_th_total = consumo_ca_th_ponta + consumo_ca_th_cheio + consumo_ca_th_vazio;

            $("#somatorio_ca_th_total").html(somatorio_ca_th_total);

        } else if (cicloHorario === 'TTH') {

            //consumo simples
            var consumo_ca_tth_ponta = new Number($("#consumo_ca_tth_ponta").val());
            var consumo_ca_tth_cheio = new Number($("#consumo_ca_tth_cheio").val());
            var consumo_ca_tth_vazio = new Number($("#consumo_ca_tth_vazio").val());
            var consumo_ca_tth_svazio = new Number($("#consumo_ca_tth_svazio").val());
            //valor anuais
            var somatorio_ca_tth_total = consumo_ca_tth_ponta + consumo_ca_tth_cheio + consumo_ca_tth_vazio + consumo_ca_tth_svazio;

            $("#somatorio_ca_tth_total").html(somatorio_ca_tth_total);

        }

    } else if (consumos === 'F') {

        if (cicloHorario === 'S') {
            var consumo_f_simples_jan = new Number($("#consumo_f_simples_jan").val());
            var consumo_f_simples_fev = new Number($("#consumo_f_simples_fev").val());
            var consumo_f_simples_mar = new Number($("#consumo_f_simples_mar").val());
            var consumo_f_simples_abr = new Number($("#consumo_f_simples_abr").val());
            var consumo_f_simples_mai = new Number($("#consumo_f_simples_mai").val());
            var consumo_f_simples_jun = new Number($("#consumo_f_simples_jun").val());
            var consumo_f_simples_jul = new Number($("#consumo_f_simples_jul").val());
            var consumo_f_simples_ago = new Number($("#consumo_f_simples_ago").val());
            var consumo_f_simples_set = new Number($("#consumo_f_simples_set").val());
            var consumo_f_simples_out = new Number($("#consumo_f_simples_out").val());
            var consumo_f_simples_nov = new Number($("#consumo_f_simples_nov").val());
            var consumo_f_simples_dez = new Number($("#consumo_f_simples_dez").val());


            var somatorio_anual_f_simples = consumo_f_simples_jan + consumo_f_simples_fev + consumo_f_simples_mar + consumo_f_simples_abr + consumo_f_simples_mai + consumo_f_simples_jun + consumo_f_simples_jul + consumo_f_simples_ago + consumo_f_simples_set + consumo_f_simples_out + consumo_f_simples_nov + consumo_f_simples_dez;
            var somatorio_anual_f_simples_total = somatorio_anual_f_simples;

            $("#somatorio_f_simples_jan").html(consumo_f_simples_jan);
            $("#somatorio_f_simples_fev").html(consumo_f_simples_fev);
            $("#somatorio_f_simples_mar").html(consumo_f_simples_mar);
            $("#somatorio_f_simples_abr").html(consumo_f_simples_abr);
            $("#somatorio_f_simples_mai").html(consumo_f_simples_mai);
            $("#somatorio_f_simples_jun").html(consumo_f_simples_jun);
            $("#somatorio_f_simples_jul").html(consumo_f_simples_jul);
            $("#somatorio_f_simples_ago").html(consumo_f_simples_ago);
            $("#somatorio_f_simples_set").html(consumo_f_simples_set);
            $("#somatorio_f_simples_out").html(consumo_f_simples_out);
            $("#somatorio_f_simples_nov").html(consumo_f_simples_nov);
            $("#somatorio_f_simples_dez").html(consumo_f_simples_dez);

            $("#somatorio_anual_f_simples").html(somatorio_anual_f_simples);
            $("#somatorio_anual_f_simples_total").html(somatorio_anual_f_simples_total);

        } else if (cicloHorario === 'BH') {

            var consumo_f_bh_foravazio_jan = new Number($("#consumo_f_bh_foravazio_jan").val());
            var consumo_f_bh_foravazio_fev = new Number($("#consumo_f_bh_foravazio_fev").val());
            var consumo_f_bh_foravazio_mar = new Number($("#consumo_f_bh_foravazio_mar").val());
            var consumo_f_bh_foravazio_abr = new Number($("#consumo_f_bh_foravazio_abr").val());
            var consumo_f_bh_foravazio_mai = new Number($("#consumo_f_bh_foravazio_mai").val());
            var consumo_f_bh_foravazio_jun = new Number($("#consumo_f_bh_foravazio_jun").val());
            var consumo_f_bh_foravazio_jul = new Number($("#consumo_f_bh_foravazio_jul").val());
            var consumo_f_bh_foravazio_ago = new Number($("#consumo_f_bh_foravazio_ago").val());
            var consumo_f_bh_foravazio_set = new Number($("#consumo_f_bh_foravazio_set").val());
            var consumo_f_bh_foravazio_out = new Number($("#consumo_f_bh_foravazio_out").val());
            var consumo_f_bh_foravazio_nov = new Number($("#consumo_f_bh_foravazio_nov").val());
            var consumo_f_bh_foravazio_dez = new Number($("#consumo_f_bh_foravazio_dez").val());

            var consumo_f_bh_vazio_jan = new Number($("#consumo_f_bh_vazio_jan").val());
            var consumo_f_bh_vazio_fev = new Number($("#consumo_f_bh_vazio_fev").val());
            var consumo_f_bh_vazio_mar = new Number($("#consumo_f_bh_vazio_mar").val());
            var consumo_f_bh_vazio_abr = new Number($("#consumo_f_bh_vazio_abr").val());
            var consumo_f_bh_vazio_mai = new Number($("#consumo_f_bh_vazio_mai").val());
            var consumo_f_bh_vazio_jun = new Number($("#consumo_f_bh_vazio_jun").val());
            var consumo_f_bh_vazio_jul = new Number($("#consumo_f_bh_vazio_jul").val());
            var consumo_f_bh_vazio_ago = new Number($("#consumo_f_bh_vazio_ago").val());
            var consumo_f_bh_vazio_set = new Number($("#consumo_f_bh_vazio_set").val());
            var consumo_f_bh_vazio_out = new Number($("#consumo_f_bh_vazio_out").val());
            var consumo_f_bh_vazio_nov = new Number($("#consumo_f_bh_vazio_nov").val());
            var consumo_f_bh_vazio_dez = new Number($("#consumo_f_bh_vazio_dez").val());

            var somatorio_f_bh_jan = consumo_f_bh_foravazio_jan + consumo_f_bh_vazio_jan;
            var somatorio_f_bh_fev = consumo_f_bh_foravazio_fev + consumo_f_bh_vazio_fev;
            var somatorio_f_bh_mar = consumo_f_bh_foravazio_mar + consumo_f_bh_vazio_mar;
            var somatorio_f_bh_abr = consumo_f_bh_foravazio_abr + consumo_f_bh_vazio_abr;
            var somatorio_f_bh_mai = consumo_f_bh_foravazio_mai + consumo_f_bh_vazio_mai;
            var somatorio_f_bh_jun = consumo_f_bh_foravazio_jun + consumo_f_bh_vazio_jun;
            var somatorio_f_bh_jul = consumo_f_bh_foravazio_jul + consumo_f_bh_vazio_jul;
            var somatorio_f_bh_ago = consumo_f_bh_foravazio_ago + consumo_f_bh_vazio_ago;
            var somatorio_f_bh_set = consumo_f_bh_foravazio_set + consumo_f_bh_vazio_set;
            var somatorio_f_bh_out = consumo_f_bh_foravazio_out + consumo_f_bh_vazio_out;
            var somatorio_f_bh_nov = consumo_f_bh_foravazio_nov + consumo_f_bh_vazio_nov;
            var somatorio_f_bh_dez = consumo_f_bh_foravazio_dez + consumo_f_bh_vazio_dez;

            var somatorio_anual_f_bh_foravazio = consumo_f_bh_foravazio_jan + consumo_f_bh_foravazio_fev + consumo_f_bh_foravazio_mar + consumo_f_bh_foravazio_abr + consumo_f_bh_foravazio_mai + consumo_f_bh_foravazio_jun + consumo_f_bh_foravazio_jul + consumo_f_bh_foravazio_ago + consumo_f_bh_foravazio_set + consumo_f_bh_foravazio_out + consumo_f_bh_foravazio_nov + consumo_f_bh_foravazio_dez;
            var somatorio_anual_f_bh_vazio = consumo_f_bh_vazio_jan + consumo_f_bh_vazio_fev + consumo_f_bh_vazio_mar + consumo_f_bh_vazio_abr + consumo_f_bh_vazio_mai + consumo_f_bh_vazio_jun + consumo_f_bh_vazio_jul + consumo_f_bh_vazio_ago + consumo_f_bh_vazio_set + consumo_f_bh_vazio_out + consumo_f_bh_vazio_nov + consumo_f_bh_vazio_dez;
            var somatorio_anual_f_bh_total = somatorio_anual_f_bh_foravazio + somatorio_anual_f_bh_vazio;

            $("#somatorio_f_bh_jan").html(somatorio_f_bh_jan);
            $("#somatorio_f_bh_fev").html(somatorio_f_bh_fev);
            $("#somatorio_f_bh_mar").html(somatorio_f_bh_mar);
            $("#somatorio_f_bh_abr").html(somatorio_f_bh_abr);
            $("#somatorio_f_bh_mai").html(somatorio_f_bh_mai);
            $("#somatorio_f_bh_jun").html(somatorio_f_bh_jun);
            $("#somatorio_f_bh_jul").html(somatorio_f_bh_jul);
            $("#somatorio_f_bh_ago").html(somatorio_f_bh_ago);
            $("#somatorio_f_bh_set").html(somatorio_f_bh_set);
            $("#somatorio_f_bh_out").html(somatorio_f_bh_out);
            $("#somatorio_f_bh_nov").html(somatorio_f_bh_nov);
            $("#somatorio_f_bh_dez").html(somatorio_f_bh_dez);

            $("#somatorio_anual_f_bh_foravazio").html(somatorio_anual_f_bh_foravazio);
            $("#somatorio_anual_f_bh_vazio").html(somatorio_anual_f_bh_vazio);
            $("#somatorio_anual_f_bh_total").html(somatorio_anual_f_bh_total);


        } else if (cicloHorario === 'TH') {

            var consumo_f_th_ponta_jan = new Number($("#consumo_f_th_ponta_jan").val());
            var consumo_f_th_ponta_fev = new Number($("#consumo_f_th_ponta_fev").val());
            var consumo_f_th_ponta_mar = new Number($("#consumo_f_th_ponta_mar").val());
            var consumo_f_th_ponta_abr = new Number($("#consumo_f_th_ponta_abr").val());
            var consumo_f_th_ponta_mai = new Number($("#consumo_f_th_ponta_mai").val());
            var consumo_f_th_ponta_jun = new Number($("#consumo_f_th_ponta_jun").val());
            var consumo_f_th_ponta_jul = new Number($("#consumo_f_th_ponta_jul").val());
            var consumo_f_th_ponta_ago = new Number($("#consumo_f_th_ponta_ago").val());
            var consumo_f_th_ponta_set = new Number($("#consumo_f_th_ponta_set").val());
            var consumo_f_th_ponta_out = new Number($("#consumo_f_th_ponta_out").val());
            var consumo_f_th_ponta_nov = new Number($("#consumo_f_th_ponta_nov").val());
            var consumo_f_th_ponta_dez = new Number($("#consumo_f_th_ponta_dez").val());

            var consumo_f_th_cheio_jan = new Number($("#consumo_f_th_cheio_jan").val());
            var consumo_f_th_cheio_fev = new Number($("#consumo_f_th_cheio_fev").val());
            var consumo_f_th_cheio_mar = new Number($("#consumo_f_th_cheio_mar").val());
            var consumo_f_th_cheio_abr = new Number($("#consumo_f_th_cheio_abr").val());
            var consumo_f_th_cheio_mai = new Number($("#consumo_f_th_cheio_mai").val());
            var consumo_f_th_cheio_jun = new Number($("#consumo_f_th_cheio_jun").val());
            var consumo_f_th_cheio_jul = new Number($("#consumo_f_th_cheio_jul").val());
            var consumo_f_th_cheio_ago = new Number($("#consumo_f_th_cheio_ago").val());
            var consumo_f_th_cheio_set = new Number($("#consumo_f_th_cheio_set").val());
            var consumo_f_th_cheio_out = new Number($("#consumo_f_th_cheio_out").val());
            var consumo_f_th_cheio_nov = new Number($("#consumo_f_th_cheio_nov").val());
            var consumo_f_th_cheio_dez = new Number($("#consumo_f_th_cheio_dez").val());

            var consumo_f_th_vazio_jan = new Number($("#consumo_f_th_vazio_jan").val());
            var consumo_f_th_vazio_fev = new Number($("#consumo_f_th_vazio_fev").val());
            var consumo_f_th_vazio_mar = new Number($("#consumo_f_th_vazio_mar").val());
            var consumo_f_th_vazio_abr = new Number($("#consumo_f_th_vazio_abr").val());
            var consumo_f_th_vazio_mai = new Number($("#consumo_f_th_vazio_mai").val());
            var consumo_f_th_vazio_jun = new Number($("#consumo_f_th_vazio_jun").val());
            var consumo_f_th_vazio_jul = new Number($("#consumo_f_th_vazio_jul").val());
            var consumo_f_th_vazio_ago = new Number($("#consumo_f_th_vazio_ago").val());
            var consumo_f_th_vazio_set = new Number($("#consumo_f_th_vazio_set").val());
            var consumo_f_th_vazio_out = new Number($("#consumo_f_th_vazio_out").val());
            var consumo_f_th_vazio_nov = new Number($("#consumo_f_th_vazio_nov").val());
            var consumo_f_th_vazio_dez = new Number($("#consumo_f_th_vazio_dez").val());

            var somatorio_f_th_jan = consumo_f_th_ponta_jan + consumo_f_th_cheio_jan + consumo_f_th_vazio_jan;
            var somatorio_f_th_fev = consumo_f_th_ponta_fev + consumo_f_th_cheio_fev + consumo_f_th_vazio_fev;
            var somatorio_f_th_mar = consumo_f_th_ponta_mar + consumo_f_th_cheio_mar + consumo_f_th_vazio_mar;
            var somatorio_f_th_abr = consumo_f_th_ponta_abr + consumo_f_th_cheio_abr + consumo_f_th_vazio_abr;
            var somatorio_f_th_mai = consumo_f_th_ponta_mai + consumo_f_th_cheio_mai + consumo_f_th_vazio_mai;
            var somatorio_f_th_jun = consumo_f_th_ponta_jun + consumo_f_th_cheio_jun + consumo_f_th_vazio_jun;
            var somatorio_f_th_jul = consumo_f_th_ponta_jul + consumo_f_th_cheio_jul + consumo_f_th_vazio_jul;
            var somatorio_f_th_ago = consumo_f_th_ponta_ago + consumo_f_th_cheio_ago + consumo_f_th_vazio_ago;
            var somatorio_f_th_set = consumo_f_th_ponta_set + consumo_f_th_cheio_set + consumo_f_th_vazio_set;
            var somatorio_f_th_out = consumo_f_th_ponta_out + consumo_f_th_cheio_out + consumo_f_th_vazio_out;
            var somatorio_f_th_nov = consumo_f_th_ponta_nov + consumo_f_th_cheio_nov + consumo_f_th_vazio_nov;
            var somatorio_f_th_dez = consumo_f_th_ponta_dez + consumo_f_th_cheio_dez + consumo_f_th_vazio_dez;

            var somatorio_anual_f_th_ponta = consumo_f_th_ponta_jan + consumo_f_th_ponta_fev + consumo_f_th_ponta_mar + consumo_f_th_ponta_abr + consumo_f_th_ponta_mai + consumo_f_th_ponta_jun + consumo_f_th_ponta_jul + consumo_f_th_ponta_ago + consumo_f_th_ponta_set + consumo_f_th_ponta_out + consumo_f_th_ponta_nov + consumo_f_th_ponta_dez;
            var somatorio_anual_f_th_cheio = consumo_f_th_cheio_jan + consumo_f_th_cheio_fev + consumo_f_th_cheio_mar + consumo_f_th_cheio_abr + consumo_f_th_cheio_mai + consumo_f_th_cheio_jun + consumo_f_th_cheio_jul + consumo_f_th_cheio_ago + consumo_f_th_cheio_set + consumo_f_th_cheio_out + consumo_f_th_cheio_nov + consumo_f_th_cheio_dez;
            var somatorio_anual_f_th_vazio = consumo_f_th_vazio_jan + consumo_f_th_vazio_fev + consumo_f_th_vazio_mar + consumo_f_th_vazio_abr + consumo_f_th_vazio_mai + consumo_f_th_vazio_jun + consumo_f_th_vazio_jul + consumo_f_th_vazio_ago + consumo_f_th_vazio_set + consumo_f_th_vazio_out + consumo_f_th_vazio_nov + consumo_f_th_vazio_dez;

            var somatorio_anual_f_th_total = somatorio_anual_f_th_ponta + somatorio_anual_f_th_cheio + somatorio_anual_f_th_vazio;

            $("#somatorio_f_th_jan").html(somatorio_f_th_jan);
            $("#somatorio_f_th_fev").html(somatorio_f_th_fev);
            $("#somatorio_f_th_mar").html(somatorio_f_th_mar);
            $("#somatorio_f_th_abr").html(somatorio_f_th_abr);
            $("#somatorio_f_th_mai").html(somatorio_f_th_mai);
            $("#somatorio_f_th_jun").html(somatorio_f_th_jun);
            $("#somatorio_f_th_jul").html(somatorio_f_th_jul);
            $("#somatorio_f_th_ago").html(somatorio_f_th_ago);
            $("#somatorio_f_th_set").html(somatorio_f_th_set);
            $("#somatorio_f_th_out").html(somatorio_f_th_out);
            $("#somatorio_f_th_nov").html(somatorio_f_th_nov);
            $("#somatorio_f_th_dez").html(somatorio_f_th_dez);

            $("#somatorio_anual_f_th_ponta").html(somatorio_anual_f_th_ponta);
            $("#somatorio_anual_f_th_cheio").html(somatorio_anual_f_th_cheio);
            $("#somatorio_anual_f_th_vazio").html(somatorio_anual_f_th_vazio);
            $("#somatorio_anual_f_th_total").html(somatorio_anual_f_th_total);

        } else if (cicloHorario === 'TTH') {

            var consumo_f_tth_ponta_jan = new Number($("#consumo_f_tth_ponta_jan").val());
            var consumo_f_tth_ponta_fev = new Number($("#consumo_f_tth_ponta_fev").val());
            var consumo_f_tth_ponta_mar = new Number($("#consumo_f_tth_ponta_mar").val());
            var consumo_f_tth_ponta_abr = new Number($("#consumo_f_tth_ponta_abr").val());
            var consumo_f_tth_ponta_mai = new Number($("#consumo_f_tth_ponta_mai").val());
            var consumo_f_tth_ponta_jun = new Number($("#consumo_f_tth_ponta_jun").val());
            var consumo_f_tth_ponta_jul = new Number($("#consumo_f_tth_ponta_jul").val());
            var consumo_f_tth_ponta_ago = new Number($("#consumo_f_tth_ponta_ago").val());
            var consumo_f_tth_ponta_set = new Number($("#consumo_f_tth_ponta_set").val());
            var consumo_f_tth_ponta_out = new Number($("#consumo_f_tth_ponta_out").val());
            var consumo_f_tth_ponta_nov = new Number($("#consumo_f_tth_ponta_nov").val());
            var consumo_f_tth_ponta_dez = new Number($("#consumo_f_tth_ponta_dez").val());

            var consumo_f_tth_cheio_jan = new Number($("#consumo_f_tth_cheio_jan").val());
            var consumo_f_tth_cheio_fev = new Number($("#consumo_f_tth_cheio_fev").val());
            var consumo_f_tth_cheio_mar = new Number($("#consumo_f_tth_cheio_mar").val());
            var consumo_f_tth_cheio_abr = new Number($("#consumo_f_tth_cheio_abr").val());
            var consumo_f_tth_cheio_mai = new Number($("#consumo_f_tth_cheio_mai").val());
            var consumo_f_tth_cheio_jun = new Number($("#consumo_f_tth_cheio_jun").val());
            var consumo_f_tth_cheio_jul = new Number($("#consumo_f_tth_cheio_jul").val());
            var consumo_f_tth_cheio_ago = new Number($("#consumo_f_tth_cheio_ago").val());
            var consumo_f_tth_cheio_set = new Number($("#consumo_f_tth_cheio_set").val());
            var consumo_f_tth_cheio_out = new Number($("#consumo_f_tth_cheio_out").val());
            var consumo_f_tth_cheio_nov = new Number($("#consumo_f_tth_cheio_nov").val());
            var consumo_f_tth_cheio_dez = new Number($("#consumo_f_tth_cheio_dez").val());

            var consumo_f_tth_vazio_jan = new Number($("#consumo_f_tth_vazio_jan").val());
            var consumo_f_tth_vazio_fev = new Number($("#consumo_f_tth_vazio_fev").val());
            var consumo_f_tth_vazio_mar = new Number($("#consumo_f_tth_vazio_mar").val());
            var consumo_f_tth_vazio_abr = new Number($("#consumo_f_tth_vazio_abr").val());
            var consumo_f_tth_vazio_mai = new Number($("#consumo_f_tth_vazio_mai").val());
            var consumo_f_tth_vazio_jun = new Number($("#consumo_f_tth_vazio_jun").val());
            var consumo_f_tth_vazio_jul = new Number($("#consumo_f_tth_vazio_jul").val());
            var consumo_f_tth_vazio_ago = new Number($("#consumo_f_tth_vazio_ago").val());
            var consumo_f_tth_vazio_set = new Number($("#consumo_f_tth_vazio_set").val());
            var consumo_f_tth_vazio_out = new Number($("#consumo_f_tth_vazio_out").val());
            var consumo_f_tth_vazio_nov = new Number($("#consumo_f_tth_vazio_nov").val());
            var consumo_f_tth_vazio_dez = new Number($("#consumo_f_tth_vazio_dez").val());

            var consumo_f_tth_svazio_jan = new Number($("#consumo_f_tth_svazio_jan").val());
            var consumo_f_tth_svazio_fev = new Number($("#consumo_f_tth_svazio_fev").val());
            var consumo_f_tth_svazio_mar = new Number($("#consumo_f_tth_svazio_mar").val());
            var consumo_f_tth_svazio_abr = new Number($("#consumo_f_tth_svazio_abr").val());
            var consumo_f_tth_svazio_mai = new Number($("#consumo_f_tth_svazio_mai").val());
            var consumo_f_tth_svazio_jun = new Number($("#consumo_f_tth_svazio_jun").val());
            var consumo_f_tth_svazio_jul = new Number($("#consumo_f_tth_svazio_jul").val());
            var consumo_f_tth_svazio_ago = new Number($("#consumo_f_tth_svazio_ago").val());
            var consumo_f_tth_svazio_set = new Number($("#consumo_f_tth_svazio_set").val());
            var consumo_f_tth_svazio_out = new Number($("#consumo_f_tth_svazio_out").val());
            var consumo_f_tth_svazio_nov = new Number($("#consumo_f_tth_svazio_nov").val());
            var consumo_f_tth_svazio_dez = new Number($("#consumo_f_tth_svazio_dez").val());

            var somatorio_f_tth_jan = consumo_f_tth_ponta_jan + consumo_f_tth_cheio_jan + consumo_f_tth_vazio_jan + consumo_f_tth_svazio_jan;
            var somatorio_f_tth_fev = consumo_f_tth_ponta_fev + consumo_f_tth_cheio_fev + consumo_f_tth_vazio_fev + consumo_f_tth_svazio_fev;
            var somatorio_f_tth_mar = consumo_f_tth_ponta_mar + consumo_f_tth_cheio_mar + consumo_f_tth_vazio_mar + consumo_f_tth_svazio_mar;
            var somatorio_f_tth_abr = consumo_f_tth_ponta_abr + consumo_f_tth_cheio_abr + consumo_f_tth_vazio_abr + consumo_f_tth_svazio_abr;
            var somatorio_f_tth_mai = consumo_f_tth_ponta_mai + consumo_f_tth_cheio_mai + consumo_f_tth_vazio_mai + consumo_f_tth_svazio_mai;
            var somatorio_f_tth_jun = consumo_f_tth_ponta_jun + consumo_f_tth_cheio_jun + consumo_f_tth_vazio_jun + consumo_f_tth_svazio_jun;
            var somatorio_f_tth_jul = consumo_f_tth_ponta_jul + consumo_f_tth_cheio_jul + consumo_f_tth_vazio_jul + consumo_f_tth_svazio_jul;
            var somatorio_f_tth_ago = consumo_f_tth_ponta_ago + consumo_f_tth_cheio_ago + consumo_f_tth_vazio_ago + consumo_f_tth_svazio_ago;
            var somatorio_f_tth_set = consumo_f_tth_ponta_set + consumo_f_tth_cheio_set + consumo_f_tth_vazio_set + consumo_f_tth_svazio_set;
            var somatorio_f_tth_out = consumo_f_tth_ponta_out + consumo_f_tth_cheio_out + consumo_f_tth_vazio_out + consumo_f_tth_svazio_out;
            var somatorio_f_tth_nov = consumo_f_tth_ponta_nov + consumo_f_tth_cheio_nov + consumo_f_tth_vazio_nov + consumo_f_tth_svazio_nov;
            var somatorio_f_tth_dez = consumo_f_tth_ponta_dez + consumo_f_tth_cheio_dez + consumo_f_tth_vazio_dez + consumo_f_tth_svazio_dez;

            var somatorio_anual_f_tth_ponta = consumo_f_tth_ponta_jan + consumo_f_tth_ponta_fev + consumo_f_tth_ponta_mar + consumo_f_tth_ponta_abr + consumo_f_tth_ponta_mai + consumo_f_tth_ponta_jun + consumo_f_tth_ponta_jul + consumo_f_tth_ponta_ago + consumo_f_tth_ponta_set + consumo_f_tth_ponta_out + consumo_f_tth_ponta_nov + consumo_f_tth_ponta_dez;
            var somatorio_anual_f_tth_cheio = consumo_f_tth_cheio_jan + consumo_f_tth_cheio_fev + consumo_f_tth_cheio_mar + consumo_f_tth_cheio_abr + consumo_f_tth_cheio_mai + consumo_f_tth_cheio_jun + consumo_f_tth_cheio_jul + consumo_f_tth_cheio_ago + consumo_f_tth_cheio_set + consumo_f_tth_cheio_out + consumo_f_tth_cheio_nov + consumo_f_tth_cheio_dez;
            var somatorio_anual_f_tth_vazio = consumo_f_tth_vazio_jan + consumo_f_tth_vazio_fev + consumo_f_tth_vazio_mar + consumo_f_tth_vazio_abr + consumo_f_tth_vazio_mai + consumo_f_tth_vazio_jun + consumo_f_tth_vazio_jul + consumo_f_tth_vazio_ago + consumo_f_tth_vazio_set + consumo_f_tth_vazio_out + consumo_f_tth_vazio_nov + consumo_f_tth_vazio_dez;
            var somatorio_anual_f_tth_svazio = consumo_f_tth_svazio_jan + consumo_f_tth_svazio_fev + consumo_f_tth_svazio_mar + consumo_f_tth_svazio_abr + consumo_f_tth_svazio_mai + consumo_f_tth_svazio_jun + consumo_f_tth_svazio_jul + consumo_f_tth_svazio_ago + consumo_f_tth_svazio_set + consumo_f_tth_svazio_out + consumo_f_tth_svazio_nov + consumo_f_tth_svazio_dez;

            var somatorio_anual_f_tth_total = somatorio_anual_f_tth_ponta + somatorio_anual_f_tth_cheio + somatorio_anual_f_tth_vazio + somatorio_anual_f_tth_svazio;

            $("#somatorio_f_tth_jan").html(somatorio_f_tth_jan);
            $("#somatorio_f_tth_fev").html(somatorio_f_tth_fev);
            $("#somatorio_f_tth_mar").html(somatorio_f_tth_mar);
            $("#somatorio_f_tth_abr").html(somatorio_f_tth_abr);
            $("#somatorio_f_tth_mai").html(somatorio_f_tth_mai);
            $("#somatorio_f_tth_jun").html(somatorio_f_tth_jun);
            $("#somatorio_f_tth_jul").html(somatorio_f_tth_jul);
            $("#somatorio_f_tth_ago").html(somatorio_f_tth_ago);
            $("#somatorio_f_tth_set").html(somatorio_f_tth_set);
            $("#somatorio_f_tth_out").html(somatorio_f_tth_out);
            $("#somatorio_f_tth_nov").html(somatorio_f_tth_nov);
            $("#somatorio_f_tth_dez").html(somatorio_f_tth_dez);

            $("#somatorio_anual_f_tth_ponta").html(somatorio_anual_f_tth_ponta);
            $("#somatorio_anual_f_tth_cheio").html(somatorio_anual_f_tth_cheio);
            $("#somatorio_anual_f_tth_vazio").html(somatorio_anual_f_tth_vazio);
            $("#somatorio_anual_f_tth_svazio").html(somatorio_anual_f_tth_svazio);
            $("#somatorio_anual_f_tth_total").html(somatorio_anual_f_tth_total);

        }
    }
}

function resetAllNonInputFields() {
    //reset all fields

    //UFM_S
    $("#somatorio_ufm_csimples").html("");
    $("#anual_consumo").html("");
    $("#total_anual").html("");
    //UFM_BH
    $("#somatorio_anual_ufm_bh_foravazio").html("");
    $("#somatorio_anual_ufm_bh_vazio").html("");
    $("#somatorio_ufm_bh").html("");
    $("#somatorio_anual_ufm_bh_total").html("");
    //UFM_TH
    $("#somatorio_ufm_th").html("");
    $("#somatorio_anual_ufm_th_ponta").html("");
    $("#somatorio_anual_ufm_th_cheio").html("");
    $("#somatorio_anual_ufm_th_vazio").html("");
    $("#somatorio_anual_ufm_th_total").html("");
    //UFM_TTH
    $("#somatorio_ufm_tth").html("");
    $("#somatorio_anual_ufm_tth_ponta").html("");
    $("#somatorio_anual_ufm_tth_cheio").html("");
    $("#somatorio_anual_ufm_tth_vazio").html("");
    $("#somatorio_anual_ufm_tth_svazio").html("");
    $("#somatorio_anual_ufm_tth_total").html("");
    
    //CA_S
    $("#somatorio_ca_simples_total").html("");    
    //CA_BH
    $("#somatorio_ca_bh_total").html("");    
    //CA_TH
    $("#somatorio_ca_th_total").html("");    
    //CA_TTH
    $("#somatorio_ca_tth_total").html("");
    
    //F_S
    $("#somatorio_f_simples_jan").html("");
    $("#somatorio_f_simples_fev").html("");
    $("#somatorio_f_simples_mar").html("");
    $("#somatorio_f_simples_abr").html("");
    $("#somatorio_f_simples_mai").html("");
    $("#somatorio_f_simples_jun").html("");
    $("#somatorio_f_simples_jul").html("");
    $("#somatorio_f_simples_ago").html("");
    $("#somatorio_f_simples_set").html("");
    $("#somatorio_f_simples_out").html("");
    $("#somatorio_f_simples_nov").html("");
    $("#somatorio_f_simples_dez").html("");

    $("#somatorio_anual_f_simples").html("");
    $("#somatorio_anual_f_simples_total").html("");
    //F_BH
    $("#somatorio_f_bh_jan").html("");
    $("#somatorio_f_bh_fev").html("");
    $("#somatorio_f_bh_mar").html("");
    $("#somatorio_f_bh_abr").html("");
    $("#somatorio_f_bh_mai").html("");
    $("#somatorio_f_bh_jun").html("");
    $("#somatorio_f_bh_jul").html("");
    $("#somatorio_f_bh_ago").html("");
    $("#somatorio_f_bh_set").html("");
    $("#somatorio_f_bh_out").html("");
    $("#somatorio_f_bh_nov").html("");
    $("#somatorio_f_bh_dez").html("");

    $("#somatorio_anual_f_bh_foravazio").html("");
    $("#somatorio_anual_f_bh_vazio").html("");
    $("#somatorio_anual_f_bh_total").html("");
    //F_TH
    $("#somatorio_f_th_jan").html("");
    $("#somatorio_f_th_fev").html("");
    $("#somatorio_f_th_mar").html("");
    $("#somatorio_f_th_abr").html("");
    $("#somatorio_f_th_mai").html("");
    $("#somatorio_f_th_jun").html("");
    $("#somatorio_f_th_jul").html("");
    $("#somatorio_f_th_ago").html("");
    $("#somatorio_f_th_set").html("");
    $("#somatorio_f_th_out").html("");
    $("#somatorio_f_th_nov").html("");
    $("#somatorio_f_th_dez").html("");

    $("#somatorio_anual_f_th_ponta").html("");
    $("#somatorio_anual_f_th_cheio").html("");
    $("#somatorio_anual_f_th_vazio").html("");
    $("#somatorio_anual_f_th_total").html("");

    //F_TTH
    $("#somatorio_f_tth_jan").html("");
    $("#somatorio_f_tth_fev").html("");
    $("#somatorio_f_tth_mar").html("");
    $("#somatorio_f_tth_abr").html("");
    $("#somatorio_f_tth_mai").html("");
    $("#somatorio_f_tth_jun").html("");
    $("#somatorio_f_tth_jul").html("");
    $("#somatorio_f_tth_ago").html("");
    $("#somatorio_f_tth_set").html("");
    $("#somatorio_f_tth_out").html("");
    $("#somatorio_f_tth_nov").html("");
    $("#somatorio_f_tth_dez").html("");

    $("#somatorio_anual_f_tth_ponta").html("");
    $("#somatorio_anual_f_tth_cheio").html("");
    $("#somatorio_anual_f_tth_vazio").html("");
    $("#somatorio_anual_f_tth_svazio").html("");
    $("#somatorio_anual_f_tth_total").html("");

    //end reset all fields
}






