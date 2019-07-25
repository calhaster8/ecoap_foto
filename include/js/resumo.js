function uppPotenciaCalc() {
    potencia_array = [];
    upp_condicao = upp_condicao != "" && upp_condicao != null && upp_condicao != undefined ? upp_condicao : "";
    uppConsumoAnual = 0;
    potencia_max_consumo_anual = 0;
   
    potencia_max_area = new Number($("#newArea").val());
    potencia_max_contratada = new Number($("#potencia").val());
    potencia_new_contratada = new Number($("#newPotencia").val());
    pept_value = new Number($('#peptInstalada').val());

    potencia_array = [
        ((potencia_max_area != 0 &&
                potencia_max_area != '' &&
                potencia_max_area != undefined && potencia_new_area > potencia_max_area) ?
                potencia_max_area * 0.8 / modulosSolares.area * modulosSolares.potencia : 0),
        potencia_max_contratada,
        potencia_max_consumo_anual
    ];

    var uppca = getUppConsumoAnual();

    potencia_array[2] = (uppca * 2) / pept_value;
    potencia_upp = min(potencia_array);

    uppConsumoAnual = (potencia_upp > 250 ? 250 : potencia_upp);

    if (potencia_new_contratada != "" && potencia_new_contratada != null && potencia_new_contratada != undefined && 
            potencia_new_contratada > 0 && 
            (potencia_max_area == "" || potencia_max_area == null || potencia_max_area == undefined || potencia_max_area == 0)) {
        uppConsumoAnual = potencia_new_contratada > 250 ? 250 : potencia_new_contratada;
    } else if ((potencia_new_contratada == "" || potencia_new_contratada == null || potencia_new_contratada == undefined || potencia_new_contratada == 0) && (potencia_max_area != "" && potencia_max_area != null && potencia_max_area != undefined && potencia_max_area > 0)) {
        
    } else if (potencia_new_contratada != "" && potencia_new_contratada != null && potencia_new_contratada != undefined && potencia_new_contratada > 0 && potencia_max_area != "" && potencia_max_area != null && potencia_max_area != undefined && potencia_max_area > 0 && potencia_new_contratada < potencia_upp) {
        uppConsumoAnual = potencia_new_contratada;

    }
    if (uppConsumoAnual == potencia_array[1]) {
        upp_condicao = condicoesLimitePotencia[1];
    } else if (uppConsumoAnual == potencia_array[2]) {
        upp_condicao = condicoesLimitePotencia[2];
    } else if (potencia_upp > 250) {
        upp_condicao = condicoesLimitePotencia[3];
    } else if (uppConsumoAnual == potencia_array[0]) {
        upp_condicao = condicoesLimitePotencia[0];
    }

    return uppConsumoAnual;
}

function categoriaUPP() {
    catUPP = [];

    var question_one = $('#question_one').val();
    var question_two = $('#question_two').val();

    if (question_one == '1') {
        catUPP = tarifa_uppI[1];
    } else if (question_two == '1') {
        catUPP = tarifa_uppI[2];
    } else {
        catUPP = tarifa_uppI[0];
    }
}

function tarifaUpp() {
    categoriaUPP();
    return catUPP.valor;
}

function uppResultados() {
    
    var potencia_upp_call = uppPotenciaCalc();

    upp_resultados_pc = potencia_upp_call;

    upp_resultados_n_paineis = upp_resultados_pc / 0.275; 
    upp_resultados_area_ocupada = potencia_max_area > 0 && (upp_resultados_n_paineis * 1.7 / 0.8) > potencia_max_area ? potencia_max_area : upp_resultados_n_paineis * 1.7 / 0.8; 
    if (potencia_new_area == 0) {
        potencia_new_area = upp_resultados_area_ocupada;
    }

    upp_resultados_prod_volt = upp_resultados_pc * pept_value;  
    
    upp_resultados_reducao_dep_ene = (upp_resultados_prod_volt / consumo_anual) * 100;

    upp_resultados_custos_energia = getUppCustosComEnergia();
    upp_resultados_custos_php = getUppCustosComPhp(); 
    var excedente_resultados = (upp_resultados_prod_volt > consumo_anual * 2) ? upp_resultados_prod_volt - consumo_anual : 0;
    var excedente_resultados_perc = (excedente_resultados / upp_resultados_prod_volt) * 100;
    upp_resultados_custos_isp = consumo_anual * 0.001;

    upp_resultados_custos_energicos = upp_resultados_custos_energia + upp_resultados_custos_isp + upp_resultados_custos_php;
    upp_resultados_rec_foto = upp_resultados_prod_volt * tarifaUpp();
    upp_resultados_reducao_custos = (upp_resultados_rec_foto / upp_resultados_custos_energicos) * 100;
    upp_resultados_investimento = getUppInvestimento();
    upp_custos_anuais_new = upp_resultados_investimento * 0.02;
    upp_resultados_payback = upp_resultados_investimento / upp_resultados_rec_foto;

    var upp_autoconsumo = upp_resultados_prod_volt - excedente_resultados;

    $('#pot_central').html(upp_resultados_pc.toFixed(0) + ' kW');
    $('#nPaineis').html(upp_resultados_n_paineis.toFixed(0));
    $('#area_ocupada').html(upp_resultados_area_ocupada.toFixed(0) + " m2");
    $('#observations').html(upp_condicao);
    $('#consumo_instalacao').html(consumo_anual.toFixed(0) + ' kWh');
    $('#prod_foto').html(upp_resultados_prod_volt.toFixed(0) + ' kWh');
    $('#excede').html(excedente_resultados>0 ? excedente_resultados.toFixed(0) + ' kWh' : '-');
    $('#excedentePercent').html(excedente_resultados_perc>0 ? excedente_resultados_perc.toFixed(0) + ' %' : '-');
    $('#auto_consumo').html('Não aplicável');
    $('#consumo_energia_ren').html(upp_resultados_reducao_dep_ene.toFixed(0) + '%');
    $('#custos_energia').html(upp_resultados_custos_energicos.toFixed(0) + ' €');
    $('#receita_foto').html(upp_resultados_rec_foto.toFixed(0) + ' €' + '<br>' + catUPP.nome);
    $('#reduc_custos').html(upp_resultados_reducao_custos.toFixed(0) + '%');
    $('#investe').html(upp_resultados_investimento.toFixed(0) + ' €');
    $('#custos_anuais').html(upp_custos_anuais_new.toFixed(0) + ' €');
    $('#paybck').html(upp_resultados_payback.toFixed(1) + ' anos');
}

