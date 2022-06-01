let h1 = document.getElementById("tituloUno");
h1.textContent = "El fantástico mundo de las propinas (?)"

let h2 = document.getElementById("tituloDos")
h2.textContent = "Calculadora de propina";

let textTitle = document.querySelector('h2');
textTitle.style.padding = '10px';

let back = document.getElementById('headerImg');
back.setAttribute('src','./img/background.jpg');
back.setAttribute('alt','Background de la página');


let arregloTip = [tipA, tipB, tipC, tipD, tipE]

function propinasSugeridas(){
    let ul = document.createElement("ul")
    document.body.appendChild(ul)
    arregloTip.forEach(sugerencias => {
        let li = document.createElement("li");
        li.textContent = sugerencias.mostrar_listado();
        ul.appendChild(li);
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
    
 