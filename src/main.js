//declaro como variable la data POKEMON, y el array pokemon
const dataPokemon=window.POKEMON.pokemon;

//declaro variables boton catálogo
const catalogueOption= document.getElementById("catalogueBtn");
//declaro constante boton versus
const cataloqueSearch= document.getElementById("searchBtn");

//Evento catalogueOption que es el catalogueBtn
catalogueOption.addEventListener("click", ()=>{
    //Declaro espacio que ocupará la impresión de las tarjetas
    const catalogue=document.createElement("div");
    catalogue.className="catalogue";

    //Muestro catálogo
    document.getElementById("showCatalogue").style.display = 'block';
    //Oculto versus
    document.getElementById("showSearch").style.display = "none";
    //Recorro data para luego imprimir en contenedorpokemon
    for (let i=0; i<dataPokemon.length;i++){

        //Declaro espacio de las tarjetas
        const catalogueSpace=document.createElement("div");
        //declarar clase a la seccion para conectar con CSS
        catalogueSpace.className="catalogueSpace";
        //para declarar id se utiliza
        //catalogueSpace.id="vercatalogo";

        //declaramos espacio donde se imprimirá la data de num
        let numSpace=document.createElement("h3");
        //le asignamos el contenido al espacio, especificamente el num del objeto
        numSpace.textContent=(dataPokemon[i].num);
        //declaramos clase de la sección num
        numSpace.className="numSpace";

        //declaramos espacio donde se imprimirá la data de name
        let nameSpace=document.createElement("h4");
        nameSpace.textContent=(dataPokemon[i].name);
        nameSpace.className="nameSpace";

        //declaramos espacio donde imprimirá la data img
        let imgSpace=document.createElement("img");
        imgSpace.src=(dataPokemon[i].img);
        imgSpace.className="imgSpace";

        //Modal
        const modalBtn=document.createElement("button");
        modalBtn.textContent=("Ver +");
        modalBtn.className="seeMoreStyle";

        modalBtn.addEventListener("click", ()=>{
            //espacio contenedor del modal
            const modalSpace=document.createElement("div");
            modalSpace.className="modalSpace";

            let modalNameSpace=document.createElement("h4");
            modalNameSpace.textContent=(dataPokemon[i].name);
            modalNameSpace.className="modalStyle";

            let modalImgSpace=document.createElement("img");
            modalImgSpace.src=(dataPokemon[i].img);
            modalImgSpace.className="modalStyle";

            let modalHeightSpace=document.createElement("p");
            modalHeightSpace.textContent=(dataPokemon[i].height);
            modalHeightSpace.className="modalStyle";

            let modalWeightSpace=document.createElement("p");
            modalWeightSpace.textContent=(dataPokemon[i].weight);
            modalWeightSpace.className="modalStyle";

            const buttonSpace=document.createElement("span");
            buttonSpace.className="closeStyle";
            buttonSpace.textContent=("X");
            
            modalSpace.appendChild(modalNameSpace);
            modalSpace.appendChild(modalImgSpace);
            modalSpace.appendChild(modalHeightSpace);
            modalSpace.appendChild(modalWeightSpace);
            catalogueSpace.appendChild(modalSpace);

            modalSpace.appendChild(buttonSpace);

            buttonSpace.addEventListener("click", ()=>{
                modalSpace.style.display="none";
                });

        });

        //asignamos al padre catalogueSpace el hijo correspondiente
        catalogueSpace.appendChild(imgSpace);
        catalogueSpace.appendChild(numSpace);
        catalogueSpace.appendChild(nameSpace);
        catalogueSpace.appendChild(modalBtn);
        catalogue.appendChild(catalogueSpace);

        //llevamos al padre/div raizcatalogo de HTML el hijo/section de JS
        document.getElementById("catalogueRoot").appendChild(catalogue).innerHTML;
    }
});

cataloqueSearch.addEventListener("click", ()=>{
    document.getElementById('showSearch').style.display = 'block';
    document.getElementById("showCatalogue").style.display = "none";
    showSearch.innerHTML= "<p>Aquí irán los filtros</p>";
});