function getUppCustosComEnergia() {

    var custosEnergia = 0;
    if (consumoLetter == 1) {

        if (cicloHorarioLetter == 1) {

            var custo_simples = new Number($("#consumo1").val());
            custosEnergia = custo_simples * somatorio_anual_ufm_simples;

        } else if (cicloHorarioLetter == 2) {

            var custo_bh_foravazio = new Number($("#fora_vazio2").val());
            var custo_bh_vazio = new Number($("#vazio2").val());

            custosEnergia = (custo_bh_foravazio * somatorio_anual_ufm_bh_foravazio) + (custo_bh_vazio * somatorio_anual_ufm_bh_vazio);

        } else if (cicloHorarioLetter == 3) {

            var custo_th_ponta = new Number($("#ponta3").val());
            var custo_th_cheia = new Number($("#cheia3").val());
            var custo_th_vazio = new Number($("#vazio3").val());

            custosEnergia = (custo_th_ponta * somatorio_anual_ufm_th_ponta) + (custo_th_cheia * somatorio_anual_ufm_th_cheia) + (custo_th_vazio * somatorio_anual_ufm_th_vazio);

        } else if (cicloHorarioLetter == 4) {

            var custo_tth_ponta = new Number($("#ponta4").val());
            var custo_tth_cheia = new Number($("#cheia4").val());
            var custo_tth_vazio = new Number($("#vazio4").val());
            var custo_tth_svazio = new Number($("#super_vazio4").val());

            custosEnergia = (custo_tth_ponta * somatorio_anual_ufm_tth_ponta) + (custo_tth_cheia * somatorio_anual_ufm_tth_cheia) + (custo_tth_vazio * somatorio_anual_ufm_tth_vazio) + (custo_tth_svazio * somatorio_anual_ufm_tth_svazio);
        }

    } else if (consumoLetter == 2) {

        if (cicloHorarioLetter == 1) {

            var custo_simples = new Number($("#consumo1").val());
            custosEnergia = custo_simples * consumo_ca_simples;

        } else if (cicloHorarioLetter == 2) {

            var custo_bh_foravazio = new Number($("#fora_vazio2").val());
            var custo_bh_vazio = new Number($("#vazio2").val());

            custosEnergia = (custo_bh_foravazio * consumo_ca_bh_foravazio) + (custo_bh_vazio * consumo_ca_bh_vazio);

        } else if (cicloHorarioLetter == 3) {

            var custo_th_ponta = new Number($("#ponta3").val());
            var custo_th_cheia = new Number($("#cheia3").val());
            var custo_th_vazio = new Number($("#vazio3").val());

            custosEnergia = (custo_th_ponta * consumo_ca_th_ponta) + (custo_th_cheia * consumo_ca_th_cheia) + (custo_th_vazio * consumo_ca_th_vazio);

        } else if (cicloHorarioLetter == 4) {

            var custo_tth_ponta = new Number($("#ponta4").val());
            var custo_tth_cheia = new Number($("#cheia4").val());
            var custo_tth_vazio = new Number($("#vazio4").val());
            var custo_tth_svazio = new Number($("#super_vazio4").val());

            custosEnergia = (custo_tth_ponta * consumo_ca_tth_ponta) + (custo_tth_cheia * consumo_ca_tth_cheia) + (custo_tth_vazio * consumo_ca_tth_vazio) + (custo_tth_svazio * consumo_ca_tth_svazio);
        }

    } else if (consumoLetter == 12) {

        if (cicloHorarioLetter == 1) {

            var custo_simples = new Number($("#consumo1").val());
            custosEnergia = custo_simples * somatorio_anual_f_simples;

        } else if (cicloHorarioLetter == 2) {

            var custo_bh_foravazio = new Number($("#fora_vazio2").val());
            var custo_bh_vazio = new Number($("#vazio2").val());

            custosEnergia = (custo_bh_foravazio * somatorio_anual_f_bh_foravazio) + (custo_bh_vazio * somatorio_anual_f_bh_vazio);

        } else if (cicloHorarioLetter == 3) {

            var custo_th_ponta = new Number($("#ponta3").val());
            var custo_th_cheia = new Number($("#cheia3").val());
            var custo_th_vazio = new Number($("#vazio3").val());

            custosEnergia = (custo_th_ponta * somatorio_anual_f_th_ponta) + (custo_th_cheia * somatorio_anual_f_th_cheia) + (custo_th_vazio * somatorio_anual_f_th_vazio);

        } else if (cicloHorarioLetter == 4) {

            var custo_tth_ponta = new Number($("#ponta4").val());
            var custo_tth_cheia = new Number($("#cheia4").val());
            var custo_tth_vazio = new Number($("#vazio4").val());
            var custo_tth_svazio = new Number($("#super_vazio4").val());

            custosEnergia = (custo_tth_ponta * somatorio_anual_f_tth_ponta) + (custo_tth_cheia * somatorio_anual_f_tth_cheia) + (custo_tth_vazio * somatorio_anual_f_tth_vazio) + (custo_tth_svazio * somatorio_anual_f_tth_svazio);
        }
    }

    return custosEnergia;
}

function getUppCustosComPhp() {

    var uppCustosComPhp = 0;

    if ($('#pt_horas_ponta4').val() != undefined) {
        ptHorasPonta = new Number($('#pt_horas_ponta4').val());
        uppCustosComPhp = getConsumoAnualPonta() / ciclo_tarifarioI[cicloTarifario].numHoras * ptHorasPonta * 365;
    }
    return uppCustosComPhp;

}

function getUppInvestimento() {

    for (var i = 0; i < investimentoI.length; i++) {
        if (investimentoI[i].max == undefined) {
            return upp_resultados_pc * investimentoI[i].valor;
        } else if (upp_resultados_pc < investimentoI[i].max && upp_resultados_pc >= investimentoI[i].min) {
            return upp_resultados_pc * investimentoI[i].valor;
        }
    }
}

function min(array) {
    var min = 0;
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min || min == 0) {
                min = array[i];
            }
        }
    }
    return min;
}

function getUppConsumoAnual() {

    consumo_anual = 0;

    var consumoLetter = $('#facturas').val();
    var cicloHorarioLetter = $('#cicloHorario').val();
    var periodos = $('#vacationsTime').val();
    var encerra = $("#vacations").val();

    for (var i = 1; i < 13; i++) {
        if (consumoLetter == 12) {
            consumo_anual += getConsumo(consumoLetter, cicloHorarioLetter, i);
        } else if (consumoLetter == 1) {

            if (encerra == "Sim" && (i == 8 || i == 12 || i == 7) && $.inArray(i, periodoEncerramento[periodos].valor) != -1) {
                consumo_anual += (getConsumo(consumoLetter, cicloHorarioLetter, i) / 12) * cons_meses_ferias;
            } else {
                consumo_anual += getConsumo(consumoLetter, cicloHorarioLetter, i) / 12;
            }
        } else {
            if (encerra == "Sim") {
                consumo_anual += getConsumo(consumoLetter, cicloHorarioLetter, i) * varConsumoMensal[i - 1].periodos[periodos].value;
            } else {
                consumo_anual = getConsumo(consumoLetter, cicloHorarioLetter, i);
            }
        }
    }
    return consumo_anual;
}

