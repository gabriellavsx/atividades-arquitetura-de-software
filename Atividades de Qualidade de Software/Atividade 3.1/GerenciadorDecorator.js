const GerenciadorContatos = require("./GerenciadorContatos");

// Decorator para estender a funcionalidade de GerenciadorContatos
class GerenciadorContatosDecorator {
    constructor(gerenciadorContatos) {
        this.gerenciadorContatos = gerenciadorContatos;
    }
 
    adicionarContato(contato) {
        // Novas funcionalidades podem ser adicionadas aqui antes de chamar o método original
        this.gerenciadorContatos.adicionarContato(contato);
    }

    removerContato(nome) {
        // Novas funcionalidades podem ser adicionadas aqui antes de chamar o método original
        this.gerenciadorContatos.removerContato(nome);
    }

    listarContatos() {
        // Novas funcionalidades podem ser adicionadas aqui antes de chamar o método original
        return this.gerenciadorContatos.listarContatos();
    }
}
