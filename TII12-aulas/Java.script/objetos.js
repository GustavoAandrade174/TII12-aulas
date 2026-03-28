const pessoa = {
    nome: "Ana",
    idade: 16,
    genero: "Mulher",
    estuda: true,
};

pessoa.sobrenome = "Clara"

console.log("Nome:", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);

delete pessoa.idade;

console.log("Cade a idade? ", pessoa)

pessoa.hobbies =["ler", "escrever", "cantar"];
console.log("Pessoa:", pessoa);


//For IN ->Percorrendo as chaves do objeto
for (const chave in pessoa){
    console.log("Chave:", chave);
    console.log("valores: ", pessoa[chave]);
};


// Métodos para objetos:

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log("Chave:", chaves);
console.log("Valores: ", valores);
console.log("Entrada: ", entradas);
