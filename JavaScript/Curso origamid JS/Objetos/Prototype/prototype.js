// Protótipos são métodos de classes (function constructors) que são declarados fora da classe em sí

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function()
{
    return this.nome + ' sabe andar';
}

const pedro = new Pessoa('Pedro', 19);
console.log(pedro.andar());

// protótipos são menos priorizados que métodos internos a classe, portanto se existir um método e um protótipo
// de mesmo nome, o método interno será priorizado.


// Construtores nativos
// Tudo são obejtos em JS, portanto sempre que criamos Strings, Int, Objetos e Funções, todos eles possuem métodos que podem ser ativados;

const hi = 'hi!'; // This is the same thing as const hi = new String('hi!');
// From this example, we can understand why there are native methods 

hi.toUpperCase();
hi.endsWith();
// And much more, to all native types

