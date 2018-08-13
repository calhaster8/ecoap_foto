function somaRow() {
    

    // UFM, CA, 12F
    consumoLetter = $('#facturas').val();

    // S, BH, TH, TTH 
    cicloHorarioLetter = $('#cicloHorario').val();

    if (consumoLetter == 1) {

        if (cicloHorarioLetter == 1) {

            consumo_ufm_simples = new Number($("#mensal_consumo").val());
            somatorio_anual_ufm_simples = consumo_ufm_simples * 12;
            somatorio_anual_ufm_simples_total = somatorio_anual_ufm_simples;

            $("#totalMensal").html(consumo_ufm_simples);
            $("#anual_consumo").html(somatorio_anual_ufm_simples);
            $("#total_anual").html(somatorio_anual_ufm_simples_total);

        } else if (cicloHorarioLetter == 2) {

            consumo_ufm_bh_foravazio = new Number($("#mensal_fora_vazio").val());
            consumo_ufm_bh_vazio = new Number($("#mensal_vazio").val());
            somatorio_ufm_bh = new Number(consumo_ufm_bh_foravazio + consumo_ufm_bh_vazio);

            somatorio_anual_ufm_bh_foravazio = consumo_ufm_bh_foravazio * 12;
            somatorio_anual_ufm_bh_vazio = consumo_ufm_bh_vazio * 12;
            somatorio_anual_ufm_bh_total = somatorio_anual_ufm_bh_foravazio + somatorio_anual_ufm_bh_vazio;
            
            $("#anual_fora_vazio").html(somatorio_anual_ufm_bh_foravazio);
            $("#anual_vazio").html(somatorio_anual_ufm_bh_vazio);
            $("#totalMensal").html(somatorio_ufm_bh);
            $("#total_anual").html(somatorio_anual_ufm_bh_total);

        } else if (cicloHorarioLetter == 3) {

            consumo_ufm_th_ponta = new Number($("#mensal_ponta").val());
            consumo_ufm_th_cheia = new Number($("#mensal_cheia").val());
            consumo_ufm_th_vazio = new Number($("#mensal_vazio").val());

            somatorio_ufm_th = consumo_ufm_th_ponta + consumo_ufm_th_cheia + consumo_ufm_th_vazio;

            somatorio_anual_ufm_th_ponta = consumo_ufm_th_ponta * 12;
            somatorio_anual_ufm_th_cheia = consumo_ufm_th_cheia * 12;
            somatorio_anual_ufm_th_vazio = consumo_ufm_th_vazio * 12;
            somatorio_anual_ufm_th_total = somatorio_anual_ufm_th_ponta + somatorio_anual_ufm_th_cheia + somatorio_anual_ufm_th_vazio;
             
            $("#totalMensal").html(somatorio_ufm_th);
            $("#anual_ponta").html(somatorio_anual_ufm_th_ponta);
            $("#anual_cheia").html(somatorio_anual_ufm_th_cheia);
            $("#anual_vazio").html(somatorio_anual_ufm_th_vazio);
            $("#total_anual").html(somatorio_anual_ufm_th_total);

        } else if (cicloHorarioLetter == 4) {

            consumo_ufm_tth_ponta = new Number($("#mensal_ponta").val());
            consumo_ufm_tth_cheia = new Number($("#mensal_cheia").val());
            consumo_ufm_tth_vazio = new Number($("#mensal_vazio").val());
            consumo_ufm_tth_svazio = new Number($("#mensal_super_vazio").val());

            somatorio_ufm_tth = consumo_ufm_tth_ponta + consumo_ufm_tth_cheia + consumo_ufm_tth_vazio + consumo_ufm_tth_svazio;

            somatorio_anual_ufm_tth_ponta = consumo_ufm_tth_ponta * 12;
            somatorio_anual_ufm_tth_cheia = consumo_ufm_tth_cheia * 12;
            somatorio_anual_ufm_tth_vazio = consumo_ufm_tth_vazio * 12;
            somatorio_anual_ufm_tth_svazio = consumo_ufm_tth_svazio * 12;
            somatorio_anual_ufm_tth_total = somatorio_anual_ufm_tth_ponta + somatorio_anual_ufm_tth_cheia + somatorio_anual_ufm_tth_vazio + somatorio_anual_ufm_tth_svazio;

            $("#totalMensal").html(somatorio_ufm_tth);
            $("#anual_ponta").html(somatorio_anual_ufm_tth_ponta);
            $("#anual_cheia").html(somatorio_anual_ufm_tth_cheia);
            $("#anual_vazio").html(somatorio_anual_ufm_tth_vazio);
            $("#anual_super_vazio").html(somatorio_anual_ufm_tth_svazio);
            $("#total_anual").html(somatorio_anual_ufm_tth_total);
        }

    } else if (consumoLetter == 2) {

        if (cicloHorarioLetter == 1) {

            consumo_ca_simples = new Number($("#anual_consumo").val());
            somatorio_ca_simples_total = new Number(consumo_ca_simples);

        
            $("#total_anual").html(somatorio_ca_simples_total);

        } else if (cicloHorarioLetter == 2) {

            consumo_ca_bh_foravazio = new Number($("#anual_fora_vazio").val());
            consumo_ca_bh_vazio = new Number($("#anual_vazio").val());

            somatorio_ca_bh_total = consumo_ca_bh_foravazio + consumo_ca_bh_vazio;


            $("#total_anual").html(somatorio_ca_bh_total);

        } else if (cicloHorarioLetter == 3) {

            consumo_ca_th_ponta = new Number($("#anual_ponta").val());
            consumo_ca_th_cheia = new Number($("#anual_cheia").val());
            consumo_ca_th_vazio = new Number($("#anual_vazio").val());

            somatorio_ca_th_total = consumo_ca_th_ponta + consumo_ca_th_cheia + consumo_ca_th_vazio;


            $("#total_anual").html(somatorio_ca_th_total);

        } else if (cicloHorarioLetter == 4) {

            consumo_ca_tth_ponta = new Number($("#anual_ponta").val());
            consumo_ca_tth_cheia = new Number($("#anual_cheia").val());
            consumo_ca_tth_vazio = new Number($("#anual_vazio").val());
            consumo_ca_tth_svazio = new Number($("#anual_super_vazio").val());

            somatorio_ca_tth_total = consumo_ca_tth_ponta + consumo_ca_tth_cheia + consumo_ca_tth_vazio + consumo_ca_tth_svazio;



            $("#total_anual").html(somatorio_ca_tth_total);

        }

    } else if (consumoLetter == 12) {

        if (cicloHorarioLetter == 1) {

            consumo_f_simples_jan = new Number($("#consumo_1_consumo").val());
            consumo_f_simples_fev = new Number($("#consumo_2_consumo").val());
            consumo_f_simples_mar = new Number($("#consumo_3_consumo").val());
            consumo_f_simples_abr = new Number($("#consumo_4_consumo").val());
            consumo_f_simples_mai = new Number($("#consumo_5_consumo").val());
            consumo_f_simples_jun = new Number($("#consumo_6_consumo").val());
            consumo_f_simples_jul = new Number($("#consumo_7_consumo").val());
            consumo_f_simples_ago = new Number($("#consumo_8_consumo").val());
            consumo_f_simples_set = new Number($("#consumo_9_consumo").val());
            consumo_f_simples_out = new Number($("#consumo_10_consumo").val());
            consumo_f_simples_nov = new Number($("#consumo_11_consumo").val());
            consumo_f_simples_dez = new Number($("#consumo_12_consumo").val());


            somatorio_anual_f_simples = consumo_f_simples_jan + consumo_f_simples_fev + consumo_f_simples_mar + consumo_f_simples_abr + consumo_f_simples_mai + consumo_f_simples_jun + consumo_f_simples_jul + consumo_f_simples_ago + consumo_f_simples_set + consumo_f_simples_out + consumo_f_simples_nov + consumo_f_simples_dez;
            somatorio_anual_f_simples_total = somatorio_anual_f_simples;

            $("#total_mensal_1").html(consumo_f_simples_jan);
            $("#total_mensal_2").html(consumo_f_simples_fev);
            $("#total_mensal_3").html(consumo_f_simples_mar);
            $("#total_mensal_4").html(consumo_f_simples_abr);
            $("#total_mensal_5").html(consumo_f_simples_mai);
            $("#total_mensal_6").html(consumo_f_simples_jun);
            $("#total_mensal_7").html(consumo_f_simples_jul);
            $("#total_mensal_8").html(consumo_f_simples_ago);
            $("#total_mensal_9").html(consumo_f_simples_set);
            $("#total_mensal_10").html(consumo_f_simples_out);
            $("#total_mensal_11").html(consumo_f_simples_nov);
            $("#total_mensal_12").html(consumo_f_simples_dez);

            $("#anual_consumo").html(somatorio_anual_f_simples);
            $("#total_anual").html(somatorio_anual_f_simples_total);

        } else if (cicloHorarioLetter == 2) {

            consumo_f_bh_foravazio_jan = new Number($("#consumo_1_fora_vazio").val());
            consumo_f_bh_foravazio_fev = new Number($("#consumo_2_fora_vazio").val());
            consumo_f_bh_foravazio_mar = new Number($("#consumo_3_fora_vazio").val());
            consumo_f_bh_foravazio_abr = new Number($("#consumo_4_fora_vazio").val());
            consumo_f_bh_foravazio_mai = new Number($("#consumo_5_fora_vazio").val());
            consumo_f_bh_foravazio_jun = new Number($("#consumo_6_fora_vazio").val());
            consumo_f_bh_foravazio_jul = new Number($("#consumo_7_fora_vazio").val());
            consumo_f_bh_foravazio_ago = new Number($("#consumo_8_fora_vazio").val());
            consumo_f_bh_foravazio_set = new Number($("#consumo_9_fora_vazio").val());
            consumo_f_bh_foravazio_out = new Number($("#consumo_10_fora_vazio").val());
            consumo_f_bh_foravazio_nov = new Number($("#consumo_11_fora_vazio").val());
            consumo_f_bh_foravazio_dez = new Number($("#consumo_12_fora_vazio").val());

            consumo_f_bh_vazio_jan = new Number($("#consumo_1_vazio").val());
            consumo_f_bh_vazio_fev = new Number($("#consumo_2_vazio").val());
            consumo_f_bh_vazio_mar = new Number($("#consumo_3_vazio").val());
            consumo_f_bh_vazio_abr = new Number($("#consumo_4_vazio").val());
            consumo_f_bh_vazio_mai = new Number($("#consumo_5_vazio").val());
            consumo_f_bh_vazio_jun = new Number($("#consumo_6_vazio").val());
            consumo_f_bh_vazio_jul = new Number($("#consumo_7_vazio").val());
            consumo_f_bh_vazio_ago = new Number($("#consumo_8_vazio").val());
            consumo_f_bh_vazio_set = new Number($("#consumo_9_vazio").val());
            consumo_f_bh_vazio_out = new Number($("#consumo_10_vazio").val());
            consumo_f_bh_vazio_nov = new Number($("#consumo_11_vazio").val());
            consumo_f_bh_vazio_dez = new Number($("#consumo_12_vazio").val());

            somatorio_f_bh_jan = consumo_f_bh_foravazio_jan + consumo_f_bh_vazio_jan;
            somatorio_f_bh_fev = consumo_f_bh_foravazio_fev + consumo_f_bh_vazio_fev;
            somatorio_f_bh_mar = consumo_f_bh_foravazio_mar + consumo_f_bh_vazio_mar;
            somatorio_f_bh_abr = consumo_f_bh_foravazio_abr + consumo_f_bh_vazio_abr;
            somatorio_f_bh_mai = consumo_f_bh_foravazio_mai + consumo_f_bh_vazio_mai;
            somatorio_f_bh_jun = consumo_f_bh_foravazio_jun + consumo_f_bh_vazio_jun;
            somatorio_f_bh_jul = consumo_f_bh_foravazio_jul + consumo_f_bh_vazio_jul;
            somatorio_f_bh_ago = consumo_f_bh_foravazio_ago + consumo_f_bh_vazio_ago;
            somatorio_f_bh_set = consumo_f_bh_foravazio_set + consumo_f_bh_vazio_set;
            somatorio_f_bh_out = consumo_f_bh_foravazio_out + consumo_f_bh_vazio_out;
            somatorio_f_bh_nov = consumo_f_bh_foravazio_nov + consumo_f_bh_vazio_nov;
            somatorio_f_bh_dez = consumo_f_bh_foravazio_dez + consumo_f_bh_vazio_dez;

            somatorio_anual_f_bh_foravazio = consumo_f_bh_foravazio_jan + consumo_f_bh_foravazio_fev + consumo_f_bh_foravazio_mar + consumo_f_bh_foravazio_abr + consumo_f_bh_foravazio_mai + consumo_f_bh_foravazio_jun + consumo_f_bh_foravazio_jul + consumo_f_bh_foravazio_ago + consumo_f_bh_foravazio_set + consumo_f_bh_foravazio_out + consumo_f_bh_foravazio_nov + consumo_f_bh_foravazio_dez;
            somatorio_anual_f_bh_vazio = consumo_f_bh_vazio_jan + consumo_f_bh_vazio_fev + consumo_f_bh_vazio_mar + consumo_f_bh_vazio_abr + consumo_f_bh_vazio_mai + consumo_f_bh_vazio_jun + consumo_f_bh_vazio_jul + consumo_f_bh_vazio_ago + consumo_f_bh_vazio_set + consumo_f_bh_vazio_out + consumo_f_bh_vazio_nov + consumo_f_bh_vazio_dez;
            somatorio_anual_f_bh_total = somatorio_anual_f_bh_foravazio + somatorio_anual_f_bh_vazio;


            $("#total_mensal_1").html(somatorio_f_bh_jan);
            $("#total_mensal_2").html(somatorio_f_bh_fev);
            $("#total_mensal_3").html(somatorio_f_bh_mar);
            $("#total_mensal_4").html(somatorio_f_bh_abr);
            $("#total_mensal_5").html(somatorio_f_bh_mai);
            $("#total_mensal_6").html(somatorio_f_bh_jun);
            $("#total_mensal_7").html(somatorio_f_bh_jul);
            $("#total_mensal_8").html(somatorio_f_bh_ago);
            $("#total_mensal_9").html(somatorio_f_bh_set);
            $("#total_mensal_10").html(somatorio_f_bh_out);
            $("#total_mensal_11").html(somatorio_f_bh_nov);
            $("#total_mensal_12").html(somatorio_f_bh_dez);

            $("#anual_fora_vazio").html(somatorio_anual_f_bh_foravazio);
            $("#anual_vazio").html(somatorio_anual_f_bh_vazio);
            $("#total_anual").html(somatorio_anual_f_bh_total);


        } else if (cicloHorarioLetter == 3) {

            consumo_f_th_ponta_jan = new Number($("#consumo_1_ponta").val());
            consumo_f_th_ponta_fev = new Number($("#consumo_2_ponta").val());
            consumo_f_th_ponta_mar = new Number($("#consumo_3_ponta").val());
            consumo_f_th_ponta_abr = new Number($("#consumo_4_ponta").val());
            consumo_f_th_ponta_mai = new Number($("#consumo_5_ponta").val());
            consumo_f_th_ponta_jun = new Number($("#consumo_6_ponta").val());
            consumo_f_th_ponta_jul = new Number($("#consumo_7_ponta").val());
            consumo_f_th_ponta_ago = new Number($("#consumo_8_ponta").val());
            consumo_f_th_ponta_set = new Number($("#consumo_9_ponta").val());
            consumo_f_th_ponta_out = new Number($("#consumo_10_ponta").val());
            consumo_f_th_ponta_nov = new Number($("#consumo_11_ponta").val());
            consumo_f_th_ponta_dez = new Number($("#consumo_12_ponta").val());

            consumo_f_th_cheia_jan = new Number($("#consumo_1_cheia").val());
            consumo_f_th_cheia_fev = new Number($("#consumo_2_cheia").val());
            consumo_f_th_cheia_mar = new Number($("#consumo_3_cheia").val());
            consumo_f_th_cheia_abr = new Number($("#consumo_4_cheia").val());
            consumo_f_th_cheia_mai = new Number($("#consumo_5_cheia").val());
            consumo_f_th_cheia_jun = new Number($("#consumo_6_cheia").val());
            consumo_f_th_cheia_jul = new Number($("#consumo_7_cheia").val());
            consumo_f_th_cheia_ago = new Number($("#consumo_8_cheia").val());
            consumo_f_th_cheia_set = new Number($("#consumo_9_cheia").val());
            consumo_f_th_cheia_out = new Number($("#consumo_10_cheia").val());
            consumo_f_th_cheia_nov = new Number($("#consumo_11_cheia").val());
            consumo_f_th_cheia_dez = new Number($("#consumo_12_cheia").val());

            consumo_f_th_vazio_jan = new Number($("#consumo_1_vazio").val());
            consumo_f_th_vazio_fev = new Number($("#consumo_2_vazio").val());
            consumo_f_th_vazio_mar = new Number($("#consumo_3_vazio").val());
            consumo_f_th_vazio_abr = new Number($("#consumo_4_vazio").val());
            consumo_f_th_vazio_mai = new Number($("#consumo_5_vazio").val());
            consumo_f_th_vazio_jun = new Number($("#consumo_6_vazio").val());
            consumo_f_th_vazio_jul = new Number($("#consumo_7_vazio").val());
            consumo_f_th_vazio_ago = new Number($("#consumo_8_vazio").val());
            consumo_f_th_vazio_set = new Number($("#consumo_9_vazio").val());
            consumo_f_th_vazio_out = new Number($("#consumo_10_vazio").val());
            consumo_f_th_vazio_nov = new Number($("#consumo_11_vazio").val());
            consumo_f_th_vazio_dez = new Number($("#consumo_12_vazio").val());

            somatorio_f_th_jan = consumo_f_th_ponta_jan + consumo_f_th_cheia_jan + consumo_f_th_vazio_jan;
            somatorio_f_th_fev = consumo_f_th_ponta_fev + consumo_f_th_cheia_fev + consumo_f_th_vazio_fev;
            somatorio_f_th_mar = consumo_f_th_ponta_mar + consumo_f_th_cheia_mar + consumo_f_th_vazio_mar;
            somatorio_f_th_abr = consumo_f_th_ponta_abr + consumo_f_th_cheia_abr + consumo_f_th_vazio_abr;
            somatorio_f_th_mai = consumo_f_th_ponta_mai + consumo_f_th_cheia_mai + consumo_f_th_vazio_mai;
            somatorio_f_th_jun = consumo_f_th_ponta_jun + consumo_f_th_cheia_jun + consumo_f_th_vazio_jun;
            somatorio_f_th_jul = consumo_f_th_ponta_jul + consumo_f_th_cheia_jul + consumo_f_th_vazio_jul;
            somatorio_f_th_ago = consumo_f_th_ponta_ago + consumo_f_th_cheia_ago + consumo_f_th_vazio_ago;
            somatorio_f_th_set = consumo_f_th_ponta_set + consumo_f_th_cheia_set + consumo_f_th_vazio_set;
            somatorio_f_th_out = consumo_f_th_ponta_out + consumo_f_th_cheia_out + consumo_f_th_vazio_out;
            somatorio_f_th_nov = consumo_f_th_ponta_nov + consumo_f_th_cheia_nov + consumo_f_th_vazio_nov;
            somatorio_f_th_dez = consumo_f_th_ponta_dez + consumo_f_th_cheia_dez + consumo_f_th_vazio_dez;

            somatorio_anual_f_th_ponta = consumo_f_th_ponta_jan + consumo_f_th_ponta_fev + consumo_f_th_ponta_mar + consumo_f_th_ponta_abr + consumo_f_th_ponta_mai + consumo_f_th_ponta_jun + consumo_f_th_ponta_jul + consumo_f_th_ponta_ago + consumo_f_th_ponta_set + consumo_f_th_ponta_out + consumo_f_th_ponta_nov + consumo_f_th_ponta_dez;
            somatorio_anual_f_th_cheia = consumo_f_th_cheia_jan + consumo_f_th_cheia_fev + consumo_f_th_cheia_mar + consumo_f_th_cheia_abr + consumo_f_th_cheia_mai + consumo_f_th_cheia_jun + consumo_f_th_cheia_jul + consumo_f_th_cheia_ago + consumo_f_th_cheia_set + consumo_f_th_cheia_out + consumo_f_th_cheia_nov + consumo_f_th_cheia_dez;
            somatorio_anual_f_th_vazio = consumo_f_th_vazio_jan + consumo_f_th_vazio_fev + consumo_f_th_vazio_mar + consumo_f_th_vazio_abr + consumo_f_th_vazio_mai + consumo_f_th_vazio_jun + consumo_f_th_vazio_jul + consumo_f_th_vazio_ago + consumo_f_th_vazio_set + consumo_f_th_vazio_out + consumo_f_th_vazio_nov + consumo_f_th_vazio_dez;

            somatorio_anual_f_th_total = somatorio_anual_f_th_ponta + somatorio_anual_f_th_cheia + somatorio_anual_f_th_vazio;


            $("#total_mensal_1").html(somatorio_f_th_jan);
            $("#total_mensal_2").html(somatorio_f_th_fev);
            $("#total_mensal_3").html(somatorio_f_th_mar);
            $("#total_mensal_4").html(somatorio_f_th_abr);
            $("#total_mensal_5").html(somatorio_f_th_mai);
            $("#total_mensal_6").html(somatorio_f_th_jun);
            $("#total_mensal_7").html(somatorio_f_th_jul);
            $("#total_mensal_8").html(somatorio_f_th_ago);
            $("#total_mensal_9").html(somatorio_f_th_set);
            $("#total_mensal_10").html(somatorio_f_th_out);
            $("#total_mensal_11").html(somatorio_f_th_nov);
            $("#total_mensal_12").html(somatorio_f_th_dez);

            $("#anual_ponta").html(somatorio_anual_f_th_ponta);
            $("#anual_cheia").html(somatorio_anual_f_th_cheia);
            $("#anual_vazio").html(somatorio_anual_f_th_vazio);
            $("#total_anual").html(somatorio_anual_f_th_total);

        } else if (cicloHorarioLetter == 4) {

            consumo_f_tth_ponta_jan = new Number($("#consumo_1_ponta").val());
            consumo_f_tth_ponta_fev = new Number($("#consumo_2_ponta").val());
            consumo_f_tth_ponta_mar = new Number($("#consumo_3_ponta").val());
            consumo_f_tth_ponta_abr = new Number($("#consumo_4_ponta").val());
            consumo_f_tth_ponta_mai = new Number($("#consumo_5_ponta").val());
            consumo_f_tth_ponta_jun = new Number($("#consumo_6_ponta").val());
            consumo_f_tth_ponta_jul = new Number($("#consumo_7_ponta").val());
            consumo_f_tth_ponta_ago = new Number($("#consumo_8_ponta").val());
            consumo_f_tth_ponta_set = new Number($("#consumo_9_ponta").val());
            consumo_f_tth_ponta_out = new Number($("#consumo_10_ponta").val());
            consumo_f_tth_ponta_nov = new Number($("#consumo_11_ponta").val());
            consumo_f_tth_ponta_dez = new Number($("#consumo_12_ponta").val());

            consumo_f_tth_cheia_jan = new Number($("#consumo_1_cheia").val());
            consumo_f_tth_cheia_fev = new Number($("#consumo_2_cheia").val());
            consumo_f_tth_cheia_mar = new Number($("#consumo_3_cheia").val());
            consumo_f_tth_cheia_abr = new Number($("#consumo_4_cheia").val());
            consumo_f_tth_cheia_mai = new Number($("#consumo_5_cheia").val());
            consumo_f_tth_cheia_jun = new Number($("#consumo_6_cheia").val());
            consumo_f_tth_cheia_jul = new Number($("#consumo_7_cheia").val());
            consumo_f_tth_cheia_ago = new Number($("#consumo_8_cheia").val());
            consumo_f_tth_cheia_set = new Number($("#consumo_9_cheia").val());
            consumo_f_tth_cheia_out = new Number($("#consumo_10_cheia").val());
            consumo_f_tth_cheia_nov = new Number($("#consumo_11_cheia").val());
            consumo_f_tth_cheia_dez = new Number($("#consumo_12_cheia").val());

            consumo_f_tth_vazio_jan = new Number($("#consumo_1_vazio").val());
            consumo_f_tth_vazio_fev = new Number($("#consumo_2_vazio").val());
            consumo_f_tth_vazio_mar = new Number($("#consumo_3_vazio").val());
            consumo_f_tth_vazio_abr = new Number($("#consumo_4_vazio").val());
            consumo_f_tth_vazio_mai = new Number($("#consumo_5_vazio").val());
            consumo_f_tth_vazio_jun = new Number($("#consumo_6_vazio").val());
            consumo_f_tth_vazio_jul = new Number($("#consumo_7_vazio").val());
            consumo_f_tth_vazio_ago = new Number($("#consumo_8_vazio").val());
            consumo_f_tth_vazio_set = new Number($("#consumo_9_vazio").val());
            consumo_f_tth_vazio_out = new Number($("#consumo_10_vazio").val());
            consumo_f_tth_vazio_nov = new Number($("#consumo_11_vazio").val());
            consumo_f_tth_vazio_dez = new Number($("#consumo_12_vazio").val());

            consumo_f_tth_svazio_jan = new Number($("#consumo_1_super_vazio").val());
            consumo_f_tth_svazio_fev = new Number($("#consumo_2_super_vazio").val());
            consumo_f_tth_svazio_mar = new Number($("#consumo_3_super_vazio").val());
            consumo_f_tth_svazio_abr = new Number($("#consumo_4_super_vazio").val());
            consumo_f_tth_svazio_mai = new Number($("#consumo_5_super_vazio").val());
            consumo_f_tth_svazio_jun = new Number($("#consumo_6_super_vazio").val());
            consumo_f_tth_svazio_jul = new Number($("#consumo_7_super_vazio").val());
            consumo_f_tth_svazio_ago = new Number($("#consumo_8_super_vazio").val());
            consumo_f_tth_svazio_set = new Number($("#consumo_9_super_vazio").val());
            consumo_f_tth_svazio_out = new Number($("#consumo_10_super_vazio").val());
            consumo_f_tth_svazio_nov = new Number($("#consumo_11_super_vazio").val());
            consumo_f_tth_svazio_dez = new Number($("#consumo_12_super_vazio").val());

            somatorio_f_tth_jan = consumo_f_tth_ponta_jan + consumo_f_tth_cheia_jan + consumo_f_tth_vazio_jan + consumo_f_tth_svazio_jan;
            somatorio_f_tth_fev = consumo_f_tth_ponta_fev + consumo_f_tth_cheia_fev + consumo_f_tth_vazio_fev + consumo_f_tth_svazio_fev;
            somatorio_f_tth_mar = consumo_f_tth_ponta_mar + consumo_f_tth_cheia_mar + consumo_f_tth_vazio_mar + consumo_f_tth_svazio_mar;
            somatorio_f_tth_abr = consumo_f_tth_ponta_abr + consumo_f_tth_cheia_abr + consumo_f_tth_vazio_abr + consumo_f_tth_svazio_abr;
            somatorio_f_tth_mai = consumo_f_tth_ponta_mai + consumo_f_tth_cheia_mai + consumo_f_tth_vazio_mai + consumo_f_tth_svazio_mai;
            somatorio_f_tth_jun = consumo_f_tth_ponta_jun + consumo_f_tth_cheia_jun + consumo_f_tth_vazio_jun + consumo_f_tth_svazio_jun;
            somatorio_f_tth_jul = consumo_f_tth_ponta_jul + consumo_f_tth_cheia_jul + consumo_f_tth_vazio_jul + consumo_f_tth_svazio_jul;
            somatorio_f_tth_ago = consumo_f_tth_ponta_ago + consumo_f_tth_cheia_ago + consumo_f_tth_vazio_ago + consumo_f_tth_svazio_ago;
            somatorio_f_tth_set = consumo_f_tth_ponta_set + consumo_f_tth_cheia_set + consumo_f_tth_vazio_set + consumo_f_tth_svazio_set;
            somatorio_f_tth_out = consumo_f_tth_ponta_out + consumo_f_tth_cheia_out + consumo_f_tth_vazio_out + consumo_f_tth_svazio_out;
            somatorio_f_tth_nov = consumo_f_tth_ponta_nov + consumo_f_tth_cheia_nov + consumo_f_tth_vazio_nov + consumo_f_tth_svazio_nov;
            somatorio_f_tth_dez = consumo_f_tth_ponta_dez + consumo_f_tth_cheia_dez + consumo_f_tth_vazio_dez + consumo_f_tth_svazio_dez;

            somatorio_anual_f_tth_ponta = consumo_f_tth_ponta_jan + consumo_f_tth_ponta_fev + consumo_f_tth_ponta_mar + consumo_f_tth_ponta_abr + consumo_f_tth_ponta_mai + consumo_f_tth_ponta_jun + consumo_f_tth_ponta_jul + consumo_f_tth_ponta_ago + consumo_f_tth_ponta_set + consumo_f_tth_ponta_out + consumo_f_tth_ponta_nov + consumo_f_tth_ponta_dez;
            somatorio_anual_f_tth_cheia = consumo_f_tth_cheia_jan + consumo_f_tth_cheia_fev + consumo_f_tth_cheia_mar + consumo_f_tth_cheia_abr + consumo_f_tth_cheia_mai + consumo_f_tth_cheia_jun + consumo_f_tth_cheia_jul + consumo_f_tth_cheia_ago + consumo_f_tth_cheia_set + consumo_f_tth_cheia_out + consumo_f_tth_cheia_nov + consumo_f_tth_cheia_dez;
            somatorio_anual_f_tth_vazio = consumo_f_tth_vazio_jan + consumo_f_tth_vazio_fev + consumo_f_tth_vazio_mar + consumo_f_tth_vazio_abr + consumo_f_tth_vazio_mai + consumo_f_tth_vazio_jun + consumo_f_tth_vazio_jul + consumo_f_tth_vazio_ago + consumo_f_tth_vazio_set + consumo_f_tth_vazio_out + consumo_f_tth_vazio_nov + consumo_f_tth_vazio_dez;
            somatorio_anual_f_tth_svazio = consumo_f_tth_svazio_jan + consumo_f_tth_svazio_fev + consumo_f_tth_svazio_mar + consumo_f_tth_svazio_abr + consumo_f_tth_svazio_mai + consumo_f_tth_svazio_jun + consumo_f_tth_svazio_jul + consumo_f_tth_svazio_ago + consumo_f_tth_svazio_set + consumo_f_tth_svazio_out + consumo_f_tth_svazio_nov + consumo_f_tth_svazio_dez;

            somatorio_anual_f_tth_total = somatorio_anual_f_tth_ponta + somatorio_anual_f_tth_cheia + somatorio_anual_f_tth_vazio + somatorio_anual_f_tth_svazio;



            $("#total_mensal_1").html(somatorio_f_tth_jan);
            $("#total_mensal_2").html(somatorio_f_tth_fev);
            $("#total_mensal_3").html(somatorio_f_tth_mar);
            $("#total_mensal_4").html(somatorio_f_tth_abr);
            $("#total_mensal_5").html(somatorio_f_tth_mai);
            $("#total_mensal_6").html(somatorio_f_tth_jun);
            $("#total_mensal_7").html(somatorio_f_tth_jul);
            $("#total_mensal_8").html(somatorio_f_tth_ago);
            $("#total_mensal_9").html(somatorio_f_tth_set);
            $("#total_mensal_10").html(somatorio_f_tth_out);
            $("#total_mensal_11").html(somatorio_f_tth_nov);
            $("#total_mensal_12").html(somatorio_f_tth_dez);

            $("#anual_ponta").html(somatorio_anual_f_tth_ponta);
            $("#anual_cheia").html(somatorio_anual_f_tth_cheia);
            $("#anual_vazio").html(somatorio_anual_f_tth_vazio);
            $("#anual_super_vazio").html(somatorio_anual_f_tth_svazio);
            $("#total_anual").html(somatorio_anual_f_tth_total);

        }
    }
}