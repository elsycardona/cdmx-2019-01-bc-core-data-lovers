const welcomePage = document.getElementById('welcomePage');
const dataBank = window.WORLDBANK;
const countryfilter = document.getElementById('countryfilter');
const indicadoresHTML = document.getElementById('indicadores')

document.getElementById('informate').addEventListener('click', () => {
  welcomePage.style.display = 'none';
});

//esta función es filter en data.js
const filtroDeIndicadores = document.getElementById('countryfilter').addEventListener('change', () => { //Impresión Database para cada país
  const enclick = countryfilter.value;
  const dataMostrar = dataBank[enclick];
  const indicators = dataMostrar.indicators;

  //función para los indicadores,buscador de EDUCACIÓN También está en data.js
  indicators.forEach(indicator => {
    const indicatorName = indicator.indicatorName;
    const vare = new RegExp(/laboral/i)
    if (indicatorName.match(vare) != null) {
      indicadoresHTML.insertAdjacentHTML("beforeend", `<option value="${indicatorName}">${indicatorName}</option>`)
    };
  });
  indicadoresHTML.addEventListener('change', () => {
    let valoresExtraidosDeIndicadores = event.target.value
    indicators.forEach(element => {
      if (valoresExtraidosDeIndicadores === element.indicatorName) {
        //console.log(element.data)
        const valoresFinales = (element.data);
        //console.log(valoresFinales)
        document.getElementById('intentoDeTabla').innerHTML = '';
        for (ejeXyears in valoresFinales) {
          if (valoresFinales.hasOwnProperty(ejeXyears)) {

            let ejeYporcent = valoresFinales[ejeXyears];
            ejeYporcent = parseFloat(ejeYporcent)
            if (ejeYporcent > 0) {

              const fila = "<tr><td>" + ejeXyears + "</td><td>" + ejeYporcent.toFixed(2) + "%" + "</td></tr>";
              const btn = document.createElement("TR");
              btn.innerHTML = fila;
              document.getElementById('intentoDeTabla').appendChild(btn);
            };
          };
        };
      };
    });
  });
  return indicators
});

const botonGrafica = document.getElementById('visualizarGrafica').addEventListener('click', () => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var datosData = google.visualization.arrayToDataTable([
      ['Años', 'Porcentaje'],
      //[ejeXyears, ejeYporcent]
      ['1970', 11],
      ['1980', 2],
      ['1990', 2],
      ['2000', 2],
      ['2010', 7]
    ]);
    var options = {
      title: 'Gráfica [años vs. %]'
    };
    var chart = new google.visualization.PieChart(document.getElementById('intentoDeGrafica'));
    chart.draw(datosData, options);
  };
});