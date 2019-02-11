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

/*selectOption.addEventListener('change', filterCountryIndicator);
const objectKey = (country) => {
    let answer = "";
    for (let i in country) {
      answer += "<li>" + "<b>" + i + ":  " + "</b>" + country[i].toFixed(2) + "%" + "</li>" + "<br>";
      document.getElementById('show-content').innerHTML = answer;
      return answer
    }*/

document.getElementById('countryfilter').addEventListener('change', () => { //Impresión Database para cada país
  let enclick = countryfilter.value;
  let dataMostrar = dataBank[enclick]
  let indicators = dataMostrar.indicators;
  indicators.forEach(indicator => {
    let indicatorName = indicator.indicatorName;
    let vare = new RegExp(/educación/i)
    if(indicatorName.match(vare) != null){
      indicadoresHTML.insertAdjacentHTML("beforeend", `<option value="indicadores">${indicatorName}</option>`)
  }
})

  
    
  
  /*dataGlobal.forEach(() => {

    console.log(dataMEX[15].data)

  });
    //console.log(dataMEX[15].data)
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
})
