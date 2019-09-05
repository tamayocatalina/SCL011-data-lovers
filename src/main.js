//declaro como variable la data POKEMON, y el array pokemon
const dataPokemon=POKEMON.pokemon;

//declaro variables boton catálogo
const opcionCatalogo= document.getElementById("btnCatalogo");
//declaro constante boton versus
const opcionFiltro= document.getElementById("btnFiltro");

//Evento opcionCatalogo que es el btncatalogo
opcionCatalogo.addEventListener("click", ()=>{
    //Muestro catálogo
    document.getElementById("muestraCatalogo").style.display = 'block';
    //Oculto versus
    document.getElementById("muestraFiltro").style.display = "none";
    //Recorro data para luego imprimir en contenedorpokemon
    for (let i=0; i<dataPokemon.length;i++){
        //Declaro espacio que ocupará la impresión
        const espacioCatalogo=document.createElement("div");
        //declarar clase a la seccion para conectar con CSS
        //espacioCatalogo.className="Nombrecito";
        //declaramos id para ser utilizado en el futuro (¿?)
        //espacioCatalogo.id="vercatalogo";
        //declaramos espacio donde se imprimirá la data de num
        const espacioNum=document.createElement("h3");
        //le asignamos el contenido al espacio, especificamente el valor del objeto
        espacioNum.textContent=(dataPokemon[i].num);

        //declaramos espacio donde se imprimirá la data de name
        const espacionoName=document.createElement("h4");
        espacionoName.textContent=(dataPokemon[i].name);

        //declaramos espacio donde imprimirá la data img
        const espacioImg=document.createElement("img");
        espacioImg.src=(dataPokemon[i].img);

        //intento espacioCatalogo/modal
        const btnModal=document.createElement("button");
        btnModal.textContent=("Ver más");

        const espacioModal=document.createElement("div");

        const espacioButton=document.createElement("span");
        espacioButton.className="cerrar";
        espacioButton.textContent=("Cerrar");

        espacioButton.addEventListener("click", ()=>{
        espacioModal.style.display="none";
        });

        btnModal.addEventListener("click", ()=>{

            const espacioHeight=document.createElement("p");
            espacioHeight.textContent=(dataPokemon[i].height);

            const espacioWeight=document.createElement("p");
            espacioWeight.textContent=(dataPokemon[i].weight);
            
            espacioModal.appendChild(espacioHeight);
            espacioModal.appendChild(espacioWeight);
            espacioCatalogo.appendChild(espacioModal);

            espacioModal.appendChild(espacioButton);

        });


        //asignamos al padre espacioCatalogo el hijo correspondiente
        espacioCatalogo.appendChild(espacioImg);
        espacioCatalogo.appendChild(espacioNum);
        espacioCatalogo.appendChild(espacionoName);
        espacioCatalogo.appendChild(btnModal);
        //espacioCatalogo.appendChild(espaciotype);

        //llevamos al padre/div raizcatalogo de HTML el hijo/section de JS
        document.getElementById("raizCatalogo").appendChild(espacioCatalogo).innerHTML;
    }
});

opcionFiltro.addEventListener("click", ()=>{
    document.getElementById('muestraFiltro').style.display = 'block';
    document.getElementById("muestraCatalogo").style.display = "none";
    muestraFiltro.innerHTML= "<p>Aquí irán los filtros</p>";
});


