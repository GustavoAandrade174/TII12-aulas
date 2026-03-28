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