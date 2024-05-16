export function dividirDoisNumeros(){

    const valorUm = Number(document.getElementById("numeroUm").value)
    const valorDois = Number(document.getElementById("numeroDois").value)

    const valorResultado = document.getElementById("valorResultado")

    valorResultado.innerText = divisao(valorUm, valorDois)
}

function divisao(valorUm, valorDois){
    return valorUm / valorDois
}
