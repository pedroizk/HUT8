// 5 min p fazer

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }
  
function Pessoa(nome, idade) {
    this.andar = function() // funcao dentro de classe = metodo
    {
        console.log(nome + ' andou');
    }
}

  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

function Dom(itens, classe) {
    this.elements = function()
    {
        return document.querySelectorAll(itens);
    }

    this.addClass = function()
    {
        this.elements().forEach(element => {
            element.classList.add(classe);
        });
         
    }
    this.removeClass = function()
    {
        this.elements().forEach(element => {
            element.classList.remove(classe);
        });
    }
}
    
const joaoC = new Dom('li', 'liClass');
joaoC.addClass();
joaoC.removeClass();


