//Declaramos constante POKEMON de la data
const pokemonList=window.POKEMON.pokemon;

//Ocultamos select del filtrado Y DEBILIDAD
document.getElementById("navigationSearch").style.display= "none";
document.getElementById("navigationWeakness").style.display= "none";
const startPage=document.getElementById("start");

startPage.addEventListener("click", ()=>{
    window.location.reload();
});

//Declaramos botones de navegacion catálogo y búsqueda..Y DEBILIDAD
const catalogueOption=document.getElementById("catalogueBtn");
const catalogueSearch=document.getElementById("searchBtn");
const catalogueWeakness=document.getElementById("weaknessBtn");


function globalCards (globalData){
    document.getElementById("catalogueRoot").innerHTML="";

    for(let i=0; i<globalData.length; i++){

    //ESPACIO PRINCIPAL CONTENEDOR 2
    const searchThree = document.createElement("div");
    searchThree.className = "searchThree";

    // CARTA PRINCIPAL CONTENEDORA 2
    const pokeSpace = document.createElement("div");
    pokeSpace.className = "pokemonSpace";
    //NOMBRE 2
    let pokeName = document.createElement("h3");
    pokeName.textContent = globalData[i].name;

    //FOTOS DEBILIDAD 2
    let pokeImg = document.createElement("img");
    pokeImg.src = globalData[i].img;

    //NUMERO DEBILIDAD2
    let pokeNum = document.createElement("h3");
    pokeNum.textContent = globalData[i].num;

    //TIPO 2.1
    let pokeType1=document.createElement("h1");
    pokeType1.textContent=globalData[i].type[0];

    //TIPO 2.2
    let poketype2=document.createElement("h1");
    poketype2.textContent=globalData[i].type[1];

    //DEBILIDAD 2
    let pokeweaknesses = document.createElement("h3");
    pokeweaknesses.textContent = globalData[i].weaknesses;

    //HEIGHT ALTURA
    let pokeHeight = document.createElement("h3");
    pokeHeight.textContent = globalData[i].height;

    //WEIGHT PESO
    let pokeWeight = document.createElement("h3");
    pokeWeight.textContent = globalData[i].weight;

    pokeSpace.appendChild(pokeName);
    pokeSpace.appendChild(pokeImg);
    pokeSpace.appendChild(pokeNum);
    pokeSpace.appendChild(pokeType1);
    pokeSpace.appendChild(poketype2);
    pokeSpace.appendChild(pokeweaknesses);
    pokeSpace.appendChild(pokeHeight);
    pokeSpace.appendChild(pokeWeight);
    searchThree.appendChild(pokeSpace);

    document.getElementById("catalogueRoot").appendChild(searchThree).innerHTML

}
}
//Evento botón catálogo MOSTRAR
catalogueOption.addEventListener("click", ()=>{
    
    //Creamos div contenedor del catálogo y le asignamos una clase
    const catalogue=document.createElement("div");
    catalogue.className="catalogue";

    //Se muestra catálogo, se oculta búsqueda ..Y DEBILIDAD
    document.getElementById("showCatalogue").style.display = 'block';
    document.getElementById("showSearch").style.display = "none";
    document.getElementById("showWeakness").style.display = "none";
    globalCards(pokemonList);
    //Se recorre la data
    // for (let i=0; i<dataPokemon.length;i++){

    //     //Declaro espacios para imprimir ficha y características, asignamos clases
    //     const catalogueSpace=document.createElement("div");
    //     catalogueSpace.className="catalogueSpace";
    //     //catalogueSpace.id="vercatalogo";

    //     let numSpace=document.createElement("h3");
    //     numSpace.className="numSpace";
    //     numSpace.textContent=(dataPokemon[i].num);
        
    //     let nameSpace=document.createElement("h4");
    //     nameSpace.className="nameSpace";
    //     nameSpace.textContent=(dataPokemon[i].name);

    //     let imgSpace=document.createElement("img");
    //     imgSpace.className="imgSpace";
    //     imgSpace.src=(dataPokemon[i].img);
        
    //     //Declaramos botón del modal
    //     const modalBtn=document.createElement("button");
    //     modalBtn.className="seeMoreStyle";
    //     modalBtn.textContent=("Ver +");
        
    //     //Evento botón del modal
    //     modalBtn.addEventListener("click", ()=>{

    //         const modalSpace=document.createElement("div");
    //         modalSpace.className="modalSpace";

    //         const characterItems=document.createElement("div");
    //         characterItems.className="characterItems";

    //         let modalNameSpace=document.createElement("h4");
    //         modalNameSpace.className="modalStyle";
    //         modalNameSpace.textContent=(dataPokemon[i].name);
            
    //         let modalImgSpace=document.createElement("img");
    //         modalImgSpace.className="modalStyle";
    //         modalImgSpace.src=(dataPokemon[i].img);

    //         let modalHeightSpace=document.createElement("p");
    //         modalHeightSpace.className="modalStyle";
    //         modalHeightSpace.textContent=(dataPokemon[i].height);

    //         let modalWeightSpace=document.createElement("p");
    //         modalWeightSpace.className="modalStyle";
    //         modalWeightSpace.textContent=(dataPokemon[i].weight);

    //         const buttonSpace=document.createElement("span");
    //         buttonSpace.className="closeStyle";
    //         buttonSpace.textContent=("X");

    //         //Evento botón cerrar modal
    //         buttonSpace.addEventListener("click", ()=>{
    //             modalSpace.style.display="none";
    //         });

    //         modalSpace.addEventListener("click",()=>{
    //             modalSpace.style.display="none";
    //         });
            
    //         //Asignamos padre a los elementos creados
    //         characterItems.appendChild(modalNameSpace);
    //         characterItems.appendChild(modalImgSpace);
    //         characterItems.appendChild(modalHeightSpace);
    //         characterItems.appendChild(modalWeightSpace);
    //         characterItems.appendChild(buttonSpace);
    //         modalSpace.appendChild(characterItems);
    //         catalogueSpace.appendChild(modalSpace);
    //     });

    //     //Asignamos padre a los elementos creados
    //     catalogueSpace.appendChild(imgSpace);
    //     catalogueSpace.appendChild(numSpace);
    //     catalogueSpace.appendChild(nameSpace);
    //     catalogueSpace.appendChild(modalBtn);
    //     catalogue.appendChild(catalogueSpace);

    //     //Imprimimos el abuelo en la raiz
    //     document.getElementById("catalogueRoot").appendChild(catalogue).innerHTML;
    // }
});//Fin botón catálogo

