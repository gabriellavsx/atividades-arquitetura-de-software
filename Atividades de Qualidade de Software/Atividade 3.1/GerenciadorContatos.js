//sconst Contato = require("./Contato");
class GerenciadorContatos{
    constructor(){
        this.contatos=[];
    }
    adicionarContato(Contato){
        this.contatos.push(Contato);
    }
    removerContato(Contato){
        const ind = this.contatos.indexOf(Contato);
        if(ind!==-1){
            this.contatos.splice(ind,1);
        }
    }
    listarContatos(){
        return this.contatos;
    }
}

module.exports = GerenciadorContatos;