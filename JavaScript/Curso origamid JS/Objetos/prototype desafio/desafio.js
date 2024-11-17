// Crie um função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


function CriaPessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
} 

const pedro =  new CriaPessoa('Pedro', 'Izkovitz', 19);

CriaPessoa.prototype.nomeCompleto  = function(){
    return this.nome + ' ' + this.sobrenome;
}

console.log(pedro); 
console.log(pedro.nomeCompleto());

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(documento.prototype);