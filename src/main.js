/* Manejo del DOM */
//declaro como variable la data POKE y el array pokemon
const pokemonList = window.POKEMON.pokemon;
//for(let i=0; i<dataPokemon.length; i++){ //hago que recorra todo desde aca en adelante

const selectValue = document.getElementById("valueFilter");
selectValue.addEventListener("change", filterType);


function filterType(){


    let valueFilter = selectValue.options[selectValue.selectedIndex].value;
    let dataPokemon =  window.filterByType(pokemonList,valueFilter)
    document.getElementById("root").innerHTML="";

        //console.log(dataPokemon);

        //SEGUNDO FOR PARA RECORRER A LOS POKE
        for(let i=0; i<dataPokemon.length; i++){
            console.log(dataPokemon);
        //     let pokeColumnCard = document.createElement("div");
        //     pokeColumnCard.className = "pokeColumnTwo";
        
        // // CONTENEDOR COLUMNAS
        // let pokeColumn = document.createElement("div"); 
        // pokeColumn.className = "pokeColumn";
        //CARTA PRINCIPAL
        let pokeCard = document.createElement("div");
        pokeCard.className = "pokeCard";
        pokeCard.id = "pokeCard";
        // // 1 NOMBRE 
        let pokeName = document.createElement("h3");
        pokeName.textContent = dataPokemon[i].name;
        // // 2 FOTOS
        let pokeImg = document.createElement("img");
        pokeImg.src = dataPokemon[i].img;
       // // 3 TIPO
        let pokeNum = document.createElement("h3");
        pokeNum.textContent = dataPokemon[i].num;


        //COMO SERÁN LAS HILERAS
       
        let rowType = document.createElement("div");
        rowType.className = "row";
        rowType.id = "rowType";
        let columnType1 = document.createElement("div");
        columnType1.className = "column";
        let columnType2 = document.createElement("div");
        columnType2.className = "column";

        let pokemonType1 = document.createElement("h1");
        pokemonType1.textContent = dataPokemon[i].type[0];
        let pokemonType2 = document.createElement("h1");
        pokemonType2.textContent = dataPokemon[i].type[1];

        columnType1.appendChild(pokemonType1);
        columnType2.appendChild(pokemonType2);
        rowType.appendChild(columnType1);
        rowType.appendChild(columnType2);
        pokeCard.appendChild(pokeName);
        pokeCard.appendChild(pokeImg);
        pokeCard.appendChild(pokeNum);
        pokeCard.appendChild(rowType);

        

    //Mostrar tarjeta en el contenedor especificado
    document.getElementById("root").appendChild(pokeCard).innerHTML; 

}
  }
