
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
/*¿Qué contienen la variable formulario ? */
/*Tiene el elemento que tiene el id de bitacora*/

 /*¿Qué hace el método evt.preventDefault() ? */
 /*No deja que este en blanco el elemento bitacora*/

 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = 
    {
        cant:cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    if(formulario[1].value===""|| formulario[2].value ===""||formulario[3].value==="")
    {
        alert("Llene todos los campos");
    }
    else
    {
        bitacoras.push(bitacora);
    cont++;
    mostrar();
    }
    
 }); 
 /*¿Qué es lo que contiene formulario[x]? */
 /*Contiene un arreglo de formulario*/

 const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
  /*¿Qué contienen las variables tr y td ? */
  /*td crea el elemento de celda y tr de filas en el docuemnto html*/ 

  /*¿Qué contienen la variable content ? */
  /*Crea un nodo de texto*/

  /*¿Qué valor tendra tbody al finalizar la iteración? */
  /*Recibe un nodo y le añade ese nodo como hijo al elemento actúal*/

  /*Describa en pocas palabras lo que realizara esta función */
  /*Tomara los valores de la bitacora y los mostrara en el lado derecho como una tabla, con la funcion mostrar();*/

  const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
       }
}
/*¿Qué es lo que hace .firstChild? */
/*Retorna el primer hijo del elemento actual */

/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*Queda vacio */

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
    
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
   
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*Retorna una coleccion de nodos hijos como una lista nodo de objetos */

const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*Se obtiene el primer elemento que coincide con el selector css en el documento */

/*¿Qué hace el método childElementCount? */
/*Retorna el numero de elementos hijos de dicho elemento que tiene */

/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*Nada, porque la que lo muestra es la funcion mostrar(); */

/*¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*Muestra la información digitada en forma de tabla en la parte derecha*/


var fecha = document.getElementById("fecha");
fecha.oninput = ()=>{
    var valor = fecha.value;
    if(valor == ""||valor == null)
    {
        fecha.style.borderColor = "red";
    }
    else{
        fecha.style.borderColor = "green";
    }
}

var descp = document.getElementById("descp");
descp.oninput = ()=>{
    var valor = descp.value;
    if(valor == ""||valor == null)
    {
        descp.style.borderColor = "red";
    }
    else{
        descp.style.borderColor = "green";
    }
}

var cant = document.getElementById("cant");
cant.oninput = ()=>{
    var valor = cant.value;
    if(valor == ""||valor == null)
    {
        cant.style.borderColor = "red";
    }
    else{
        cant.style.borderColor = "green";
    }
}
