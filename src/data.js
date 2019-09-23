const filterByType = (dataPokemon, filterValue) => {
    
    const resultType = dataPokemon.filter(Element => {
        return Element.type.includes(filterValue);

        //versión marcia
        //return. element.type===condition;

    });

    return resultType;

};

window.filterByType=filterByType;