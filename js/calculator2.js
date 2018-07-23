$(document).ready(function () {
    buildDistricts(); // dados
    buildNTension(); // dados
    buildHorarioFuncionamento();
    buildVacations();
    buildSelectConsumos();
    buildGraphFinal();
    somaRow();


    $("#distrito").change(getDistrictValues);
    $("#ntensao").change(getNTensionValues);
    $("#potencia").change(buildCHorarioPotencia);
    $("#cicloHorario").change(buildTarifario);
    $("#cicloHorario").select(buildTarifario);
    $("#facturas").change(buildConsumos);

    // TIMER PICKER INPUTMASK
    $('[data-mask]').inputmask("hh:mm");

    //Consumo picker INPUTMASK
    //$('[data-mask]').inputmask("x.xx");

    $('#reload-but').click(function () {
        location.reload();
    });


    $('#newPotencia').change(function () {
        potencia_new_contratada = new Number($('#newPotencia').val());
    });


    //SUBMIT DADOS
    $('#analise-but').click(function() {
        uppResultados();
        upacResultados();
        nextStep();
    });

    //REANALISE DADOS
    $('.reanalise').click(function() {        
        uppResultados();
        upacResultados();
    });


    //REFRESH WARNING
    /*
    $(window).bind('beforeunload', function () {
        return 'Poderá perder os seus dados';
    })*/

    //BUTTON DISABLING




    $('#vacations').change(function () {
        if ($("#vacations").val() == "Sim") {
            $("#vacationTimeDiv").show();
        } else {
            $("#vacationTimeDiv").hide();
        }
    });

    $('#cenarios').change(function () {
        if ($("#cenarios").val() == 3) {
            $("#otherCenario").show();
        } else {
            $("#otherCenario").hide();
        }
    });

    //Timepicker
    /*$('.timepickerStart').timepicker({
        showInputs: false,
        showMeridian: false,
        maxHours: 24,
        minuteStep: 1,
        defaultTime: '00:00'
    });
    $('.timepickerEnd').timepicker({
        showInputs: false,
        showMeridian: false,
        maxHours: 24,
        minuteStep: 1,
        defaultTime: '00:00'
    });*/

    //disable timepickers
    $('.timepickerStart').attr('disabled', true);
    $('.timepickerEnd').attr('disabled', true);

    $('.checkBox').change(function () {
        if ($(this)[0].checked == true) {
            $('#timepicker' + $(this).val() + 'Start').removeAttr('disabled');
            $('#timepicker' + $(this).val() + 'End').removeAttr('disabled');
            $('#timepicker' + $(this).val() + 'Start').val('09:00');
            $('#timepicker' + $(this).val() + 'End').val('17:00');
        } else {
            $('#timepicker' + $(this).val() + 'Start').attr('disabled', true);
            $('#timepicker' + $(this).val() + 'End').attr('disabled', true);
            $('#timepicker' + $(this).val() + 'Start').val('00:00');
            $('#timepicker' + $(this).val() + 'End').val('00:00');
        }
    });
});


//////////////////////////////
///     DADOS
//////////////////////////////
function buildDistricts() {
    for (var i = 0; i < distritosI.length; i++) {
        $("#distrito").append($('<option class="op"></option>').val(i).html(distritosI[i].nome));
    }
}

function getDistrictValues() {
    var id = new Number($("#distrito").val());
    $("#peptInstalada").attr("value", distritosI[id].PEPtInstalada);
}

function buildNTension() {
    for (var i = 0; i < ntensaoI.length; i++) {
        $("#ntensao").append($('<option class="op"></option>').val(i).html(ntensaoI[i].nome));
    }
}

