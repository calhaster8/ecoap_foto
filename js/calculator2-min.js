function buildDistricts(){for(var o=0;o<distritosI.length;o++)$("#distrito").append($('<option class="op"></option>').val(o).html(distritosI[o].nome))}function getDistrictValues(){var o=new Number($("#distrito").val());$("#peptInstalada").attr("value",distritosI[o].PEPtInstalada)}function buildNTension(){for(var o=0;o<ntensaoI.length;o++)$("#ntensao").append($('<option class="op"></option>').val(o).html(ntensaoI[o].nome))}function getNTensionValues(){var o=new Number($("#ntensao").val());if(cleanCTarifarioHorario(),buildCTarifario(ntensaoI[o].cicloTarifario),buildCHorario(ntensaoI[o].cicloHorario,$("#potencia").val()),buildCHorarioPotencia(),2==$("#cicloHorario").children().length){var i=""!=$("#cicloHorario").children('option[value="4"]')[0]&&void 0!=$("#cicloHorario").children('option[value="4"]')[0]?$("#cicloHorario").children('option[value="4"]')[0].value:0,a=""!=$("#cicloHorario").children('option[value="3"]')[0]&&void 0!=$("#cicloHorario").children('option[value="3"]')[0]?$("#cicloHorario").children('option[value="3"]')[0].value:0;if(4==i){var t=$("#cicloHorario").children()[1].value;$("#cicloHorario").val(t),$("#cicloHorario").select()}else if(3==i){var t=$("#cicloHorario").children()[1].value;$("#cicloHorario").val(t),$("#cicloHorario").select()}}}function buildCTarifario(o){if(3==$("#ntensao").val())$("#cicloTarifario").attr("disabled","disabled").addClass("sel-disable"),$('#cicloTarifario option:contains("Seleccione uma das opções")').text("Não aplicável");else if(void 0!=o&&null!=o&&""!=o){$("#cicloTarifario").removeAttr("disabled").removeClass("sel-disable"),$('#cicloTarifario option:contains("Não aplicável")').text("Seleccione uma das opções");for(var i=0;i<o.length;i++)$("#cicloTarifario").append($('<option class="op"></option>').val(i).html(o[i].nome))}}function buildCHorario(o,i){if(3==$("#ntensao").val()&&i>=20.7)$("#cicloHorario").append($('<option class="op"></option>').val(ciclo_horarioI[2].valor).html(ciclo_horarioI[2].nome)),$("#cicloHorario").val(ciclo_horarioI[2].valor),$("#cicloHorario").select();else for(var a=0;a<o.length;a++)$("#cicloHorario").append($('<option class="op"></option>').val(o[a].valor).html(o[a].nome))}function buildCHorarioPotencia(){if(""!=$("#potencia").val())if(3==$("#ntensao").val()&&$("#potencia").val()<=41.4&&$("#potencia").val()>=1.15){var o=$("#cicloHorario").val();$("#cicloHorario").children("option:not(:first)").remove();var i=new Number($("#ntensao").val()),a=new Number($("#potencia").val());buildCHorario(ntensaoI[i].cicloHorario,a)}else 3==$("#ntensao").val()&&($("#potencia").val()>41.4||$("#potencia").val()<1.15)?alert("A potência introduzida para BTN's deverá estar entre 1.15 e 41.40 kVA."):2==$("#ntensao").val()&&$("#potencia").val()<=41.4?alert("A potência introduzida para BTE's deverá ser sempre superior a 41.41 kW."):(1==$("#ntensao").val()||0==$("#ntensao").val())&&$("#potencia").val()<=0&&alert("A potência introduzida para AT's e MT's deverá ser sempre superior a 0 kW.")}function cleanCTarifarioHorario(){$("#cicloTarifario").children("option:not(:first)").remove(),$("#cicloHorario").children("option:not(:first)").remove()}function setSelect(o,i){if(""!=i){if(""==o.val())return o.focus(),!1;0==o.children('option[value="'+i+'"]').length?alert("Selecção inválida"):o.val(i),o.select()}}function buildHorarioFuncionamento(){for(var o=0;o<horariosCenI.length;o++)$("#cenarios").append($('<option class="op"></option>').val(o).html(horariosCenI[o].nome))}function buildVacations(){for(var o=0;o<periodoEncerramento.length;o++)$("#vacationsTime").append($('<option class="op"></option>').val(o).html(periodoEncerramento[o].nome))}function buildTarifario(){var o=new Number($("#cicloHorario").val())-1;if(void 0!=ciclo_horarioI[o]&&null!=ciclo_horarioI[o]){$("#tarifarioNome").html(ciclo_horarioI[o].nome);var a="<span>Tarifário</span>",t="<span>Introduzir custos unitários de energia, incluindo tarifas de acesso às redes</span>",r='<table class="table table-bordered" id="tableTarif"><tbody><tr style="font-weight:bold;"><th class="tituloTH">Ciclos</th><th class="tituloTH">Custos (€/kWh)</th></tr>';for(i=0;i<ciclo_horarioI[o].periodoTarifario.length;i++)r+='<tr class="textTR">',r+='<td class="in">'+ciclo_horarioI[o].periodoTarifario[i].nome+'</td><td class="in"><input class="form-control xInput" type="number" placeholder="X,XXX" id="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'" name="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'"></td>',r+="</tr>";$(".second").html(a),$(".nota-tarifas").html(t),$("#tarifarios").html(r+"</tbody></table>")}}function buildSelectConsumos(){for(var o=0;o<consumosI.length;o++)$("#facturas").append($('<option class="op"></option>').val(consumosI[o].value).html(consumosI[o].nome))}function buildConsumos(){var o=new Number($("#cicloHorario").val())-1,a=new Number($("#facturas").val()),t="",r=0,l=ciclo_horarioI[o].periodoTarifario.length,e="<span>Fatura</span>";if(1==a){for(size=3,t='<table class="table table-bordered" id="tbl-factura-mensal">',j=0;j<size;j++){for(0==j&&(t+='<tr style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),1==j&&(t+='<tr id="mensal" class="textTR"><td class="title-padd">Mensal</td>'),2==j&&(t+='<tr id="anual" class="textTR"><td class="title-padd">Anual</td>'),i=0;i<l;i++)0==j&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<th class="tituloTH">Total</th>':0==j&&i==l-1?(t+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",t+='<th class="tituloTH">Total</th>'):0==j&&i>=0?t+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":1==j&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<td class="in" id="totalMensal"></td>':1==j&&i==l-1?(t+='<td><input class="form-control xInput" type="text" onchange="somaRow()" placeholder="ex: 100" id="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',t+='<td class="in" id="totalMensal"></td>'):1==j&&i>=0?t+='<td><input class="form-control xInput" type="text" onchange="somaRow()" placeholder="ex: 100" id="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>':2==j&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<td class="in" id="total_anual"></td>':2==j&&i==l-1?(t+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',t+='<td class="in" id="total_anual"></td>'):2==j&&i>=0&&(t+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');t+="</tr>"}t+="</table>"}else if(2==a){for(size=2,t='<table class="table table-bordered" id="tbl-consumos-anuais"><tbody>',j=0;j<size;j++){for(0==j&&(t+='<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),1==j&&(t+='<tr class="textTR"><td class="title-padd">Anual</td>'),i=0;i<l;i++)0==j&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<th class="tituloTH">Total</th>':0==j&&i==l-1?(t+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",t+='<th class="tituloTH">Total</th>'):0==j&&i>=0?t+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":1==j&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<td class="in" id="total_anual"></td>':1==j&&i==l-1?(t+='<td class="in"><input class="form-control xInput" type="text" onchange="somaRow()" placeholder="ex: 100" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',t+='<td class="in" id="total_anual"></td>'):1==j&&i>=0&&(t+='<td class="in"><input class="form-control xInput" type="text" onchange="somaRow()" placeholder="ex: 100" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');t+="</tr>"}t+="</table>"}else if(12==a){for(size=14,t='<table class="table table-bordered" id="tbl-facturas"><tbody>',j=0;j<size;j++){for(0==j&&(t+='<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),j==size-1?t+='<tr class="textTR"><td class="title-padd">Total</td>':j>0&&(t+='<tr class="textTR"><td class="title-padd">'+producaoSolarMes[j-1].nome+"</td>"),i=0;i<l;i++)0==j&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<th class="tituloTH">Total</th>':0==j&&i==l-1?(t+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",t+='<th class="tituloTH">Total</th>'):0==j&&i>=0?t+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":j==size-1&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<td class="in" id="total_anual"></td>':j==size-1&&i==l-1?(t+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',t+='<td class="in" id="total_anual"></td>'):j==size-1&&i>=0?t+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>':j>0&&4==ciclo_horarioI[o].valor&&i==l-1?t+='<td class="in" id="total_mensal_'+producaoSolarMes[j-1].valor+'"></td>':j>0&&i==l-1?(t+='<td class="in"><input class="form-control xInput" type="text" onchange="somaRow()" placeholder="ex: 100" id="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',t+='<td class="in" id="total_mensal_'+producaoSolarMes[j-1].valor+'"></td>'):j>0&&i>=0&&(t+='<td class="in"><input class="form-control xInput" type="text" onchange="somaRow()" placeholder="ex: 100" id="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');t+="</tr>"}t+="</table>"}$(".third").html(e),$("#factura-consumo").html(t)}function nextStep(){var o=$(".step:visible").data("id"),i=$(".step:visible").data("id")+1;$('[data-id="'+o+'"]').hide(),$('[data-id="'+i+'"]').show(),$(".anterior:hidden").length>1&&$(".anterior").show(),3==i&&($(".but-2").hide(),$(".pickers-form").show(),$(".analise").hide(),$(".end-step").show()),4==i&&($(".but-2").hide(),$(".end-step").hide(),$(".pickers-form").show(),$(".print_pdf").show(),$(".analise").show())}function prevStep(){var o=$(".step:visible").data("id"),i=$(".step:visible").data("id")-1;$('[data-id="'+o+'"]').hide(),$('[data-id="'+i+'"]').show(),1==i&&$(".anterior").hide(),i<3&&($(".end-step").hide(),$(".analise").hide(),$(".pickers-form").hide(),$(".but-2").show()),3==i&&($(".but-2").hide(),$(".analise").hide(),$(".pickers-form").show(),$(".end-step").show()),4==i&&($(".analise").hide(),$(".but-2").hide(),$(".pickers-form").show(),$(".print_pdf").hide(),$(".end-step").show())}$(document).ready(function(){buildDistricts(),buildNTension(),buildHorarioFuncionamento(),buildVacations(),buildSelectConsumos(),buildGraphFinal(),somaRow(),$("#distrito").change(getDistrictValues),$("#ntensao").change(getNTensionValues),$("#potencia").change(buildCHorarioPotencia),$("#cicloHorario").change(buildTarifario),$("#cicloHorario").select(buildTarifario),$("#facturas").change(buildConsumos),$("[data-mask]").inputmask("hh:mm"),$("#newPotencia").change(function(){potencia_new_contratada=new Number($("#newPotencia").val())}),$("#analise-but").click(function(){uppResultados(),nextStep()}),$(".reanalise").click(function(){uppResultados()}),$("#vacations").change(function(){"Sim"==$("#vacations").val()?$("#vacationTimeDiv").show():$("#vacationTimeDiv").hide()}),$("#cenarios").change(function(){3==$("#cenarios").val()?$("#otherCenario").show():$("#otherCenario").hide()}),$(".timepickerStart").attr("disabled",!0),$(".timepickerEnd").attr("disabled",!0),$(".checkBox").change(function(){1==$(this)[0].checked?($("#timepicker"+$(this).val()+"Start").removeAttr("disabled"),$("#timepicker"+$(this).val()+"End").removeAttr("disabled"),$("#timepicker"+$(this).val()+"Start").val("09:00"),$("#timepicker"+$(this).val()+"End").val("17:00")):($("#timepicker"+$(this).val()+"Start").attr("disabled",!0),$("#timepicker"+$(this).val()+"End").attr("disabled",!0),$("#timepicker"+$(this).val()+"Start").val("00:00"),$("#timepicker"+$(this).val()+"End").val("00:00"))})});