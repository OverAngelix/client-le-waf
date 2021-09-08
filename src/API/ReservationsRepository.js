import axios from "axios";

axios.defaults.withCredentials = true;

export default {

  async getReservations(criteres) {
    const reservations = await axios.get(
      "http://localhost:3001/api/reservations", { params: criteres }
    );
    return reservations.data;
  },

  async addReservation(reservation) {
    const response = await axios.post(
      "http://localhost:3001/api/reservations",
      reservation
    );
    return response.data;
  },

};
