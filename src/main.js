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

//se trasladó al documento data.js
/*const filterCountryIndicator = () => {
  let select = selectOption.value; //value "MEX", "PER","BRA","CHL"
  const country = window.filterCountry(select);
  objectKey(country);
}*/

//esta función es filter en data.js
document.getElementById('countryfilter').addEventListener('change', () => {
  let enclick = countryfilter.value;
  let dataMostrar = dataBank[enclick]
  let indicators = dataMostrar.indicators;

  //función para los indicadores,buscador de EDUCACIÓN También está en data.js
  indicators.forEach(indicator => {
    let indicatorName = indicator.indicatorName;
    let vare = new RegExp(/educación/i)
    if (indicatorName.match(vare) != null) {
      indicadoresHTML.insertAdjacentHTML("beforeend", `<option value="indicadores">${indicatorName}</option>`)
    }
    
  })

});
//console.log(dataMEX[15].data) Crear un for para iterar en todos los
//valores, 
/*for (const año in años) {
  if (años.hasOwnProperty(año)) {
    let element = años[año];
    element = parseFloat(element)
    console.log(parseInt(element))
    if (element > 0) {
      console.log(element)
    }
  }
}*/
