
var distritosI = [
    {
        nome:"Aveiro", 
        PEPtInstalada:1460 
    },
    {
        nome:"Beja", 
        PEPtInstalada:1560
    },
    {
        nome:"Braga", 
        PEPtInstalada:1370 
    },
    {
        nome:"Bragança", 
        PEPtInstalada:1470 
    },
    {
        nome:"Castelo Branco", 
        PEPtInstalada:1530 
    },
    {
        nome:"Coimbra", 
        PEPtInstalada:1420 
    },
    {
        nome:"Évora", 
        PEPtInstalada:1540 
    },
    {
        nome:"Faro", 
        PEPtInstalada:1640 
    },
    {
        nome:"Guarda",
        PEPtInstalada:1480
    },
    {
        nome:"Leiria",
        PEPtInstalada:1420
    },
    {
        nome:"Lisboa",
        PEPtInstalada:1490
    },
    {
        nome:"Portalegre",
        PEPtInstalada:1490 
    },
    {
        nome:"Porto",
        PEPtInstalada:1470
    },
    {
        nome:"Santarém",
        PEPtInstalada:1520 
    },
    {
        nome:"Setúbal",
        PEPtInstalada:1580
    },
    {
        nome:"Viana do Castelo",
        PEPtInstalada:1480 
    },
    {
        nome:"Vila Real",
        PEPtInstalada:1420
    },
    {
        nome:"Viseu",
        PEPtInstalada:1450
    },
    {
        nome:"Açores",
        PEPtInstalada:1280
    },
    {
        nome:"Madeira", 
        PEPtInstalada:1490
    }
];

var ciclo_tarifarioI = [
    {
        nome:"Semanal",
        numHoras:1003 
    },
    {
        nome:"Diário",
        numHoras:1460 
    }
];

var tarifa_uppI = [
    {
        nome:"Categoria I",
        valor: 0.095
    },
    {
        nome:"Categoria II",
        valor: 0.105
    },
    {
        nome:"Categoria III",
        valor: 0.100
    }
];

var tarifa_upacI = 0.047;

var investimentoI = [
    {
        nome:"<10 kW",
        min: 0,
        max:10,
        valor:1400.00
    },
    {
        nome:"10 a 50 kW",
        min: 10,
        max:50,
        valor:1300.00
    },
    {
        nome:"50 a 100 kW",
        min: 50,
        max:100,
        valor:1200.00
    },
    {
        nome:"100 a 200 kW",
        min: 100,
        max:200,
        valor:1100.00
    },
    {
        nome:">200 kW",
        min: 200,
        max:undefined,
        valor:1000.00
    }
];

// HORARIOS CUSTOM 
var horarioCustomTable = [
    {
        dia: "Segunda",
        id: "segunda",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    },
    {
        dia: "Terca",
        id: "terca",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    },
    {
        dia: "Quarta",
        id: "quarta",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    },
    {
        dia: "Quinta",
        id: "quinta",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    },
    {
        dia: "Sexta",
        id: "sexta",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    },
    {
        dia: "Sabado",
        id: "sabado",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    },
    {
        dia: "Domingo",
        id: "domingo",
        box: "check",
        turno: [
            "entrada",
            "saida"
        ]
    }
];

var ciclo_horarioI = [
    {   
        nome:"Simples",
        periodoTarifario: [
            {
                nome: "Consumo",
                valor: "consumo"
            }            
        ],
        valor: 1
    },
    {
        
        nome:"Bi-horário",
        periodoTarifario: [
            {
                nome: "Vazio",
                valor: "vazio"
            },
            {
                nome: "Fora de Vazio",
                valor: "fora_vazio"
            } 
        ],
        valor: 2
    },
    {
        nome:"Tri-horário",
        periodoTarifario: [
            {
                nome: "Ponta",
                valor: "ponta"
            },
            {
                nome: "Cheia",
                valor: "cheia"
            },
            {
                nome: "Vazio",
                valor: "vazio"
            } 
        ],        
        valor: 3
    },
    {
        nome:"Tetra-horário",
        periodoTarifario: [
            {
                nome: "Ponta",
                valor: "ponta"
            },
            {
                nome: "Cheia",
                valor: "cheia"
            },
            {
                nome: "Vazio Normal",
                valor: "vazio"
            },
            {
                nome: "Super Vazio",
                valor: "super_vazio"
            },
            {
                nome: "Potência em Horas de Ponta",
                valor: "pt_horas_ponta"
            }
        ],        
        valor: 4
    }
];

