class Turma{
    constructor(codigo, nota){
        this.codigo = codigo;
        this.nota = nota;
    }
    aprovado(){
        return this.nota>=7;;
    }
}


export default Turma;