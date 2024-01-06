class Carta {
  constructor(nombre, costo, poder, resiliencia) {
    this.nombre = nombre;
    this.costo = costo;
    this.poder = poder;
    this.resiliencia = resiliencia;
  }
}

class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.cartasEnJuego = [];
  }

  convocarCarta(carta) {
    this.cartasEnJuego.push(carta);
  }

  jugarCarta(carta, objetivo) {
    if (carta instanceof AlgoritmoDificil || carta instanceof RechazoDePromesaNoManejado || carta instanceof ProgramacionEnPareja) {
      carta.aplicarEfecto(objetivo);
    }
  }

  atacar(objetivo) {
    console.log(`${this.nombre} tiene el ataque "${this.cartasEnJuego[0].nombre}" contra "${objetivo.cartasEnJuego[0].nombre}"`);
  }
}

class AlgoritmoDificil extends Carta {
  constructor() {
    super("Algoritmo Difícil", 2, 0, 0);
  }

  aplicarEfecto(objetivo) {
    objetivo.resiliencia += 3;
  }
}

class RechazoDePromesaNoManejado extends Carta {
  constructor() {
    super("Rechazo de Promesa No Manejado", 1, 0, 0);
  }

  aplicarEfecto(objetivo) {
    objetivo.resiliencia -= 2;
  }
}

class ProgramacionEnPareja extends Carta {
  constructor() {
    super("Programación en Pareja", 3, 0, 0);
  }

  aplicarEfecto(objetivo) {
    objetivo.poder += 2;
  }
}

const jugador1 = new Jugador("Jugador 1");
const jugador2 = new Jugador("Jugador 2");

const ninjaCinturonRojo = new Carta("Ninja Cinturón Rojo", 3, 3, 4);
const ninjaCinturonNegro = new Carta("Ninja Cinturón Negro", 4, 5, 4);

// Turno 1 - Jugador 1
jugador1.convocarCarta(ninjaCinturonRojo);
console.log(`Turno 1: ${jugador1.nombre} convoca a "${ninjaCinturonRojo.nombre}"`);

// Turno 1 - Jugador 1
jugador1.jugarCarta(new AlgoritmoDificil(), ninjaCinturonRojo);
console.log(`Turno 2: ${jugador1.nombre} juega "Algoritmo Difícil" en "${ninjaCinturonRojo.nombre}"`);

// Turno 2 - Jugador 2
jugador2.convocarCarta(ninjaCinturonNegro);
console.log(`Turno 2: ${jugador2.nombre} convoca a "${ninjaCinturonNegro.nombre}"`);

// Turno 2 - Jugador 2
jugador2.jugarCarta(new RechazoDePromesaNoManejado(), ninjaCinturonRojo);
console.log(`Turno 2: ${jugador2.nombre} juega "Rechazo de Promesa No Manejado" en "${ninjaCinturonRojo.nombre}"`);

// Turno 3 - Jugador 1
jugador1.jugarCarta(new ProgramacionEnPareja(), ninjaCinturonRojo);
console.log(`Turno 3: ${jugador1.nombre} juega "Programación en Pareja" en "${ninjaCinturonRojo.nombre}"`);

// Turno 3 - Jugador 1
jugador1.atacar(jugador2);