function getNTensionValues() {
    //adicionar alerta para a perda dos valores seleccionados de tarifário e horário com a alteração da tensão
    var idTension = new Number($("#ntensao").val());
    cleanCTarifarioHorario();
    buildCTarifario(ntensaoI[idTension].cicloTarifario);
    buildCHorario(ntensaoI[idTension].cicloHorario, $("#potencia").val());
    buildCHorarioPotencia();
    //set unique element in select 
    if ($("#cicloHorario").children().length == 2) {
        var hasTet = $("#cicloHorario").children('option[value="4"]')[0] != '' && $("#cicloHorario").children('option[value="4"]')[0] != undefined ? $("#cicloHorario").children('option[value="4"]')[0].value : 0;
        var hasTri = $("#cicloHorario").children('option[value="3"]')[0] != '' && $("#cicloHorario").children('option[value="3"]')[0] != undefined ? $("#cicloHorario").children('option[value="3"]')[0].value : 0;
        if (hasTet == 4) {
            var v = $("#cicloHorario").children()[1].value;
            $("#cicloHorario").val(v);
            $("#cicloHorario").select();

        } else if (hasTet == 3) {
            var v = $("#cicloHorario").children()[1].value;
            $("#cicloHorario").val(v);
            $("#cicloHorario").select();
        }

    }
}

function buildCTarifario(cicloTarifario) {
    if ($("#ntensao").val()==3){
        $('#cicloTarifario').attr('disabled', 'disabled').addClass('sel-disable');
        $('#cicloTarifario option:contains("Seleccione uma das opções")').text('Não aplicável');
    }else if (cicloTarifario != undefined && cicloTarifario != null && cicloTarifario != '') {
        $('#cicloTarifario').removeAttr('disabled').removeClass('sel-disable');
        $('#cicloTarifario option:contains("Não aplicável")').text('Seleccione uma das opções');
        for (var i = 0; i < cicloTarifario.length; i++) {
            $("#cicloTarifario").append($('<option class="op"></option>').val(i).html(cicloTarifario[i].nome));
        }
    }
}

function buildCHorario(cicloHorario_input, potencia_input) {
    //CUSTOM START
    //CUSTOM END
    if ($("#ntensao").val() == 3 && potencia_input >= 20.7) {
        $("#cicloHorario").append($('<option class="op"></option>').val(ciclo_horarioI[2].valor).html(ciclo_horarioI[2].nome));
        $("#cicloHorario").val(ciclo_horarioI[2].valor);
        $("#cicloHorario").select();
        //$('#cicloHorario option:contains("Seleccione uma das opções")').remove();
    } else {
        //$('#cicloHorario').attr('disabled', 'disabled').val(ciclo_horarioI[3].valor).html(ciclo_horarioI[3].nome);
        for (var i = 0; i < cicloHorario_input.length; i++) {
            $("#cicloHorario").append($('<option class="op"></option>').val(cicloHorario_input[i].valor).html(cicloHorario_input[i].nome));
        }
    }
}

function buildCHorarioPotencia() {
    if ($("#potencia").val() != '') {
        if ($("#ntensao").val() == 3 && $("#potencia").val() <= 41.40 && $("#potencia").val() >= 1.15) {
            var cicloHorarioSelected = $('#cicloHorario').val();
            $('#cicloHorario').children('option:not(:first)').remove();
            var idTension = new Number($("#ntensao").val());
            var potenciaCHorario = new Number($("#potencia").val());
            buildCHorario(ntensaoI[idTension].cicloHorario, potenciaCHorario);
            //keep selected values
            //setSelect($('#cicloHorario'), cicloHorarioSelected);
        } else if ($("#ntensao").val() == 3 && ($("#potencia").val() > 41.40 || $("#potencia").val() < 1.15)) {
            alert("A potência introduzida para BTN's deverá estar entre 1.15 e 41.40 kVA.");
        } else if ($("#ntensao").val() == 2 && $("#potencia").val() <= 41.40) {
            alert("A potência introduzida para BTE's deverá ser sempre superior a 41.41 kW.");
        } else if (($("#ntensao").val() == 1 || $("#ntensao").val() == 0) && $("#potencia").val() <= 0) {
            alert("A potência introduzida para AT's e MT's deverá ser sempre superior a 0 kW.");
        }
    }
}

function cleanCTarifarioHorario() {
    $('#cicloTarifario').children('option:not(:first)').remove();
    $('#cicloHorario').children('option:not(:first)').remove();
}

function setSelect(selectObject, selectedValue) {
    if (selectedValue != "") {
        var desiredOption = selectObject.val();
        if (desiredOption == '') {
            selectObject.focus();
            return false;
        }
        var hasOption = selectObject.children('option[value="' + selectedValue + '"]');
        if (hasOption.length == 0) {
            alert('Selecção inválida');
        } else {
            selectObject.val(selectedValue);
        }
        selectObject.select();
    }
}

