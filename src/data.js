// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterTheme = () => {
  return 'filterTheme';
  };
  
  window.filterTheme = filterTheme;
  
  const dataGlobal = WORLDBANK.MEX.indicators;
  //console.log (dataGlobal);
  
  const indicator = document.getElementById("infoMex");
  
  const print = (indicatorName) => {
  let result = `<h4>${indicatorName}</h4>`
  indicator.insertAdjacentHTML("beforeend",result);
  }
  
  dataGlobal.forEach(element => {
  let indicatorName = element.indicatorName;
  print(indicatorName);
  })
  
  //dataGlobal

const HomePage = document.getElementById("HomePage");
const info = document.getElementById("info");
const informate = document.getElementById("informate");

info.addEventListener("click", () => {
  HomePage.classList.add('hideElement')
  informate.classList.remove('hideElement')
}
)

//MEXICO.addEventListener("click", () => {
 // informate.classList.add('hideElement')
//  infoMex.classList.remove('hideElement')
//}
//)

