const Contato = require("./Contato");
const GerenciadorContatos = require("./GerenciadorContatos");

//TESTE
const contato1 = new Contato('Maria Silva','1999999-9999','maria@gmail.com');
const contato2 = new Contato('Sonia Ferreira','1999999-5555','sonia@gmail.com');

// Função para buscar um contato pelo nome
GerenciadorContatos.prototype.buscarContato = function(nome) {
    return this.contatos.find(contato => contato.nome === nome);
}

/*gerenciador.adicionarContato(contato1);
gerenciador.adicionarContato(contato2);
console.log(gerenciador.contatos);
gerenciador.removerContato(contato1);
console.log(gerenciador.contatos);*/

// Interface de linha de comando
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    console.log('Sistema de Gerenciamento de Contatos');
    console.log('Comandos disponíveis:');
    console.log('1: Adicionar contato');
    console.log('2: Remover contato');
    console.log('3: Listar contatos');
    console.log('4: Buscar contato');
    console.log('5: Sair');

    rl.on('line', (input) => {
        switch(input.trim()) {
            case '1':
                console.log('Adicionar novo contato:');
                rl.question('Nome: ', (nome) => {
                    rl.question('Telefone: ', (telefone) => {
                        rl.question('Email: ', (email) => {
                            gerenciador.adicionarContato(new Contato(nome, telefone, email));
                            console.log('Contato adicionado com sucesso!');
                            main();
                        });
                    });
                });
                break;
            case '2':
                console.log('Remover um contato:');
                rl.question('Nome do contato a ser removido: ', (nome) => {
                    gerenciador.removerContato(nome);
                    console.log('Contato removido com sucesso!');
                    main();
                });
                break;
            case '3':
                console.log('Listar todos os contatos:');
                console.log(gerenciador.listarContatos());
                main();
                break;
            case '4':
                console.log('Buscar um contato:');
                rl.question('Nome do contato a ser buscado: ', (nome) => {
                    const contato = gerenciador.buscarContato(nome);
                    if (contato) {
                        console.log('Contato encontrado:', contato);
                    } else {
                        console.log('Contato não encontrado.');
                    }
                    main();
                });
                break;
            case '5':
                console.log('Saindo do sistema...');
                rl.close();
                break;
            default:
                console.log('Comando não reconhecido.');
                main();
        }
    });
}

const gerenciador = new GerenciadorContatos();
main();


