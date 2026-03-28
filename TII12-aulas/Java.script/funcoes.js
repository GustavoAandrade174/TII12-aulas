// para declarar uma função, será necessário a palavra reservada "function" + nome da função.

function saudacao(nome){ 
    console.log("olá ", nome);
};
saudacao("Fernanda");
saudacao("Gustavo");

function calcDobro(numero){
    return numero*2;
};

const numeroDobro = calcDobro(50);
console.log("O dobro de 50 é: ", numeroDobro);

// Arrow funcion
const saud = (nome)=>{
    console.log("Olá ", nome)
};
saud("Rafa")

const calculoDobro = (numero1) =>{
    return numero1*2;
};
console.log(calcDobro(25));

//Funções mais simplificada.

const saudacao2 = nome => console.log("Olá", nome);

saudacao2("Chico")

const calcDobro2 = numero  => numero*2;
console.log("O dobro é: " ,calcDobro2(10)) 