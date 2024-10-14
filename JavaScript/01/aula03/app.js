function book(title, year, author)
{
    return nBook = {
        title: title.toUpperCase(),
        year: 2024 - year,
        att: title + ' by ' + author,
    };
}

const nome = "Retiaveliko";
const ano = 1999;
const escritor = "Pablo";

const retorno = book(nome, ano,escritor);

console.log(retorno.att);