function buildHorarioFuncionamento() {
    for (var i = 0; i < horariosCenI.length; i++) {
        $("#cenarios").append($('<option class="op"></option>').val(i).html(horariosCenI[i].nome));
    }
}

function buildVacations() {
    for (var i = 0; i < periodoEncerramento.length; i++) {
        $("#vacationsTime").append($('<option class="op"></option>').val(i).html(periodoEncerramento[i].nome));
    }
}

function buildTarifario() {
    //tarifario
    var idcicloHorario = new Number($("#cicloHorario").val()) - 1;
    if (ciclo_horarioI[idcicloHorario] != undefined && ciclo_horarioI[idcicloHorario] != null) {
        //append to tarifarios a table with correct data
        $("#tarifarioNome").html(ciclo_horarioI[idcicloHorario].nome);
        //var hr = '<hr>';
        var tabletarifasTitle = '<span>Tarifário</span>';
        var tabletarifasNota = '<span>Introduzir custos unitários de energia, incluindo tarifas de acesso às redes</span>';
        var tabletarifas = '<table class="table table-bordered" id="tableTarif"><tbody><tr style="font-weight:bold;"><th class="tituloTH">Ciclos</th><th class="tituloTH">Custos (€\/kWh)</th></tr>';
        for (i = 0; i < ciclo_horarioI[idcicloHorario].periodoTarifario.length; i++) {
        	if(i==4){
                tabletarifas += '<tr><th colspan=2 class="tituloTH">Custo (€/kWh.dia)</th></tr>';
            }
            tabletarifas += '<tr class="textTR">';
            tabletarifas += '<td class="in">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome +
                    '</td><td class="in"><input class="form-control xInput" type="number" placeholder="X,XXX" id="' +
                    ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + ciclo_horarioI[idcicloHorario].valor + '" name="' +
                    ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + ciclo_horarioI[idcicloHorario].valor + '"></td>';
            tabletarifas += '</tr>';
        }
        //$('.hr-line').html(hr);
        $('.second').html(tabletarifasTitle);
        $('.nota-tarifas').html(tabletarifasNota);
        $("#tarifarios").html(tabletarifas + '</tbody></table>');
        //buildConsumos();
    }
}

function buildSelectConsumos() {
    for (var i = 0; i < consumosI.length; i++) {
        $("#facturas").append($('<option class="op"></option>').val(consumosI[i].value).html(consumosI[i].nome));
    }
}

