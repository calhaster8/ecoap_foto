function uppPotenciaCalc() {
    potencia_array =[];
    upp_condicao = upp_condicao!="" && upp_condicao!=null && upp_condicao!=undefined ? upp_condicao : "";
    uppConsumoAnual=0;
    potencia_max_consumo_anual=0;
    //todo extract hardcoded value to info
    potencia_max_area = new Number($("#newArea").val());
    potencia_max_contratada = new Number($("#potencia").val());

    pept_value = new Number($('#peptInstalada').val());

    potencia_array = [
        ((potencia_max_area != 0 &&
            potencia_max_area != '' &&
            potencia_max_area != undefined && potencia_new_area>potencia_max_area) ?
            potencia_max_area * 0.8 / modulosSolares.area * modulosSolares.potencia : 0),
        potencia_max_contratada,
        potencia_max_consumo_anual
    ];

    //todo extract hardcoded value to info
    var uppca = getUppConsumoAnual();
    
    potencia_array[2] = (uppca * 2) / pept_value;
    potencia_upp = min(potencia_array);  
    
    uppConsumoAnual = (potencia_upp > 250 ? 250 : potencia_upp);
    
    if(potencia_new_contratada!="" && potencia_new_contratada!=null && potencia_new_contratada!=undefined && potencia_new_contratada>0 && (potencia_max_area=="" || potencia_max_area==null || potencia_max_area == undefined || potencia_max_area==0)){
        uppConsumoAnual = potencia_new_contratada > 250 ? 250 : potencia_new_contratada;
    }else if((potencia_new_contratada=="" || potencia_new_contratada==null || potencia_new_contratada==undefined || potencia_new_contratada==0) && (potencia_max_area!="" && potencia_max_area!=null && potencia_max_area != undefined && potencia_max_area>0)){
        //todo if needed
    }else if(potencia_new_contratada!="" && potencia_new_contratada!=null && potencia_new_contratada!=undefined && potencia_new_contratada>0 && potencia_max_area!="" && potencia_max_area!=null && potencia_max_area != undefined && potencia_max_area>0 && potencia_new_contratada<potencia_upp){
        uppConsumoAnual = potencia_new_contratada;
        
    }
        if (uppConsumoAnual == potencia_array[1]) {
            upp_condicao = condicoesLimitePotencia[1];//"Limite de potência pela potência contratada";//condicoesLimitePotencia[1]
        } else if(uppConsumoAnual == potencia_array[2]) {
            upp_condicao = condicoesLimitePotencia[2];//"Limite de potência pelo consumo"; //
        } else if(potencia_upp > 250) {
            upp_condicao = condicoesLimitePotencia[3];//"Limite de potência pela lei"; //
        } else if(uppConsumoAnual == potencia_array[0]) {
            upp_condicao = condicoesLimitePotencia[0]; //"Limite de potência pela área disponível"; //
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
    //criar var potencia upp, chama uppCalc
    var potencia_upp_call = uppPotenciaCalc();

    upp_resultados_pc = potencia_upp_call;
    
    //todo extract hardcoded value to info
    upp_resultados_n_paineis = upp_resultados_pc/0.275; //Info C157
    upp_resultados_area_ocupada =  potencia_max_area>0 && (upp_resultados_n_paineis*1.7/0.8) > potencia_max_area ? potencia_max_area : upp_resultados_n_paineis*1.7/0.8; // * Info C158 / 0.8
    if(potencia_new_area==0){
        potencia_new_area = upp_resultados_area_ocupada;
    }

    upp_resultados_prod_volt = upp_resultados_pc * pept_value;  //upp_resultados_pc/potencia_max_pe_pi;

    var consumo_producao = getConsumo(consumoLetter,cicloHorarioLetter,i);
    
    upp_resultados_reducao_dep_ene = (upp_resultados_prod_volt /consumo_producao)*100;
    
    upp_resultados_custos_energia = getUppCustosComEnergia(); // analisar folha
    upp_resultados_custos_php = getUppCustosComPhp(); //analisar folha 
    var excedente_resultados = (upp_resultados_prod_volt>consumo_anual*2) ? upp_resultados_prod_volt-consumo_anual : 0 ; 
    var excedente_resultados_perc = (excedente_resultados /upp_resultados_prod_volt)*100;    //todo extract hardcoded value to info
    upp_resultados_custos_isp = consumo_anual*0.001;
    
    upp_resultados_custos_energicos = upp_resultados_custos_energia + upp_resultados_custos_isp + upp_resultados_custos_php;
    upp_resultados_rec_foto = upp_resultados_prod_volt * tarifaUpp();
    upp_resultados_reducao_custos = (upp_resultados_rec_foto/upp_resultados_custos_energicos)*100;
    upp_resultados_investimento = getUppInvestimento();
    upp_custos_anuais_new = upp_resultados_investimento * 0.02;
    upp_resultados_payback = upp_resultados_investimento/upp_resultados_rec_foto;
    var upp_autoconsumo = upp_resultados_prod_volt - excedente_resultados;
 
    
    $('#pot_central').html(upp_resultados_pc.toFixed(0) + ' kW');
    $('#nPaineis').html(upp_resultados_n_paineis.toFixed(0));
    $('#area_ocupada').html(upp_resultados_area_ocupada.toFixed(0) + " m²");
    $('#observations').html(upp_condicao);
    $('#consumo_instalacao').html(consumo_anual.toFixed(0) + ' kWh');
    $('#prod_foto').html(upp_resultados_prod_volt.toFixed(0) + ' kWh');
    $('#excede').html(excedente_resultados.toFixed(0) + ' kWh');
    $('#excedentePercent').html(excedente_resultados_perc.toFixed(0) + ' %');
    $('#auto_consumo').html(upp_autoconsumo.toFixed(0) + ' kWh');
    $('#consumo_energia_ren').html(upp_resultados_reducao_dep_ene.toFixed(0) + '%');
    $('#custos_energia').html(upp_resultados_custos_energicos.toFixed(0) + ' €');
    $('#receita_foto').html(upp_resultados_rec_foto.toFixed(0) + ' €' + '<br>' + catUPP.nome);
    $('#reduc_custos').html(upp_resultados_reducao_custos.toFixed(0) + '%');
    $('#investe').html(upp_resultados_investimento.toFixed(0) + ' €');
    $('#custos_anuais').html(upp_custos_anuais_new.toFixed(0) + ' €');
    $('#paybck').html(upp_resultados_payback.toFixed(1) + ' anos');
}

function getUppCustosComEnergia(){

    var custosEnergia = 0;
    if (consumoLetter == 1) {
        
        if(cicloHorarioLetter==1){

            var custo_simples = new Number($("#consumo1").val()); //Tarifario table
            custosEnergia = custo_simples * somatorio_anual_ufm_simples;
            
        }else if(cicloHorarioLetter==2){

            var custo_bh_foravazio = new Number($("#fora_vazio2").val());
            var custo_bh_vazio = new Number($("#vazio2").val());

            custosEnergia = (custo_bh_foravazio*somatorio_anual_ufm_bh_foravazio)+(custo_bh_vazio*somatorio_anual_ufm_bh_vazio);
        
        }else if(cicloHorarioLetter==3){

            var custo_th_ponta = new Number($("#ponta3").val());
            var custo_th_cheia = new Number($("#cheia3").val());
            var custo_th_vazio = new Number($("#vazio3").val());
            
            custosEnergia = (custo_th_ponta*somatorio_anual_ufm_th_ponta)+(custo_th_cheia*somatorio_anual_ufm_th_cheia)+(custo_th_vazio*somatorio_anual_ufm_th_vazio);

        }else if(cicloHorarioLetter==4){

            var custo_tth_ponta = new Number($("#ponta4").val());
            var custo_tth_cheia = new Number($("#cheia4").val());
            var custo_tth_vazio = new Number($("#vazio4").val());
            var custo_tth_svazio = new Number($("#super_vazio4").val());

            custosEnergia = (custo_tth_ponta*somatorio_anual_ufm_tth_ponta)+(custo_tth_cheia*somatorio_anual_ufm_tth_cheia)+(custo_tth_vazio*somatorio_anual_ufm_tth_vazio)+(custo_tth_svazio*somatorio_anual_ufm_tth_svazio);
        }
        
    }else if (consumoLetter == 2) {

        if (cicloHorarioLetter == 1) {

            var custo_simples = new Number($("#consumo1").val());
            custosEnergia = custo_simples * consumo_ca_simples;

        } else if (cicloHorarioLetter == 2) {

            var custo_bh_foravazio = new Number($("#fora_vazio2").val());
            var custo_bh_vazio = new Number($("#vazio2").val());
            
            custosEnergia = (custo_bh_foravazio*consumo_ca_bh_foravazio)+(custo_bh_vazio*consumo_ca_bh_vazio);

        } else if (cicloHorarioLetter == 3) {

            var custo_th_ponta = new Number($("#ponta3").val());
            var custo_th_cheia = new Number($("#cheia3").val());
            var custo_th_vazio = new Number($("#vazio3").val());
            
            custosEnergia = (custo_th_ponta*consumo_ca_th_ponta)+(custo_th_cheia*consumo_ca_th_cheia)+(custo_th_vazio*consumo_ca_th_vazio);

        } else if (cicloHorarioLetter == 4) {

            var custo_tth_ponta = new Number($("#ponta4").val());
            var custo_tth_cheia = new Number($("#cheia4").val());
            var custo_tth_vazio = new Number($("#vazio4").val());
            var custo_tth_svazio = new Number($("#super_vazio4").val());
            
            custosEnergia = (custo_tth_ponta*consumo_ca_tth_ponta)+(custo_tth_cheia*consumo_ca_tth_cheia)+(custo_tth_vazio*consumo_ca_tth_vazio)+(custo_tth_svazio*consumo_ca_tth_svazio);
        
        }

    } else if (consumoLetter == 12) {

        if(cicloHorarioLetter==1){

            var custo_simples = new Number($("#consumo1").val());
            custosEnergia = custo_simples * somatorio_anual_f_simples;
            
        }else if(cicloHorarioLetter==2){

            var custo_bh_foravazio = new Number($("#fora_vazio2").val());
            var custo_bh_vazio = new Number($("#vazio2").val());

            custosEnergia = (custo_bh_foravazio*somatorio_anual_f_bh_foravazio)+(custo_bh_vazio*somatorio_anual_f_bh_vazio);
        
        }else if(cicloHorarioLetter==3){

            var custo_th_ponta = new Number($("#ponta3").val());
            var custo_th_cheia = new Number($("#cheia3").val());
            var custo_th_vazio = new Number($("#vazio3").val());
            
            custosEnergia = (custo_th_ponta*somatorio_anual_f_th_ponta)+(custo_th_cheia*somatorio_anual_f_th_cheia)+(custo_th_vazio*somatorio_anual_f_th_vazio);

        }else if(cicloHorarioLetter==4){

            var custo_tth_ponta = new Number($("#ponta4").val());
            var custo_tth_cheia = new Number($("#cheia4").val());
            var custo_tth_vazio = new Number($("#vazio4").val());
            var custo_tth_svazio = new Number($("#super_vazio4").val());

            custosEnergia = (custo_tth_ponta*somatorio_anual_f_tth_ponta)+(custo_tth_cheia*somatorio_anual_f_tth_cheia)+(custo_tth_vazio*somatorio_anual_f_tth_vazio)+(custo_tth_svazio*somatorio_anual_f_tth_svazio);
        }
        
    }
    
    return custosEnergia;
}

function getUppCustosComPhp(){
    
    var uppCustosComPhp = 0;    
    
    if ($('#pt_horas_ponta4').val() != undefined){
        ptHorasPonta = new Number($('#pt_horas_ponta4').val());
        var cicloTarifario = new Number($('#cicloTarifario').val());
        uppCustosComPhp = getConsumoAnualPonta() / ciclo_tarifarioI[cicloTarifario].numHoras * ptHorasPonta * 365;
    }
    return uppCustosComPhp;
    
}

function getUppInvestimento(){
    
    //var upp_investimento = 0;
    
    for(var i = 0; i < investimentoI.length; i++) {
        if (investimentoI[i].max == undefined){
            return upp_resultados_pc * investimentoI[i].valor;
        }else if(upp_resultados_pc < investimentoI[i].max && upp_resultados_pc >= investimentoI[i].min) {
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
    
    //get facturas
    var consumoLetter = $('#facturas').val();
    //get ciclo horario
    var cicloHorarioLetter = $('#cicloHorario').val();
    //get periodos encerramento
    var periodos = $('#vacationsTime').val();
    var encerra = $("#vacations").val();
    //forloop ?
    for (var i=1;i<13;i++){
        if (consumoLetter == 12){
            consumo_anual += getConsumo(consumoLetter, cicloHorarioLetter, i);
        }else if(consumoLetter == 1){
            
            if (encerra=="Sim" && (i == 8 || i == 12 || i == 7) && $.inArray(i,periodoEncerramento[periodos].valor)!=-1){
                consumo_anual += (getConsumo(consumoLetter, cicloHorarioLetter, i) / 12) * cons_meses_ferias;
            }else{
                consumo_anual += getConsumo(consumoLetter, cicloHorarioLetter, i)/12;
            }
        }else{
            if (encerra=="Sim"){                
                consumo_anual += getConsumo(consumoLetter, cicloHorarioLetter, i) * varConsumoMensal[i-1].periodos[periodos].value;
            }else{
                consumo_anual = getConsumo(consumoLetter, cicloHorarioLetter, i);
            }
        }
    }
    return consumo_anual;
}

function getConsumo(consumoLetter, cicloHorarioLetter, mes){

    //Fatura 1 mes
    if (consumoLetter == 1) {
        //Simples
        if (cicloHorarioLetter == 1) {
            return (new Number($("#mensal_consumo").val()) * 12);
            //Bi-Horario
        } else if (cicloHorarioLetter == 2) {
            //consumoLetter
            var consumo_ufm_bh_foravazio = new Number($("#mensal_fora_vazio").val());
            var consumo_ufm_bh_vazio = new Number($("#mensal_vazio").val());
            //var somatorio_ufm_bh = new Number(consumo_ufm_bh_foravazio + consumo_ufm_bh_vazio);
            //anuais
            somatorio_anual_ufm_bh_foravazio = consumo_ufm_bh_foravazio * 12;
            somatorio_anual_ufm_bh_vazio = consumo_ufm_bh_vazio * 12;
            return somatorio_anual_ufm_bh_foravazio + somatorio_anual_ufm_bh_vazio;

            //Tri-Horario
        } else if (cicloHorarioLetter == 3) {
            var consumo_ufm_th_ponta = new Number($("#mensal_ponta").val());
            var consumo_ufm_th_cheia = new Number($("#mensal_cheia").val());
            var consumo_ufm_th_vazio = new Number($("#mensal_vazio").val());
            
            somatorio_anual_ufm_th_ponta = consumo_ufm_th_ponta * 12;
            somatorio_anual_ufm_th_cheia = consumo_ufm_th_cheia * 12;
            somatorio_anual_ufm_th_vazio = consumo_ufm_th_vazio * 12;
            return somatorio_anual_ufm_th_ponta + somatorio_anual_ufm_th_cheia + somatorio_anual_ufm_th_vazio;

            //Tetra-Horario
        } else if (cicloHorarioLetter == 4) {

            var consumo_ufm_tth_ponta = new Number($("#mensal_ponta").val());
            var consumo_ufm_tth_cheia = new Number($("#mensal_cheia").val());
            var consumo_ufm_tth_vazio = new Number($("#mensal_vazio").val());
            var consumo_ufm_tth_super_vazio = new Number($("#mensal_super_vazio").val());
            
            
            //anuais
            somatorio_anual_ufm_tth_ponta = consumo_ufm_tth_ponta * 12;
            somatorio_anual_ufm_tth_cheia = consumo_ufm_tth_cheia * 12;
            somatorio_anual_ufm_tth_vazio = consumo_ufm_tth_vazio * 12;
            somatorio_anual_ufm_tth_svazio = consumo_ufm_tth_svazio * 12;
            return somatorio_anual_ufm_tth_ponta + somatorio_anual_ufm_tth_cheia + somatorio_anual_ufm_tth_vazio + somatorio_anual_ufm_tth_svazio;

        }

        //consumoLetter Anuais
    } else if (consumoLetter == 2) {
        
        //Simples
        if (cicloHorarioLetter == 1) {
            var consumo_ca_simples = new Number($("#anual_consumo").val());
            //valor anuais
            return new Number(consumo_ca_simples);
            //Bi-Horario
        } else if (cicloHorarioLetter == 2) {
            var consumo_ca_bh_foravazio = new Number($("#anual_fora_vazio").val());
            var consumo_ca_bh_vazio = new Number($("#anual_vazio").val());
            //valor anuais
            return consumo_ca_bh_foravazio + consumo_ca_bh_vazio;
            //Tri-Horario
        } else if (cicloHorarioLetter == 3) {
            var consumo_ca_th_ponta = new Number($("#anual_ponta").val());
            var consumo_ca_th_cheia = new Number($("#anual_cheia").val());
            var consumo_ca_th_vazio = new Number($("#anual_vazio").val());
            //valor anuais
            return consumo_ca_th_ponta + consumo_ca_th_cheia + consumo_ca_th_vazio;

            //Tetra-Horario
        } else if (cicloHorarioLetter == 4) {
            var consumo_ca_tth_ponta = new Number($("#anual_ponta").val());
            var consumo_ca_tth_cheia = new Number($("#anual_cheia").val());
            var consumo_ca_tth_vazio = new Number($("#anual_vazio").val());
            var consumo_ca_tth_svazio = new Number($("#anual_super_vazio").val());
            //valor anuais
            return consumo_ca_tth_ponta + consumo_ca_tth_cheia + consumo_ca_tth_vazio + consumo_ca_tth_svazio;

        }
        //12 Faturas
    } else if (consumoLetter == 12) {
        //Simples
        if (cicloHorarioLetter == 1) {
            if(mes==1){
                return new Number($("#consumo_1_consumo").val());
            }
            if(mes==2){ 
                return new Number($("#consumo_2_consumo").val());
            }
            if(mes==3){ 
                return new Number($("#consumo_3_consumo").val());
            }
            if(mes==4){
                return new Number($("#consumo_4_consumo").val());
            }
            if(mes==5){ 
                return new Number($("#consumo_5_consumo").val());
            }
            if(mes==6){ 
                return new Number($("#consumo_6_consumo").val());
            }
            if(mes==7){
                return new Number($("#consumo_7_consumo").val());
            }
            if(mes==8){
                return new Number($("#consumo_8_consumo").val());
            }
            if(mes==9){
                return new Number($("#consumo_9_consumo").val());
            }
            if(mes==10){
                return new Number($("#consumo_10_consumo").val());
            }
            if(mes==11){
                return new Number($("#consumo_11_consumo").val());
            }
            if(mes==12){
                return new Number($("#consumo_12_consumo").val());
            }

            //Bi-Horario
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

            if(mes==1){
                return consumo_f_bh_foravazio_jan + consumo_f_bh_vazio_jan;
            }
            if(mes==2){
                return consumo_f_bh_foravazio_fev + consumo_f_bh_vazio_fev;
            }
            if(mes==3){
                return consumo_f_bh_foravazio_mar + consumo_f_bh_vazio_mar;
            }
            if(mes==4){
                return consumo_f_bh_foravazio_abr + consumo_f_bh_vazio_abr;
            }
            if(mes==5){
                return consumo_f_bh_foravazio_mai + consumo_f_bh_vazio_mai;
            }
            if(mes==6){
                return consumo_f_bh_foravazio_jun + consumo_f_bh_vazio_jun;
            }
            if(mes==7){
                return consumo_f_bh_foravazio_jul + consumo_f_bh_vazio_jul;
            }
            if(mes==8){
                return consumo_f_bh_foravazio_ago + consumo_f_bh_vazio_ago;
            }
            if(mes==9){
                return consumo_f_bh_foravazio_set + consumo_f_bh_vazio_set;
            }
            if(mes==10){
                return consumo_f_bh_foravazio_out + consumo_f_bh_vazio_out;
            }
            if(mes==11){
                return consumo_f_bh_foravazio_nov + consumo_f_bh_vazio_nov;
            }
            if(mes==12){
                return consumo_f_bh_foravazio_dez + consumo_f_bh_vazio_dez;
            }

            //var somatorio_anual_f_bh_foravazio = consumo_f_bh_foravazio_jan + consumo_f_bh_foravazio_fev + consumo_f_bh_foravazio_mar + consumo_f_bh_foravazio_abr + consumo_f_bh_foravazio_mai + consumo_f_bh_foravazio_jun + consumo_f_bh_foravazio_jul + consumo_f_bh_foravazio_ago + consumo_f_bh_foravazio_set + consumo_f_bh_foravazio_out + consumo_f_bh_foravazio_nov + consumo_f_bh_foravazio_dez;
            //var somatorio_anual_f_bh_vazio = consumo_f_bh_vazio_jan + consumo_f_bh_vazio_fev + consumo_f_bh_vazio_mar + consumo_f_bh_vazio_abr + consumo_f_bh_vazio_mai + consumo_f_bh_vazio_jun + consumo_f_bh_vazio_jul + consumo_f_bh_vazio_ago + consumo_f_bh_vazio_set + consumo_f_bh_vazio_out + consumo_f_bh_vazio_nov + consumo_f_bh_vazio_dez;
            //return somatorio_anual_f_bh_foravazio + somatorio_anual_f_bh_vazio;

            //Tri-Horario
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

            if(mes==1){
                return consumo_f_th_ponta_jan + consumo_f_th_cheia_jan + consumo_f_th_vazio_jan;
            }
            if(mes==2){
                return consumo_f_th_ponta_fev + consumo_f_th_cheia_fev + consumo_f_th_vazio_fev;
            }
            if(mes==3){
                return consumo_f_th_ponta_mar + consumo_f_th_cheia_mar + consumo_f_th_vazio_mar;
            }
            if(mes==4){
                return consumo_f_th_ponta_abr + consumo_f_th_cheia_abr + consumo_f_th_vazio_abr;
            }
            if(mes==5){
                return consumo_f_th_ponta_mai + consumo_f_th_cheia_mai + consumo_f_th_vazio_mai;
            }
            if(mes==6){
                return consumo_f_th_ponta_jun + consumo_f_th_cheia_jun + consumo_f_th_vazio_jun;
            }
            if(mes==7){
                return consumo_f_th_ponta_jul + consumo_f_th_cheia_jul + consumo_f_th_vazio_jul;
            }
            if(mes==8){
                return consumo_f_th_ponta_ago + consumo_f_th_cheia_ago + consumo_f_th_vazio_ago;
            }
            if(mes==9){
                return consumo_f_th_ponta_set + consumo_f_th_cheia_set + consumo_f_th_vazio_set;
            }
            if(mes==10){
                return consumo_f_th_ponta_out + consumo_f_th_cheia_out + consumo_f_th_vazio_out;
            }
            if(mes==11){
                return consumo_f_th_ponta_nov + consumo_f_th_cheia_nov + consumo_f_th_vazio_nov;
            }
            if(mes==12){
                return consumo_f_th_ponta_dez + consumo_f_th_cheia_dez + consumo_f_th_vazio_dez;
            }

            //var somatorio_anual_f_th_ponta = consumo_f_th_ponta_jan + consumo_f_th_ponta_fev + consumo_f_th_ponta_mar + consumo_f_th_ponta_abr + consumo_f_th_ponta_mai + consumo_f_th_ponta_jun + consumo_f_th_ponta_jul + consumo_f_th_ponta_ago + consumo_f_th_ponta_set + consumo_f_th_ponta_out + consumo_f_th_ponta_nov + consumo_f_th_ponta_dez;
            //var somatorio_anual_f_th_cheia = consumo_f_th_cheia_jan + consumo_f_th_cheia_fev + consumo_f_th_cheia_mar + consumo_f_th_cheia_abr + consumo_f_th_cheia_mai + consumo_f_th_cheia_jun + consumo_f_th_cheia_jul + consumo_f_th_cheia_ago + consumo_f_th_cheia_set + consumo_f_th_cheia_out + consumo_f_th_cheia_nov + consumo_f_th_cheia_dez;
            //var somatorio_anual_f_th_vazio = consumo_f_th_vazio_jan + consumo_f_th_vazio_fev + consumo_f_th_vazio_mar + consumo_f_th_vazio_abr + consumo_f_th_vazio_mai + consumo_f_th_vazio_jun + consumo_f_th_vazio_jul + consumo_f_th_vazio_ago + consumo_f_th_vazio_set + consumo_f_th_vazio_out + consumo_f_th_vazio_nov + consumo_f_th_vazio_dez;

            //return somatorio_anual_f_th_ponta + somatorio_anual_f_th_cheia + somatorio_anual_f_th_vazio;

            //Tetra-Horario
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

            //var somatorio_anual_f_tth_ponta = consumo_f_tth_ponta_jan + consumo_f_tth_ponta_fev + consumo_f_tth_ponta_mar + consumo_f_tth_ponta_abr + consumo_f_tth_ponta_mai + consumo_f_tth_ponta_jun + consumo_f_tth_ponta_jul + consumo_f_tth_ponta_ago + consumo_f_tth_ponta_set + consumo_f_tth_ponta_out + consumo_f_tth_ponta_nov + consumo_f_tth_ponta_dez;
            //var somatorio_anual_f_tth_cheia = consumo_f_tth_cheia_jan + consumo_f_tth_cheia_fev + consumo_f_tth_cheia_mar + consumo_f_tth_cheia_abr + consumo_f_tth_cheia_mai + consumo_f_tth_cheia_jun + consumo_f_tth_cheia_jul + consumo_f_tth_cheia_ago + consumo_f_tth_cheia_set + consumo_f_tth_cheia_out + consumo_f_tth_cheia_nov + consumo_f_tth_cheia_dez;
            //var somatorio_anual_f_tth_vazio = consumo_f_tth_vazio_jan + consumo_f_tth_vazio_fev + consumo_f_tth_vazio_mar + consumo_f_tth_vazio_abr + consumo_f_tth_vazio_mai + consumo_f_tth_vazio_jun + consumo_f_tth_vazio_jul + consumo_f_tth_vazio_ago + consumo_f_tth_vazio_set + consumo_f_tth_vazio_out + consumo_f_tth_vazio_nov + consumo_f_tth_vazio_dez;
            //var somatorio_anual_f_tth_svazio = consumo_f_tth_svazio_jan + consumo_f_tth_svazio_fev + consumo_f_tth_svazio_mar + consumo_f_tth_svazio_abr + consumo_f_tth_svazio_mai + consumo_f_tth_svazio_jun + consumo_f_tth_svazio_jul + consumo_f_tth_svazio_ago + consumo_f_tth_svazio_set + consumo_f_tth_svazio_out + consumo_f_tth_svazio_nov + consumo_f_tth_svazio_dez;

            //return somatorio_anual_f_tth_ponta + somatorio_anual_f_tth_cheia + somatorio_anual_f_tth_vazio + somatorio_anual_f_tth_svazio;
        }
    }

    
}

function getConsumoAnualPonta() {

    var iTension= $("#ntensao").val();

    if (iTension == 0 || iTension == 1 || iTension == 2 ){
        if(consumoLetter==1){
            return somatorio_anual_ufm_tth_ponta; 
        }else if(consumoLetter==2){
            return consumo_ca_tth_ponta;
        }else{
            return somatorio_anual_f_tth_ponta;
        }
    }else{
        return 0;
    }
}