var ntensaoI = [
    { 
        nome: "Alta tensão", 
        valor:"AT", 
        cicloTarifario: ciclo_tarifarioI, 
        cicloHorario: [ ciclo_horarioI[3] ] 
    },
    { 
        nome: "Média tensão", 
        valor:"MT", 
        cicloTarifario: ciclo_tarifarioI, 
        cicloHorario: [ ciclo_horarioI[3] ]  
    },
    { 
        nome: "Baixa tensão especial", 
        valor:"BTE", 
        cicloTarifario: ciclo_tarifarioI, 
        cicloHorario: [ ciclo_horarioI[3] ]  
    },
    { 
        nome: "Baixa tensão normal", 
        valor:"BTN", 
        cicloTarifario: undefined, 
        cicloHorario: [ ciclo_horarioI[0], ciclo_horarioI[1], ciclo_horarioI[2] ] 
    }
];

var consumosI = [
    {
        nome: "Fatura de um mês",
        help: "Quando só possuir uma fatura de um dos meses do ano (representativo).",
        value: 1
    },
    {
        nome: "Consumos anuais",
        help: "Quando só possuir os consumos totais anuais.",
        value: 2        
    },
    {
        nome: "12 Faturas mensais",
        help: "Quando possuir todas as faturas mensais.",
        value: 12  
    }
];

var horariosCenI = [
    {
        nome:"Dias úteis, das 9:00 às 17:00",
        inicio:"9:00:00.000",
        fim:"17:00:00.000",
        totalHoras: 8
    },
    {
        nome:"Todos os dias, das 9:00 às 21:00",
        inicio:"9:00:00.000",
        fim:"21:00:00.000",
        totalHoras: 12
    },
    {
        nome:"24/7",
        inicio:"00:00:00.000",
        fim:"23:59:59.999",
        totalHoras: 24
    }
];

var lunchTime = ["Sim","Não"];

var consumo_almoco = 0.5;

var periodoEncerramento = [
    {
        nome: "2 semanas em Dezembro",
        valor: [12]
    },
    {
        nome: "2 semanas em Agosto",
        valor: [8]
    },
    {
        nome: "Meses de Julho e Agosto",
        valor: [7,8]
    },
    {
        nome: "2 semanas em Dezembro e 2 semanas em Agosto",
        valor: [8,12]
    },
    {
        nome: "2 semanas em Dezembro, meses de Julho e Agosto",
        valor: [7,8,12]
    }
    
];

var consumo_meses_ferias = 0.6;

var producaoSolarMes = [
    {
        nome:"Janeiro",
        valor:1,
        producao:0.04
    },
    {
        nome:"Fevereiro",
        valor:2,
        producao:0.05
    },
    {
        nome:"Março",
        valor:3,
        producao:0.075
    },
    {
        nome:"Abril",
        valor:4,
        producao:0.09
    },
    {
        nome:"Maio",
        valor:5,
        producao:0.11
    },
    {
        nome:"Junho",
        valor:6,
        producao:0.12
    },
    {
        nome:"Julho",
        valor:7,
        producao:0.13
    },
    {
        nome:"Agosto",
        valor:8,
        producao:0.125
    },
    {
        nome:"Setembro",
        valor:9,
        producao:0.10
    },
    {
        nome:"Outubro",
        valor:10,
        producao:0.075
    },
    {
        nome:"Novembro",
        valor:11,
        producao:0.045
    },
    {
        nome:"Dezembro",
        valor:12,
        producao:0.04
    }
];

var producaoSolarDiaria = [
    {
        horas:"07:00:00.000",
        inverno: 0.00,
        verão: 0.01
    },
    {
        horas:"08:00:00.000",
        inverno: 0.025,
        verão: 0.02
    },
    {
        horas:"09:00:00.000",
        inverno: 0.0525,
        verão: 0.04
    },
    {
        horas:"10:00:00.000",
        inverno: 0.1025,
        verão: 0.08
    },
    {
        horas:"11:00:00.000",
        inverno: 0.2050,
        verão: 0.12
    },
    {
        horas:"12:00:00.000",
        inverno: 0.23,
        verão: 0.15
    },
    {
        horas:"13:00:00.000",
        inverno: 0.205,
        verão: 0.16
    },
    {
        horas:"14:00:00.000",
        inverno: 0.1025,
        verão: 0.15
    },
    {
        horas:"15:00:00.000",
        inverno: 0.00,
        verão: 0.01
    },
    {
        horas:"16:00:00.000",
        inverno: 0.0525,
        verão: 0.12
    },
    {
        horas:"17:00:00.000",
        inverno: 0.00,
        verão: 0.04
    },
    {
        horas:"18:00:00.000",
        inverno: 0.00,
        verão: 0.02
    },
    {
        horas:"19:00:00.000",
        inverno: 0.00,
        verão: 0.01
    }
];

