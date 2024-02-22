class Heroi {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    atacar() {
      let ataque = '';
      switch (this.type) {
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
          ataque = 'atacou';
      }
      console.log(`O ${this.type} ${ataque}`);
    }
  }
  

  const heroi = new Heroi('Aragorn', 35, 'guerreiro');
  heroi.atacar(); 
  