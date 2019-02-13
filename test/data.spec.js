require('../src/data.js');
require('../src/data/worldbank/worldbank.js')


describe('dataBank', () => {

    it('debería ser un objeto', () => {

      expect(typeof dataBank).toBe('object');
    })
  }
)
