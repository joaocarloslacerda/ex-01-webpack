require("./index.css")

console.log("teste webpack")

document.getElementById("buttonDividir").addEventListener("click", dividirDoisNumeros)


function dividirDoisNumeros(){

    const valorUm = Number(document.getElementById("numeroUm").value)
    const valorDois = Number(document.getElementById("numeroDois").value)

    const valorResultado = document.getElementById("valorResultado")
    valorResultado.innerText = valorUm / valorDois
    console.log( valorUm / valorDois)

}