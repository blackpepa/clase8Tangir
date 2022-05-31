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
})


function calculadora(){
   
    if (tipInit){
        let inputMonto = document.getElementById("monto");
        let inputTip = document.getElementById("tip");
        let resultado = "Debés dejar $ " + tipFinal(inputMonto, inputTip);
    }
 
    function tipFinal(inputMonto, inputTip){
    
        return  inputMonto * inputTip /100
}
}
    
function addValue(){
    let input = document.getElementById("resultado");
    input.innerHTML(resultado);
}
let calcular = document.getElementById("calcular");
calcular.addEventListener("click", addValue);



let newColorButton = document.querySelector('button');
newColorButton.style.backgroundColor = '#33FFC1';
newColorButton.style.color ="#000000";

