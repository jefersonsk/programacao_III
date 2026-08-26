import leitor from 'readline-sync'

let valor_01 = leitor.question("Digite o 1º valor: ")
let valor_02 = leitor.question("Digite o 2º valor: ")

valor_01 = Number(valor_01)
valor_02 = Number(valor_02)

let resultado = valor_01 + valor_02

console.log("O resultado da soma entre " + valor_01 + " e " + valor_02 + " é: " + resultado)