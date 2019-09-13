global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterByType()', () => {

  const muestraPokemon= 
  [{
    "name": "Pikachu",
    "type": [
      "Electric"
    ]
  }, {
    "name": "Sandshrew",
    "type": [
      "Ground"
    ]
  }, {
    "name": "Sandslash",
    "type": [
      "Ground"
    ]
  }];

  it('debería ser una función', () => {
    assert.equal(typeof window.filterByType, 'function');
  });

  it('debería retornar "Pikachu" al filtrar por tipo Electrico', () => {
    assert.deepEqual(window.filterByType(muestraPokemon, 'Electric'),   
    [{
      "name": "Pikachu",
      "type": [
        "Electric"
      ]
    }]);
  });
})