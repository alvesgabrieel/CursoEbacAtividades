function c(frase){
    console.log(frase);
}
//------------------------

function Book(name, pages) {
    this.name = name;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
}

function ASongOfIceAndFire(name, pages) {
    Book.call(this, name, pages);
}

function FireAndBlood(name, pages) {
    Book.call(this, name, pages);    
}

const tags = ['fiction', 'fantasy', 'medieval', 'dragons'];
const author = {
    author: 'George R R Martin',
    age: 57,
    born: 'September 20, 1948',
    height: '1.68m'
};



const livro1 = new ASongOfIceAndFire('A Game oh Thrones', 478, tags, author);
const livro2 = new ASongOfIceAndFire('A Clash of Kings', 538, tags, author);
const livro3 = new ASongOfIceAndFire('A Storm of Swords', 729, tags, author);

const livro4 = new FireAndBlood('Fire and Blood - Vol.1', 674, tags, author);

c(livro1);
c(livro2);
c(livro3);
c(livro4);
