/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

const dataPokemon = window.POKEMON.pokemon;
window.dataPokemon=dataPokemon;
 
const filterByType = (dataPokemon, valueFilter) => {

    const resultType = dataPokemon.filter(Element => {
        return Element.type.includes(valueFilter);
  });

  return resultType;
    }

    window.filterByType = filterByType;


//Hacer funcion filtrar por tipo con argumentos genericos 
//filterByType(dataPokemon,selectedType)
//terminada la funcion declararla global:
//window.filterByType=filterByType , de esta forma desde cualquier ventana
//accedemos a la funcion filterByType de modo: window.filterByType