function getConsumo(consumoLetter, cicloHorarioLetter, mes) {

    if (consumoLetter == 1) {     
        if (cicloHorarioLetter == 1) {
            return (new Number($("#mensal_consumo").val()) * 12);
         
        } else if (cicloHorarioLetter == 2) {
          
            var consumo_ufm_bh_foravazio = new Number($("#mensal_fora_vazio").val());
            var consumo_ufm_bh_vazio = new Number($("#mensal_vazio").val());
        
            somatorio_anual_ufm_bh_foravazio = consumo_ufm_bh_foravazio * 12;
            somatorio_anual_ufm_bh_vazio = consumo_ufm_bh_vazio * 12;
            return somatorio_anual_ufm_bh_foravazio + somatorio_anual_ufm_bh_vazio;
        
        } else if (cicloHorarioLetter == 3) {
            var consumo_ufm_th_ponta = new Number($("#mensal_ponta").val());
            var consumo_ufm_th_cheia = new Number($("#mensal_cheia").val());
            var consumo_ufm_th_vazio = new Number($("#mensal_vazio").val());

            somatorio_anual_ufm_th_ponta = consumo_ufm_th_ponta * 12;
            somatorio_anual_ufm_th_cheia = consumo_ufm_th_cheia * 12;
            somatorio_anual_ufm_th_vazio = consumo_ufm_th_vazio * 12;
            return somatorio_anual_ufm_th_ponta + somatorio_anual_ufm_th_cheia + somatorio_anual_ufm_th_vazio;
           
        } else if (cicloHorarioLetter == 4) {

            var consumo_ufm_tth_ponta = new Number($("#mensal_ponta").val());
            var consumo_ufm_tth_cheia = new Number($("#mensal_cheia").val());
            var consumo_ufm_tth_vazio = new Number($("#mensal_vazio").val());
            var consumo_ufm_tth_super_vazio = new Number($("#mensal_super_vazio").val());
           
            somatorio_anual_ufm_tth_ponta = consumo_ufm_tth_ponta * 12;
            somatorio_anual_ufm_tth_cheia = consumo_ufm_tth_cheia * 12;
            somatorio_anual_ufm_tth_vazio = consumo_ufm_tth_vazio * 12;
            somatorio_anual_ufm_tth_svazio = consumo_ufm_tth_svazio * 12;
            return somatorio_anual_ufm_tth_ponta + somatorio_anual_ufm_tth_cheia + somatorio_anual_ufm_tth_vazio + somatorio_anual_ufm_tth_svazio;

        }
        
    } else if (consumoLetter == 2) {
       
        if (cicloHorarioLetter == 1) {
            var consumo_ca_simples = new Number($("#anual_consumo").val());
          
            return new Number(consumo_ca_simples);
        
        } else if (cicloHorarioLetter == 2) {
            var consumo_ca_bh_foravazio = new Number($("#anual_fora_vazio").val());
            var consumo_ca_bh_vazio = new Number($("#anual_vazio").val());
           
            return consumo_ca_bh_foravazio + consumo_ca_bh_vazio;
           
        } else if (cicloHorarioLetter == 3) {
            var consumo_ca_th_ponta = new Number($("#anual_ponta").val());
            var consumo_ca_th_cheia = new Number($("#anual_cheia").val());
            var consumo_ca_th_vazio = new Number($("#anual_vazio").val());
            
            return consumo_ca_th_ponta + consumo_ca_th_cheia + consumo_ca_th_vazio;
         
        } else if (cicloHorarioLetter == 4) {
            var consumo_ca_tth_ponta = new Number($("#anual_ponta").val());
            var consumo_ca_tth_cheia = new Number($("#anual_cheia").val());
            var consumo_ca_tth_vazio = new Number($("#anual_vazio").val());
            var consumo_ca_tth_svazio = new Number($("#anual_super_vazio").val());
         
            return consumo_ca_tth_ponta + consumo_ca_tth_cheia + consumo_ca_tth_vazio + consumo_ca_tth_svazio;

        }
      
    } else if (consumoLetter == 12) {
        
        if (cicloHorarioLetter == 1) {
            if (mes == 1) {
                return new Number($("#consumo_1_consumo").val());
            }
            if (mes == 2) {
                return new Number($("#consumo_2_consumo").val());
            }
            if (mes == 3) {
                return new Number($("#consumo_3_consumo").val());
            }
            if (mes == 4) {
                return new Number($("#consumo_4_consumo").val());
            }
            if (mes == 5) {
                return new Number($("#consumo_5_consumo").val());
            }
            if (mes == 6) {
                return new Number($("#consumo_6_consumo").val());
            }
            if (mes == 7) {
                return new Number($("#consumo_7_consumo").val());
            }
            if (mes == 8) {
                return new Number($("#consumo_8_consumo").val());
            }
            if (mes == 9) {
                return new Number($("#consumo_9_consumo").val());
            }
            if (mes == 10) {
                return new Number($("#consumo_10_consumo").val());
            }
            if (mes == 11) {
                return new Number($("#consumo_11_consumo").val());
            }
            if (mes == 12) {
                return new Number($("#consumo_12_consumo").val());
            }
            
        } else if (cicloHorarioLetter == 2) {
            var consumo_f_bh_foravazio_jan = new Number($("#consumo_1_fora_vazio").val());
            var consumo_f_bh_foravazio_fev = new Number($("#consumo_2_fora_vazio").val());
            var consumo_f_bh_foravazio_mar = new Number($("#consumo_3_fora_vazio").val());
            var consumo_f_bh_foravazio_abr = new Number($("#consumo_4_fora_vazio").val());
            var consumo_f_bh_foravazio_mai = new Number($("#consumo_5_fora_vazio").val());
            var consumo_f_bh_foravazio_jun = new Number($("#consumo_6_fora_vazio").val());
            var consumo_f_bh_foravazio_jul = new Number($("#consumo_7_fora_vazio").val());
            var consumo_f_bh_foravazio_ago = new Number($("#consumo_8_fora_vazio").val());
            var consumo_f_bh_foravazio_set = new Number($("#consumo_9_fora_vazio").val());
            var consumo_f_bh_foravazio_out = new Number($("#consumo_10_fora_vazio").val());
            var consumo_f_bh_foravazio_nov = new Number($("#consumo_11_fora_vazio").val());
            var consumo_f_bh_foravazio_dez = new Number($("#consumo_12_fora_vazio").val());

            var consumo_f_bh_vazio_jan = new Number($("#consumo_1_vazio").val());
            var consumo_f_bh_vazio_fev = new Number($("#consumo_2_vazio").val());
            var consumo_f_bh_vazio_mar = new Number($("#consumo_3_vazio").val());
            var consumo_f_bh_vazio_abr = new Number($("#consumo_4_vazio").val());
            var consumo_f_bh_vazio_mai = new Number($("#consumo_5_vazio").val());
            var consumo_f_bh_vazio_jun = new Number($("#consumo_6_vazio").val());
            var consumo_f_bh_vazio_jul = new Number($("#consumo_7_vazio").val());
            var consumo_f_bh_vazio_ago = new Number($("#consumo_8_vazio").val());
            var consumo_f_bh_vazio_set = new Number($("#consumo_9_vazio").val());
            var consumo_f_bh_vazio_out = new Number($("#consumo_10_vazio").val());
            var consumo_f_bh_vazio_nov = new Number($("#consumo_11_vazio").val());
            var consumo_f_bh_vazio_dez = new Number($("#consumo_12_vazio").val());

            if (mes == 1) {
                return consumo_f_bh_foravazio_jan + consumo_f_bh_vazio_jan;
            }
            if (mes == 2) {
                return consumo_f_bh_foravazio_fev + consumo_f_bh_vazio_fev;
            }
            if (mes == 3) {
                return consumo_f_bh_foravazio_mar + consumo_f_bh_vazio_mar;
            }
            if (mes == 4) {
                return consumo_f_bh_foravazio_abr + consumo_f_bh_vazio_abr;
            }
            if (mes == 5) {
                return consumo_f_bh_foravazio_mai + consumo_f_bh_vazio_mai;
            }
            if (mes == 6) {
                return consumo_f_bh_foravazio_jun + consumo_f_bh_vazio_jun;
            }
            if (mes == 7) {
                return consumo_f_bh_foravazio_jul + consumo_f_bh_vazio_jul;
            }
            if (mes == 8) {
                return consumo_f_bh_foravazio_ago + consumo_f_bh_vazio_ago;
            }
            if (mes == 9) {
                return consumo_f_bh_foravazio_set + consumo_f_bh_vazio_set;
            }
            if (mes == 10) {
                return consumo_f_bh_foravazio_out + consumo_f_bh_vazio_out;
            }
            if (mes == 11) {
                return consumo_f_bh_foravazio_nov + consumo_f_bh_vazio_nov;
            }
            if (mes == 12) {
                return consumo_f_bh_foravazio_dez + consumo_f_bh_vazio_dez;
            }
           
        } else if (cicloHorarioLetter == 3) {
            var consumo_f_th_ponta_jan = new Number($("#consumo_1_ponta").val());
            var consumo_f_th_ponta_fev = new Number($("#consumo_2_ponta").val());
            var consumo_f_th_ponta_mar = new Number($("#consumo_3_ponta").val());
            var consumo_f_th_ponta_abr = new Number($("#consumo_4_ponta").val());
            var consumo_f_th_ponta_mai = new Number($("#consumo_5_ponta").val());
            var consumo_f_th_ponta_jun = new Number($("#consumo_6_ponta").val());
            var consumo_f_th_ponta_jul = new Number($("#consumo_7_ponta").val());
            var consumo_f_th_ponta_ago = new Number($("#consumo_8_ponta").val());
            var consumo_f_th_ponta_set = new Number($("#consumo_9_ponta").val());
            var consumo_f_th_ponta_out = new Number($("#consumo_10_ponta").val());
            var consumo_f_th_ponta_nov = new Number($("#consumo_11_ponta").val());
            var consumo_f_th_ponta_dez = new Number($("#consumo_12_ponta").val());

            var consumo_f_th_cheia_jan = new Number($("#consumo_1_cheia").val());
            var consumo_f_th_cheia_fev = new Number($("#consumo_2_cheia").val());
            var consumo_f_th_cheia_mar = new Number($("#consumo_3_cheia").val());
            var consumo_f_th_cheia_abr = new Number($("#consumo_4_cheia").val());
            var consumo_f_th_cheia_mai = new Number($("#consumo_5_cheia").val());
            var consumo_f_th_cheia_jun = new Number($("#consumo_6_cheia").val());
            var consumo_f_th_cheia_jul = new Number($("#consumo_7_cheia").val());
            var consumo_f_th_cheia_ago = new Number($("#consumo_8_cheia").val());
            var consumo_f_th_cheia_set = new Number($("#consumo_9_cheia").val());
            var consumo_f_th_cheia_out = new Number($("#consumo_10_cheia").val());
            var consumo_f_th_cheia_nov = new Number($("#consumo_11_cheia").val());
            var consumo_f_th_cheia_dez = new Number($("#consumo_12_cheia").val());

            var consumo_f_th_vazio_jan = new Number($("#consumo_1_vazio").val());
            var consumo_f_th_vazio_fev = new Number($("#consumo_2_vazio").val());
            var consumo_f_th_vazio_mar = new Number($("#consumo_3_vazio").val());
            var consumo_f_th_vazio_abr = new Number($("#consumo_4_vazio").val());
            var consumo_f_th_vazio_mai = new Number($("#consumo_5_vazio").val());
            var consumo_f_th_vazio_jun = new Number($("#consumo_6_vazio").val());
            var consumo_f_th_vazio_jul = new Number($("#consumo_7_vazio").val());
            var consumo_f_th_vazio_ago = new Number($("#consumo_8_vazio").val());
            var consumo_f_th_vazio_set = new Number($("#consumo_9_vazio").val());
            var consumo_f_th_vazio_out = new Number($("#consumo_10_vazio").val());
            var consumo_f_th_vazio_nov = new Number($("#consumo_11_vazio").val());
            var consumo_f_th_vazio_dez = new Number($("#consumo_12_vazio").val());

            if (mes == 1) {
                return consumo_f_th_ponta_jan + consumo_f_th_cheia_jan + consumo_f_th_vazio_jan;
            }
            if (mes == 2) {
                return consumo_f_th_ponta_fev + consumo_f_th_cheia_fev + consumo_f_th_vazio_fev;
            }
            if (mes == 3) {
                return consumo_f_th_ponta_mar + consumo_f_th_cheia_mar + consumo_f_th_vazio_mar;
            }
            if (mes == 4) {
                return consumo_f_th_ponta_abr + consumo_f_th_cheia_abr + consumo_f_th_vazio_abr;
            }
            if (mes == 5) {
                return consumo_f_th_ponta_mai + consumo_f_th_cheia_mai + consumo_f_th_vazio_mai;
            }
            if (mes == 6) {
                return consumo_f_th_ponta_jun + consumo_f_th_cheia_jun + consumo_f_th_vazio_jun;
            }
            if (mes == 7) {
                return consumo_f_th_ponta_jul + consumo_f_th_cheia_jul + consumo_f_th_vazio_jul;
            }
            if (mes == 8) {
                return consumo_f_th_ponta_ago + consumo_f_th_cheia_ago + consumo_f_th_vazio_ago;
            }
            if (mes == 9) {
                return consumo_f_th_ponta_set + consumo_f_th_cheia_set + consumo_f_th_vazio_set;
            }
            if (mes == 10) {
                return consumo_f_th_ponta_out + consumo_f_th_cheia_out + consumo_f_th_vazio_out;
            }
            if (mes == 11) {
                return consumo_f_th_ponta_nov + consumo_f_th_cheia_nov + consumo_f_th_vazio_nov;
            }
            if (mes == 12) {
                return consumo_f_th_ponta_dez + consumo_f_th_cheia_dez + consumo_f_th_vazio_dez;
            }
            
        } else if (cicloHorarioLetter == 4) {
            var consumo_f_tth_ponta_jan = new Number($("#consumo_1_ponta").val());
            var consumo_f_tth_ponta_fev = new Number($("#consumo_2_ponta").val());
            var consumo_f_tth_ponta_mar = new Number($("#consumo_3_ponta").val());
            var consumo_f_tth_ponta_abr = new Number($("#consumo_4_ponta").val());
            var consumo_f_tth_ponta_mai = new Number($("#consumo_5_ponta").val());
            var consumo_f_tth_ponta_jun = new Number($("#consumo_6_ponta").val());
            var consumo_f_tth_ponta_jul = new Number($("#consumo_7_ponta").val());
            var consumo_f_tth_ponta_ago = new Number($("#consumo_8_ponta").val());
            var consumo_f_tth_ponta_set = new Number($("#consumo_9_ponta").val());
            var consumo_f_tth_ponta_out = new Number($("#consumo_10_ponta").val());
            var consumo_f_tth_ponta_nov = new Number($("#consumo_11_ponta").val());
            var consumo_f_tth_ponta_dez = new Number($("#consumo_12_ponta").val());

            var consumo_f_tth_cheia_jan = new Number($("#consumo_1_cheia").val());
            var consumo_f_tth_cheia_fev = new Number($("#consumo_2_cheia").val());
            var consumo_f_tth_cheia_mar = new Number($("#consumo_3_cheia").val());
            var consumo_f_tth_cheia_abr = new Number($("#consumo_4_cheia").val());
            var consumo_f_tth_cheia_mai = new Number($("#consumo_5_cheia").val());
            var consumo_f_tth_cheia_jun = new Number($("#consumo_6_cheia").val());
            var consumo_f_tth_cheia_jul = new Number($("#consumo_7_cheia").val());
            var consumo_f_tth_cheia_ago = new Number($("#consumo_8_cheia").val());
            var consumo_f_tth_cheia_set = new Number($("#consumo_9_cheia").val());
            var consumo_f_tth_cheia_out = new Number($("#consumo_10_cheia").val());
            var consumo_f_tth_cheia_nov = new Number($("#consumo_11_cheia").val());
            var consumo_f_tth_cheia_dez = new Number($("#consumo_12_cheia").val());

            var consumo_f_tth_vazio_jan = new Number($("#consumo_1_vazio").val());
            var consumo_f_tth_vazio_fev = new Number($("#consumo_2_vazio").val());
            var consumo_f_tth_vazio_mar = new Number($("#consumo_3_vazio").val());
            var consumo_f_tth_vazio_abr = new Number($("#consumo_4_vazio").val());
            var consumo_f_tth_vazio_mai = new Number($("#consumo_5_vazio").val());
            var consumo_f_tth_vazio_jun = new Number($("#consumo_6_vazio").val());
            var consumo_f_tth_vazio_jul = new Number($("#consumo_7_vazio").val());
            var consumo_f_tth_vazio_ago = new Number($("#consumo_8_vazio").val());
            var consumo_f_tth_vazio_set = new Number($("#consumo_9_vazio").val());
            var consumo_f_tth_vazio_out = new Number($("#consumo_10_vazio").val());
            var consumo_f_tth_vazio_nov = new Number($("#consumo_11_vazio").val());
            var consumo_f_tth_vazio_dez = new Number($("#consumo_12_vazio").val());

            var consumo_f_tth_svazio_jan = new Number($("#consumo_1_super_vazio").val());
            var consumo_f_tth_svazio_fev = new Number($("#consumo_2_super_vazio").val());
            var consumo_f_tth_svazio_mar = new Number($("#consumo_3_super_vazio").val());
            var consumo_f_tth_svazio_abr = new Number($("#consumo_4_super_vazio").val());
            var consumo_f_tth_svazio_mai = new Number($("#consumo_5_super_vazio").val());
            var consumo_f_tth_svazio_jun = new Number($("#consumo_6_super_vazio").val());
            var consumo_f_tth_svazio_jul = new Number($("#consumo_7_super_vazio").val());
            var consumo_f_tth_svazio_ago = new Number($("#consumo_8_super_vazio").val());
            var consumo_f_tth_svazio_set = new Number($("#consumo_9_super_vazio").val());
            var consumo_f_tth_svazio_out = new Number($("#consumo_10_super_vazio").val());
            var consumo_f_tth_svazio_nov = new Number($("#consumo_11_super_vazio").val());
            var consumo_f_tth_svazio_dez = new Number($("#consumo_12_super_vazio").val());

            if (mes == 1) {
                return consumo_f_tth_ponta_jan + consumo_f_tth_cheia_jan + consumo_f_tth_vazio_jan + consumo_f_tth_svazio_jan;
            }
            if (mes == 2) {
                return consumo_f_tth_ponta_fev + consumo_f_tth_cheia_fev + consumo_f_tth_vazio_fev + consumo_f_tth_svazio_fev;
            }
            if (mes == 3) {
                return consumo_f_tth_ponta_mar + consumo_f_tth_cheia_mar + consumo_f_tth_vazio_mar + consumo_f_tth_svazio_mar;
            }
            if (mes == 4) {
                return consumo_f_tth_ponta_abr + consumo_f_tth_cheia_abr + consumo_f_tth_vazio_abr + consumo_f_tth_svazio_abr;
            }
            if (mes == 5) {
                return consumo_f_tth_ponta_mai + consumo_f_tth_cheia_mai + consumo_f_tth_vazio_mai + consumo_f_tth_svazio_mai;
            }
            if (mes == 6) {
                return consumo_f_tth_ponta_jun + consumo_f_tth_cheia_jun + consumo_f_tth_vazio_jun + consumo_f_tth_svazio_jun;
            }
            if (mes == 7) {
                return consumo_f_tth_ponta_jul + consumo_f_tth_cheia_jul + consumo_f_tth_vazio_jul + consumo_f_tth_svazio_jul;
            }
            if (mes == 8) {
                return consumo_f_tth_ponta_ago + consumo_f_tth_cheia_ago + consumo_f_tth_vazio_ago + consumo_f_tth_svazio_ago;
            }
            if (mes == 9) {
                return consumo_f_tth_ponta_set + consumo_f_tth_cheia_set + consumo_f_tth_vazio_set + consumo_f_tth_svazio_set;
            }
            if (mes == 10) {
                return consumo_f_tth_ponta_out + consumo_f_tth_cheia_out + consumo_f_tth_vazio_out + consumo_f_tth_svazio_out;
            }
            if (mes == 11) {
                return consumo_f_tth_ponta_nov + consumo_f_tth_cheia_nov + consumo_f_tth_vazio_nov + consumo_f_tth_svazio_nov;
            }
            if (mes == 12) {
                return consumo_f_tth_ponta_dez + consumo_f_tth_cheia_dez + consumo_f_tth_vazio_dez + consumo_f_tth_svazio_dez;
            }
        }
    }
}

