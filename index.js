require("./index.css")

const { dividirDoisNumeros } = require("./divisao")

console.log("teste webpack")

document.getElementById("buttonDividir").addEventListener("click", dividirDoisNumeros)