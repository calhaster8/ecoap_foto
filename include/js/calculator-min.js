function buildDistricts(){for(var o=0;o<distritosI.length;o++)$("#distrito").append($('<option class="op"></option>').val(o).html(distritosI[o].nome))}function getDistrictValues(){var o=new Number($("#distrito").val());$("#peptInstalada").attr("value",distritosI[o].PEPtInstalada)}function buildNTension(){for(var o=0;o<ntensaoI.length;o++)$("#ntensao").append($('<option class="op"></option>').val(o).html(ntensaoI[o].nome))}function getNTensionValues(){var o=new Number($("#ntensao").val());if(cleanCTarifarioHorario(),buildCTarifario(ntensaoI[o].cicloTarifario),buildCHorario(ntensaoI[o].cicloHorario,$("#potencia").val()),buildCHorarioPotencia(),2==$("#cicloHorario").children().length){var e=""!=$("#cicloHorario").children('option[value="4"]')[0]&&null!=$("#cicloHorario").children('option[value="4"]')[0]?$("#cicloHorario").children('option[value="4"]')[0].value:0;""!=$("#cicloHorario").children('option[value="3"]')[0]&&null!=$("#cicloHorario").children('option[value="3"]')[0]&&$("#cicloHorario").children('option[value="3"]')[0].value;if(4==e){var i=$("#cicloHorario").children()[1].value;$("#cicloHorario").val(i),$("#cicloHorario").select()}else if(3==e){i=$("#cicloHorario").children()[1].value;$("#cicloHorario").val(i),$("#cicloHorario").select()}}}function buildCTarifario(o){if(3==$("#ntensao").val())$("#cicloTarifario").attr("disabled","disabled").addClass("sel-disable"),$('#cicloTarifario option:contains("Selecionar opção")').text("Não aplicável");else if(null!=o&&null!=o&&""!=o){$("#cicloTarifario").removeAttr("disabled").removeClass("sel-disable"),$('#cicloTarifario option:contains("Não aplicável")').text("Selecionar opção");for(var e=0;e<o.length;e++)$("#cicloTarifario").append($('<option class="op"></option>').val(e).html(o[e].nome))}}function buildCHorario(o,e){if(3==$("#ntensao").val()&&e>=20.7)$("#cicloHorario").append($('<option class="op"></option>').val(ciclo_horarioI[2].valor).html(ciclo_horarioI[2].nome)),$("#cicloHorario").val(ciclo_horarioI[2].valor),$("#cicloHorario").select();else for(var i=0;i<o.length;i++)$("#cicloHorario").append($('<option class="op"></option>').val(o[i].valor).html(o[i].nome))}function buildCHorarioPotencia(){if(""!=$("#potencia").val())if(3==$("#ntensao").val()&&$("#potencia").val()<=41.4&&$("#potencia").val()>=1.15){$("#cicloHorario").val();$("#cicloHorario").children("option:not(:first)").remove();var o=new Number($("#ntensao").val()),e=new Number($("#potencia").val());buildCHorario(ntensaoI[o].cicloHorario,e)}else 3==$("#ntensao").val()&&($("#potencia").val()>41.4||$("#potencia").val()<1.15)?alert("A potência contratada deverá ser de 1.15 a 41.40 kVA."):2==$("#ntensao").val()&&$("#potencia").val()<=41.4?alert("A potência contratada deverá ser superior a 41.4 kW."):(1==$("#ntensao").val()||0==$("#ntensao").val())&&$("#potencia").val()<=0&&alert("A potência contrtatda deverá ser superior a 1 kW.")}function cleanCTarifarioHorario(){$("#cicloTarifario").children("option:not(:first)").remove(),$("#cicloHorario").children("option:not(:first)").remove()}function setSelect(o,e){if(""!=e){if(""==o.val())return o.focus(),!1;0==o.children('option[value="'+e+'"]').length?alert("Selecção inválida"):o.val(e),o.select()}}function buildHorarioFuncionamento(){for(var o=0;o<horariosCenI.length;o++)$("#cenarios").append($('<option class="op"></option>').val(o).html(horariosCenI[o].nome))}function buildVacations(){for(var o=0;o<periodoEncerramento.length;o++)$("#vacationsTime").append($('<option class="op"></option>').val(o).html(periodoEncerramento[o].nome))}function buildTarifario(){var o=new Number($("#cicloHorario").val())-1;if(null!=ciclo_horarioI[o]&&null!=ciclo_horarioI[o]){$("#tarifarioNome").html(ciclo_horarioI[o].nome);var e='<table class="table table-bordered" id="tableTarif"><tbody><tr style="font-weight:bold;"><th class="tituloTH">Ciclo Horário</th><th class="tituloTH">Custo unitário (€/kWh)</th></tr>';for(i=0;i<ciclo_horarioI[o].periodoTarifario.length;i++)4==i?(e+='<tr><th colspan=2 class="tituloTH">Custo (€/kWh.dia)</th></tr>',e+='<tr class="textTR">',e+='<td class="in">'+ciclo_horarioI[o].periodoTarifario[i].nome+'</td><td class="in"><input required class="form-control xInput" min="0" step="0.0001" max="1" type="number" placeholder="Ex: 0.10 " id="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'" name="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'"></td>',e+="</tr>"):(e+='<tr class="textTR">',e+='<td class="in">'+ciclo_horarioI[o].periodoTarifario[i].nome+'</td><td class="in"><input required class="form-control xInput" min="0" step="0.0001" max="1" type="number" placeholder="Ex: 0.10 " id="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'" name="'+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor+'"></td>',e+="</tr>");for($(".second").html("<span>Tarifário e Consumos de Energia</span>"),$(".nota-tarifas").html("<span>Introduzir custos unitários de energia, incluindo tarifas de acesso às redes</span><br><br>"),$("#tarifarios").html(e+"</tbody></table>"),i=0;i<ciclo_horarioI[o].periodoTarifario.length;i++)$("#"+ciclo_horarioI[o].periodoTarifario[i].valor+ciclo_horarioI[o].valor).rules("add",{required:!0,min:.01,number:!0,max:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O custo unitário tem que ser maior que 0.01€/kWh</label>',max:'<label style="font-size: 14px; color: red;">O custo unitário tem que ser menor que 1,00€/kWh</label>',number:'<label style="font-size: 14px; color: red;">Introduza números com (.) em vez de (,)</label>'}})}}function buildSelectConsumos(){for(var o=0;o<consumosI.length;o++)$("#facturas").append($('<option class="op"></option>').val(consumosI[o].value).html(consumosI[o].nome))}function buildConsumos(){var o=new Number($("#cicloHorario").val())-1,e=new Number($("#facturas").val()),a="",r=ciclo_horarioI[o].periodoTarifario.length;if(1==e){for(size=3,a='<table class="table table-bordered" id="tbl-factura-mensal">',j=0;j<size;j++){for(0==j&&(a+='<tr style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),1==j&&(a+='<tr id="mensal" class="textTR"><td class="title-padd">Mensal</td>'),2==j&&(a+='<tr id="anual" class="textTR"><td class="title-padd">Anual</td>'),i=0;i<r;i++)0==j&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<th class="tituloTH">Total</th>':0==j&&i==r-1?(a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",a+='<th class="tituloTH">Total</th>'):0==j&&i>=0?a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":1==j&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<td class="in" id="totalMensal"></td>':1==j&&i==r-1?(a+='<td><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="totalMensal"></td>'):1==j&&i>=0?a+='<td><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="mensal_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>':2==j&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<td class="in" id="total_anual"></td>':2==j&&i==r-1?(a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_anual"></td>'):2==j&&i>=0&&(a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');a+="</tr>"}a+="</table>"}else if(2==e){for(size=2,a='<table class="table table-bordered" id="tbl-consumos-anuais"><tbody>',j=0;j<size;j++){for(0==j&&(a+='<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),1==j&&(a+='<tr class="textTR"><td class="title-padd">Anual</td>'),i=0;i<r;i++)0==j&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<th class="tituloTH">Total</th>':0==j&&i==r-1?(a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",a+='<th class="tituloTH">Total</th>'):0==j&&i>=0?a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":1==j&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<td class="in" id="total_anual"></td>':1==j&&i==r-1?(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_anual"></td>'):1==j&&i>=0&&(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');a+="</tr>"}a+="</table>"}else if(12==e){for(size=14,a='<table class="table table-bordered" id="tbl-facturas"><tbody>',j=0;j<size;j++){for(0==j&&(a+='<tr class="textTR" style="font-weight:bold;"><th class="tituloTH">&nbsp;</th>'),j==size-1?a+='<tr class="textTR"><td class="title-padd">Total</td>':j>0&&(a+='<tr class="textTR"><td class="title-padd">'+producaoSolarMes[j-1].nome+"</td>"),i=0;i<r;i++)0==j&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<th class="tituloTH">Total</th>':0==j&&i==r-1?(a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>",a+='<th class="tituloTH">Total</th>'):0==j&&i>=0?a+='<th class="tituloTH">'+ciclo_horarioI[o].periodoTarifario[i].nome+"</th>":j==size-1&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<td class="in" id="total_anual"></td>':j==size-1&&i==r-1?(a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_anual"></td>'):j==size-1&&i>=0?a+='<td class="in" id="anual_'+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>':j>0&&4==ciclo_horarioI[o].valor&&i==r-1?a+='<td class="in" id="total_mensal_'+producaoSolarMes[j-1].valor+'"></td>':j>0&&i==r-1?(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>',a+='<td class="in" id="total_mensal_'+producaoSolarMes[j-1].valor+'"></td>'):j>0&&i>=0&&(a+='<td class="in"><input class="form-control xInput" type="number" onchange="somaRow()" placeholder="ex: 100" id="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'" name="consumo_'+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor+'"></td>');a+="</tr>"}a+="</table>"}if($(".third").html("<span>Fatura</span>"),$("#factura-consumo").html(a),1==e)for(size=3,j=0;j<size;j++)for(i=0;i<r;i++)1==j&&i==r-1?$("#mensal_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:1,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O consumo de energia tem que ser superior a 1</label>',digits:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>'}}):1==j&&i>=0&&$("#mensal_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:1,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O consumo de energia tem que ser superior a 1</label>',digits:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>'}});else if(2==e)for(size=2,j=0;j<size;j++)for(i=0;i<r;i++)1==j&&i==r-1?$("#anual_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:1,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O consumo de energia tem que ser superior a 1</label>',digits:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>'}}):1==j&&i>=0&&$("#anual_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:1,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O consumo de energia tem que ser superior a 1</label>',digits:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>'}});else if(12==e)for(size=14,j=0;j<size;j++)for(i=0;i<r;i++)j>0&&i==r-1?$("#consumo_"+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:1,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O consumo de energia tem que ser superior a 1</label>',digits:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>'}}):j>0&&i>=0&&$("#consumo_"+producaoSolarMes[j-1].valor+"_"+ciclo_horarioI[o].periodoTarifario[i].valor).rules("add",{required:!0,min:1,digits:!0,step:1,messages:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">O consumo de energia tem que ser superior a 1</label>',digits:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números inteiros</label>'}})}function nextStep(){var o=$(".step:visible").data("id"),e=$(".step:visible").data("id")+1;$('[data-id="'+o+'"]').hide(),$('[data-id="'+e+'"]').show(),$(".anterior:hidden").length>1&&$(".anterior").show(),3==e&&($(".but-2").hide(),$(".analise").hide(),$(".end-step").show(),$("#disclaimer").hide()),4==e&&($(".but-2").hide(),$(".end-step").hide(),$(".print_pdf").show(),$(".reload-but").show(),$(".analise").show(),$("#disclaimer").show()),location.hash="html"}function prevStep(){var o=$(".step:visible").data("id"),e=$(".step:visible").data("id")-1;$('[data-id="'+o+'"]').hide(),$('[data-id="'+e+'"]').show(),1==e&&($(".anterior").hide(),$("#disclaimer").hide()),e<3&&($(".end-step").hide(),$(".analise").hide(),$(".print_pdf").hide(),$(".but-2").show(),$("#disclaimer").hide()),3==e&&($(".but-2").hide(),$(".analise").hide(),$(".print_pdf").hide(),$(".reload-but").hide(),$("#newArea").val(""),$("#newPotencia").val(""),$("#newPotenciaUpac").val(""),$(".end-step").show(),$("#disclaimer").hide()),4==e&&($(".analise").hide(),$(".but-2").hide(),$(".print_pdf").hide(),$("#newArea").val(""),$("#newPotencia").val(""),$("#newPotenciaUpac").val(""),$(".end-step").show(),$("#disclaimer").hide()),location.hash="html"}$(document).ready(function(){buildDistricts(),buildNTension(),buildHorarioFuncionamento(),buildVacations(),buildSelectConsumos(),somaRow(),$("#cenarios").change(buildHorariosFuncionamento),$("#distrito").change(getDistrictValues),$("#ntensao").change(getNTensionValues),$("#cicloHorario").change(buildTarifario),$("#cicloHorario").select(buildTarifario),$("#facturas").change(buildConsumos),$("#cicloTarifario").change(function(){cicloTarifario=$(this).val()}),$("#reload-but").click(function(){location.reload()}),$("#newPotencia").change(function(){potencia_new_contratada=new Number($("#newPotencia").val())}),$("#newPotenciaUpac").change(function(){potencia_new_contratada_upac=new Number($("#newPotenciaUpac").val())}),$(".reanalise").click(function(){uppResultados(),upacResultados(),buildGraphFinal()}),$("#vacations").change(function(){"Sim"==$("#vacations").val()?$("#vacationTimeDiv").show():$("#vacationTimeDiv").hide()}),$("#cenarios").change(function(){3==$("#cenarios").val()?$("#otherCenario").show():$("#otherCenario").hide()}),$("#fotovoltaico").validate({rules:{distrito:{required:!0},peptInstalada:{required:!0},ntensao:{required:!0},potencia:{required:!0,min:1,step:.01,number:!0},cicloTarifario:{required:function(o){return""!=$("#ntensao").val()&&null!=$("#ntensao").val()&&(0==$("#ntensao").val()||1==$("#ntensao").val()||2==$("#ntensao").val())}},cicloHorario:{required:!0},question_one:{required:!0},question_two:{required:!0},facturas:{required:!0},cenarios:{required:!0},lunchBreak:{required:!0},vacations:{required:!0},vacationsTime:{required:function(o){return""!=$("#vacations").val()&&null!=$("#vacations").val()&&"Sim"==$("#vacations").val()}},newArea:{min:1,step:.1,number:!0},newPotencia:{min:1,step:.1,number:!0,max:function(){return potencia_upp}},newPotenciaUpac:{min:1,step:.1,number:!0,max:function(){return potencia_max_contratada_upac}}},messages:{distrito:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},peptInstalada:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},ntensao:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},potencia:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>',min:'<label style="font-size: 14px; color: red;">A potência contratada deverá ser maior que 1</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 0.01</label>',number:'<label style="font-size: 14px; color: red;">Introduza números com (.) em vez de (,)</label>'},cicloTarifario:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},cicloHorario:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},question_one:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},question_two:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},facturas:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},cenarios:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},lunchBreak:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},vacations:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},vacationsTime:{required:'<label style="font-size: 14px; color: red;">Este campo é obrigatório.</label>'},newArea:{min:'<label style="font-size: 14px; color: red;">A área disponível tem que ser superior a 1 m2</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 0.1</label>',number:'<label style="font-size: 14px; color: red;">Introduza números com (.) em vez de (,)</label>'},newPotencia:{min:'<label style="font-size: 14px; color: red;">A potência da central tem que ser superior a 1 kW</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 0.1</label>',max:'<label style="font-size: 14px; color: red;">A potência da central não poderá ser superior ao valor máximo permitido</label>',number:'<label style="font-size: 14px; color: red;">Introduza números com (.) em vez de (,)</label>'},newPotenciaUpac:{min:'<label style="font-size: 14px; color: red;">A potência da central tem que ser superior a 1 kW</label>',step:'<label style="font-size: 14px; color: red;">O passo de incremento é de 0.1</label>',max:'<label style="font-size: 14px; color: red;">A potência da central não poderá ser superior ao valor máximo permitido</label>',number:'<label style="font-size: 14px; color: red;">Introduza números com (.) em vez de (,)</label>'}}}),$(".seguinte").click(function(){$("#fotovoltaico").valid()&&nextStep()}),$(".end-but").click(function(){$("#fotovoltaico").valid()&&(uppResultados(),upacResultados(),buildGraphFinal(),nextStep())})});