function getConsumoAnualPonta() {

    var iTension = $("#ntensao").val();

    if (iTension == 0 || iTension == 1 || iTension == 2) {
        if (consumoLetter == 1) {
            return somatorio_anual_ufm_tth_ponta;
        } else if (consumoLetter == 2) {
            return consumo_ca_tth_ponta;
        } else {
            return somatorio_anual_f_tth_ponta;
        }
    } else {
        return 0;
    }
}

function getReducaoCustoEnergia() {
    
    var reducaoCustosEnergia = 0;
    custo_simples = 0;
    
    custo_foravazio = 0;
    custo_vazio = 0;
    
    custo_ponta = 0;
    custo_cheia = 0;
        
    cicloHorarioLetter = $('#cicloHorario').val();
    
    if (cicloHorarioLetter == 1) {

        custo_simples = new Number($("#consumo1").val());

    } else if (cicloHorarioLetter == 2) {

        custo_foravazio = new Number($("#fora_vazio2").val());
        custo_vazio = new Number($("#vazio2").val());

    } else if (cicloHorarioLetter == 3) {

        custo_ponta = new Number($("#ponta3").val());
        custo_cheia = new Number($("#cheia3").val());
        custo_vazio = new Number($("#vazio3").val());

    } else if (cicloHorarioLetter == 4) {

        custo_ponta = new Number($("#ponta4").val());
        custo_cheia = new Number($("#cheia4").val());
        custo_vazio = new Number($("#vazio4").val());
    }
       
    if (cicloTarifario != "" && cicloTarifario == 0 && (cicloHorarioLetter == 3 || cicloHorarioLetter == 4)) {
        reducaoCustosEnergia = (autoconsumo_ponta*custo_ponta)+ (autoconsumo_cheia*custo_cheia) + (autoconsumo_vazio*custo_vazio);
    } else if ((cicloTarifario == 1 && (cicloHorarioLetter == 3 || cicloHorarioLetter == 4)) || cicloHorarioLetter == 3) {
        reducaoCustosEnergia = (autoconsumo_ponta*custo_ponta)+ (autoconsumo_cheia*custo_cheia) + (autoconsumo_vazio*custo_vazio); 
    } else if (cicloHorarioLetter == 2) {
        reducaoCustosEnergia = (autoconsumo_foravazio*custo_foravazio)+ (autoconsumo_vazio*custo_vazio);        
    } else if (cicloHorarioLetter == 1) {
        reducaoCustosEnergia = (autoconsumo_simples*custo_simples);
    }

    return reducaoCustosEnergia;
}

