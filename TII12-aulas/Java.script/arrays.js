const frutas = ["Banana", "Maça", "Uva", "Laranja", "Limão"];
// posições do vetor: 0, 1, 2, 3, 4

///Exibindo array:
console.log(frutas);

console.log("A primeira fruta: ", frutas[0]);
console.log("A última fruta:", frutas[4]);
console.log("Total de frutas: ", frutas.length);

//adicionando um novo elemento ao meu array.

frutas.push("Pêssego");
console.log(frutas);

// Removendo um elemento do meu array
frutas.splice(2, 1);
console.log(frutas);

// Percorrendo o array com o laço FOR:
for(let i= 0; i<=frutas.length;i++){
    console.log("indice: ", i);
    console;log(frutas[i]);
}

//percorrendo o array com o método forEach
frutas.forEach((valor, indice) =>{
    console.log("indice", indice, "Fruta:", valor)
})

//percorrendo com o for of
for(const fruta of frutas){
    console.log("frutas da vez:", fruta)
};

const numeros = [1,2,3,4,5,6,7,8,9,10]

//usando o método filter para localizar apenas os numeros pares
const numerosPares = numeros.filter ((numeros) =>{
    return numero % 2 === 0; //condição é verdadeira
});

const numerosImpares = numeros.filter ((numeros) =>{
    return numero % 2 !== 0; //condição é verdadeira
});


console.log("Todos os números:", numeros);
console.log("Número pares: ", numerosPares);
console.log("Números impares: ", numerosImpares);

// Método map para a manipulação dos valores.
//Tratores dessa forma como valores diferentes (sem modificar o array original.)
const quadrados = numeros.map((numero)=>{
    return numeros*numeros;
});

console.log("Valores ao quadrado: ", quadrados);