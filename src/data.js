//Funciones puras


window.dataBank= {
  filter: (dataBank, countryfilter) => {
   
    
    let enclick = countryfilter.value;
    let dataMostrar = dataBank[enclick]
    let indicators = dataMostrar.indicators;
    

    indicators.forEach(indicator => {

      let indicatorName = indicator.indicatorName;
      let vare = new RegExp(/educación/i)
      if (indicatorName.match(vare) != null) {
        return countryfilter
      }
    })

  }
}