function getReducaoCustoPhp() {
    var reducaoCustosPhp = 0;
    var tarifaHoraPonta = $("#pt_horas_ponta4").val();
    var tensao = $("#ntensao").val();
        
    if(tensao==3){
        return reducaoCustosPhp;
    }else if(cicloTarifario!="" && cicloTarifario==0){
        reducaoCustosPhp = autoconsumo_ponta/ciclo_tarifarioI[0].numHoras*tarifaHoraPonta*365;
    }else{        
        reducaoCustosPhp = autoconsumo_ponta/ciclo_tarifarioI[1].numHoras*tarifaHoraPonta*365;
    }

    return reducaoCustosPhp;
}

function upacResultados() {

    getCurvaConsumo();
    curvaProducaoUpac();
    var potencia_upac_call = upacPotenciaCalc();

    getBalancoConsumoProducao();

    excedente();
    
    upac_resultados_pc = potencia_upac_call;

  
    upac_resultados_n_paineis = upac_resultados_pc / 0.275; 
    upac_resultados_area_ocupada = potencia_max_area > 0 && (upac_resultados_n_paineis * 1.7 / 0.8) > potencia_max_area ? potencia_max_area : upac_resultados_n_paineis * 1.7 / 0.8;
    if (potencia_new_area == 0) {
        potencia_new_area = upac_resultados_area_ocupada;
    }
    upac_resultados_prod_volt = upac_resultados_pc * pept_value;

    var excedente_resultados_perc_upac = upacExcedentePerc * 100;
    upac_resultados_reducao_dep_ene = ((upac_resultados_prod_volt - upacExcedenteValue) / consumo_anual) * 100;

    upac_resultados_custos_energia = getUppCustosComEnergia();
    upac_resultados_custos_php = getUppCustosComPhp();

    upac_resultados_custos_isp = consumo_anual * 0.001;

    upac_resultados_custos_energicos = upac_resultados_custos_energia + upac_resultados_custos_isp + upac_resultados_custos_php;

    var upac_autoconsumo_upac = upac_resultados_prod_volt - upacExcedenteValue;

    upac_resultados_reducao_custos_energia = getReducaoCustoEnergia();

    upac_resultados_reducao_custos_php = getReducaoCustoPhp();
    
    upac_resultados_reducao_custos_isp = upac_autoconsumo_upac * 0.001;

    upac_resultados_venda_excedente = upacExcedenteValue * 0.05248*0.9;

    upac_resultados_rec_foto = (excedente_resultados_perc_upac/100) < 0.05 ? upac_resultados_reducao_custos_energia + upac_resultados_reducao_custos_php + upac_resultados_reducao_custos_isp : upac_resultados_reducao_custos_energia + upac_resultados_reducao_custos_php + upac_resultados_reducao_custos_isp + upac_resultados_venda_excedente;

    if(upac_resultados_pc<10){
        upac_resultados_investimento = upac_resultados_pc*investimentoI[0].valor;
    }else if(upac_resultados_pc<50){
        upac_resultados_investimento = upac_resultados_pc*investimentoI[1].valor;
    }else if(upac_resultados_pc<50){
        upac_resultados_investimento = upac_resultados_pc*investimentoI[2].valor;
    }else if(upac_resultados_pc<50){
        upac_resultados_investimento = upac_resultados_pc*investimentoI[3].valor;
    }else{
        upac_resultados_investimento = upac_resultados_pc*investimentoI[4].valor;
    }
    upac_resultados_reducao_custos = upac_resultados_rec_foto/upac_resultados_custos_energicos;
    upac_custos_anuais_new = upac_resultados_investimento * 0.02;
    upac_resultados_payback = upac_resultados_investimento / upac_resultados_rec_foto;

    $('#pot_central_upac').html(upac_resultados_pc.toFixed(0) + ' kW');
    $('#nPaineis_upac').html(upac_resultados_n_paineis.toFixed(0));
    $('#area_ocupada_upac').html(upac_resultados_area_ocupada.toFixed(0) + " m2");
    if (upac_condicao == condicoesLimitePotencia[4]) {
        $('#observations_upac').html(upac_condicao).addClass('message_red');
    } else {
        $('#observations_upac').html(upac_condicao).removeClass('message_red');
    }
    $('#consumo_instalacao_upac').html(consumo_anual.toFixed(0) + ' kWh');
    $('#prod_foto_upac').html(upac_resultados_prod_volt.toFixed(0) + ' kWh');
    $('#excede_upac').html(upacExcedenteValue.toFixed(0) + ' kWh');
    $('#excedentePercent_upac').html(excedente_resultados_perc_upac.toFixed(0) + ' %');
    $('#auto_consumo_upac').html(upac_autoconsumo_upac.toFixed(0) + ' kWh');
    $('#consumo_energia_ren_upac').html(upac_resultados_reducao_dep_ene.toFixed(0) + '%');
    $('#custos_energia_upac').html(upac_resultados_custos_energicos.toFixed(0) + ' €');
    $('#receita_foto_upac').html(upac_resultados_rec_foto.toFixed(0) + ' €');
    $('#reduc_custos_upac').html((upac_resultados_reducao_custos*100).toFixed(0) + '%');
    $('#investe_upac').html(upac_resultados_investimento.toFixed(0) + ' €');
    $('#custos_anuais_upac').html(upac_custos_anuais_new.toFixed(0) + ' €');
    $('#paybck_upac').html(upac_resultados_payback.toFixed(1) + ' anos');
}

function upacPotenciaCalc() {
 
    instalacao_array_upac = [];
    potencia_array = [];
    potencia_upac = 0;

    upac_condicao = upac_condicao != "" && upac_condicao != null && upac_condicao != undefined ? upac_condicao : "";

    var instalacao_potencia_contratada = 0;
    var instalacao_consumo = 0;

    potencia_max_area_upac = new Number($("#newArea").val());
    potencia_max_contratada_upac = new Number($("#potencia").val());
    pept_value = new Number($('#peptInstalada').val());

    instalacao_consumo = 0;
    instalacao_array_upac = [
        ((potencia_max_area_upac != 0 &&
                potencia_max_area_upac != '' &&
                potencia_max_area_upac != undefined && potencia_new_area > potencia_max_area_upac) ?
                potencia_max_area_upac * 0.8 / modulosSolares.area * modulosSolares.potencia : 0),
        instalacao_potencia_contratada,
        instalacao_consumo
    ];

    potencia_max_consumo_upac = calcCurvaConsumoUpacPotencia();
    
    potencia_array = [
        ((potencia_max_area_upac != 0 &&
                potencia_max_area_upac != '' &&
                potencia_max_area_upac != undefined && potencia_new_area > potencia_max_area_upac) ?
                potencia_max_area_upac * 0.8 / modulosSolares.area * modulosSolares.potencia : 0),
        potencia_max_contratada_upac,
        potencia_max_consumo_upac / pept_value
    ];
    var minimo = min(potencia_array);
    
    if (potencia_new_contratada_upac != "" && potencia_new_contratada_upac != null && potencia_new_contratada_upac != undefined && potencia_new_contratada_upac > 0 && (potencia_max_area_upac == "" || potencia_max_area_upac == null || potencia_max_area_upac == undefined || potencia_max_area_upac == 0) && potencia_new_contratada_upac > minimo && potencia_new_contratada_upac <= potencia_max_contratada_upac) {
        potencia_upac = potencia_new_contratada_upac;
    } else if (potencia_new_contratada_upac != "" && potencia_new_contratada_upac != null && potencia_new_contratada_upac != undefined && potencia_new_contratada_upac > 0 && (potencia_max_area_upac == "" || potencia_max_area_upac == null || potencia_max_area_upac == undefined || potencia_max_area_upac == 0)) {
        potencia_upac = potencia_new_contratada_upac > minimo ? minimo : potencia_new_contratada_upac;
    } else if ((potencia_new_contratada_upac == "" || potencia_new_contratada_upac == null || potencia_new_contratada_upac == undefined || potencia_new_contratada_upac == 0) && (potencia_max_area_upac != "" && potencia_max_area_upac != null && potencia_max_area_upac != undefined && potencia_max_area_upac > 0)) {
         potencia_upac = minimo;
    } else {
        potencia_upac = minimo;
    }

    if (potencia_upac == potencia_array[1]) {
        upac_condicao = condicoesLimitePotencia[1];
    } else if (potencia_upac == potencia_array[2]) {
        upac_condicao = condicoesLimitePotencia[2];
    } else if (potencia_upac > minimo && potencia_upac < potencia_array[1]) {
        upac_condicao = condicoesLimitePotencia[4];
    } else if (potencia_upac == potencia_array[0]) {
        upac_condicao = condicoesLimitePotencia[0];
    } else if (potencia_upac < minimo) {
        upac_condicao = "";
    }
    return potencia_upac;
}

