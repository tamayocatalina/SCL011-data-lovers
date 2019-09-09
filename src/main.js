//declaro como variable la data POKEMON, y el array pokemon
const dataPokemon=POKEMON.pokemon;

//declaro variables boton catálogo
const opcionCatalogo= document.getElementById("btnCatalogo");
//declaro constante boton versus
const opcionBusqueda= document.getElementById("btnBusqueda");

//Evento opcionCatalogo que es el btncatalogo
opcionCatalogo.addEventListener("click", ()=>{
    //Muestro catálogo
    document.getElementById("muestraCatalogo").style.display = 'block';
    //Oculto versus
    document.getElementById("muestraBusqueda").style.display = "none";
    //Recorro data para luego imprimir en contenedorpokemon
    for (let i=0; i<dataPokemon.length;i++){
        //Declaro espacio que ocupará la impresión
        const espacioCatalogo=document.createElement("div");
        //declarar clase a la seccion para conectar con CSS
        espacioCatalogo.className="espacioCatalogo";
        //declaramos id para ser utilizado en el futuro (¿?)
        //espacioCatalogo.id="vercatalogo";
        //declaramos espacio donde se imprimirá la data de num
        let espacioNum=document.createElement("h3");
        //le asignamos el contenido al espacio, especificamente el valor del objeto
        espacioNum.textContent=(dataPokemon[i].num);

        //declaramos espacio donde se imprimirá la data de name
        let espacionoName=document.createElement("h4");
        espacionoName.textContent=(dataPokemon[i].name);

        //declaramos espacio donde imprimirá la data img
        let espacioImg=document.createElement("img");
        espacioImg.src=(dataPokemon[i].img);

        //Modal
        const btnModal=document.createElement("button");
        btnModal.textContent=("Ver más");
        btnModal.className="estiloVerMas";

        btnModal.addEventListener("click", ()=>{
            //espacio contenedor del modal
            const espacioModal=document.createElement("div");
            espacioModal.className="espacioModal";

            let espacioNameModal=document.createElement("h4");
            espacioNameModal.textContent=(dataPokemon[i].name);
            espacioNameModal.className="estiloModal";

            let espacioImgModal=document.createElement("img");
            espacioImgModal.src=(dataPokemon[i].img);
            espacioImgModal.className="estiloModal";

            let espacioHeightModal=document.createElement("p");
            espacioHeightModal.textContent=(dataPokemon[i].height);
            espacioHeightModal.className="estiloModal";

            let espacioWeightModal=document.createElement("p");
            espacioWeightModal.textContent=(dataPokemon[i].weight);
            espacioWeightModal.className="estiloModal";

            const espacioButton=document.createElement("span");
            espacioButton.className="estiloCerrar";
            espacioButton.textContent=("Cerrar");
            
            espacioModal.appendChild(espacioNameModal);
            espacioModal.appendChild(espacioImgModal);
            espacioModal.appendChild(espacioHeightModal);
            espacioModal.appendChild(espacioWeightModal);
            espacioCatalogo.appendChild(espacioModal);

            espacioModal.appendChild(espacioButton);

            espacioButton.addEventListener("click", ()=>{
                espacioModal.style.display="none";
                });

        });

        //asignamos al padre espacioCatalogo el hijo correspondiente
        espacioCatalogo.appendChild(espacioImg);
        espacioCatalogo.appendChild(espacioNum);
        espacioCatalogo.appendChild(espacionoName);
        espacioCatalogo.appendChild(btnModal);

        //llevamos al padre/div raizcatalogo de HTML el hijo/section de JS
        document.getElementById("raizCatalogo").appendChild(espacioCatalogo).innerHTML;
    }
});

opcionBusqueda.addEventListener("click", ()=>{
    document.getElementById('muestraBusqueda').style.display = 'block';
    document.getElementById("muestraCatalogo").style.display = "none";
    muestraBusqueda.innerHTML= "<p>Aquí irán los filtros</p>";
});


