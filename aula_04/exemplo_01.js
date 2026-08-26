function a () {
    console.log("teste a");
}

let b = a;

console.log(a);
console.log(b);

function executa3vezes(algo) {
    algo();
    algo();
    algo();
}

// Função anônima, declara a função como se fosse uma expressão
// A expressão anônima retorna como valor uma função

executa3vezes(function() {console.log("Aqui.")}) 

// tudo que tem valor é uma expressão
let c = 2;
console.log(typeof(c))
c = "casa";
console.log(typeof(c))

// Está declarando uma função, dentro c agora tem um função
c = function() {console.log("azul"); return "aa"};

console.log(typeof(c));

c();

// Somente nessa linha d irá receber o retorno da função anônima que está em c
let d = c();

// A partir de agora a função anônima se perde
c = 3;

let val1 = 3;
let vla2 = 3;

let soma = val1 + vla2;

soma = 3 + 3;

// Outra forma de escrever a função anônima, Arrow Function
c = ()=>{console.log("casa");}