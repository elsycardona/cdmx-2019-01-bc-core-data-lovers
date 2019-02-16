
//const botonInfo = document.getElementById('informate'); //boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const welcomePage = document.getElementById('welcomePage');
//const pageForData = document.getElementById('info');
const dataBank = window.WORLDBANK;
//const pagesjumps = document.getElementById('commits', 'impact') //constantes para brincar a la section que se utiliza como una pagina
const countryfilter = document.getElementById('countryfilter');
//const content = document.getElementById('show-content');
//const indicators = document.getElementById('indicator');
const indicadoresHTML = document.getElementById('indicadores')

document.getElementById('informate').addEventListener('click', () => {
  welcomePage.style.display = 'none';


});


//esta función es filter en data.js
  const filtroDeIndicadores = document.getElementById('countryfilter').addEventListener('change', () => { //Impresión Database para cada país
  const enclick = countryfilter.value;
  const dataMostrar = dataBank[enclick]
  const indicators = dataMostrar.indicators;

  //función para los indicadores,buscador de EDUCACIÓN También está en data.js
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
if(valoresExtraidosDeIndicadores === element.indicatorName){
  //console.log(element.data)
  const valoresFinales = (element.data);
  //console.log(valoresFinales)
  document.getElementById('intentoDeTabla').innerHTML = '';
  for (ejeXyears in valoresFinales){
    if(valoresFinales.hasOwnProperty(ejeXyears)){

      let ejeYporcent = valoresFinales[ejeXyears];
    ejeYporcent = parseFloat(ejeYporcent)
    //console.log(parseInt(quitandoCero))
    if (ejeYporcent > 0) {
      //INTENTO DE TABLA//
const fila="<tr><td>"+ejeXyears+"</td><td>"+ejeYporcent.toFixed(2)+"%"+"</td></tr>";
const btn = document.createElement("TR");
btn.innerHTML = fila;
document.getElementById('intentoDeTabla').appendChild(btn);

//FUNCIÓN PARA ORDENAR DESCENDENTE ENPORCENTAJES

//function descender = ejeYporcent.sort((a, b) => b - a);
//console.log(descender) 
//function sortNumber(a,b) {return b - a;} ejeYporcent.sort(sortNumber);
//console.log(ejeYporcent.sort(","));
//console.log(ejeYporcent.sort);

/*function descender => ejeYporcent.sort((a, b) => b - a){
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
};
console.log(descender);*/

    //console.log(ejeXyears, ejeYporcent)
    }



      //console.log("FUNCIONA"+ ejeXyears + " y los valores " +valoresFinales[ejeXyears]);
      
      //HASTA AQUÍ FUNCIONA!!!
      /*INTENTO DE GRÁFICA//
const intentoDeGrafica = document.getElementById('intentoDeGrafica');
new Morris.Line({
 
  element: 'intentoDeGrafica',
  // Registros de datos de gráficos: cada entrada en esta matriz corresponde a un punto en
  // el gráfico
  data: [
        { ejeXyears: '', ejeYporcent: '' }
  ],
  //  El nombre del atributo de registro de datos que contiene valores de x.
  xkey: 'ejeXyears',
  // Una lista de nombres de atributos de registro de datos que contienen valores y.
  ykeys: ['value'],
  // Etiquetas para los ykeys - se mostrarán cuando pase el cursor sobre el
  // gráfico.
  labels: ['Value'],
  resize: true
});*/



    }
  }
}
})
})
return indicators
})


//INTENTO DE GRÁFICA//
//boton para VER GRAFICA//
const botonGrafica = document.getElementById('visualizarGrafica').addEventListener('click', () => {
//const intentoDeGrafica = document.getElementById('intentoDeGrafica');
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var datosData = google.visualization.arrayToDataTable([
          ['Años', 'Porcentaje'],
          //[ejeXyears, ejeYporcent]
          ['1970',     11],
          ['1980',      2],
          ['1990',  2],
          ['2000', 2],
          ['2010',    7]
        ]);
        var options = {
          title: 'Gráfica [años vs. %]'
        };
       // var chart = new google.visualization.intentoDeGrafica;
        var chart = new google.visualization.PieChart(document.getElementById('intentoDeGrafica'));
        chart.draw(datosData, options);
      }
    })
