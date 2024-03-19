const Aluno = require('./aluno');
const Turma = require('./turma');
const Turma_presencial = require('./turma_presencial');

const Aluno = new Aluno('Maria Gabriella','mariagabriellavictor','2143364');
const Turma = new Turma("ES46A",8);
const Turma_presencial = new Turma_presencial(75, 8, "ES46A");

console.log(`Aluno: ${aluno.nome}\nRA: ${aluno.ra}\n`)