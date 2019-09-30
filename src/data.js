const dataPokemon=window.POKEMON.pokemon;
window.dataPokemon=dataPokemon;
 
const filterByType = (dataPokemon, filterValue) => {
    
    const resultType = dataPokemon.filter(Element => {
        return Element.type.includes(filterValue);
        
    });

    return resultType;

};

window.filterByType=filterByType;

const filterByWeakness = (dataPokemon, filterValueWeakness) => {

    const resultTypeWeakness = dataPokemon.filter(Element => {
        return Element.weaknesses.includes(filterValueWeakness);

    })
    return resultTypeWeakness;
};

window.filterByWeakness =  filterByWeakness;
