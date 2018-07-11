var distritosI=[{nome:"Aveiro",PEPtInstalada:1460},{nome:"Beja",PEPtInstalada:1560},{nome:"Braga",PEPtInstalada:1370},{nome:"Bragança",PEPtInstalada:1470},{nome:"Castelo Branco",PEPtInstalada:1530},{nome:"Coimbra",PEPtInstalada:1420},{nome:"Évora",PEPtInstalada:1540},{nome:"Faro",PEPtInstalada:1640},{nome:"Guarda",PEPtInstalada:1480},{nome:"Leiria",PEPtInstalada:1420},{nome:"Lisboa",PEPtInstalada:1490},{nome:"Portalegre",PEPtInstalada:1490},{nome:"Porto",PEPtInstalada:1470},{nome:"Santarém",PEPtInstalada:1520},{nome:"Setúbal",PEPtInstalada:1580},{nome:"Viana do Castelo",PEPtInstalada:1480},{nome:"Vila Real",PEPtInstalada:1420},{nome:"Viseu",PEPtInstalada:1450},{nome:"Açores",PEPtInstalada:1280},{nome:"Madeira",PEPtInstalada:1490}],ciclo_tarifarioI=[{nome:"Semanal",numHoras:1015},{nome:"Diário",numHoras:1460}],tarifa_uppI=[{nome:"Categoria I",valor:.095},{nome:"Categoria II",valor:.105},{nome:"Categoria III",valor:.1}],tarifa_upacI=.047,investimentoI=[{nome:"<10 kW",min:0,max:10,valor:1400},{nome:"10 a 50 kW",min:10,max:50,valor:1300},{nome:"50 a 100 kW",min:50,max:100,valor:1200},{nome:"100 a 200 kW",min:100,max:200,valor:1100},{nome:">200 kW",min:200,max:void 0,valor:1e3}],horarioCustomTable=[{dia:"Segunda",id:"segunda",box:"check",turno:["entrada","saida"]},{dia:"Terca",id:"terca",box:"check",turno:["entrada","saida"]},{dia:"Quarta",id:"quarta",box:"check",turno:["entrada","saida"]},{dia:"Quinta",id:"quinta",box:"check",turno:["entrada","saida"]},{dia:"Sexta",id:"sexta",box:"check",turno:["entrada","saida"]},{dia:"Sabado",id:"sabado",box:"check",turno:["entrada","saida"]},{dia:"Domingo",id:"domingo",box:"check",turno:["entrada","saida"]}],ciclo_horarioI=[{nome:"Simples",periodoTarifario:[{nome:"Consumo",valor:"consumo"}],valor:1},{nome:"Bi-horário",periodoTarifario:[{nome:"Vazio",valor:"vazio"},{nome:"Fora Vazio",valor:"fora_vazio"}],valor:2},{nome:"Tri-horário",periodoTarifario:[{nome:"Ponta",valor:"ponta"},{nome:"Cheia",valor:"cheia"},{nome:"Vazio",valor:"vazio"}],valor:3},{nome:"Tetra-horário",periodoTarifario:[{nome:"Ponta",valor:"ponta"},{nome:"Cheia",valor:"cheia"},{nome:"Vazio",valor:"vazio"},{nome:"Super Vazio",valor:"super_vazio"},{nome:"Potência em Horas de Ponta",valor:"pt_horas_ponta"}],valor:4}],ntensaoI=[{nome:"Alta tensão",valor:"AT",cicloTarifario:ciclo_tarifarioI,cicloHorario:[ciclo_horarioI[3]]},{nome:"Média tensão",valor:"MT",cicloTarifario:ciclo_tarifarioI,cicloHorario:[ciclo_horarioI[3]]},{nome:"Baixa tensão especial",valor:"BTE",cicloTarifario:ciclo_tarifarioI,cicloHorario:[ciclo_horarioI[3]]},{nome:"Baixa tensão normal",valor:"BTN",cicloTarifario:void 0,cicloHorario:[ciclo_horarioI[0],ciclo_horarioI[1],ciclo_horarioI[2]]}],consumosI=[{nome:"Fatura de um mês",help:"Quando só possuir uma fatura de um dos meses do ano.",value:1},{nome:"Consumos anuais",help:"Quando só possuir a fatura dos consumos totais anuais.",value:2},{nome:"12 Faturas",help:"Quando possuir todas as faturas de um ano ou apenas algumas delas.",value:12}],horariosCenI=[{nome:"Dias úteis, das 9:00 às 17:00",inicio:"9:00:00.000",fim:"17:00:00.000",totalHoras:8},{nome:"Todos os dias, das 9:00 às 21:00",inicio:"9:00:00.000",fim:"21:00:00.000",totalHoras:12},{nome:"24/7",inicio:"00:00:00.000",fim:"23:59:59.999",totalHoras:8}],lunchTime=["Sim","Não"],periodoEncerramento=[{nome:"2 semanas em Dezembro",valor:[12]},{nome:"2 semanas em Agosto",valor:[8]},{nome:"Meses de Julho e Agosto",valor:[7,8]},{nome:"2 semanas em Dezembro e 2 semanas em Agosto",valor:[8,12]},{nome:"2 semanas em Dezembro, meses de Julho e Agosto",valor:[7,8,12]}],producaoSolarMes=[{nome:"Janeiro",valor:1,producao:4},{nome:"Fevereiro",valor:2,producao:5},{nome:"Março",valor:3,producao:7.5},{nome:"Abril",valor:4,producao:9},{nome:"Maio",valor:5,producao:11},{nome:"Junho",valor:6,producao:12},{nome:"Julho",valor:7,producao:13},{nome:"Agosto",valor:8,producao:12.5},{nome:"Setembro",valor:9,producao:10},{nome:"Outubro",valor:10,producao:7.5},{nome:"Novembro",valor:11,producao:4.5},{nome:"Dezembro",valor:12,producao:4}],producaoSolarDiaria=[{horas:"07:00:00.000",inverno:0,"verão":1},{horas:"08:00:00.000",inverno:2.5,"verão":2},{horas:"09:00:00.000",inverno:5.25,"verão":4},{horas:"10:00:00.000",inverno:10.25,"verão":8},{horas:"11:00:00.000",inverno:20.5,"verão":12},{horas:"12:00:00.000",inverno:23,"verão":15},{horas:"13:00:00.000",inverno:20.5,"verão":16},{horas:"14:00:00.000",inverno:10.25,"verão":15},{horas:"15:00:00.000",inverno:0,"verão":1},{horas:"16:00:00.000",inverno:5.25,"verão":12},{horas:"17:00:00.000",inverno:0,"verão":4},{horas:"18:00:00.000",inverno:0,"verão":2},{horas:"19:00:00.000",inverno:0,"verão":1}],producaoSolarPeriodo=[{cicloTarifario:ciclo_tarifarioI[0],cicloHorairo:ciclo_horarioI[2],periodoTarifario:[{nome:"ponta",inverno:"25",verao:"17"},{nome:"cheia",inverno:"55",verao:"62"},{nome:"vazio",inverno:"20",verao:"21"}]},{cicloTarifario:ciclo_tarifarioI[1],cicloHorario:ciclo_horarioI[2],periodoTarifario:[{nome:"ponta",inverno:"15",verao:"28"},{nome:"cheia",inverno:"85",verao:"71"},{nome:"vazio",inverno:"0",verao:"1"}]},{cicloTarifario:void 0,cicloHorario:ciclo_horarioI[1],periodoTarifario:[{nome:"fora_vazio",inverno:"100",verao:"0"},{nome:"vazio",inverno:"99",verao:"1"}]}],cons_meses_ferias=.6,varConsumoMensal=[{mes:"Janeiro",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Fevereiro",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Março",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Abril",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Maio",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Junho",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Julho",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0285},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[3],value:.0295}]},{mes:"Agosto",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0558},{periodo:periodoEncerramento[2],value:.0285},{periodo:periodoEncerramento[3],value:.0575},{periodo:periodoEncerramento[4],value:.0295}]},{mes:"Setembro",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Outubro",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Novembro",periodos:[{periodo:periodoEncerramento[0],value:.0858},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0885},{periodo:periodoEncerramento[4],value:.0975}]},{mes:"Dezembro",periodos:[{periodo:periodoEncerramento[0],value:.0558},{periodo:periodoEncerramento[1],value:.0858},{periodo:periodoEncerramento[2],value:.0943},{periodo:periodoEncerramento[3],value:.0575},{periodo:periodoEncerramento[4],value:.0635}]}],condicoesLimitePotencia=["limite de potência pela área disponível","limite de potência pela potência contratada","limite de potência pelo consumo","limite de potência pela lei"],modulosSolares={potencia:.275,area:1.7};