function calcCurvaConsumoUpacPotencia() {
    var somatorio = 0;
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 24; j++) {
            if (j >= 7 && j < 20) {
                somatorio += curvaConsumo[i][j].inverno + curvaConsumo[i][j].verao;
            }
        }
    }
    return somatorio;
}

function getScheduleMarks(diaSemana, horaDia) {

    var cenario = $("#cenarios").val();
    if (cenario == 0 && diaSemana >= 0 && diaSemana < 5 && horaDia >= 8 && horaDia < 18) {
        return 'X';
    } else if (cenario == 1 && diaSemana >= 0 && diaSemana < 7 && horaDia >= 8 && horaDia < 22) {
        return 'X';
    } else if (cenario == 2) {
        return 'X';
    } else {
        return 0;
    }
}

function buildHorariosFuncionamento() {

    horasFuncionamento = 0;
    lunchTime = 0;

    for (i = 0; i < 7; i++) {
        var somatorioX = 0;
        horarioFuncionamentoSemanal[i] = [];
        for (j = 0; j < 24; j++) {
            var resp = getScheduleMarks(i, j);
            if (resp == 0) {
                horarioFuncionamentoSemanal[i][j] = "";
            } else {
                horarioFuncionamentoSemanal[i][j] = resp;
                if (j == 13) {
                    lunchTime++;
                }
                somatorioX++;
            }
        }
        horarioFuncionamentoSemanal[i][j] = somatorioX;
        horasFuncionamento += somatorioX;
    }

    horasFuncionamento = horasFuncionamento * 52;
}

function getCurvaConsumo() {
    curvaConsumo = [];
    var totalConsumo = 0;
    var totaisInverno = 0;
    var totaisVerao = 0;
    var pausaAlmoco = $("#lunchBreak").val();
    var invernoSum = 0;
    var veraoSum = 0;
    var i = 0;
    var j = 0;

    var totalInvernoVertical = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var totalVeraoVertical = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < 7; i++) {
        curvaConsumo[i] = [];
        totaisInverno = 0;
        totaisVerao = 0;
        for (j = 0; j < 24; j++) {
            var inverno = 0;
            var verao = 0;
  
            if (pausaAlmoco != "" && pausaAlmoco != undefined && pausaAlmoco == 0 && horarioFuncionamentoSemanal[i][j] == 'X' && j == 13) {

                inverno = (consumo_anual * des_consumo.rest_consumo / (horasFuncionamento - (lunchTime * 22)) * consumo_almoco) + ((consumo_anual * des_consumo.base) / 8760);

            } else if (pausaAlmoco != "" && pausaAlmoco != undefined && pausaAlmoco == 0 && horarioFuncionamentoSemanal[i][j] == 'X') {

                inverno = consumo_anual * des_consumo.rest_consumo / (horasFuncionamento - (lunchTime * 22)) + ((consumo_anual * des_consumo.base) / 8760);

            } else if (pausaAlmoco != "" && pausaAlmoco != undefined && pausaAlmoco == 1 && horarioFuncionamentoSemanal[i][j] == 'X') {

                inverno = ((consumo_anual * des_consumo.rest_consumo) / horasFuncionamento) + ((consumo_anual * des_consumo.base) / 8760);

            } else {
                inverno = consumo_anual * des_consumo.base / 8760;
            }
            inverno = inverno * 22;
          
            if (pausaAlmoco != "" && pausaAlmoco != undefined && pausaAlmoco == 0 && horarioFuncionamentoSemanal[i][j] == 'X' && j == 13) {

                verao = (consumo_anual * des_consumo.rest_consumo / (horasFuncionamento - (lunchTime * 30)) * consumo_almoco) + ((consumo_anual * des_consumo.base) / 8760);

            } else if (pausaAlmoco != "" && pausaAlmoco != undefined && pausaAlmoco == 0 && horarioFuncionamentoSemanal[i][j] == 'X') {

                verao = consumo_anual * des_consumo.rest_consumo / (horasFuncionamento - (lunchTime * 30)) + ((consumo_anual * des_consumo.base) / 8760);

            } else if (pausaAlmoco != "" && pausaAlmoco != undefined && pausaAlmoco == 1 && horarioFuncionamentoSemanal[i][j] == 'X') {

                verao = ((consumo_anual * des_consumo.rest_consumo) / horasFuncionamento) + ((consumo_anual * des_consumo.base) / 8760);

            } else {
                verao = consumo_anual * des_consumo.base / 8760;
            }
            verao = verao * 30;
            
            curvaConsumo[i][j] = {
                inverno: inverno,
                verao: verao
            };

            invernoSum += inverno;
            veraoSum += verao;
            totalConsumo += verao + inverno;
            totaisInverno += inverno;
            totaisVerao += verao;
            totalInvernoVertical[j] += inverno;
            totalVeraoVertical[j] += verao;
        }
        
        curvaConsumo[i][j] = {
            inverno: totaisInverno,
            verao: totaisVerao
        };

    }
    curvaConsumo[i] = [];
    for (j = 0; j < 24; j++) {
        curvaConsumo[i][j] = {
            inverno: totalInvernoVertical[j],
            verao: totalVeraoVertical[j]
        };
    }
    curvaConsumo[i][j] = {
        inverno: invernoSum,
        verao: veraoSum
    };

    calcConsumoHorasSol();
}

