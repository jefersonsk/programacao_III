import leitor from 'readline-sync';

console.log("Calculadora");

let valor1 = Number(leitor.question("Valor 1:"));
let valor2 = Number(leitor.question("Valor 2: "));
let operacao = leitor.question("Operação (+, -, *, /): ");
let executar = function(v1, v2) 
    {
    return "Operação inválida!"
    }

if (operacao == "+") {
    function soma(a,b) {
        return a + b;
    }
    executar = soma;
} else if (operacao == "-") {
    executar = function(v1, v2) {
        return v1 - v2;
    }
} else if (operacao == "/") {
    executar = (a,b)=> {
        return a /  b;
    }
// Se só tiver 1 comando ou expressão e eles for o retorno da Arrow Function ou o retorno da função ou o retorno irrelevante
// a Arrow Funcition não precisa do return e das {}    
} else if (operacao == "*") {
    executar = (a,b) => a * b;
}

console.log("Executando a operação " + operacao);

let resultado = executar(valor1, valor2);

console.log("Resultado: " + resultado)