// Construindo classes (funcoes construtoras)

function Carro(marca, preco) { // constructor function, it's like a __init__ metohd in python
    this.marca = marca
    this.preco = preco
}

let honda = new Carro('Honda', 100000); // creating a new object and passing the parameters



function Carro2(marca, precoInicial) {
    this.taxa = 1.2;
    this.marca = marca;
    this.precoInicial = precoInicial;
    this.precoFinal = precoInicial * this.taxa;

    return 'The final price of ' + marca + 'is ' + this.precoFinal;
}

const mazda = new Carro2('Mazda mx3 2012', 15000);
console.log(mazda);

// Using constructors to manipulate DOM

function ClassAdd(seletor, classe) {
    this.selecting  = function() {
        return document.querySelector(seletor);
    }
    
    this.add = function () {
        return this.selecting().classList.add(classe);
    }
}

const liAtv = new ClassAdd('li', 'banana');
liAtv.add();