function calcConsumoHorasSol() {
    
    if (cicloTarifario != "" && cicloTarifario == 0) {
       
        var somaPontaInverno = 0;
        var somaPontaVerao = 0;
        var somaCheiaInverno = 0;
        var somaCheiaVerao = 0;
        var totaisSemanalInverno = 0;
        var totaisSemanalVerao = 0;
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 24; j++) {
                
                if (i >= 0 && i < 5 && j >= 9 && j < 12) {
                    somaPontaInverno += curvaConsumo[i][j].inverno;
                    somaPontaVerao += curvaConsumo[i][j].verao;
                }
              
                if (i >= 0 && i < 5 && (j == 8 || (j >= 12 && j < 17))) {
                    somaCheiaInverno += curvaConsumo[i][j].inverno;
                } else if (i == 5 && j >= 9 && j < 13) {
                    somaCheiaInverno += curvaConsumo[i][j].inverno;
                }
                if (i >= 0 && i < 5 && ((j >= 7 && j < 9) || (j >= 12 && j < 20))) {
                    somaCheiaVerao += curvaConsumo[i][j].verao;
                } else if (i == 5 && j >= 9 && j < 14) {
                    somaCheiaVerao += curvaConsumo[i][j].verao;
                }
                if (j >= 8 && j < 17) {
                    totaisSemanalInverno += curvaConsumo[i][j].inverno;
                }
                if (j >= 7 && j < 20) {
                    totaisSemanalVerao += curvaConsumo[i][j].verao;
                }
            }
        }
        consumoHorasSolGlobal[0].periodoTarifario[0].verao = somaPontaVerao / totaisSemanalVerao;
        consumoHorasSolGlobal[0].periodoTarifario[1].verao = somaCheiaVerao / totaisSemanalVerao;
        consumoHorasSolGlobal[0].periodoTarifario[2].verao = 1 - consumoHorasSolGlobal[0].periodoTarifario[1].verao - consumoHorasSolGlobal[0].periodoTarifario[0].verao;

        consumoHorasSolGlobal[0].periodoTarifario[0].inverno = somaPontaInverno / totaisSemanalInverno;
        consumoHorasSolGlobal[0].periodoTarifario[1].inverno = somaCheiaInverno / totaisSemanalInverno;
        consumoHorasSolGlobal[0].periodoTarifario[2].inverno = 1 - consumoHorasSolGlobal[0].periodoTarifario[1].inverno - consumoHorasSolGlobal[0].periodoTarifario[0].inverno;

    } else if (cicloTarifario == 1 || cicloHorarioLetter == 3 || cicloHorarioLetter == 2) {
        var somaPontaInverno = 0;
        var somaPontaVerao = 0;
        var somaCheiaInverno = 0;
        var somaCheiaVerao = 0;
        var totaisDiarioTriInverno = 0;
        var totaisDiarioTriVerao = 0;

        for (i = 0; i < 7; i++) {
            for (j = 0; j < 24; j++) {
                
                if (j >= 9 && j < 11) {
                    somaPontaInverno += curvaConsumo[i][j].inverno;
                } else if ((j >= 11 && j < 13) || j == 19) {
                    somaPontaVerao += curvaConsumo[i][j].verao;
                }

                if ((j >= 8 && j < 11) || (j >= 13 && j < 19)) {
                    somaCheiaVerao += curvaConsumo[i][j].verao;
                }
               
                if (j >= 8 && j < 17) {
                    totaisDiarioTriInverno += curvaConsumo[i][j].inverno;
                }
                if (j >= 7 && j < 20) {
                    totaisDiarioTriVerao += curvaConsumo[i][j].verao;
                }
            }
        }
        consumoHorasSolGlobal[1].periodoTarifario[0].verao = somaPontaVerao / totaisDiarioTriVerao;
        consumoHorasSolGlobal[1].periodoTarifario[1].verao = somaCheiaVerao / totaisDiarioTriVerao;
        consumoHorasSolGlobal[1].periodoTarifario[2].verao = 1 - consumoHorasSolGlobal[1].periodoTarifario[1].verao - consumoHorasSolGlobal[1].periodoTarifario[0].verao;

        consumoHorasSolGlobal[1].periodoTarifario[0].inverno = somaPontaInverno / totaisDiarioTriInverno;
        consumoHorasSolGlobal[1].periodoTarifario[1].inverno = 1 - consumoHorasSolGlobal[1].periodoTarifario[0].inverno;
        consumoHorasSolGlobal[1].periodoTarifario[2].inverno = 0;
       
        consumoHorasSolGlobal[2].periodoTarifario[0].verao = consumoHorasSolGlobal[1].periodoTarifario[1].verao + consumoHorasSolGlobal[1].periodoTarifario[0].verao;
        consumoHorasSolGlobal[2].periodoTarifario[1].verao = 1 - consumoHorasSolGlobal[2].periodoTarifario[0].verao;

        consumoHorasSolGlobal[2].periodoTarifario[0].inverno = 1;
        consumoHorasSolGlobal[2].periodoTarifario[1].inverno = 0;
    }
}

function getConsumoBalanco(mes) {

    var consumo = 0;
 
    var periodos = $('#vacationsTime').val();
    var encerra = $("#vacations").val();

    if (consumoLetter == 12) {
        return consumo_anual;
    } else if (consumoLetter == 1) {
        return consumo_anual / 12;
    } else {
        if (periodos == "" || periodos == undefined) {
            return consumo_anual / 12;
        } else {
            return consumo_anual * varConsumoMensal[i].periodos[periodos].value;
        }
    }
    return consumo;
}

function getBalancoConsumoProducao() {

    consumos_balanco_prd = [];
    for (i = 0; i < 12; i++) {
        consumos_balanco_prd[i] = getConsumoBalanco(i);
    }

    producao_upp = [];
    for (i = 0; i < 12; i++) {
        producao_upp[i] = (uppConsumoAnual * pept_value * producaoSolarMes[i].producao > 2 * consumos_balanco_prd[i]) ? 2 * consumos_balanco_prd[i] : uppConsumoAnual * pept_value * producaoSolarMes[i].producao;
    }

    producao_upac = [];
    for (i = 0; i < 12; i++) {
        producao_upac[i] = producaoSolarMes[i].producao * potencia_upac * pept_value;
    }
}

function curvaProducaoUpac() {
    producaoFotovoltaica = potencia_upac * pept_value;
    return producaoFotovoltaica;
}

function getConsumoHorasSolInverno() {
    var somaConsumo = 0;
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 24; j++) {
            if (j >= 8 && j < 17) {
                somaConsumo += curvaConsumo[i][j].inverno;
            }
        }
    }
    return somaConsumo;
}

function getConsumoHorasSolVerao() {
    var somaConsumo = 0;
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 24; j++) {
            if (j >= 7 && j < 20) {
                somaConsumo += curvaConsumo[i][j].verao;
            }
        }
    }
    return somaConsumo;
}

