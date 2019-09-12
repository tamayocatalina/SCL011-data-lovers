global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterType', () => {

  const dataPokemon= 
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
    assert.equal(typeof filterType, 'function');
  });

  it('debería retornar "Pikachu" al filtrar por tipo Electrico', () => {
    assert.deepEqual(window.filterType(dataPokemon, 'electric'),   
    {
      "name": "Pikachu",
      "type": [
        "Electric"
      ]
    })
  })
})