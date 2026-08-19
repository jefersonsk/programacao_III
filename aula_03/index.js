import leitor from 'readline-sync'

let valor1 = leitor.question("Digite 1 Numero:")
let valor2 = leitor.question("Digite 2 Numero:")

let valor1ComoNumero = Number(valor1)
let valor2ComoNumero = Number(valor2)

console.log(typeof(valor1ComoNumero))
console.log(valor1ComoNumero + valor2ComoNumero)