function buildConsumos(){
    
    //div to fill 'factura-consumo'
    var idcicloHorario = new Number($("#cicloHorario").val()) - 1;
    var consumos = new Number($("#facturas").val());
    var consumosTable = '';
    var linhas=0;
    var colunas = ciclo_horarioI[idcicloHorario].periodoTarifario.length;
    var facturaNewTitle = '<span>Fatura</span>';


    if(consumos==1){
        size=3;
        //construir for para table headers
        //construir um for para table rows
        
        consumosTable = '<table class="table table-bordered" id="tbl-factura-mensal">';
        
        for(j=0; j<size; j++){ //linhas
            
            if(j==0){
                consumosTable += '<tr style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>';
            }            
            if(j==1){
                consumosTable += '<tr id="mensal" class="textTR"><td class="title-padd">Mensal</td>';
            }
            if(j==2){
                consumosTable += '<tr id="anual" class="textTR"><td class="title-padd">Anual</td>';
            }
            
            for (i = 0; i < colunas; i++) { //colunas
                if (j == 0 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                    //do nothing
                    consumosTable += '<th class="tituloTH">Total</th>';
                } else if (j == 0 && i == colunas - 1) {
                    consumosTable += '<th class="tituloTH">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome + '</th>';
                    consumosTable += '<th class="tituloTH">Total</th>';
                } else if (j == 0 && i >= 0) {
                    consumosTable += '<th class="tituloTH">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome + '</th>';
                } else if (j == 1 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                    //do nothing
                    consumosTable += '<td class="in" id="totalMensal"></td>';
                } else if (j == 1 && i == colunas - 1) {
                    consumosTable += '<td><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="mensal_' +
                        ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '" name="mensal_' +
                        ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';

                    /*consumosTable += '<td class="in"><input class="form-control txtCal" type="text" name="mensal_vazio" placeholder="ex: 100" id="mensal_' +
                        ciclo_horarioI[idcicloHorarioLetter].periodoTarifario[i].valor + '"></td>';*/


                    //consumosTable += '<td><label id="total_mensal"></label></td>';
                    consumosTable += '<td class="in" id="totalMensal"></td>';
                    // id standard = somatorio_ufm_th
                } else if (j == 1 && i >= 0) {
                    consumosTable += '<td><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="mensal_' +
                        ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '" name="mensal_' +
                        ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';

                    /*consumosTable += '<td class="in"><input class="form-control txtCal" type="text" name="mensal_ponta" placeholder="ex: 100" id="mensal_' +
                        ciclo_horarioI[idcicloHorarioLetter].periodoTarifario[i].valor + '"></td>';*/

                } else if (j == 2 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                    //do nothing
                    consumosTable += '<td class="in" id="total_anual"></td>';
                } else if (j == 2 && i == colunas - 1) {
                    consumosTable += '<td class="in" id="anual_' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                    consumosTable += '<td class="in" id="total_anual"></td>';
                } else if (j == 2 && i >= 0) {
                    consumosTable += '<td class="in" id="anual_' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                }
                }
                consumosTable += '</tr>';
            }
            consumosTable += '</table>';

        }else if (consumos == 2) {
            size = 2;
            //construir for para table headers
            //construir um for para table rows
            consumosTable = '<table class="table table-bordered" id="tbl-consumos-anuais"><tbody>';

            for (j = 0; j < size; j++) { //linhas
                if (j == 0) {
                    consumosTable += '<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>';
                }
                if (j == 1) {
                    consumosTable += '<tr class="textTR"><td class="title-padd">Anual</td>';
                }

                for (i = 0; i < colunas; i++) { //colunas

                    if (j == 0 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                        //do nothing
                        consumosTable += '<th class="tituloTH">Total</th>';
                    } else if (j == 0 && i == colunas - 1) {
                        consumosTable += '<th class="tituloTH">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome + '</th>';
                        consumosTable += '<th class="tituloTH">Total</th>';
                    } else if (j == 0 && i >= 0) {
                        consumosTable += '<th class="tituloTH">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome + '</th>';
                    } else if (j == 1 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                        //do nothing
                        consumosTable += '<td class="in" id="total_anual"></td>';
                    } else if (j == 1 && i == colunas - 1) {
                        consumosTable += '<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="anual_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '" name="anual_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                        consumosTable += '<td class="in" id="total_anual"></td>';
                    } else if (j == 1 && i >= 0) {
                        consumosTable += '<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="anual_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '" name="anual_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                    }
                }
                consumosTable += '</tr>';
            }
            consumosTable += '</table>';


        } else if (consumos == 12) {
            size = 14;
            //construir for para table headers
            //construir um for para table rows
            consumosTable = '<table class="table table-bordered" id="tbl-facturas"><tbody>';

            for (j = 0; j < size; j++) { //linhas
                //console.log(j);
                if (j == 0) {
                    consumosTable += '<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>';
                }
                if (j == size - 1) {
                    consumosTable += '<tr class="textTR"><td class="title-padd">Total</td>';
                } else if (j > 0) {
                    consumosTable += '<tr class="textTR"><td class="title-padd">' + producaoSolarMes[j - 1].nome + '</td>';
                }

                for (i = 0; i < colunas; i++) { //colunas                
                    if (j == 0 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                        //do nothing
                        consumosTable += '<th class="tituloTH">Total</th>';
                    } else if (j == 0 && i == colunas - 1) {
                        consumosTable += '<th class="tituloTH">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome + '</th>';
                        consumosTable += '<th class="tituloTH">Total</th>';
                    } else if (j == 0 && i >= 0) {
                        consumosTable += '<th class="tituloTH">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome + '</th>';
                    } else if (j == size - 1 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                        //do nothing
                        consumosTable += '<td class="in" id="total_anual"></td>';
                    } else if (j == size - 1 && i == colunas - 1) {
                        consumosTable += '<td class="in" id="anual_' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                        consumosTable += '<td class="in" id="total_anual"></td>';
                    } else if (j == size - 1 && i >= 0) {
                        consumosTable += '<td class="in" id="anual_' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                    } else if (j > 0 && ciclo_horarioI[idcicloHorario].valor == 4 && i == colunas - 1) {
                        //do nothing
                        consumosTable += '<td class="in" id="total_mensal_' + producaoSolarMes[j - 1].valor + '"></td>';
                    } else if (j > 0 && i == colunas - 1) {
                        consumosTable += '<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="consumo_' + producaoSolarMes[j - 1].valor + '_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '" name="consumo_' + producaoSolarMes[j - 1].valor + '_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                        consumosTable += '<td class="in" id="total_mensal_' + producaoSolarMes[j - 1].valor + '"></td>';
                    } else if (j > 0 && i >= 0) {
                        consumosTable += '<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="consumo_' + producaoSolarMes[j - 1].valor + '_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '" name="consumo_' + producaoSolarMes[j - 1].valor + '_' +
                            ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + '"></td>';
                    }
            }
            consumosTable += '</tr>';
        }
        consumosTable += '</table>';
        
    }
    
    $('.third').html(facturaNewTitle);
    $("#factura-consumo").html(consumosTable);
}



