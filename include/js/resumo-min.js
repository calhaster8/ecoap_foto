function uppPotenciaCalc(){potencia_array=[],upp_condicao=""!=upp_condicao&&null!=upp_condicao&&null!=upp_condicao?upp_condicao:"",uppConsumoAnual=0,potencia_max_consumo_anual=0,potencia_max_area=new Number($("#newArea").val()),potencia_max_contratada=new Number($("#potencia").val()),potencia_new_contratada=new Number($("#newPotencia").val()),pept_value=new Number($("#peptInstalada").val()),potencia_array=[0!=potencia_max_area&&""!=potencia_max_area&&null!=potencia_max_area&&potencia_new_area>potencia_max_area?.8*potencia_max_area/modulosSolares.area*modulosSolares.potencia:0,potencia_max_contratada,potencia_max_consumo_anual];var o=getUppConsumoAnual();return potencia_array[2]=2*o/pept_value,potencia_upp=min(potencia_array),uppConsumoAnual=potencia_upp>250?250:potencia_upp,""!=potencia_new_contratada&&null!=potencia_new_contratada&&null!=potencia_new_contratada&&potencia_new_contratada>0&&(""==potencia_max_area||null==potencia_max_area||null==potencia_max_area||0==potencia_max_area)?uppConsumoAnual=potencia_new_contratada>250?250:potencia_new_contratada:(""==potencia_new_contratada||null==potencia_new_contratada||null==potencia_new_contratada||0==potencia_new_contratada)&&""!=potencia_max_area&&null!=potencia_max_area&&null!=potencia_max_area&&potencia_max_area>0||""!=potencia_new_contratada&&null!=potencia_new_contratada&&null!=potencia_new_contratada&&potencia_new_contratada>0&&""!=potencia_max_area&&null!=potencia_max_area&&null!=potencia_max_area&&potencia_max_area>0&&potencia_new_contratada<potencia_upp&&(uppConsumoAnual=potencia_new_contratada),uppConsumoAnual==potencia_array[1]?upp_condicao=condicoesLimitePotencia[1]:uppConsumoAnual==potencia_array[2]?upp_condicao=condicoesLimitePotencia[2]:potencia_upp>250?upp_condicao=condicoesLimitePotencia[3]:uppConsumoAnual==potencia_array[0]&&(upp_condicao=condicoesLimitePotencia[0]),uppConsumoAnual}function categoriaUPP(){catUPP=[];var o=$("#question_one").val(),a=$("#question_two").val();catUPP="1"==o?tarifa_uppI[1]:"1"==a?tarifa_uppI[2]:tarifa_uppI[0]}function tarifaUpp(){return categoriaUPP(),catUPP.valor}function uppResultados(){var o=uppPotenciaCalc();upp_resultados_pc=o,upp_resultados_n_paineis=upp_resultados_pc/.275,upp_resultados_area_ocupada=potencia_max_area>0&&1.7*upp_resultados_n_paineis/.8>potencia_max_area?potencia_max_area:1.7*upp_resultados_n_paineis/.8,0==potencia_new_area&&(potencia_new_area=upp_resultados_area_ocupada),upp_resultados_prod_volt=upp_resultados_pc*pept_value,upp_resultados_reducao_dep_ene=upp_resultados_prod_volt/consumo_anual*100,upp_resultados_custos_energia=getUppCustosComEnergia(),upp_resultados_custos_php=getUppCustosComPhp();var a=upp_resultados_prod_volt>2*consumo_anual?upp_resultados_prod_volt-consumo_anual:0,e=a/upp_resultados_prod_volt*100;upp_resultados_custos_isp=.001*consumo_anual,upp_resultados_custos_energicos=upp_resultados_custos_energia+upp_resultados_custos_isp+upp_resultados_custos_php,upp_resultados_rec_foto=upp_resultados_prod_volt*tarifaUpp(),upp_resultados_reducao_custos=upp_resultados_rec_foto/upp_resultados_custos_energicos*100,upp_resultados_investimento=getUppInvestimento(),upp_custos_anuais_new=.02*upp_resultados_investimento,upp_resultados_payback=upp_resultados_investimento/upp_resultados_rec_foto;upp_resultados_prod_volt;$("#pot_central").html(upp_resultados_pc.toFixed(0)+" kW"),$("#nPaineis").html(upp_resultados_n_paineis.toFixed(0)),$("#area_ocupada").html(upp_resultados_area_ocupada.toFixed(0)+" m2"),$("#observations").html(upp_condicao),$("#consumo_instalacao").html(consumo_anual.toFixed(0)+" kWh"),$("#prod_foto").html(upp_resultados_prod_volt.toFixed(0)+" kWh"),$("#excede").html(a>0?a.toFixed(0)+" kWh":"-"),$("#excedentePercent").html(e>0?e.toFixed(0)+" %":"-"),$("#auto_consumo").html("Não aplicável"),$("#consumo_energia_ren").html(upp_resultados_reducao_dep_ene.toFixed(0)+"%"),$("#custos_energia").html(upp_resultados_custos_energicos.toFixed(0)+" €"),$("#receita_foto").html(upp_resultados_rec_foto.toFixed(0)+" €<br>"+catUPP.nome),$("#reduc_custos").html(upp_resultados_reducao_custos.toFixed(0)+"%"),$("#investe").html(upp_resultados_investimento.toFixed(0)+" €"),$("#custos_anuais").html(upp_custos_anuais_new.toFixed(0)+" €"),$("#paybck").html(upp_resultados_payback.toFixed(1)+" anos")}function getUppCustosComEnergia(){var o=0;if(1==consumoLetter){if(1==cicloHorarioLetter)o=new Number($("#consumo1").val())*somatorio_anual_ufm_simples;else if(2==cicloHorarioLetter){var a=new Number($("#fora_vazio2").val()),e=new Number($("#vazio2").val());o=a*somatorio_anual_ufm_bh_foravazio+e*somatorio_anual_ufm_bh_vazio}else if(3==cicloHorarioLetter){var n=new Number($("#ponta3").val()),u=new Number($("#cheia3").val()),r=new Number($("#vazio3").val());o=n*somatorio_anual_ufm_th_ponta+u*somatorio_anual_ufm_th_cheia+r*somatorio_anual_ufm_th_vazio}else if(4==cicloHorarioLetter){var i=new Number($("#ponta4").val()),_=new Number($("#cheia4").val()),c=new Number($("#vazio4").val()),t=new Number($("#super_vazio4").val());o=i*somatorio_anual_ufm_tth_ponta+_*somatorio_anual_ufm_tth_cheia+c*somatorio_anual_ufm_tth_vazio+t*somatorio_anual_ufm_tth_svazio}}else if(2==consumoLetter){if(1==cicloHorarioLetter)o=new Number($("#consumo1").val())*consumo_ca_simples;else if(2==cicloHorarioLetter){a=new Number($("#fora_vazio2").val()),e=new Number($("#vazio2").val());o=a*consumo_ca_bh_foravazio+e*consumo_ca_bh_vazio}else if(3==cicloHorarioLetter){n=new Number($("#ponta3").val()),u=new Number($("#cheia3").val()),r=new Number($("#vazio3").val());o=n*consumo_ca_th_ponta+u*consumo_ca_th_cheia+r*consumo_ca_th_vazio}else if(4==cicloHorarioLetter){i=new Number($("#ponta4").val()),_=new Number($("#cheia4").val()),c=new Number($("#vazio4").val()),t=new Number($("#super_vazio4").val());o=i*consumo_ca_tth_ponta+_*consumo_ca_tth_cheia+c*consumo_ca_tth_vazio+t*consumo_ca_tth_svazio}}else if(12==consumoLetter){if(1==cicloHorarioLetter)o=new Number($("#consumo1").val())*somatorio_anual_f_simples;else if(2==cicloHorarioLetter){a=new Number($("#fora_vazio2").val()),e=new Number($("#vazio2").val());o=a*somatorio_anual_f_bh_foravazio+e*somatorio_anual_f_bh_vazio}else if(3==cicloHorarioLetter){n=new Number($("#ponta3").val()),u=new Number($("#cheia3").val()),r=new Number($("#vazio3").val());o=n*somatorio_anual_f_th_ponta+u*somatorio_anual_f_th_cheia+r*somatorio_anual_f_th_vazio}else if(4==cicloHorarioLetter){i=new Number($("#ponta4").val()),_=new Number($("#cheia4").val()),c=new Number($("#vazio4").val()),t=new Number($("#super_vazio4").val());o=i*somatorio_anual_f_tth_ponta+_*somatorio_anual_f_tth_cheia+c*somatorio_anual_f_tth_vazio+t*somatorio_anual_f_tth_svazio}}return o}function getUppCustosComPhp(){var o=0;return null!=$("#pt_horas_ponta4").val()&&(ptHorasPonta=new Number($("#pt_horas_ponta4").val()),o=getConsumoAnualPonta()/ciclo_tarifarioI[cicloTarifario].numHoras*ptHorasPonta*365),o}function getUppInvestimento(){for(var o=0;o<investimentoI.length;o++){if(null==investimentoI[o].max)return upp_resultados_pc*investimentoI[o].valor;if(upp_resultados_pc<investimentoI[o].max&&upp_resultados_pc>=investimentoI[o].min)return upp_resultados_pc*investimentoI[o].valor}}function min(o){var a=0;if(o.length>0)for(var e=0;e<o.length;e++)(o[e]<a||0==a)&&(a=o[e]);return a}function getUppConsumoAnual(){consumo_anual=0;for(var o=$("#facturas").val(),a=$("#cicloHorario").val(),e=$("#vacationsTime").val(),n=$("#vacations").val(),u=1;u<13;u++)12==o?consumo_anual+=getConsumo(o,a,u):1==o?"Sim"!=n||8!=u&&12!=u&&7!=u||-1==$.inArray(u,periodoEncerramento[e].valor)?consumo_anual+=getConsumo(o,a,u)/12:consumo_anual+=getConsumo(o,a,u)/12*cons_meses_ferias:"Sim"==n?consumo_anual+=getConsumo(o,a,u)*varConsumoMensal[u-1].periodos[e].value:consumo_anual=getConsumo(o,a,u);return consumo_anual}function getConsumo(o,a,e){if(1==o){if(1==a)return 12*new Number($("#mensal_consumo").val());if(2==a){var n=new Number($("#mensal_fora_vazio").val()),u=new Number($("#mensal_vazio").val());return somatorio_anual_ufm_bh_foravazio=12*n,somatorio_anual_ufm_bh_vazio=12*u,somatorio_anual_ufm_bh_foravazio+somatorio_anual_ufm_bh_vazio}if(3==a){var r=new Number($("#mensal_ponta").val()),i=new Number($("#mensal_cheia").val()),_=new Number($("#mensal_vazio").val());return somatorio_anual_ufm_th_ponta=12*r,somatorio_anual_ufm_th_cheia=12*i,somatorio_anual_ufm_th_vazio=12*_,somatorio_anual_ufm_th_ponta+somatorio_anual_ufm_th_cheia+somatorio_anual_ufm_th_vazio}if(4==a){var c=new Number($("#mensal_ponta").val()),t=new Number($("#mensal_cheia").val()),s=new Number($("#mensal_vazio").val());new Number($("#mensal_super_vazio").val());return somatorio_anual_ufm_tth_ponta=12*c,somatorio_anual_ufm_tth_cheia=12*t,somatorio_anual_ufm_tth_vazio=12*s,somatorio_anual_ufm_tth_svazio=12*consumo_ufm_tth_svazio,somatorio_anual_ufm_tth_ponta+somatorio_anual_ufm_tth_cheia+somatorio_anual_ufm_tth_vazio+somatorio_anual_ufm_tth_svazio}}else if(2==o){if(1==a){var l=new Number($("#anual_consumo").val());return new Number(l)}if(2==a)return new Number($("#anual_fora_vazio").val())+new Number($("#anual_vazio").val());if(3==a)return new Number($("#anual_ponta").val())+new Number($("#anual_cheia").val())+new Number($("#anual_vazio").val());if(4==a)return new Number($("#anual_ponta").val())+new Number($("#anual_cheia").val())+new Number($("#anual_vazio").val())+new Number($("#anual_super_vazio").val())}else if(12==o)if(1==a){if(1==e)return new Number($("#consumo_1_consumo").val());if(2==e)return new Number($("#consumo_2_consumo").val());if(3==e)return new Number($("#consumo_3_consumo").val());if(4==e)return new Number($("#consumo_4_consumo").val());if(5==e)return new Number($("#consumo_5_consumo").val());if(6==e)return new Number($("#consumo_6_consumo").val());if(7==e)return new Number($("#consumo_7_consumo").val());if(8==e)return new Number($("#consumo_8_consumo").val());if(9==e)return new Number($("#consumo_9_consumo").val());if(10==e)return new Number($("#consumo_10_consumo").val());if(11==e)return new Number($("#consumo_11_consumo").val());if(12==e)return new Number($("#consumo_12_consumo").val())}else if(2==a){var p=new Number($("#consumo_1_fora_vazio").val()),m=new Number($("#consumo_2_fora_vazio").val()),v=new Number($("#consumo_3_fora_vazio").val()),d=new Number($("#consumo_4_fora_vazio").val()),f=new Number($("#consumo_5_fora_vazio").val()),b=new Number($("#consumo_6_fora_vazio").val()),w=new Number($("#consumo_7_fora_vazio").val()),h=new Number($("#consumo_8_fora_vazio").val()),N=new Number($("#consumo_9_fora_vazio").val()),z=new Number($("#consumo_10_fora_vazio").val()),x=new Number($("#consumo_11_fora_vazio").val()),T=new Number($("#consumo_12_fora_vazio").val()),S=new Number($("#consumo_1_vazio").val()),C=new Number($("#consumo_2_vazio").val()),H=new Number($("#consumo_3_vazio").val()),j=new Number($("#consumo_4_vazio").val()),g=new Number($("#consumo_5_vazio").val()),P=new Number($("#consumo_6_vazio").val()),F=new Number($("#consumo_7_vazio").val()),G=new Number($("#consumo_8_vazio").val()),L=new Number($("#consumo_9_vazio").val()),I=new Number($("#consumo_10_vazio").val()),y=new Number($("#consumo_11_vazio").val()),U=new Number($("#consumo_12_vazio").val());if(1==e)return p+S;if(2==e)return m+C;if(3==e)return v+H;if(4==e)return d+j;if(5==e)return f+g;if(6==e)return b+P;if(7==e)return w+F;if(8==e)return h+G;if(9==e)return N+L;if(10==e)return z+I;if(11==e)return x+y;if(12==e)return T+U}else if(3==a){var k=new Number($("#consumo_1_ponta").val()),A=new Number($("#consumo_2_ponta").val()),E=new Number($("#consumo_3_ponta").val()),W=new Number($("#consumo_4_ponta").val()),X=new Number($("#consumo_5_ponta").val()),M=new Number($("#consumo_6_ponta").val()),V=new Number($("#consumo_7_ponta").val()),R=new Number($("#consumo_8_ponta").val()),B=new Number($("#consumo_9_ponta").val()),q=new Number($("#consumo_10_ponta").val()),D=new Number($("#consumo_11_ponta").val()),J=new Number($("#consumo_12_ponta").val()),K=new Number($("#consumo_1_cheia").val()),O=new Number($("#consumo_2_cheia").val()),Q=new Number($("#consumo_3_cheia").val()),Y=new Number($("#consumo_4_cheia").val()),Z=new Number($("#consumo_5_cheia").val()),oo=new Number($("#consumo_6_cheia").val()),ao=new Number($("#consumo_7_cheia").val()),eo=new Number($("#consumo_8_cheia").val()),no=new Number($("#consumo_9_cheia").val()),uo=new Number($("#consumo_10_cheia").val()),ro=new Number($("#consumo_11_cheia").val()),io=new Number($("#consumo_12_cheia").val()),_o=new Number($("#consumo_1_vazio").val()),co=new Number($("#consumo_2_vazio").val()),to=new Number($("#consumo_3_vazio").val()),so=new Number($("#consumo_4_vazio").val()),lo=new Number($("#consumo_5_vazio").val()),po=new Number($("#consumo_6_vazio").val()),mo=new Number($("#consumo_7_vazio").val()),vo=new Number($("#consumo_8_vazio").val()),fo=new Number($("#consumo_9_vazio").val()),bo=new Number($("#consumo_10_vazio").val()),wo=new Number($("#consumo_11_vazio").val()),$o=new Number($("#consumo_12_vazio").val());if(1==e)return k+K+_o;if(2==e)return A+O+co;if(3==e)return E+Q+to;if(4==e)return W+Y+so;if(5==e)return X+Z+lo;if(6==e)return M+oo+po;if(7==e)return V+ao+mo;if(8==e)return R+eo+vo;if(9==e)return B+no+fo;if(10==e)return q+uo+bo;if(11==e)return D+ro+wo;if(12==e)return J+io+$o}else if(4==a){var ho=new Number($("#consumo_1_ponta").val()),No=new Number($("#consumo_2_ponta").val()),zo=new Number($("#consumo_3_ponta").val()),xo=new Number($("#consumo_4_ponta").val()),To=new Number($("#consumo_5_ponta").val()),So=new Number($("#consumo_6_ponta").val()),Co=new Number($("#consumo_7_ponta").val()),Ho=new Number($("#consumo_8_ponta").val()),jo=new Number($("#consumo_9_ponta").val()),go=new Number($("#consumo_10_ponta").val()),Po=new Number($("#consumo_11_ponta").val()),Fo=new Number($("#consumo_12_ponta").val()),Go=new Number($("#consumo_1_cheia").val()),Lo=new Number($("#consumo_2_cheia").val()),Io=new Number($("#consumo_3_cheia").val()),yo=new Number($("#consumo_4_cheia").val()),Uo=new Number($("#consumo_5_cheia").val()),ko=new Number($("#consumo_6_cheia").val()),Ao=new Number($("#consumo_7_cheia").val()),Eo=new Number($("#consumo_8_cheia").val()),Wo=new Number($("#consumo_9_cheia").val()),Xo=new Number($("#consumo_10_cheia").val()),Mo=new Number($("#consumo_11_cheia").val()),Vo=new Number($("#consumo_12_cheia").val()),Ro=new Number($("#consumo_1_vazio").val()),Bo=new Number($("#consumo_2_vazio").val()),qo=new Number($("#consumo_3_vazio").val()),Do=new Number($("#consumo_4_vazio").val()),Jo=new Number($("#consumo_5_vazio").val()),Ko=new Number($("#consumo_6_vazio").val()),Oo=new Number($("#consumo_7_vazio").val()),Qo=new Number($("#consumo_8_vazio").val()),Yo=new Number($("#consumo_9_vazio").val()),Zo=new Number($("#consumo_10_vazio").val()),oa=new Number($("#consumo_11_vazio").val()),aa=new Number($("#consumo_12_vazio").val()),ea=new Number($("#consumo_1_super_vazio").val()),na=new Number($("#consumo_2_super_vazio").val()),ua=new Number($("#consumo_3_super_vazio").val()),ra=new Number($("#consumo_4_super_vazio").val()),ia=new Number($("#consumo_5_super_vazio").val()),_a=new Number($("#consumo_6_super_vazio").val()),ca=new Number($("#consumo_7_super_vazio").val()),ta=new Number($("#consumo_8_super_vazio").val()),sa=new Number($("#consumo_9_super_vazio").val()),la=new Number($("#consumo_10_super_vazio").val()),pa=new Number($("#consumo_11_super_vazio").val()),ma=new Number($("#consumo_12_super_vazio").val());if(1==e)return ho+Go+Ro+ea;if(2==e)return No+Lo+Bo+na;if(3==e)return zo+Io+qo+ua;if(4==e)return xo+yo+Do+ra;if(5==e)return To+Uo+Jo+ia;if(6==e)return So+ko+Ko+_a;if(7==e)return Co+Ao+Oo+ca;if(8==e)return Ho+Eo+Qo+ta;if(9==e)return jo+Wo+Yo+sa;if(10==e)return go+Xo+Zo+la;if(11==e)return Po+Mo+oa+pa;if(12==e)return Fo+Vo+aa+ma}}function getConsumoAnualPonta(){var o=$("#ntensao").val();return 0==o||1==o||2==o?1==consumoLetter?somatorio_anual_ufm_tth_ponta:2==consumoLetter?consumo_ca_tth_ponta:somatorio_anual_f_tth_ponta:0}function getReducaoCustoEnergia(){var o=0;return custo_simples=0,custo_foravazio=0,custo_vazio=0,custo_ponta=0,custo_cheia=0,cicloHorarioLetter=$("#cicloHorario").val(),1==cicloHorarioLetter?custo_simples=new Number($("#consumo1").val()):2==cicloHorarioLetter?(custo_foravazio=new Number($("#fora_vazio2").val()),custo_vazio=new Number($("#vazio2").val())):3==cicloHorarioLetter?(custo_ponta=new Number($("#ponta3").val()),custo_cheia=new Number($("#cheia3").val()),custo_vazio=new Number($("#vazio3").val())):4==cicloHorarioLetter&&(custo_ponta=new Number($("#ponta4").val()),custo_cheia=new Number($("#cheia4").val()),custo_vazio=new Number($("#vazio4").val())),""==cicloTarifario||0!=cicloTarifario||3!=cicloHorarioLetter&&4!=cicloHorarioLetter?1==cicloTarifario&&(3==cicloHorarioLetter||4==cicloHorarioLetter)||3==cicloHorarioLetter?o=autoconsumo_ponta*custo_ponta+autoconsumo_cheia*custo_cheia+autoconsumo_vazio*custo_vazio:2==cicloHorarioLetter?o=autoconsumo_foravazio*custo_foravazio+autoconsumo_vazio*custo_vazio:1==cicloHorarioLetter&&(o=autoconsumo_simples*custo_simples):o=autoconsumo_ponta*custo_ponta+autoconsumo_cheia*custo_cheia+autoconsumo_vazio*custo_vazio,o}function getReducaoCustoPhp(){var o=0,a=$("#pt_horas_ponta4").val();return 3==$("#ntensao").val()?o:o=""!=cicloTarifario&&0==cicloTarifario?autoconsumo_ponta/ciclo_tarifarioI[0].numHoras*a*365:autoconsumo_ponta/ciclo_tarifarioI[1].numHoras*a*365}function upacResultados(){getCurvaConsumo(),curvaProducaoUpac();var o=upacPotenciaCalc();getBalancoConsumoProducao(),excedente(),upac_resultados_pc=o,upac_resultados_n_paineis=upac_resultados_pc/.275,upac_resultados_area_ocupada=potencia_max_area>0&&1.7*upac_resultados_n_paineis/.8>potencia_max_area?potencia_max_area:1.7*upac_resultados_n_paineis/.8,0==potencia_new_area&&(potencia_new_area=upac_resultados_area_ocupada),upac_resultados_prod_volt=upac_resultados_pc*pept_value;var a=100*upacExcedentePerc;upac_resultados_reducao_dep_ene=(upac_resultados_prod_volt-upacExcedenteValue)/consumo_anual*100,upac_resultados_custos_energia=getUppCustosComEnergia(),upac_resultados_custos_php=getUppCustosComPhp(),upac_resultados_custos_isp=.001*consumo_anual,upac_resultados_custos_energicos=upac_resultados_custos_energia+upac_resultados_custos_isp+upac_resultados_custos_php;var e=upac_resultados_prod_volt-upacExcedenteValue;upac_resultados_reducao_custos_energia=getReducaoCustoEnergia(),upac_resultados_reducao_custos_php=getReducaoCustoPhp(),upac_resultados_reducao_custos_isp=.001*e,upac_resultados_venda_excedente=.05248*upacExcedenteValue*.9,upac_resultados_rec_foto=a/100<.05?upac_resultados_reducao_custos_energia+upac_resultados_reducao_custos_php+upac_resultados_reducao_custos_isp:upac_resultados_reducao_custos_energia+upac_resultados_reducao_custos_php+upac_resultados_reducao_custos_isp+upac_resultados_venda_excedente,upac_resultados_pc<10?upac_resultados_investimento=upac_resultados_pc*investimentoI[0].valor:upac_resultados_pc<50?upac_resultados_investimento=upac_resultados_pc*investimentoI[1].valor:upac_resultados_pc<50?upac_resultados_investimento=upac_resultados_pc*investimentoI[2].valor:upac_resultados_pc<50?upac_resultados_investimento=upac_resultados_pc*investimentoI[3].valor:upac_resultados_investimento=upac_resultados_pc*investimentoI[4].valor,upac_resultados_reducao_custos=upac_resultados_rec_foto/upac_resultados_custos_energicos,upac_custos_anuais_new=.02*upac_resultados_investimento,upac_resultados_payback=upac_resultados_investimento/upac_resultados_rec_foto,$("#pot_central_upac").html(upac_resultados_pc.toFixed(0)+" kW"),$("#nPaineis_upac").html(upac_resultados_n_paineis.toFixed(0)),$("#area_ocupada_upac").html(upac_resultados_area_ocupada.toFixed(0)+" m2"),$("#observations_upac").html(upac_condicao),$("#consumo_instalacao_upac").html(consumo_anual.toFixed(0)+" kWh"),$("#prod_foto_upac").html(upac_resultados_prod_volt.toFixed(0)+" kWh"),$("#excede_upac").html(upacExcedenteValue.toFixed(0)+" kWh"),$("#excedentePercent_upac").html(a.toFixed(0)+" %"),$("#auto_consumo_upac").html(e.toFixed(0)+" kWh"),$("#consumo_energia_ren_upac").html(upac_resultados_reducao_dep_ene.toFixed(0)+"%"),$("#custos_energia_upac").html(upac_resultados_custos_energicos.toFixed(0)+" €"),$("#receita_foto_upac").html(upac_resultados_rec_foto.toFixed(0)+" €"),$("#reduc_custos_upac").html((100*upac_resultados_reducao_custos).toFixed(0)+"%"),$("#investe_upac").html(upac_resultados_investimento.toFixed(0)+" €"),$("#custos_anuais_upac").html(upac_custos_anuais_new.toFixed(0)+" €"),$("#paybck_upac").html(upac_resultados_payback.toFixed(1)+" anos")}function upacPotenciaCalc(){instalacao_array_upac=[],potencia_array=[],potencia_upac=0,upac_condicao=""!=upac_condicao&&null!=upac_condicao&&null!=upac_condicao?upac_condicao:"";potencia_max_area_upac=new Number($("#newArea").val()),potencia_max_contratada_upac=new Number($("#potencia").val()),pept_value=new Number($("#peptInstalada").val()),instalacao_array_upac=[0!=potencia_max_area_upac&&""!=potencia_max_area_upac&&null!=potencia_max_area_upac&&potencia_new_area>potencia_max_area_upac?.8*potencia_max_area_upac/modulosSolares.area*modulosSolares.potencia:0,0,0],potencia_max_consumo_upac=calcCurvaConsumoUpacPotencia(),potencia_array=[0!=potencia_max_area_upac&&""!=potencia_max_area_upac&&null!=potencia_max_area_upac&&potencia_new_area>potencia_max_area_upac?.8*potencia_max_area_upac/modulosSolares.area*modulosSolares.potencia:0,potencia_max_contratada_upac,potencia_max_consumo_upac/pept_value];var o=min(potencia_array);return""!=potencia_new_contratada_upac&&null!=potencia_new_contratada_upac&&null!=potencia_new_contratada_upac&&potencia_new_contratada_upac>0&&(""==potencia_max_area_upac||null==potencia_max_area_upac||null==potencia_max_area_upac||0==potencia_max_area_upac)?potencia_upac=potencia_new_contratada_upac>o?o:potencia_new_contratada_upac:(""==potencia_new_contratada_upac||null==potencia_new_contratada_upac||null==potencia_new_contratada_upac||0==potencia_new_contratada_upac)&&""!=potencia_max_area_upac&&null!=potencia_max_area_upac&&null!=potencia_max_area_upac&&potencia_max_area_upac>0?potencia_upac=o:""!=potencia_new_contratada_upac&&null!=potencia_new_contratada_upac&&null!=potencia_new_contratada_upac&&potencia_new_contratada_upac>0&&""!=potencia_max_area_upac&&null!=potencia_max_area_upac&&null!=potencia_max_area_upac&&potencia_max_area_upac>0&&potencia_new_contratada_upac<potencia_max_contratada_upac?potencia_upac=potencia_new_contratada_upac:potencia_upac=o,potencia_upac==potencia_array[1]?upac_condicao=condicoesLimitePotencia[1]:potencia_upac==potencia_array[2]?upac_condicao=condicoesLimitePotencia[2]:potencia_upac==potencia_array[0]&&(upac_condicao=condicoesLimitePotencia[0]),potencia_upac}function calcCurvaConsumoUpacPotencia(){var o=0;for(i=0;i<7;i++)for(j=0;j<24;j++)j>=7&&j<20&&(o+=curvaConsumo[i][j].inverno+curvaConsumo[i][j].verao);return o}function getScheduleMarks(o,a){var e=$("#cenarios").val();return 0==e&&o>=0&&o<5&&a>=8&&a<18?"X":1==e&&o>=0&&o<7&&a>=8&&a<22?"X":2==e?"X":0}function buildHorariosFuncionamento(){for(horasFuncionamento=0,lunchTime=0,i=0;i<7;i++){var o=0;for(horarioFuncionamentoSemanal[i]=[],j=0;j<24;j++){var a=getScheduleMarks(i,j);0==a?horarioFuncionamentoSemanal[i][j]="":(horarioFuncionamentoSemanal[i][j]=a,13==j&&lunchTime++,o++)}horarioFuncionamentoSemanal[i][j]=o,horasFuncionamento+=o}horasFuncionamento*=52}function getCurvaConsumo(){curvaConsumo=[];var o=0,a=0,e=$("#lunchBreak").val(),n=0,u=0,r=0,i=0,_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<7;r++){for(curvaConsumo[r]=[],o=0,a=0,i=0;i<24;i++){var t=0,s=0;t=""!=e&&null!=e&&0==e&&"X"==horarioFuncionamentoSemanal[r][i]&&13==i?consumo_anual*des_consumo.rest_consumo/(horasFuncionamento-22*lunchTime)*consumo_almoco+consumo_anual*des_consumo.base/8760:""!=e&&null!=e&&0==e&&"X"==horarioFuncionamentoSemanal[r][i]?consumo_anual*des_consumo.rest_consumo/(horasFuncionamento-22*lunchTime)+consumo_anual*des_consumo.base/8760:""!=e&&null!=e&&1==e&&"X"==horarioFuncionamentoSemanal[r][i]?consumo_anual*des_consumo.rest_consumo/horasFuncionamento+consumo_anual*des_consumo.base/8760:consumo_anual*des_consumo.base/8760,t*=22,s=""!=e&&null!=e&&0==e&&"X"==horarioFuncionamentoSemanal[r][i]&&13==i?consumo_anual*des_consumo.rest_consumo/(horasFuncionamento-30*lunchTime)*consumo_almoco+consumo_anual*des_consumo.base/8760:""!=e&&null!=e&&0==e&&"X"==horarioFuncionamentoSemanal[r][i]?consumo_anual*des_consumo.rest_consumo/(horasFuncionamento-30*lunchTime)+consumo_anual*des_consumo.base/8760:""!=e&&null!=e&&1==e&&"X"==horarioFuncionamentoSemanal[r][i]?consumo_anual*des_consumo.rest_consumo/horasFuncionamento+consumo_anual*des_consumo.base/8760:consumo_anual*des_consumo.base/8760,s*=30,curvaConsumo[r][i]={inverno:t,verao:s},n+=t,u+=s,s+t,o+=t,a+=s,_[i]+=t,c[i]+=s}curvaConsumo[r][i]={inverno:o,verao:a}}for(curvaConsumo[r]=[],i=0;i<24;i++)curvaConsumo[r][i]={inverno:_[i],verao:c[i]};curvaConsumo[r][i]={inverno:n,verao:u},calcConsumoHorasSol()}function calcConsumoHorasSol(){if(""!=cicloTarifario&&0==cicloTarifario){var o=0,a=0,e=0,n=0,u=0,r=0;for(i=0;i<7;i++)for(j=0;j<24;j++)i>=0&&i<5&&j>=9&&j<12&&(o+=curvaConsumo[i][j].inverno,a+=curvaConsumo[i][j].verao),i>=0&&i<5&&(8==j||j>=12&&j<17)?e+=curvaConsumo[i][j].inverno:5==i&&j>=9&&j<13&&(e+=curvaConsumo[i][j].inverno),i>=0&&i<5&&(j>=7&&j<9||j>=12&&j<20)?n+=curvaConsumo[i][j].verao:5==i&&j>=9&&j<14&&(n+=curvaConsumo[i][j].verao),j>=8&&j<17&&(u+=curvaConsumo[i][j].inverno),j>=7&&j<20&&(r+=curvaConsumo[i][j].verao);consumoHorasSolGlobal[0].periodoTarifario[0].verao=a/r,consumoHorasSolGlobal[0].periodoTarifario[1].verao=n/r,consumoHorasSolGlobal[0].periodoTarifario[2].verao=1-consumoHorasSolGlobal[0].periodoTarifario[1].verao-consumoHorasSolGlobal[0].periodoTarifario[0].verao,consumoHorasSolGlobal[0].periodoTarifario[0].inverno=o/u,consumoHorasSolGlobal[0].periodoTarifario[1].inverno=e/u,consumoHorasSolGlobal[0].periodoTarifario[2].inverno=1-consumoHorasSolGlobal[0].periodoTarifario[1].inverno-consumoHorasSolGlobal[0].periodoTarifario[0].inverno}else if(1==cicloTarifario||3==cicloHorarioLetter||2==cicloHorarioLetter){o=0,a=0,e=0,n=0;var _=0,c=0;for(i=0;i<7;i++)for(j=0;j<24;j++)j>=9&&j<11?o+=curvaConsumo[i][j].inverno:(j>=11&&j<13||19==j)&&(a+=curvaConsumo[i][j].verao),(j>=8&&j<11||j>=13&&j<19)&&(n+=curvaConsumo[i][j].verao),j>=8&&j<17&&(_+=curvaConsumo[i][j].inverno),j>=7&&j<20&&(c+=curvaConsumo[i][j].verao);consumoHorasSolGlobal[1].periodoTarifario[0].verao=a/c,consumoHorasSolGlobal[1].periodoTarifario[1].verao=n/c,consumoHorasSolGlobal[1].periodoTarifario[2].verao=1-consumoHorasSolGlobal[1].periodoTarifario[1].verao-consumoHorasSolGlobal[1].periodoTarifario[0].verao,consumoHorasSolGlobal[1].periodoTarifario[0].inverno=o/_,consumoHorasSolGlobal[1].periodoTarifario[1].inverno=1-consumoHorasSolGlobal[1].periodoTarifario[0].inverno,consumoHorasSolGlobal[1].periodoTarifario[2].inverno=0,consumoHorasSolGlobal[2].periodoTarifario[0].verao=consumoHorasSolGlobal[1].periodoTarifario[1].verao+consumoHorasSolGlobal[1].periodoTarifario[0].verao,consumoHorasSolGlobal[2].periodoTarifario[1].verao=1-consumoHorasSolGlobal[2].periodoTarifario[0].verao,consumoHorasSolGlobal[2].periodoTarifario[0].inverno=1,consumoHorasSolGlobal[2].periodoTarifario[1].inverno=0}}function getConsumoBalanco(o){var a=$("#vacationsTime").val();$("#vacations").val();return 12==consumoLetter?consumo_anual:1==consumoLetter?consumo_anual/12:""==a||null==a?consumo_anual/12:consumo_anual*varConsumoMensal[i].periodos[a].value}function getBalancoConsumoProducao(){for(consumos_balanco_prd=[],i=0;i<12;i++)consumos_balanco_prd[i]=getConsumoBalanco(i);for(producao_upp=[],i=0;i<12;i++)producao_upp[i]=uppConsumoAnual*pept_value*producaoSolarMes[i].producao>2*consumos_balanco_prd[i]?2*consumos_balanco_prd[i]:uppConsumoAnual*pept_value*producaoSolarMes[i].producao;for(producao_upac=[],i=0;i<12;i++)producao_upac[i]=producaoSolarMes[i].producao*potencia_upac*pept_value}function curvaProducaoUpac(){return producaoFotovoltaica=potencia_upac*pept_value,producaoFotovoltaica}function getConsumoHorasSolInverno(){var o=0;for(i=0;i<7;i++)for(j=0;j<24;j++)j>=8&&j<17&&(o+=curvaConsumo[i][j].inverno);return o}function getConsumoHorasSolVerao(){var o=0;for(i=0;i<7;i++)for(j=0;j<24;j++)j>=7&&j<20&&(o+=curvaConsumo[i][j].verao);return o}function excedente(){var o=$("#cicloHorario").val(),a=curvaConsumo[7][24].inverno,e=curvaConsumo[7][24].verao,n=getConsumoHorasSolInverno(),u=getConsumoHorasSolVerao(),r=n/a,_=u/e,c=[],t=[],s=[],l=[],p=[],m=[],v=[],d=[],f=[],b=[],w=[],h=[],N=[],z=[],x=[];autoconsumo_ponta=0,autoconsumo_cheia=0,autoconsumo_vazio=0,autoconsumo_foravazio=0,autoconsumo_simples=0;var T=[0,0,0,0,0,0,0,0,0,0,0],S=0;for(i=0;i<12;i++)S=0,""==cicloTarifario||0!=cicloTarifario||3!=o&&4!=o?1==cicloTarifario&&(3==o||4==o)||3==o?(i>=3&&i<10?(c[i]=producao_upac[i]*producaoSolarPeriodo[1].periodoTarifario[0].verao,T[S++]+=c[i],t[i]=producao_upac[i]*producaoSolarPeriodo[1].periodoTarifario[1].verao,T[S++]+=t[i],s[i]=producao_upac[i]*producaoSolarPeriodo[1].periodoTarifario[2].verao,T[S++]+=s[i],p[i]=consumos_balanco_prd[i]*_,T[S++]+=p[i],m[i]=p[i]*consumoHorasSolGlobal[1].periodoTarifario[0].verao,T[S++]+=m[i],v[i]=p[i]*consumoHorasSolGlobal[1].periodoTarifario[1].verao,T[S++]+=v[i],d[i]=p[i]*consumoHorasSolGlobal[1].periodoTarifario[2].verao,T[S++]+=d[i]):(c[i]=producao_upac[i]*producaoSolarPeriodo[1].periodoTarifario[0].inverno,T[S++]+=c[i],t[i]=producao_upac[i]*producaoSolarPeriodo[1].periodoTarifario[1].inverno,T[S++]+=t[i],s[i]=producao_upac[i]*producaoSolarPeriodo[1].periodoTarifario[2].inverno,T[S++]+=s[i],p[i]=consumos_balanco_prd[i]*r,T[S++]+=p[i],m[i]=p[i]*consumoHorasSolGlobal[1].periodoTarifario[0].inverno,T[S++]+=m[i],v[i]=p[i]*consumoHorasSolGlobal[1].periodoTarifario[1].inverno,T[S++]+=v[i],d[i]=p[i]*consumoHorasSolGlobal[1].periodoTarifario[2].inverno,T[S++]+=d[i]),w[i]=c[i]-m[i]<0?0:c[i]-m[i],T[S++]+=w[i],h[i]=t[i]-v[i]<0?0:t[i]-v[i],T[S++]+=h[i],N[i]=s[i]-d[i]<0?0:s[i]-d[i],T[S++]+=N[i],x[i]=w[i]+h[i]+N[i],T[S++]+=w[i]+h[i]+N[i]):2==o?(i>=3&&i<10?(l[i]=producao_upac[i]*producaoSolarPeriodo[2].periodoTarifario[0].verao,T[S++]+=l[i],s[i]=producao_upac[i]*producaoSolarPeriodo[2].periodoTarifario[1].verao,T[S++]+=s[i],p[i]=consumos_balanco_prd[i]*_,T[S++]+=p[i],f[i]=p[i]*consumoHorasSolGlobal[2].periodoTarifario[0].verao,T[S++]+=f[i],d[i]=p[i]*consumoHorasSolGlobal[2].periodoTarifario[1].verao,T[S++]+=d[i]):(l[i]=producao_upac[i]*producaoSolarPeriodo[2].periodoTarifario[0].inverno,T[S++]+=l[i],s[i]=producao_upac[i]*producaoSolarPeriodo[2].periodoTarifario[1].inverno,T[S++]+=s[i],p[i]=consumos_balanco_prd[i]*r,T[S++]+=p[i],f[i]=p[i]*consumoHorasSolGlobal[2].periodoTarifario[0].inverno,T[S++]+=f[i],d[i]=p[i]*consumoHorasSolGlobal[2].periodoTarifario[1].inverno,T[S++]+=d[i]),z[i]=l[i]-f[i]<0?0:l[i]-f[i],T[S++]+=z[i],N[i]=s[i]-d[i]<0?0:s[i]-d[i],T[S++]+=N[i],x[i]=z[i]+N[i],T[S++]+=z[i]+N[i]):1==o&&(i>=3&&i<10?(p[i]=consumos_balanco_prd[i]*_,T[S++]+=p[i]):(p[i]=consumos_balanco_prd[i]*r,T[S++]+=p[i]),b[i]=producao_upac[i]-p[i]<0?0:producao_upac[i]-p[i],T[S++]+=b[i]):(i>=3&&i<10?(c[i]=producao_upac[i]*producaoSolarPeriodo[cicloTarifario].periodoTarifario[0].verao,T[S++]+=c[i],t[i]=producao_upac[i]*producaoSolarPeriodo[cicloTarifario].periodoTarifario[1].verao,T[S++]+=t[i],s[i]=producao_upac[i]*producaoSolarPeriodo[cicloTarifario].periodoTarifario[2].verao,T[S++]+=s[i],p[i]=consumos_balanco_prd[i]*_,T[S++]+=p[i],m[i]=p[i]*consumoHorasSolGlobal[cicloTarifario].periodoTarifario[0].verao,T[S++]+=m[i],v[i]=p[i]*consumoHorasSolGlobal[cicloTarifario].periodoTarifario[1].verao,T[S++]+=v[i],d[i]=p[i]*consumoHorasSolGlobal[cicloTarifario].periodoTarifario[2].verao,T[S++]+=d[i]):(c[i]=producao_upac[i]*producaoSolarPeriodo[cicloTarifario].periodoTarifario[0].inverno,T[S++]+=c[i],t[i]=producao_upac[i]*producaoSolarPeriodo[cicloTarifario].periodoTarifario[1].inverno,T[S++]+=t[i],
s[i]=producao_upac[i]*producaoSolarPeriodo[cicloTarifario].periodoTarifario[2].inverno,T[S++]+=s[i],p[i]=consumos_balanco_prd[i]*r,T[S++]+=p[i],m[i]=p[i]*consumoHorasSolGlobal[cicloTarifario].periodoTarifario[0].inverno,T[S++]+=m[i],v[i]=p[i]*consumoHorasSolGlobal[cicloTarifario].periodoTarifario[1].inverno,T[S++]+=v[i],d[i]=p[i]*consumoHorasSolGlobal[cicloTarifario].periodoTarifario[2].inverno,T[S++]+=d[i]),w[i]=c[i]-m[i]<0?0:c[i]-m[i],T[S++]+=w[i],h[i]=t[i]-v[i]<0?0:t[i]-v[i],T[S++]+=h[i],N[i]=s[i]-d[i]<0?0:s[i]-d[i],T[S++]+=N[i],x[i]=w[i]+h[i]+N[i],T[S++]+=w[i]+h[i]+N[i]);""==cicloTarifario||0!=cicloTarifario||3!=o&&4!=o?1==cicloTarifario&&(3==o||4==o)||3==o?(autoconsumo_ponta=T[0]-T[S-4],autoconsumo_cheia=T[1]-T[S-3],autoconsumo_vazio=T[2]-T[S-2]):2==o?(autoconsumo_vazio=T[2]-T[S-3],autoconsumo_foravazio=T[2]-T[S-2]):1==o&&(autoconsumo_simples=potencia_upac*pept_value-T[S-1]):(autoconsumo_ponta=T[0]-T[S-4],autoconsumo_cheia=T[1]-T[S-3],autoconsumo_vazio=T[2]-T[S-2]),T[S]=T[S-1]/(potencia_upac*pept_value),upacExcedenteValue=T[S-1],upacExcedentePerc=T[S],12==x.length?excedente_mes_total_graph=x:excedente_mes_total_graph=b}