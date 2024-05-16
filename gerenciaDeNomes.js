export function concatenarNomes(){

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");

    const nomeResultado = document.getElementById("nomeResultado");

    nomeResultado.innerText = concatenar(nome.value, sobrenome.value);

}

function concatenar(nome, sobrenome){
     
    return `${nome} ${sobrenome}`;

}