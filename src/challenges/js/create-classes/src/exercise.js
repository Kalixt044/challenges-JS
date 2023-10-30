class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    const hayBaterista = this.integrantes.find(integrante => integrante.instrumento === 'Bateria');
    if (hayBaterista) {
      throw new Error('Ya hay un baterista en la banda');
    } else {
      this.integrantes.push(integranteNuevo);
    }
  }
}

//Crear clase Integrante
class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}


export {
  Banda,
  Integrante,
}
