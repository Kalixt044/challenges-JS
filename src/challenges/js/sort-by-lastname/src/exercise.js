export function sortByLastName(array) {
<<<<<<< HEAD
    // Utilizamos el método sort() para ordenar el array
    array.sort((a, b) => {
        // Separamos los nombres y apellidos por espacio en cada elemento
        const [apellidoA, nombreA] = a.split(' ');
        const [apellidoB, nombreB] = b.split(' ');

        // Comparamos los apellidos para determinar el orden
        if (apellidoA < apellidoB) {
            return -1; // a debe ir antes que b
        } else if (apellidoA > apellidoB) {
            return 1; // a debe ir después que b
        } else {
            // Si los apellidos son iguales, comparamos los nombres
            if (nombreA < nombreB) {
                return -1;
            } else if (nombreA > nombreB) {
                return 1;
            } else {
                return 0; // Son iguales o tal vez no
            }
        }
    });

    return array;
}
=======
  // Utilizamos el método sort() para ordenar el array
  array.sort((a, b) => {
    // Separamos los nombres y apellidos por espacio en cada elemento
    const [apellidoA, nombreA] = a.split(' ');
    const [apellidoB, nombreB] = b.split(' ');

    // Comparamos los apellidos para determinar el orden
    if (apellidoA < apellidoB) {
      return -1; // a debe ir antes que b
    } else if (apellidoA > apellidoB) {
      return 1; // a debe ir después que b
    } else {
      // Si los apellidos son iguales, comparamos los nombres
      if (nombreA < nombreB) {
        return -1;
      } else if (nombreA > nombreB) {
        return 1;
      } else {
        return 0; // Son iguales
      }
    }
  });

  return array;
}
>>>>>>> 03487ec3260e759e19f156065e350b258511a1b3
