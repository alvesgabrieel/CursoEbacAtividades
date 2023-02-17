const pessoas = ['Gabriel', 'Lara', 'Maria','João','Nicolas','Lucas'];

const alunos = pessoas.map(function(nomes) {
    return {
        nome: nomes,
        nota: ''
    }
})

alunos[0].nota = 8.7;
alunos[1].nota = 10;
alunos[2].nota = 5.4;
alunos[3].nota = 6.2;
alunos[4].nota = 3.3;
alunos[5].nota = 7;

const filtarAprovados = (i) => {
    return i.nota >= 6
}

const aprovados = alunos.filter(filtarAprovados);

console.log(aprovados);


