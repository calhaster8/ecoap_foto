function buildGraphFinal(){$(".graph #fotoChart").remove(),$(".graph").append('<canvas id="fotoChart" width="400" height="400"></canvas>');var a=document.getElementById("fotoChart").getContext("2d"),o=[],r=[],t=[],e=[];for(let a=0;a<consumos_balanco_prd.length;a++)o[a]=consumos_balanco_prd[a].toFixed(0);for(let a=0;a<excedente_mes_total_graph.length;a++)r[a]=excedente_mes_total_graph[a].toFixed(0);for(let a=0;a<producao_upac.length;a++)t[a]=producao_upac[a].toFixed(0);for(let a=0;a<producao_upp.length;a++)e[a]=producao_upp[a].toFixed(0);if(maxChart(consumos_balanco_prd)>maxChart(excedente_mes_total_graph)&&maxChart(consumos_balanco_prd)>maxChart(producao_upp)&&maxChart(consumos_balanco_prd)>maxChart(producao_upac))var n=maxChart(consumos_balanco_prd);else if(maxChart(excedente_mes_total_graph)>maxChart(consumos_balanco_prd)&&maxChart(excedente_mes_total_graph)>maxChart(producao_upp)&&maxChart(excedente_mes_total_graph)>maxChart(producao_upac))n=maxChart(excedente_mes_total_graph);else if(maxChart(producao_upp)>maxChart(consumos_balanco_prd)&&maxChart(producao_upp)>maxChart(excedente_mes_total_graph)&&maxChart(producao_upp)>maxChart(producao_upac))n=maxChart(producao_upp);else n=maxChart(producao_upac);new Chart(a,{type:"bar",data:{labels:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],datasets:[{label:"Consumo",data:o,backgroundColor:"rgba(75, 135, 203, 1)",borderColor:"rgba(75, 135, 203, 1)",borderWidth:1},{label:"Excedente",data:r,borderWidth:1,backgroundColor:"rgba(236, 130, 37, .8)",borderColor:"rgba(236, 130, 37, .8)",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",type:"line"},{label:"UPAC",data:t,borderWidth:1,backgroundColor:"rgba(251, 194, 36, .8)",borderColor:"rgba(251, 194, 36, .8)",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",type:"line"},{label:"UPP",data:e,borderWidth:1,backgroundColor:"rgba(253, 256, 136, .8)",borderColor:"rgba(253, 256, 136, .8)",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",type:"line"}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:n,callback:function(a,o,r){return a.toFixed(0)+"kWh"}}}],xAxes:[{ticks:{autoSkip:!1,maxRotation:90,minRotation:90},barThickness:12}]},title:{display:!0,text:"Balanço Energético (kWh)",fontSize:16,fontColor:"#0099cc"}}})}function maxChart(a){var o=0;if(a.length>0)for(var r=0;r<a.length;r++)(a[r]>o||0==o)&&(o=a[r]);return o+=.1*o}