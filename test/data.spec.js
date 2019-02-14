require('../src/data.js');
require('../src/data/worldbank/worldbank.js')


describe('dataBank', () => {
  it('dataBank debería ser un objeto', () => {
    expect(typeof dataBank).toBe('object');
  })
})

describe('dataBank.MEX', () => {
  it('MEX debería ser un objeto', ()=>{
    expect(typeof dataBank).toBe('object');
  })
})

describe('dataBank.PER',()=>{
  it('PER debería ser un objeto', ()=>{
    expect(typeof dataBank).toBe('object');
  })
})

describe('dataBank.BRA',()=>{
  it('BRA debería ser un objeto', ()=>{
    expect(typeof dataBank).toBe('object');
  })
})
describe('dataBank.CHL',()=>{
  it('CHL debería ser un objeto',()=>{
    expect(typeof dataBank).toBe('object');
  })
})

describe('filter',()=>{
  it('filter debería ser una función',()=>{
    expect(typeof window.dataBank.filter).toBe('function');
  })
})

describe('filterEdu',()=>{
  it('filterEdu debería ser una función',()=>{
    expect(typeof window.dataBank.filterEdu).toBe('function');
  })
})