var producaoSolarPeriodo = [
    {
        cicloTarifario: ciclo_tarifarioI[0],
        cicloHorairo: ciclo_horarioI[2],
        periodoTarifario: [ 
            { 
                nome: "ponta",
                inverno: 0.25,
                verao: 0.17 
            },
            { 
                nome: "cheia",
                inverno: 0.55,
                verao: 0.62
            },
            { 
                nome: "vazio",
                inverno: 0.20,
                verao: 0.21
            }]
    },
    {
        cicloTarifario: ciclo_tarifarioI[1],
        cicloHorario: ciclo_horarioI[2],
        periodoTarifario: [ 
            { 
                nome: "ponta",
                inverno: 0.15,
                verao: 0.28
            },
            { 
                nome: "cheia",
                inverno: 0.85,
                verao: 0.71
            },
            { 
                nome: "vazio",
                inverno: 0.00,
                verao: 0.01
            }]
    },
    {
        cicloTarifario: undefined,
        cicloHorario: ciclo_horarioI[1],
        periodoTarifario: [ 
            { 
                nome: "fora_vazio",
                inverno: 1,
                verao: 0.99
            },
            { 
                nome: "vazio",
                inverno: 0,
                verao: 0.01
            }]        
    }
];
var cons_meses_ferias = 0.6;

var varConsumoMensal = [
    { 
        mes: "Janeiro", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Fevereiro", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Março", 
        periodos: [
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Abril", 
        periodos: [
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Maio", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Junho", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Julho", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0285
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[3],
                value: .0295
            }
        ]
    },
    { 
        mes: "Agosto", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0558
            },
            {
                periodo: periodoEncerramento[2],
                value: .0285
            },
            {
                periodo: periodoEncerramento[3],
                value: .0575
            },
            {
                periodo: periodoEncerramento[4],
                value: .0295
            }
        ]
    },
    { 
        mes: "Setembro", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Outubro", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Novembro", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0858
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0885
            },
            {
                periodo: periodoEncerramento[4],
                value: .0975
            }
        ]
    },
    { 
        mes: "Dezembro", 
        periodos: [ 
            {
                periodo: periodoEncerramento[0],
                value: .0558
            },
            {
                periodo: periodoEncerramento[1],
                value: .0858
            },
            {
                periodo: periodoEncerramento[2],
                value: .0943
            },
            {
                periodo: periodoEncerramento[3],
                value: .0575
            },
            {
                periodo: periodoEncerramento[4],
                value: .0635
            }
        ]
    }  
];

var consumoHorasSolGlobal = [
    {
        cicloTarifario: ciclo_tarifarioI[0],
        cicloHorairo: ciclo_horarioI[2],
        periodoTarifario: [ 
            { 
                nome: "ponta",
                inverno: 0,
                verao: 0 
            },
            { 
                nome: "cheia",
                inverno: 0,
                verao: 0
            },
            { 
                nome: "vazio",
                inverno: 0,
                verao: 0
            }
        ]
    },
    {
        cicloTarifario: ciclo_tarifarioI[1],
        cicloHorario: ciclo_horarioI[2],
        periodoTarifario: [ 
            { 
                nome: "ponta",
                inverno: 0,
                verao: 0
            },
            { 
                nome: "cheia",
                inverno: 0,
                verao: 0
            },
            { 
                nome: "vazio",
                inverno: 0,
                verao: 0
            }
        ]
    },
    {
        cicloTarifario: undefined,
        cicloHorario: ciclo_horarioI[1],
        periodoTarifario: [ 
            { 
                nome: "fora_vazio",
                inverno: 0,
                verao: 0
            },
            { 
                nome: "vazio",
                inverno: 0,
                verao: 0
            }
        ]        
    }
];

var condicoesLimitePotencia = [
    "Potência da central limitada pela área disponível",
    "Potência da central limitada pela potência contratada",
    "Potência da central limitada pelo consumo da instalação",
    "Potência da central limitada a 250kW (regime jurídico aplicável às UPP)"
];

var modulosSolares = {
    potencia: 0.275,
    area: 1.7
};

var des_consumo = {
    base: 0.3,
    rest_consumo: 0.7
};

var avisos_excedente_upac = {
    encerramento_agosto: 0.2,
    funcionamento_continuo: 0.05,
    outros: 0.15,
    description: "UPAC com muito excedente! <br> Considere reduzir a potência da Central. <br> Tenha no entanto também em consideração <br> o período de retorno do investimento."
};