function excedente() {

    var cicloHorarioLetter = $('#cicloHorario').val();
   
    var consumo_inverno = curvaConsumo[7][24].inverno;
    var consumo_verao = curvaConsumo[7][24].verao;
    var consumoIVTotal = consumo_inverno + consumo_verao;

    var consumo_inverno_perc = consumo_inverno / consumoIVTotal;
    var consumo_verao_perc = consumo_verao / consumoIVTotal;

    var consumoHorasSolInverno = getConsumoHorasSolInverno();
    var consumoHorasSolVerao = getConsumoHorasSolVerao();
    var consumoHorasSolTotal = consumoHorasSolInverno + consumoHorasSolVerao;

    var consumoHorasSolInverno_perc = consumoHorasSolInverno / consumo_inverno;
    var consumoHorasSolVerao_perc = consumoHorasSolVerao / consumo_verao;

    var totalTotal = consumoHorasSolTotal / consumoIVTotal;

    var producao_mes_ponta = [];
    var producao_mes_cheia = [];
    var producao_mes_vazio = [];
    var producao_mes_foravazio = [];

    var consumosHorasSolTotais = [];

    var consumos_mes_ponta = [];
    var consumos_mes_cheia = [];
    var consumos_mes_vazio = [];
    var consumos_mes_foravazio = [];

    var excedente_mes_simples = [];
    var excedente_mes_ponta = [];
    var excedente_mes_cheia = [];
    var excedente_mes_vazio = [];
    var excedente_mes_foravazio = [];

    var excedente_mes_total = [];
    var excedente_mes_perc = [];

    autoconsumo_ponta = 0;
    autoconsumo_cheia = 0;
    autoconsumo_vazio = 0;
    autoconsumo_foravazio = 0;
    autoconsumo_simples = 0;

    var totaisExcedentes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var control = 0;
    for (i = 0; i < 12; i++) {
        control = 0;
       
        if (cicloTarifario != "" && cicloTarifario == 0 && (cicloHorarioLetter == 3 || cicloHorarioLetter == 4)) {
            if (i >= 3 && i < 10) {
                producao_mes_ponta[i] = producao_upac[i] * producaoSolarPeriodo[cicloTarifario].periodoTarifario[0].verao;
                totaisExcedentes[control++] += producao_mes_ponta[i];
                producao_mes_cheia[i] = producao_upac[i] * producaoSolarPeriodo[cicloTarifario].periodoTarifario[1].verao;
                totaisExcedentes[control++] += producao_mes_cheia[i];
                producao_mes_vazio[i] = producao_upac[i] * producaoSolarPeriodo[cicloTarifario].periodoTarifario[2].verao;
                totaisExcedentes[control++] += producao_mes_vazio[i];
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolVerao_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
                consumos_mes_ponta[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[cicloTarifario].periodoTarifario[0].verao;
                totaisExcedentes[control++] += consumos_mes_ponta[i];
                consumos_mes_cheia[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[cicloTarifario].periodoTarifario[1].verao;
                totaisExcedentes[control++] += consumos_mes_cheia[i];
                consumos_mes_vazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[cicloTarifario].periodoTarifario[2].verao;
                totaisExcedentes[control++] += consumos_mes_vazio[i];
            } else {
                producao_mes_ponta[i] = producao_upac[i] * producaoSolarPeriodo[cicloTarifario].periodoTarifario[0].inverno;
                totaisExcedentes[control++] += producao_mes_ponta[i];
                producao_mes_cheia[i] = producao_upac[i] * producaoSolarPeriodo[cicloTarifario].periodoTarifario[1].inverno;
                totaisExcedentes[control++] += producao_mes_cheia[i];
                producao_mes_vazio[i] = producao_upac[i] * producaoSolarPeriodo[cicloTarifario].periodoTarifario[2].inverno;
                totaisExcedentes[control++] += producao_mes_vazio[i];
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolInverno_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
                consumos_mes_ponta[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[cicloTarifario].periodoTarifario[0].inverno;
                totaisExcedentes[control++] += consumos_mes_ponta[i];
                consumos_mes_cheia[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[cicloTarifario].periodoTarifario[1].inverno;
                totaisExcedentes[control++] += consumos_mes_cheia[i];
                consumos_mes_vazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[cicloTarifario].periodoTarifario[2].inverno;
                totaisExcedentes[control++] += consumos_mes_vazio[i];
            }

            excedente_mes_ponta[i] = producao_mes_ponta[i] - consumos_mes_ponta[i] < 0 ? 0 : producao_mes_ponta[i] - consumos_mes_ponta[i];
            totaisExcedentes[control++] += excedente_mes_ponta[i];
            excedente_mes_cheia[i] = producao_mes_cheia[i] - consumos_mes_cheia[i] < 0 ? 0 : producao_mes_cheia[i] - consumos_mes_cheia[i];
            totaisExcedentes[control++] += excedente_mes_cheia[i];
            excedente_mes_vazio[i] = producao_mes_vazio[i] - consumos_mes_vazio[i] < 0 ? 0 : producao_mes_vazio[i] - consumos_mes_vazio[i];
            totaisExcedentes[control++] += excedente_mes_vazio[i];

            excedente_mes_total[i] = excedente_mes_ponta[i] + excedente_mes_cheia[i] + excedente_mes_vazio[i];

            totaisExcedentes[control++] += excedente_mes_ponta[i] + excedente_mes_cheia[i] + excedente_mes_vazio[i];

        } else if ((cicloTarifario == 1 && (cicloHorarioLetter == 3 || cicloHorarioLetter == 4)) || cicloHorarioLetter == 3) {
            if (i >= 3 && i < 10) {
                producao_mes_ponta[i] = producao_upac[i] * producaoSolarPeriodo[1].periodoTarifario[0].verao;
                totaisExcedentes[control++] += producao_mes_ponta[i];
                producao_mes_cheia[i] = producao_upac[i] * producaoSolarPeriodo[1].periodoTarifario[1].verao;
                totaisExcedentes[control++] += producao_mes_cheia[i];
                producao_mes_vazio[i] = producao_upac[i] * producaoSolarPeriodo[1].periodoTarifario[2].verao;
                totaisExcedentes[control++] += producao_mes_vazio[i];
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolVerao_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
                consumos_mes_ponta[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[1].periodoTarifario[0].verao;
                totaisExcedentes[control++] += consumos_mes_ponta[i];
                consumos_mes_cheia[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[1].periodoTarifario[1].verao;
                totaisExcedentes[control++] += consumos_mes_cheia[i];
                consumos_mes_vazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[1].periodoTarifario[2].verao;
                totaisExcedentes[control++] += consumos_mes_vazio[i];
            } else {
                producao_mes_ponta[i] = producao_upac[i] * producaoSolarPeriodo[1].periodoTarifario[0].inverno;
                totaisExcedentes[control++] += producao_mes_ponta[i];
                producao_mes_cheia[i] = producao_upac[i] * producaoSolarPeriodo[1].periodoTarifario[1].inverno;
                totaisExcedentes[control++] += producao_mes_cheia[i];
                producao_mes_vazio[i] = producao_upac[i] * producaoSolarPeriodo[1].periodoTarifario[2].inverno;
                totaisExcedentes[control++] += producao_mes_vazio[i];
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolInverno_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
                consumos_mes_ponta[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[1].periodoTarifario[0].inverno;
                totaisExcedentes[control++] += consumos_mes_ponta[i];
                consumos_mes_cheia[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[1].periodoTarifario[1].inverno;
                totaisExcedentes[control++] += consumos_mes_cheia[i];
                consumos_mes_vazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[1].periodoTarifario[2].inverno;
                totaisExcedentes[control++] += consumos_mes_vazio[i];
            }

            excedente_mes_ponta[i] = producao_mes_ponta[i] - consumos_mes_ponta[i] < 0 ? 0 : producao_mes_ponta[i] - consumos_mes_ponta[i];
            totaisExcedentes[control++] += excedente_mes_ponta[i];
            excedente_mes_cheia[i] = producao_mes_cheia[i] - consumos_mes_cheia[i] < 0 ? 0 : producao_mes_cheia[i] - consumos_mes_cheia[i];
            totaisExcedentes[control++] += excedente_mes_cheia[i];
            excedente_mes_vazio[i] = producao_mes_vazio[i] - consumos_mes_vazio[i] < 0 ? 0 : producao_mes_vazio[i] - consumos_mes_vazio[i];
            totaisExcedentes[control++] += excedente_mes_vazio[i];

            excedente_mes_total[i] = excedente_mes_ponta[i] + excedente_mes_cheia[i] + excedente_mes_vazio[i];

            totaisExcedentes[control++] += excedente_mes_ponta[i] + excedente_mes_cheia[i] + excedente_mes_vazio[i];

        } else if (cicloHorarioLetter == 2) {
            if (i >= 3 && i < 10) {
                producao_mes_foravazio[i] = producao_upac[i] * producaoSolarPeriodo[2].periodoTarifario[0].verao;
                totaisExcedentes[control++] += producao_mes_foravazio[i];
                producao_mes_vazio[i] = producao_upac[i] * producaoSolarPeriodo[2].periodoTarifario[1].verao;
                totaisExcedentes[control++] += producao_mes_vazio[i];
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolVerao_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
                consumos_mes_foravazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[2].periodoTarifario[0].verao;
                totaisExcedentes[control++] += consumos_mes_foravazio[i];
                consumos_mes_vazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[2].periodoTarifario[1].verao;
                totaisExcedentes[control++] += consumos_mes_vazio[i];
            } else {
                producao_mes_foravazio[i] = producao_upac[i] * producaoSolarPeriodo[2].periodoTarifario[0].inverno;
                totaisExcedentes[control++] += producao_mes_foravazio[i];
                producao_mes_vazio[i] = producao_upac[i] * producaoSolarPeriodo[2].periodoTarifario[1].inverno;
                totaisExcedentes[control++] += producao_mes_vazio[i];
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolInverno_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
                consumos_mes_foravazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[2].periodoTarifario[0].inverno;
                totaisExcedentes[control++] += consumos_mes_foravazio[i];
                consumos_mes_vazio[i] = consumosHorasSolTotais[i] * consumoHorasSolGlobal[2].periodoTarifario[1].inverno;
                totaisExcedentes[control++] += consumos_mes_vazio[i];
            }

            excedente_mes_foravazio[i] = producao_mes_foravazio[i] - consumos_mes_foravazio[i] < 0 ? 0 : producao_mes_foravazio[i] - consumos_mes_foravazio[i];
            totaisExcedentes[control++] += excedente_mes_foravazio[i];
            excedente_mes_vazio[i] = producao_mes_vazio[i] - consumos_mes_vazio[i] < 0 ? 0 : producao_mes_vazio[i] - consumos_mes_vazio[i];
            totaisExcedentes[control++] += excedente_mes_vazio[i];

            excedente_mes_total[i] = excedente_mes_foravazio[i] + excedente_mes_vazio[i];

            totaisExcedentes[control++] += excedente_mes_foravazio[i] + excedente_mes_vazio[i];
        } else if (cicloHorarioLetter == 1) {
            if (i >= 3 && i < 10) {
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolVerao_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
            } else {
                consumosHorasSolTotais[i] = consumos_balanco_prd[i] * consumoHorasSolInverno_perc;
                totaisExcedentes[control++] += consumosHorasSolTotais[i];
            }

            excedente_mes_simples[i] = producao_upac[i] - consumosHorasSolTotais[i] < 0 ? 0 : producao_upac[i] - consumosHorasSolTotais[i];
            
            totaisExcedentes[control++] += excedente_mes_simples[i];
        }
    }

    if (cicloTarifario != "" && cicloTarifario == 0 && (cicloHorarioLetter == 3 || cicloHorarioLetter == 4)) {

        autoconsumo_ponta = totaisExcedentes[0] - totaisExcedentes[control - 4];
        autoconsumo_cheia = totaisExcedentes[1] - totaisExcedentes[control - 3];
        autoconsumo_vazio = totaisExcedentes[2] - totaisExcedentes[control - 2];

    } else if ((cicloTarifario == 1 && (cicloHorarioLetter == 3 || cicloHorarioLetter == 4)) || cicloHorarioLetter == 3) {

        autoconsumo_ponta = totaisExcedentes[0] - totaisExcedentes[control - 4];
        autoconsumo_cheia = totaisExcedentes[1] - totaisExcedentes[control - 3];
        autoconsumo_vazio = totaisExcedentes[2] - totaisExcedentes[control - 2];

    } else if (cicloHorarioLetter == 2) {

        autoconsumo_vazio = totaisExcedentes[2] - totaisExcedentes[control - 3];
        autoconsumo_foravazio = totaisExcedentes[2] - totaisExcedentes[control - 2];
    } else if (cicloHorarioLetter == 1) {

        autoconsumo_simples = (potencia_upac * pept_value) - totaisExcedentes[control - 1];
    }

    totaisExcedentes[control] = totaisExcedentes[control - 1] / (potencia_upac * pept_value);

    upacExcedenteValue = totaisExcedentes[control - 1];
    upacExcedentePerc = totaisExcedentes[control];
    
    if (excedente_mes_total.length == 12) {
        excedente_mes_total_graph = excedente_mes_total;
    } else {
        excedente_mes_total_graph = excedente_mes_simples;
    }
}