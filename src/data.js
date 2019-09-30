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


const filterByOrder = (pokemonList, selectOrd) =>{
    let filterOrder ="";
    if (selectOrd ==="order123"){
        filterOrder = pokemonList.sort((a,b)=>{
            return (a.id - b.id);
        })}
    else if (selectOrd=== "order321"){
        filterOrder = pokemonList.sort((a,b)=>{
            return(b.id - a.id);
        })}
    else if (selectOrd === "orderAbc") {
        filterOrder = pokemonList.sort((a,b)=>{
            return a.name.localeCompare(b.name);
        })}

         else {
        filterOrder = pokemonList.sort((a,b) =>{
            return b.name.localeCompare(a.name);
        })
    }

    return filterOrder;



}
    
 

window.filterByOrder=filterByOrder;
