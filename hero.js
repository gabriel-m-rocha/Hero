class Heroi {
    constructor(name, age, classe) {
        this.name = name;
        this.age = age;
        this.classe = classe;
    }

    atacar() {
        let ataque;
        switch (this.classe) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

//chamar metodo atacar
const herois = [
    new Heroi('LastNinja', 25, 'ninja'),
    new Heroi('TheMago', 35, 'mago'),
    new Heroi('Old_Monge', 42, 'monge'),
    new Heroi('LastWarrior', 31, 'guerreiro')
];

// agora vamos chamar cada heroi
herois.forEach(heroi => heroi.atacar());
