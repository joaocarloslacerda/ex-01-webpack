import "./scss/index.scss"
import { concatenarNomes } from "./gerenciaDeNomes"
import { dividirDoisNumeros } from "./divisao"

document.getElementById("buttonConcatenar")
    .addEventListener("click", concatenarNomes)

document.getElementById("buttonDividir")
    .addEventListener("click", dividirDoisNumeros)
