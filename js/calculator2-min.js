function buildDistricts(){for(var o=0;o<distritosI.length;o++)$("#distrito").append($('<option class="op"></option>').val(o).html(distritosI[o].nome))}function getDistrictValues(){var o=new Number($("#distrito").val());$("#peptInstalada").attr("value",distritosI[o].PEPtInstalada)}function buildNTension(){for(var o=0;o<ntensaoI.length;o++)$("#ntensao").append($('<option class="op"></option>').val(o).html(ntensaoI[o].nome))}function getNTensionValues(){var o=new Number($("#ntensao").val());if(cleanCTarifarioHorario(),buildCTarifario(ntensaoI[o].cicloTarifario),buildCHorario(ntensaoI[o].cicloHorario,$("#potencia").val()),buildCHorarioPotencia(),2==$("#cicloHorario").children().length){var i=""!=$("#cicloHorario").children('option[value="4"]')[0]&&void 0!=$("#cicloHorario").children('option[value="4"]')[0]?$("#cicloHorario").children('option[value="4"]')[0].value:0,e=""!=$("#cicloHorario").children('option[value="3"]')[0]&&void 0!=$("#cicloHorario").children('option[value="3"]')[0]?$("#cicloHorario").children('option[value="3"]')[0].value:0;if(4==i){var a=$("#cicloHorario").children()[1].value;$("#cicloHorario").val(a),$("#cicloHorario").select()}else if(3==i){var a=$("#cicloHorario").children()[1].value;$("#cicloHorario").val(a),$("#cicloHorario").select()}}}function buildCTarifario(o){if(3==$("#ntensao").val())$("#cicloTarifario").attr("disabled","disabled").addClass("sel-disable"),$('#cicloTarifario option:contains("Seleccione uma das opções")').text("Não aplicável");else if(void 0!=o&&null!=o&&""!=o){$("#cicloTarifario").removeAttr("disabled").removeClass("sel-disable"),$('#cicloTarifario option:contains("Não aplicável")').text("Seleccione uma das opções");for(var i=0;i<o.length;i++)$("#cicloTarifario").append($('<option class="op"></option>').val(i).html(o[i].nome))}}function buildCHorario(o,i){if(3==$("#ntensao").val()&&i>=20.7)$("#cicloHorario").append($('<option class="op"></option>').val(ciclo_horarioI[2].valor).html(ciclo_horarioI[2].nome)),$("#cicloHorario").val(ciclo_horarioI[2].valor),$("#cicloHorario").select();else for(var e=0;e<o.length;e++)$("#cicloHorario").append($('<option class="op"></option>').val(o[e].valor).html(o[e].nome))}function buildCHorarioPotencia(){if(""!=$("#potencia").val())if(3==$("#ntensao").val()&&$("#potencia").val()<=41.4&&$("#potencia").val()>=1.15){var o=$("#cicloHorario").val();$("#cicloHorario").children("option:not(:first)").remove();var i=new Number($("#ntensao").val()),e=new Number($("#potencia").val());buildCHorario(ntensaoI[i].cicloHorario,e)}else 3==$("#ntensao").val()&&($("#potencia").val()>41.4||$("#potencia").val()<1.15)?alert("A potência introduzida para BTN's deverá estar entre 1.15 e 41.40 kVA."):2==$("#ntensao").val()&&$("#potencia").val()<=41.4?alert("A potência introduzida para BTE's deverá ser sempre superior a 41.41 kW."):(1==$("#ntensao").val()||0==$("#ntensao").val())&&$("#potencia").val()<=0&&alert("A potência introduzida para AT's e MT's deverá ser sempre superior a 0 kW.")}function cleanCTarifarioHorario(){$("#cicloTarifario").children("option:not(:first)").remove(),$("#cicloHorario").children("option:not(:first)").remove()}function setSelect(o,i){if(""!=i){if(""==o.val())return o.focus(),!1;0==o.children('option[value="'+i+'"]').length?alert("Selecção inválida"):o.val(i),o.select()}}function buildHorarioFuncionamento(){for(var o=0;o<horariosCenI.length;o++)$("#cenarios").append($('<option class="op"></option>').val(o).html(horariosCenI[o].nome))}function buildVacations(){for(var o=0;o<periodoEncerramento.length;o++)$("#vacationsTime").append($('<option class="op"></option>').val(o).html(periodoEncerramento[o].nome))}function buildTarifario(){var o=new Number($("#cicloHorario").val())-1;if(void 0!=ciclo_horarioI[o]&&null!=ciclo_horarioI[o]){$("#tarifarioNome").html(ciclo_horarioI[o].nome);var e='<span>Tarifário</span><br><label style="font-size:14px;text-transform:none; font-weight:nromal;">* Usar "." (ponto) como separador das casas decimais</label>',a="<span>Introduzir custos unitários de energia, incluindo tarifas de acesso às redes</span><br><br>",r='<table class="table table-bordered" id="tableTarif"><tbody><tr style="font-weight:bold;"><th class="tituloTH">Ciclos</th><th class="tituloTH">Custos (€/kWh) *</th></tr>';for(i=0;i<ciclo_horarioI[o].periodoTarifario.length;i++)4==i?(r+='<tr><th colspan=2 class="tituloTH">Custo (€/kWh.dia) *</th></tr>',r+='<tr class="textTR">',r+='<td class="in">'+ciclo_horarioI[o].periodoTarifario[i].nome+'</td><td class="in"><input required class="form-control xInput" step="0.00001" type="number" placeholder="Ex: 0.10 " id="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'" name="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'"></td>',r+="</tr>"):(r+='<tr class="textTR">',r+='<td class="in">'+ciclo_horarioI[o].periodoTarifario[i].nome+'</td><td class="in"><input required class="form-control xInput" step="0.00001" type="number" placeholder="Ex: 0.10 " id="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'" name="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'"></td>',r+="</tr>");for($(".second").html(e),$(".nota-tarifas").html(a),$("#tarifarios").html(r+"</tbody></table>"),i=0;i<ciclo_horarioI[o].periodoTarifario.length;i++)$("#"+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor).rules("add",{required:!0,min:0,number:!0,step:1e-5,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',number:'<label style="font-size: 14px; color: red;">Introduza (.) em vez de (,).</label>',step:'<label style="font-size: 14px; color: red;">O número só deverá conter conter no máx. 5 casas decimais. Ex: 0.00001</label>'}})}}function buildSelectConsumos(){for(var o=0;o<consumosI.length;o++)$("#facturas").append($('<option class="op"></option>').val(consumosI[o].value).html(consumosI[o].nome))}function buildConsumos(){var o=new Number($("#cicloHorario").val())-1,e=new Number($("#facturas").val()),a="",r=0,l=ciclo_horarioI[o].periodoTarifario.length,t="<span>Fatura</span>";if(1==e){for(size=3,a='<table class="table table-bordered" id="tbl-factura-mensal">',j=0;j<size;j++){for(0==j&&(a+='<tr style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),1==j&&(a+='<tr id="mensal" class="textTR"><td class="title-padd">Mensal</td>'),2==j&&(a+='<tr id="anual" class="textTR"><td class="title-padd">Anual</td>'),i=0;i<l;i++)0==j&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<th class="tituloTH">Total</th>':0==j&&i==l-1?(a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",a+='<th class="tituloTH">Total</th>'):0==j&&i>=0?a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":1==j&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<td class="in" id="totalMensal"></td>':1==j&&i==l-1?(a+='<td><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="totalMensal"></td>'):1==j&&i>=0?a+='<td><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>':2==j&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<td class="in" id="total_anual"></td>':2==j&&i==l-1?(a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_anual"></td>'):2==j&&i>=0&&(a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');a+="</tr>"}a+="</table>"}else if(2==e){for(size=2,a='<table class="table table-bordered" id="tbl-consumos-anuais"><tbody>',j=0;j<size;j++){for(0==j&&(a+='<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),1==j&&(a+='<tr class="textTR"><td class="title-padd">Anual</td>'),i=0;i<l;i++)0==j&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<th class="tituloTH">Total</th>':0==j&&i==l-1?(a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",a+='<th class="tituloTH">Total</th>'):0==j&&i>=0?a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":1==j&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<td class="in" id="total_anual"></td>':1==j&&i==l-1?(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_anual"></td>'):1==j&&i>=0&&(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');a+="</tr>"}a+="</table>"}else if(12==e){for(size=14,a='<table class="table table-bordered" id="tbl-facturas"><tbody>',j=0;j<size;j++){for(0==j&&(a+='<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),j==size-1?a+='<tr class="textTR"><td class="title-padd">Total</td>':j>0&&(a+='<tr class="textTR"><td class="title-padd">'+producaoSolarMes[j-1].nome+"</td>"),i=0;i<l;i++)0==j&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<th class="tituloTH">Total</th>':0==j&&i==l-1?(a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",a+='<th class="tituloTH">Total</th>'):0==j&&i>=0?a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":j==size-1&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<td class="in" id="total_anual"></td>':j==size-1&&i==l-1?(a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_anual"></td>'):j==size-1&&i>=0?a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>':j>0&&4==ciclo_horarioI[o].valor&&i==l-1?a+='<td class="in" id="total_mensal_'+producaoSolarMes[j-1].valor+'"></td>':j>0&&i==l-1?(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_mensal_'+producaoSolarMes[j-1].valor+'"></td>'):j>0&&i>=0&&(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');a+="</tr>"}a+="</table>"}if($(".third").html(t),$("#factura-consumo").html(a),1==e)for(size=3,j=0;j<size;j++)for(i=0;i<l;i++)1==j&&i==l-1?$("#mensal_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:0,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',digits:'<label style="font-size: 14px; color: red;">Introduza (.) em vez de (,).</label>',step:'<label style="font-size: 14px; color: red;">O passo deverá ser de 1.</label>'}}):1==j&&i>=0&&$("#mensal_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:0,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',digits:'<label style="font-size: 14px; color: red;">Introduza (.) em vez de (,).</label>',step:'<label style="font-size: 14px; color: red;">O passo deverá ser de 1.</label>'}});else if(2==e)for(size=2,j=0;j<size;j++)for(i=0;i<l;i++)1==j&&i==l-1?$("#anual_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:0,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',digits:'<label style="font-size: 14px; color: red;">Introduza um número inteiro</label>',step:'<label style="font-size: 14px; color: red;">O passo deverá ser de 1.</label>'}}):1==j&&i>=0&&$("#anual_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:0,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',digits:'<label style="font-size: 14px; color: red;">Introduza um número inteiro</label>',step:'<label style="font-size: 14px; color: red;">O passo deverá ser de 1.</label>'}});else if(12==e)for(size=14,j=0;j<size;j++)for(i=0;i<l;i++)j>0&&i==l-1?$("#consumo_"+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:0,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',digits:'<label style="font-size: 14px; color: red;">Introduza (.) em vez de (,).</label>',step:'<label style="font-size: 14px; color: red;">O passo deverá ser de 1.</label>'}}):j>0&&i>=0&&$("#consumo_"+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:0,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo tem que ser maior que 0.</label>',digits:'<label style="font-size: 14px; color: red;">Introduza (.) em vez de (,).</label>',step:'<label style="font-size: 14px; color: red;">O passo deverá ser de 1.</label>'}})}function nextStep(){var o=$(".step:visible").data("id"),i=$(".step:visible").data("id")+1;$('[data-id="'+o+'"]').hide(),$('[data-id="'+i+'"]').show(),$(".anterior:hidden").length>1&&$(".anterior").show(),3==i&&($(".but-2").hide(),$(".analise").hide(),$(".end-step").show()),4==i&&($(".but-2").hide(),$(".end-step").hide(),$(".print_pdf").show(),$(".reload-but").show(),$(".analise").show())}function prevStep(){var o=$(".step:visible").data("id"),i=$(".step:visible").data("id")-1;$('[data-id="'+o+'"]').hide(),$('[data-id="'+i+'"]').show(),1==i&&$(".anterior").hide(),i<3&&($(".end-step").hide(),$(".analise").hide(),$(".print_pdf").hide(),$(".but-2").show()),3==i&&($(".but-2").hide(),$(".analise").hide(),$(".print_pdf").hide(),$(".reload-but").hide(),$(".end-step").show()),4==i&&($(".analise").hide(),$(".but-2").hide(),$(".print_pdf").hide(),$(".end-step").show())}$(document).ready(function(){buildDistricts(),buildNTension(),buildHorarioFuncionamento(),buildVacations(),buildSelectConsumos(),somaRow(),$("#cenarios").change(buildHorariosFuncionamento),$("#distrito").change(getDistrictValues),$("#ntensao").change(getNTensionValues),$("#cicloHorario").change(buildTarifario),$("#cicloHorario").select(buildTarifario),$("#facturas").change(buildConsumos),$("#cicloTarifario").change(function(){cicloTarifario=$(this).val()}),$("#reload-but").click(function(){location.reload()}),$("#newPotencia").change(function(){potencia_new_contratada=new Number($("#newPotencia").val())}),$("#newPotenciaUpac").change(function(){potencia_new_contratada_upac=new Number($("#newPotenciaUpac").val())}),$(".reanalise").click(function(){uppResultados(),upacResultados()}),$("#vacations").change(function(){"Sim"==$("#vacations").val()?$("#vacationTimeDiv").show():$("#vacationTimeDiv").hide()}),$("#cenarios").change(function(){3==$("#cenarios").val()?$("#otherCenario").show():$("#otherCenario").hide()}),$(".timepickerStart").attr("disabled",!0),$(".timepickerEnd").attr("disabled",!0),$(".checkBox").change(function(){1==$(this)[0].checked?($("#timepicker"+$(this).val()+"Start").removeAttr("disabled"),$("#timepicker"+$(this).val()+"End").removeAttr("disabled"),$("#timepicker"+$(this).val()+"Start").val("09:00"),$("#timepicker"+$(this).val()+"End").val("17:00")):($("#timepicker"+$(this).val()+"Start").attr("disabled",!0),$("#timepicker"+$(this).val()+"End").attr("disabled",!0),$("#timepicker"+$(this).val()+"Start").val("00:00"),$("#timepicker"+$(this).val()+"End").val("00:00"))}),$("#fotovoltaico").validate({rules:{distrito:{required:!0},peptInstalada:{required:!0},ntensao:{required:!0},potencia:{required:!0,min:1},cicloTarifario:{required:function(o){return""!=$("#ntensao").val()&&void 0!=$("#ntensao").val()&&(0==$("#ntensao").val()||1==$("#ntensao").val()||2==$("#ntensao").val())}},cicloHorario:{required:!0},question_one:{required:!0},question_two:{required:!0},facturas:{required:!0},cenarios:{required:!0},lunchBreak:{required:!0},vacations:{required:!0},vacationsTime:{required:function(o){return""!=$("#vacations").val()&&void 0!=$("#vacations").val()&&"Sim"==$("#vacations").val()}}},messages:{distrito:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},peptInstalada:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},ntensao:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},potencia:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">Este campo deverá ser sempre positivo e maior que zero.</label>'},cicloTarifario:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},cicloHorario:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},question_one:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},question_two:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},facturas:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},cenarios:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},lunchBreak:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},vacations:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},vacationsTime:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'}}}),$(".seguinte").click(function(){$("#fotovoltaico").valid()&&nextStep()}),$(".end-but").click(function(){$("#fotovoltaico").valid()&&(uppResultados(),upacResultados(),nextStep())})});