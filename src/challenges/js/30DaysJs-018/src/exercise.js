export function hotelSystem(rooms) {
  const reservations = [];

  function searchReservation(id) {
    const reservation = reservations.find((r) => r.id === id);
    if (!reservation) {
      throw new Error("La reservación no fue encontrada");
    }
    return reservation;
  }

  function getSortReservations() {
    return [...reservations].sort((a, b) => a.checkIn.localeCompare(b.checkIn));
  }

  function addReservation(reservation) {
    const { checkIn, checkOut, roomNumber } = reservation;
    const overlap = reservations.some(
      (r) =>
        r.roomNumber === roomNumber &&
        ((checkIn >= r.checkIn && checkIn < r.checkOut) ||
          (checkOut > r.checkIn && checkOut <= r.checkOut))
    );
    if (overlap) {
      throw new Error("La habitación no está disponible");
    }
    reservations.push(reservation);
  }

  function removeReservation(id) {
    const index = reservations.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new Error("La reservación que se busca remover no existe");
    }
    return reservations.splice(index, 1)[0];
  }

  function getReservations() {
    return [...reservations];
  }

  function getAvailableRooms(checkIn, checkOut) {
    const unavailableRooms = reservations
      .filter(
        (r) =>
          (checkIn >= r.checkIn && checkIn < r.checkOut) ||
          (checkOut > r.checkIn && checkOut <= r.checkOut)
      )
      .map((r) => r.roomNumber);
    const availableRooms = [];
    for (let i = 1; i <= rooms; i++) {
      if (!unavailableRooms.includes(i)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };

}
