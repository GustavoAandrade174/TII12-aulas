//Laços de repetição
//While, do While e For

let contador = 1;
let contador2 = 2;

while (contador<=10){
    console.log(contador="")
    contador++;
};

do{
console.log(contador2="");
contador2++;
} while(contador2<=10);

for(let numero = 1;numero<=5;numero++){
    console.log(numero, "");
};

let palavra = "calopsita";

//length = conta quantos carcteres exitem em uma string.
for(let contador = 0;contador<=palavra.length;contador++){
    console.log(palavra[contador]);
    console.log(contador)
};