// HORARIOS CUSTOM
/*function buildHorariosCustom() {
    //tarifario
    var timeChoice = new Number($("#cenarios").val());

    if(timeChoice == 3) {
        var customTable = '<table class="table table-bordered table-striped"><tbody><tr style="font-weight:bold;"><th class="tituloTH">&nbsp</th><th class="tituloTH">Dia da semana</th><th class="tituloTH">Horário de entrada</th><th class="tituloTH">Horário de saída</th>';
    }
    if (ciclo_horarioI[idcicloHorario] != undefined && ciclo_horarioI[idcicloHorario] != null) {
        //append to tarifarios a table with correct data
        $("#tarifarioNome").html(ciclo_horarioI[idcicloHorario].nome);
        //var hr = '<hr>';
        var tabletarifasTitle = '<span>Tarifário</span>';
        var tabletarifas = '<table class="table table-bordered" id="tableTarif"><tbody><tr style="font-weight:bold;"><th class="tituloTH">Ciclos</th><th class="tituloTH">Custos (€\/kWh)</th></tr>';
        for (i = 0; i < ciclo_horarioI[idcicloHorario].periodoTarifario.length; i++) {
            tabletarifas += '<tr class="textTR">';
            tabletarifas += '<td class="in">' + ciclo_horarioI[idcicloHorario].periodoTarifario[i].nome +
                '</td><td class="in"><input class="form-control xInput" type="text" placeholder="X,XXX" id="' +
                ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + ciclo_horarioI[idcicloHorario].valor + '" name="' +
                ciclo_horarioI[idcicloHorario].periodoTarifario[i].valor + ciclo_horarioI[idcicloHorario].valor + '"></td>';
            tabletarifas += '</tr>';
        }
        //$('.hr-line').html(hr);
        $('.dados-titulo.second').html(tabletarifasTitle);
        $("#tarifarios").html(tabletarifas + '</tbody></table>');
        buildConsumos();
    }
}*/



// BUTTONS STEPS
function nextStep() {
    var id = $('.step:visible').data('id');
    var nextId = $('.step:visible').data('id') + 1;
    $('[data-id="' + id + '"]').hide();
    $('[data-id="' + nextId + '"]').show();

    if ($('.anterior:hidden').length > 1) {
        $('.anterior').show();
    }

    if (nextId == 3) {
        $('.but-2').hide();
        $('.analise').hide();
        $('.end-step').show();
    }

    if (nextId == 4) {
        $('.but-2').hide();
        $('.end-step').hide();
        $('.print_pdf').show();
        $('.analise').show();
    }
}

function prevStep() {
    var id = $('.step:visible').data('id');
    var prevId = $('.step:visible').data('id') - 1;
    $('[data-id="' + id + '"]').hide();
    $('[data-id="' + prevId + '"]').show();

    if (prevId == 1) {
        $('.anterior').hide();
    }

    if (prevId < 3) {
        $('.end-step').hide();
        $('.analise').hide();
        $('.but-2').show();
    }

    if (prevId == 3) {
        $('.but-2').hide();
        $('.analise').hide();
        $('.end-step').show();
    }

    if (prevId == 4) {
        $('.analise').hide();
        $('.but-2').hide();
        $('.print_pdf').hide();
        $('.end-step').show();
    }
}
