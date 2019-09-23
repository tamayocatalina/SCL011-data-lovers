//Declaramos constante POKEMON de la data
//const dataPokemon=window.POKEMON.pokemon;
const dataPokemon=window.POKEMON.pokemon;

//Ocultamos select del filtrado
document.getElementById("navigationSearch").style.display= "none";

const startPage=document.getElementById("start");

startPage.addEventListener("click", ()=>{
    window.location.reload();
});

//Declaramos botones de navegacion catálogo y búsqueda
const catalogueOption=document.getElementById("catalogueBtn");
const catalogueSearch=document.getElementById("searchBtn");

//Evento botón catálogo MOSTRAR
catalogueOption.addEventListener("click", ()=>{
    
    //Creamos div contenedor del catálogo y le asignamos una clase
    const catalogue=document.createElement("div");
    catalogue.className="catalogue";

    //Se muestra catálogo, se oculta búsqueda
    document.getElementById("showCatalogue").style.display = 'block';
    document.getElementById("showSearch").style.display = "none";

    //Se recorre la data
    for (let i=0; i<dataPokemon.length;i++){

        //Declaro espacios para imprimir ficha y características, asignamos clases
        const catalogueSpace=document.createElement("div");
        catalogueSpace.className="catalogueSpace";
        //catalogueSpace.id="vercatalogo";

        let numSpace=document.createElement("h3");
        numSpace.className="numSpace";
        numSpace.textContent=(dataPokemon[i].num);
        
        let nameSpace=document.createElement("h4");
        nameSpace.className="nameSpace";
        nameSpace.textContent=(dataPokemon[i].name);

        let imgSpace=document.createElement("img");
        imgSpace.className="imgSpace";
        imgSpace.src=(dataPokemon[i].img);
        
        //Declaramos botón del modal
        const modalBtn=document.createElement("button");
        modalBtn.className="seeMoreStyle";
        modalBtn.textContent=("Ver +");
        
        //Evento botón del modal
        modalBtn.addEventListener("click", ()=>{

            const modalSpace=document.createElement("div");
            modalSpace.className="modalSpace";

            const characterItems=document.createElement("div");
            characterItems.className="characterItems";

            let modalNameSpace=document.createElement("h4");
            modalNameSpace.className="characterNameStyle";
            modalNameSpace.textContent=(dataPokemon[i].name);
            
            let modalImgSpace=document.createElement("img");
            modalImgSpace.className="characterImgStyle";
            modalImgSpace.src=(dataPokemon[i].img);

            let modalHeightSpace=document.createElement("p");
            modalHeightSpace.className="characterHeightStyle";
            modalHeightSpace.textContent=("Altura " +(dataPokemon[i].height));

            let modalWeightSpace=document.createElement("p");
            modalWeightSpace.className="characterWeightStyle";
            modalWeightSpace.textContent=("Peso " +(dataPokemon[i].weight));

            let modalCandyCountSpace=document.createElement("p");
            modalCandyCountSpace.className="characterCandyCountStyle";
            modalCandyCountSpace.textContent=("Contador de caramelos "+(dataPokemon[i].candy_count));

            let modalEggSpace=document.createElement("p");
            modalEggSpace.className="characterEggStyle";
            modalEggSpace.textContent=("Huevos " +(dataPokemon[i].egg));

            const buttonSpace=document.createElement("span");
            buttonSpace.className="closeStyle";
            buttonSpace.textContent=("X");

            //Evento botón cerrar modal
            buttonSpace.addEventListener("click", ()=>{
                modalSpace.style.display="none";
            });

            modalSpace.addEventListener("click",()=>{
                modalSpace.style.display="none";
            });
            
            //Asignamos padre a los elementos creados
            characterItems.appendChild(modalNameSpace);
            characterItems.appendChild(modalImgSpace);
            characterItems.appendChild(modalHeightSpace);
            characterItems.appendChild(modalWeightSpace);
            characterItems.appendChild(modalCandyCountSpace);
            characterItems.appendChild(modalEggSpace);
            characterItems.appendChild(buttonSpace);
            modalSpace.appendChild(characterItems);
            catalogueSpace.appendChild(modalSpace);
        });

        //Asignamos padre a los elementos creados
        catalogueSpace.appendChild(imgSpace);
        catalogueSpace.appendChild(numSpace);
        catalogueSpace.appendChild(nameSpace);
        catalogueSpace.appendChild(modalBtn);
        catalogue.appendChild(catalogueSpace);

        //Imprimimos el abuelo en la raiz
        document.getElementById("catalogueRoot").appendChild(catalogue).innerHTML;
    }
});//Fin botón catálogo

//Evento botón búsqueda FILTRAR
catalogueSearch.addEventListener("click", ()=>{

    //Se muestra búsqueda y selectfiltergrande, se oculta catálogo
    document.getElementById("showCatalogue").style.display = "none";
    document.getElementById('showSearch').style.display = "block";
    document.getElementById("navigationSearch").style.display= "block";

    //Se declara constante y función del select 
    const selectValue=document.getElementById("filterTypeValue");
    selectValue.addEventListener("change", filterType);
    
    function filterType(){

        //Creamos div contenedor del buscador y le asignamos una clase
        const search=document.createElement("div");
        search.className="search";
    
        //Declaramos parámetros del select??? AYUDA PARA ENTENDER!!!
        let filterTypeValue=selectValue.options[selectValue.selectedIndex].value;
        let pokemonList=window.filterByType(dataPokemon,filterTypeValue);

        //Para volver a cero para cada seleccion??? AYUDA PARA ENTENDER!!!
        document.getElementById("searchRoot").innerHTML="";
    
        //SEGUNDO FOR PARA RECORRER A LOS POKE
        for(let i=0; i<pokemonList.length; i++){     
            
            //CARTA PRINCIPAL espacio contenedor del pokemon filtrado 
            const pokemonSpace=document.createElement("div");
            pokemonSpace.className="pokemonSpace";
            //pokemonSpace.id="pokemonSpace";

            //Declaro espacios para imprimir según tipo, asignamos clases
            //NOMBRE
            let pokeName=document.createElement("h1");
            pokeName.textContent=dataPokemon[i].name;
            //FOTOS
            let pokeImg=document.createElement("img");
            pokeImg.src=dataPokemon[i].img;
            //NUM
            let pokeNum=document.createElement("h3");
            pokeNum.textContent=dataPokemon[i].num;
            //TIPO 1
            let pokeType1=document.createElement("h2");
            pokeType1.textContent=dataPokemon[i].type[0];
            //TIPO 2
            let poketype2=document.createElement("h2");
            poketype2.textContent=dataPokemon[i].type[1];

            pokemonSpace.appendChild(pokeNum);
            pokemonSpace.appendChild(pokeName);
            pokemonSpace.appendChild(pokeImg);
            pokemonSpace.appendChild(pokeType1);
            pokemonSpace.appendChild(poketype2);
            search.appendChild(pokemonSpace);

            let pokeCalculation = filterByType.length;
            let allPoke = dataPokemon.lenght;
            let pokePercent = (pokeCalculation/allPoke)*100;
            let pokePercentTwo = pokePercent.toFixed(2);

            const theCalculation = document.getElementById("calculation");
            theCalculation.innerHTML = "¿Sabías qué en la región de Kanto existen " + pokePercentTwo + " % pokes de tipo " + filterValue + " ?" ;
    
        //Mostrar tarjeta en el contenedor especificado
        document.getElementById("searchRoot").appendChild(search).innerHTML; 
        };
    };
});//Fin botón búsqueda

