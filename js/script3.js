let h1 = document.getElementById("tituloUno");
h1.textContent = "El fantástico mundo de las propinas (?)"

let h2 = document.getElementById("tituloDos")
h2.textContent = "Calculadora de propina";

let textTitle = document.querySelector('h2');
textTitle.style.padding = '2px';

let back = document.getElementById('headerImg');
back.setAttribute('src','./img/background.jpg');
back.setAttribute('alt','Background de la página');


let arregloTip = [tipA, tipB, tipC, tipD, tipE]

function propinasSugeridas(){
    let box = document.getElementById("box")
    let ul = document.createElement("ul")
    box.appendChild(ul)
    arregloTip.forEach(sugerencias => {
        let li = document.createElement("li");
        li.textContent = sugerencias.mostrar_listado();
        ul.appendChild(li)
        })
        return li
}
let boton2 = document.getElementById("consultarS")
boton2.addEventListener("submit", propinasSugeridas);
boton2.addEventListener("click",propinasSugeridas);

let enter2 = document.getElementById("consultarS")
boton2.addEventListener("keypress", (propinasSugeridas)=>{
    if(propinasSugeridas.keyPress === 13){
        propinasSugeridas()
    }
});

let tipFull= document.querySelector("#formUno");
tipFull.addEventListener("change", tip)

function tip(){
    let monto = Number(document.getElementById("monto").value);
    let tip = Number(document.getElementById("tip").value);
    let resultado = Number(monto * (tip/100));
    console.log(resultado);
  
    let tipTotal = document.querySelector("#resultado");
    tipTotal.value = resultado.toFixed(2);

    document.getElementById("resultado").style.display='block';
}
/*
let tipSug= document.querySelector("#formdos");
tipFull.addEventListener("change", datosSugerirPropina)
function datosSugerirPropina() {

    let lugar = document.getElementById("lugar").value;
    let tipo = document.getElementById("tipo").value;
    let servicio = Number(document.getElementById("servicio").value);
    let porcentaje = Number(document.getElementById("porcentaje").value);
    if(servicio >0 && servicio< 6){
        return new sugerencias(lugar, tipo, servicio, porcentaje);
    }


  }
function ingresarNuevaSugerencia() {
    sugerencias = datosSugerirPropina();
    let ok = document.getElementById("ok");
    let okP= document.createElement("h2");
    if (sugerencias) {
        arregloTip.push(sugerencias);
        ok.appendChild(okP)
        okP.textContent = "Sugerencia agregada"

    }
    else {
        okP.textContent ="Volvé a ingresar los datos"
    }

}

let boton3 = document.getElementById("agregarS")
boton3.addEventListener("submit", ingresarNuevaSugerencia);
boton3.addEventListener("click",ingresarNuevaSugerencia);
  
let enter3 = document.getElementById("agregarS")
boton3.addEventListener("keypress", (ingresarNuevaSugerencia)=>{
  if(ingresarNuevaSugerencia.keyPress === 13){
    ingresarNuevaSugerencia()
      }
  });
*/