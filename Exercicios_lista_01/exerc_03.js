import leitor from 'readline-sync'

let valor_01 = leitor.question("1ª Nota: ")
let valor_02 = leitor.question("2ª Nota: ")
let valor_03 = leitor.question("3ª Nota: ")

valor_01 = Number(valor_01)
valor_02 = Number(valor_02)
valor_03 = Number(valor_03)

let resultado = (valor_01 + valor_02 + valor_03) / 3

console.log("A média das notas: " + valor_01 + ", " + valor_02 + " e " + valor_03 + " é: " + resultado)