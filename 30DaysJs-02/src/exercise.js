export function isLeapYear(year) {
    // Tu ciódigo aquí 👈
    if (!Number.isInteger(year)) {
        return false;
    }

    // Verificar que el año sea un número positivo
    if (year < 0) {
        return false;
    }

    // Verificar si es bisiesto
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}