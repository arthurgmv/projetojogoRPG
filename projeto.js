class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Hero
const heroi1 = new Hero('Aragorn', 35, 'guerreiro');
const heroi2 = new Hero('Gandalf', 60, 'mago');

heroi1.atacar(); // Exibirá "o guerreiro atacou usando espada"
heroi2.atacar(); // Exibirá "o mago atacou usando magia"
