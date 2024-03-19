const Aluno = require('./aluno');
const Turma = require('./turma');
const Turma_presencial = require('./turma_presencial');

const aluno1 = new Aluno('Maria Gabriella','mariagabriellavictor','2143364');
const turma1 = new Turma("ES46A",8);
const turma_presencial1 = new Turma_presencial(75, 8, "ES46A");

console.log('Aluno: ',aluno1.nome,'\n RA:',aluno1.ra);
console.log('Aprovado: ', turma1.aprovado()," na turma: ", turma1.codigo, " com nota: ",turma1.nota);
console.log('Aprovado na presencial: ', turma_presencial1.aprovado()," com frequencia: ", turma_presencial1.frequencia);