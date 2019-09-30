const pokemonList=window.POKEMON.pokemon;

//Ocultamos select del filtrado Y DEBILIDAD Y ORDENAR
document.getElementById("navigationSearch").style.display= "none";
document.getElementById("navigationWeakness").style.display= "none";
document.getElementById("navigationOrder").style.display= "none";
const startPage=document.getElementById("start");

startPage.addEventListener("click", ()=>{
    window.location.reload();
});

//Declaramos botones de navegacion catálogo y búsqueda..Y DEBILIDAD Y ORDENAR
const catalogueOption=document.getElementById("catalogueBtn");
const catalogueSearch=document.getElementById("searchBtn");
const catalogueWeakness=document.getElementById("weaknessBtn");
const catalogueOrder=document.getElementById("orderBtn");

function globalCards (globalData){
    document.getElementById("catalogueRoot").innerHTML="";

    for(let i=0; i<globalData.length; i++){

    //ESPACIO PRINCIPAL CONTENEDOR 2
    const searchThree = document.createElement("div");
    searchThree.className = "catalogueSpace";
    // CARTA PRINCIPAL CONTENEDORA 2
    const pokeSpace = document.createElement("div");
    pokeSpace.className = "catalogue";
    //NOMBRE 2
    let pokeName = document.createElement("h3");
    pokeName.textContent = globalData[i].name;
    pokeName.className ="nameSpace";
    //FOTOS DEBILIDAD 2
    let pokeImg = document.createElement("img");
    pokeImg.src = globalData[i].img;
    pokeImg.className = "imgSpace";
    //NUMERO DEBILIDAD2
    let pokeNum = document.createElement("h3");
    pokeNum.textContent = globalData[i].num;
    pokeNum.className = "numSpace";
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

}}
//Evento botón catálogo MOSTRAR
catalogueOption.addEventListener("click", ()=>{
    
    //Creamos div contenedor del catálogo y le asignamos una clase
    const catalogue=document.createElement("div");
    catalogue.className="catalogue";

    //Se muestra catálogo, se oculta búsqueda ..Y DEBILIDAD Y ORDEN
    document.getElementById("showCatalogue").style.display = 'block';
    document.getElementById("showSearch").style.display = "none";
    document.getElementById("showWeakness").style.display = "none";
    document.getElementById("navigationWeakness").style.display ="none";
    document.getElementById("showOrder").style.display = "none";
    globalCards(pokemonList);
   
});//Fin botón catálogo

//Evento botón búsqueda FILTRAR
catalogueSearch.addEventListener("click", ()=>{

    document.getElementById("catalogueRoot").innerHTML="";

     document.getElementById('showSearch').style.display = "block";
     document.getElementById("navigationSearch").style.display= "block";
     document.getElementById("showWeakness").style.display = "none";

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
    document.getElementById("showOrder").style.display ="none";
    document.getElementById("navigationOrder").style.display ="none";

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
 
}});

    //BOTON ORDENAR A-Z 1-151
    catalogueOrder.addEventListener("click", () =>{
    document.getElementById("catalogueRoot").innerHTML="";

    // SE MUESTRA ORDENAR Y SE BLOQUEA EL RESTO 
    document.getElementById("showSearch").style.display = "none";
    document.getElementById("navigationSearch").style.display = "none";
    document.getElementById("showWeakness").style.display = "none";
    document.getElementById("navigationWeakness").style.display ="none";
    document.getElementById("showOrder").style.display ="block";
    document.getElementById("navigationOrder").style.display ="block";

    //CONSTANTE Y FINCION DEL SELECT
    const selectValueOrder=document.getElementById("filterOrder");
    selectValueOrder.addEventListener("change", filterOrder);

    //FUNCION ORDENAR
    function filterOrder(){
        let filterValueOrder = selectValueOrder.value;
        let dataOrder = window.filterByOrder(pokemonList,filterValueOrder);
        document.getElementById("catalogueOrder").innerHTML="";
console.log(filterValueOrder);
        globalCards(dataOrder);
    }
    

    // const selectValueOrd = document.getElementById("filterOrder");
    // selectValueOrd.addEventListener("change", showOrder);

    // function showOrder(){
    //     let selectOrderTwo = selectValueOrd.options[selectValueOrd.selectedIndex].value;
    //     let dataPokemon = window.filterOrder(pokemonList, selectOrderTwo);
    //     document.getElementById("catalogueOrder").innerHTML="";
    //     globalCards(dataPokemon);
    //     console.log(showOrder);
    // }


});