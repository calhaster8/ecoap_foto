
/*
 *
 * PEPtInstalada - Produção Especifica de Potência Instalada - kWh
 * PEArea - Produção Especifica de Área - kWh
 *
 */
var distritos = [
{nome:"Aveiro", PEPtInstalada:1500, PEArea:1700 },
{nome:"Beja", PEPtInstalada:1500, PEArea:1700 },
{nome:"Braga", PEPtInstalada:1500, PEArea:1700 },
{nome:"Bragança", PEPtInstalada:1500, PEArea:1700 },
{nome:"Castelo Branco", PEPtInstalada:1500, PEArea:1700 },
{nome:"Coimbra", PEPtInstalada:1500, PEArea:1700 },
{nome:"Évora", PEPtInstalada:1500, PEArea:1700 },
{nome:"Faro", PEPtInstalada:1500, PEArea:1700 },
{nome:"Guarda", PEPtInstalada:1400, PEArea:1600 },
{nome:"Leiria", PEPtInstalada:1500, PEArea:1700 },
{nome:"Lisboa", PEPtInstalada:1500, PEArea:1700 },
{nome:"Portalegre", PEPtInstalada:1500, PEArea:1700 },
{nome:"Porto", PEPtInstalada:1500, PEArea:1700 },
{nome:"Santarém", PEPtInstalada:1500, PEArea:1700 },
{nome:"Setúbal", PEPtInstalada:1500, PEArea:1700 },
{nome:"Viana do Castelo", PEPtInstalada:1500, PEArea:1700 },
{nome:"Vila Real", PEPtInstalada:1500, PEArea:1700 },
{nome:"Viseu", PEPtInstalada:1500, PEArea:1700 }];




/**
 *
 * Nível de tensão - PHP - €/kW/dia
 *
 */
var ntensao = [
{nome:"AT",valor:0.1408 },
{nome:"MT",valor:0.2641 },
{nome:"BTE",valor:0.6113 },
{nome:"BTN",valor:0.6113 }
];



/**
 *
 * Ciclo Tarifário
 *
 */
var ciclo_tarifario = [
{nome:"semanal",valor:1015 },
{nome:"diário",valor:1460 }
];

/**
 *
 * Ciclo Horário
 *
 */
var ciclos_horarios = ["Tri-horário","Bi-horário","Simples"];
	

/**
 *
 * Tarifa UPP	0,0950	€/kWh
 *
 */	
var tarifa_upp = 0.0950;

/*
Investimento		
<50 kW	1500	€/kWp
50 a 100	1400	€/kWp
100 a 200 kW	1300	€/kWp
>200kW	1200	€/kWp
	
		
		
Dados disponíveis		
1 fatura mensal		
consumos anuais		
12 faturas mensais		
*/