const botonInfo = document.getElementById('informate'); //boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const welcomePage = document.getElementById('welcomePage');
const pageForData = document.getElementById('info');
const dataBank = WORLDBANK;
const pagesjumps = document.getElementById('commits', 'impact') //constantes para brincar a la section que se utiliza como una pagina
const selectOption = document.getElementById('country-filter');
let content = document.getElementById('show-content');
const indicators = document.getElementById('indicator');
const indicadoresHTML = document.getElementById('indicadores')

document.getElementById('informate').addEventListener('click', () => {
  welcomePage.style.display = 'none';
  pageForData.style.display = 'block';

  jumpto(anchor)(); {
    window.location.href = "#" + anchor;
  }
});
const filterCountryIndicator = () => {
  let select = selectOption.value; //value "MEX", "PER","BRA","CHL"
  //console.log(select);
  const country = window.filterCountry(select);
  objectKey(country);
}


const filtroDeIndicadores = document.getElementById('countryfilter').addEventListener('change', () => { //Impresión Database para cada país
  const enclick = countryfilter.value;
  const dataMostrar = dataBank[enclick]
  const indicators = dataMostrar.indicators;
  indicators.forEach(indicator => {
    const indicatorName = indicator.indicatorName;
    const vare = new RegExp(/educación/i)
    if(indicatorName.match(vare) != null){
      indicadoresHTML.insertAdjacentHTML("beforeend", `<option value="${indicatorName}">${indicatorName}</option>`) 
  }
})
indicadoresHTML.addEventListener('change', () => {
let valoresExtraidosDeIndicadores = event.target.value
indicators.forEach(element=> {
if(valoresExtraidosDeIndicadores=== element.indicatorName){
  console.log(element.data)
  return element.data
}
})
})
return indicators
})


/*dataBank.forEach(() => {
    console.log(dataMEX[15].data)
    
    for (const año in años) {
    if (años.hasOwnProperty(año)) {
    let element = años[año];
    element = parseFloat(element)
    console.log(parseInt(element))
    if (element > 0) {
    console.log(element)
    }
    }
    }});*/
 

//INTENTO DE GRÁFICA//
const intentoDeGrafica = document.getElementById('intentoDeGrafica');
new Morris.Line({
 
  element: 'intentoDeGrafica',
  // Registros de datos de gráficos: cada entrada en esta matriz corresponde a un punto en
  // el gráfico
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  //  El nombre del atributo de registro de datos que contiene valores de x.
  xkey: 'year',
  // Una lista de nombres de atributos de registro de datos que contienen valores y.
  ykeys: ['value'],
  // Etiquetas para los ykeys - se mostrarán cuando pase el cursor sobre el
  // gráfico.
  labels: ['Value'],
  resize: true
});