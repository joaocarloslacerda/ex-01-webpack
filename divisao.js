function dividirDoisNumeros(){

    const valorUm = Number(document.getElementById("numeroUm").value)
    const valorDois = Number(document.getElementById("numeroDois").value)

    const valorResultado = document.getElementById("valorResultado")
    valorResultado.innerText = valorUm / valorDois
    console.log( valorUm / valorDois)

}

module.exports = {
    dividirDoisNumeros
}