//Evento botón búsqueda FILTRAR
catalogueSearch.addEventListener("click", ()=>{

    document.getElementById("catalogueRoot").innerHTML="";

    //Se muestra búsqueda y selectfiltergrande, se oculta catálogo ..Y DEBILIDAD
    // document.getElementById("showCatalogue").style.display = "none";
     document.getElementById('showSearch').style.display = "block";
     document.getElementById("navigationSearch").style.display= "block";
    // document.getElementById("showWeakness").style.display = "none";
    // document.getElementById("navigationWeakness").style.display ="none";

    //Se declara constante y función del select 
    const selectValue=document.getElementById("filterValue");
    selectValue.addEventListener("change", filterType);
    
    function filterType(){

        //Creamos div contenedor del buscador y le asignamos una clase
        const search=document.createElement("div");
        search.className="search";
    
        //Declaramos parámetros del select
        let filterValue=selectValue.options[selectValue.selectedIndex].value;
        let dataPokemon=window.filterByType(pokemonList,filterValue);

        //Para volver a cero para cada seleccion
        //document.getElementById("searchRoot").innerHTML="";
        console.log(dataPokemon);
        globalCards(dataPokemon);
  
      
    }
});//Fin botón búsqueda

//EVENTO BOTON BUSQUEDA DEBILIDAD
catalogueWeakness.addEventListener("click", ()=>{

// SE MUESTRA FILTRO DEBILIDAD Y SE BLOQUEA EL RESTO 
   
    document.getElementById("showSearch").style.display = "none";
    document.getElementById("navigationSearch").style.display = "none";
    document.getElementById("showWeakness").style.display = "block";
    document.getElementById("navigationWeakness").style.display ="block";

// CONSTANTE Y FUNCION SELECT DEBILIDAD
const selectValueWeakness = document.getElementById("filterWeakness");
selectValueWeakness.addEventListener("change", filterTypeWeakness);

 // FUNCION FILTRADO POR DEBILIDAD

 function filterTypeWeakness(){

    // PARAMETROS SELCT filterWeakness(html)
    let filterValueWeakness = selectValueWeakness.options[selectValueWeakness.selectedIndex].value;
    let dataPokemon = window.filterByWeakness(pokemonList,filterValueWeakness);
console.log(dataPokemon);
   globalCards(dataPokemon);
 
}
});


// const searchThree = document.createElement("div");
//     searchThree.className = "searchThree";
