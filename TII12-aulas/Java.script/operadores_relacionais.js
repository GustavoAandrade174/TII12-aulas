//operadores relacionais
//>, <, ==, ==, <=, >=

const idadeNalon=26;
const idadeClara= 16;

//comparando valores:
const saoIguais = idadeNalon == idadeClara;
console.log("São iguais?" + saoIguais);

const comparacao = idadeNalon > idadeClara;
console.log("É maior? " + comparacao);

const comparacao2 = idadeNalon < idadeClara;
console.log("É menor? " + comparacao2);

//2 sinais de (==) comparação de valores
//3 sinais de (===) comaparação estrita de valores e tipos.

const comaparacao3 = idadeNalon != idadeClara;
console.log("São diferentes? " + comaparacao3);

//Comparadores: E, OU e NÃO

const idade= 26;
const maiorIdade=   idade>18;
const possuiCNH= true;

const podeDirigir = maiorIdade && possuiCNH; //E
console.log("Pode dirigir? " + podeDirigir);

const podeViajar = maiorIdade || possuiCNH; //Ou
console.log("Pode viajar? " + podeViajar)

const acompanhante = !maiorIdade //Não
console.log("Precisa de Acompanhante? " +acompanhante)