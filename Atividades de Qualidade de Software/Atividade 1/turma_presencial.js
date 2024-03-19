const Turma = require("./turma.js")

class Turma_presencial extends Turma{
    constructor(frequencia,nota,codigo){
        this.frequencia= frequencia;
        super(nota,codigo);
    }

    aprovado(){
        return this.frequencia>= 70 && super.aprovado();
    }
}
module.exports = Turma_presencial;