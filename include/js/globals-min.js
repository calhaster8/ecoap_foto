var consumoLetter=0,cicloHorarioLetter=0,ptHorasPonta=0,consumo_anual=0,catUPP=[],potencia_new_contratada=0,potencia_new_contratada_upac=0,potencia_new_area=0,potencia_new_area_upac=0,potencia_max_area=0,potencia_max_area_upac=0,upp_condicao="",upac_condicao="",horarioFuncionamentoSemanal=[],horasFuncionamento=0,curvaConsumo=[],upacExcedenteValue=0,upacExcedentePerc=0,curvaFinal=[],potencia_upp=0,potencia_upac=0,producaoFotovoltaica=0,consumos_balanco_prd=[],cicloTarifario=0,producao_upp=[],producao_upac=[],excedente_mes_total_graph=[],autoconsumo_ponta=0,autoconsumo_cheia=0,autoconsumo_vazio=0,autoconsumo_foravazio=0,autoconsumo_simples=0,custo_simples=0,custo_foravazio=0,custo_vazio=0,custo_ponta=0,custo_cheia=0,consumo_ufm_simples=0,somatorio_anual_ufm_simples=0,somatorio_anual_ufm_simples_total=0,consumo_ufm_bh_foravazio=0,consumo_ufm_bh_vazio=0,somatorio_ufm_bh=0,somatorio_anual_ufm_bh_foravazio=0,somatorio_anual_ufm_bh_vazio=0,somatorio_anual_ufm_bh_total=0,consumo_ufm_th_ponta=0,consumo_ufm_th_cheia=0,consumo_ufm_th_vazio=0,somatorio_ufm_th=0,somatorio_anual_ufm_th_ponta=0,somatorio_anual_ufm_th_cheia=0,somatorio_anual_ufm_th_vazio=0,somatorio_anual_ufm_th_total=0,consumo_ufm_tth_ponta=0,consumo_ufm_tth_cheia=0,consumo_ufm_tth_vazio=0,consumo_ufm_tth_svazio=0,somatorio_ufm_tth=0,somatorio_anual_ufm_tth_ponta=0,somatorio_anual_ufm_tth_cheia=0,somatorio_anual_ufm_tth_vazio=0,somatorio_anual_ufm_tth_svazio=0,somatorio_anual_ufm_tth_total=0,consumo_ca_simples=0,somatorio_ca_simples_total=0,consumo_ca_bh_foravazio=0,consumo_ca_bh_vazio=0,somatorio_ca_bh_total=0,consumo_ca_th_ponta=0,consumo_ca_th_cheia=0,consumo_ca_th_vazio=0,somatorio_ca_th_total=0,consumo_ca_tth_ponta=0,consumo_ca_tth_cheia=0,consumo_ca_tth_vazio=0,consumo_ca_tth_svazio=0,somatorio_ca_tth_total=0,consumo_f_simples_jan=0,consumo_f_simples_fev=0,consumo_f_simples_mar=0,consumo_f_simples_abr=0,consumo_f_simples_mai=0,consumo_f_simples_jun=0,consumo_f_simples_jul=0,consumo_f_simples_ago=0,consumo_f_simples_set=0,consumo_f_simples_out=0,consumo_f_simples_nov=0,consumo_f_simples_dez=0,somatorio_anual_f_simples=0,somatorio_anual_f_simples_total=0,consumo_f_bh_foravazio_jan=0,consumo_f_bh_foravazio_fev=0,consumo_f_bh_foravazio_mar=0,consumo_f_bh_foravazio_abr=0,consumo_f_bh_foravazio_mai=0,consumo_f_bh_foravazio_jun=0,consumo_f_bh_foravazio_jul=0,consumo_f_bh_foravazio_ago=0,consumo_f_bh_foravazio_set=0,consumo_f_bh_foravazio_out=0,consumo_f_bh_foravazio_nov=0,consumo_f_bh_foravazio_dez=0,consumo_f_bh_vazio_jan=0,consumo_f_bh_vazio_fev=0,consumo_f_bh_vazio_mar=0,consumo_f_bh_vazio_abr=0,consumo_f_bh_vazio_mai=0,consumo_f_bh_vazio_jun=0,consumo_f_bh_vazio_jul=0,consumo_f_bh_vazio_ago=0,consumo_f_bh_vazio_set=0,consumo_f_bh_vazio_out=0,consumo_f_bh_vazio_nov=0,consumo_f_bh_vazio_dez=0,somatorio_f_bh_jan=0,somatorio_f_bh_fev=0,somatorio_f_bh_mar=0,somatorio_f_bh_abr=0,somatorio_f_bh_mai=0,somatorio_f_bh_jun=0,somatorio_f_bh_jul=0,somatorio_f_bh_ago=0,somatorio_f_bh_set=0,somatorio_f_bh_out=0,somatorio_f_bh_nov=0,somatorio_f_bh_dez=0,somatorio_anual_f_bh_foravazio=0,somatorio_anual_f_bh_vazio=0,somatorio_anual_f_bh_total=0,consumo_f_th_ponta_jan=0,consumo_f_th_ponta_fev=0,consumo_f_th_ponta_mar=0,consumo_f_th_ponta_abr=0,consumo_f_th_ponta_mai=0,consumo_f_th_ponta_jun=0,consumo_f_th_ponta_jul=0,consumo_f_th_ponta_ago=0,consumo_f_th_ponta_set=0,consumo_f_th_ponta_out=0,consumo_f_th_ponta_nov=0,consumo_f_th_ponta_dez=0,consumo_f_th_cheia_jan=0,consumo_f_th_cheia_fev=0,consumo_f_th_cheia_mar=0,consumo_f_th_cheia_abr=0,consumo_f_th_cheia_mai=0,consumo_f_th_cheia_jun=0,consumo_f_th_cheia_jul=0,consumo_f_th_cheia_ago=0,consumo_f_th_cheia_set=0,consumo_f_th_cheia_out=0,consumo_f_th_cheia_nov=0,consumo_f_th_cheia_dez=0,consumo_f_th_vazio_jan=0,consumo_f_th_vazio_fev=0,consumo_f_th_vazio_mar=0,consumo_f_th_vazio_abr=0,consumo_f_th_vazio_mai=0,consumo_f_th_vazio_jun=0,consumo_f_th_vazio_jul=0,consumo_f_th_vazio_ago=0,consumo_f_th_vazio_set=0,consumo_f_th_vazio_out=0,consumo_f_th_vazio_nov=0,consumo_f_th_vazio_dez=0,somatorio_f_th_jan=0,somatorio_f_th_fev=0,somatorio_f_th_mar=0,somatorio_f_th_abr=0,somatorio_f_th_mai=0,somatorio_f_th_jun=0,somatorio_f_th_jul=0,somatorio_f_th_ago=0,somatorio_f_th_set=0,somatorio_f_th_out=0,somatorio_f_th_nov=0,somatorio_f_th_dez=0,somatorio_anual_f_th_ponta=0,somatorio_anual_f_th_cheia=0,somatorio_anual_f_th_vazio=0,somatorio_anual_f_th_total=0,consumo_f_tth_ponta_jan=0,consumo_f_tth_ponta_fev=0,consumo_f_tth_ponta_mar=0,consumo_f_tth_ponta_abr=0,consumo_f_tth_ponta_mai=0,consumo_f_tth_ponta_jun=0,consumo_f_tth_ponta_jul=0,consumo_f_tth_ponta_ago=0,consumo_f_tth_ponta_set=0,consumo_f_tth_ponta_out=0,consumo_f_tth_ponta_nov=0,consumo_f_tth_ponta_dez=0,consumo_f_tth_cheia_jan=0,consumo_f_tth_cheia_fev=0,consumo_f_tth_cheia_mar=0,consumo_f_tth_cheia_abr=0,consumo_f_tth_cheia_mai=0,consumo_f_tth_cheia_jun=0,consumo_f_tth_cheia_jul=0,consumo_f_tth_cheia_ago=0,consumo_f_tth_cheia_set=0,consumo_f_tth_cheia_out=0,consumo_f_tth_cheia_nov=0,consumo_f_tth_cheia_dez=0,consumo_f_tth_vazio_jan=0,consumo_f_tth_vazio_fev=0,consumo_f_tth_vazio_mar=0,consumo_f_tth_vazio_abr=0,consumo_f_tth_vazio_mai=0,consumo_f_tth_vazio_jun=0,consumo_f_tth_vazio_jul=0,consumo_f_tth_vazio_ago=0,consumo_f_tth_vazio_set=0,consumo_f_tth_vazio_out=0,consumo_f_tth_vazio_nov=0,consumo_f_tth_vazio_dez=0,consumo_f_tth_svazio_jan=0,consumo_f_tth_svazio_fev=0,consumo_f_tth_svazio_mar=0,consumo_f_tth_svazio_abr=0,consumo_f_tth_svazio_mai=0,consumo_f_tth_svazio_jun=0,consumo_f_tth_svazio_jul=0,consumo_f_tth_svazio_ago=0,consumo_f_tth_svazio_set=0,consumo_f_tth_svazio_out=0,consumo_f_tth_svazio_nov=0,consumo_f_tth_svazio_dez=0,somatorio_f_tth_jan=0,somatorio_f_tth_fev=0,somatorio_f_tth_mar=0,somatorio_f_tth_abr=0,somatorio_f_tth_mai=0,somatorio_f_tth_jun=0,somatorio_f_tth_jul=0,somatorio_f_tth_ago=0,somatorio_f_tth_set=0,somatorio_f_tth_out=0,somatorio_f_tth_nov=0,somatorio_f_tth_dez=0,somatorio_anual_f_tth_ponta=0,somatorio_anual_f_tth_cheia=0,somatorio_anual_f_tth_vazio=0,somatorio_anual_f_tth_svazio=0,somatorio_anual_f_tth_total=0;