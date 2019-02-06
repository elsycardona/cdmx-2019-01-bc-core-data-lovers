//Data por país, cada país tiene su página (div) independiente

//DATA MÉXICO "infoMex"
const varMex = WORLDBANK.MEX.indicators;
const indicatorMex = document.getElementById("indicatorMex");
const questionList = document.getElementById("questionList");

document.getElementById('bottomMex').addEventListener('click', () =>{
    clearSelect()
    selectMex('varMex')
    questionList.insertAdjacentHTML('beforeend','<option value="">SELECCIONA</option>');
    varMex.forEach( => {
        questionList.insertAdjacentHTML('beforeend','<option value=___________')
        
    });
});