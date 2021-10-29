import axios from "axios";

axios.defaults.withCredentials = true;

/* export default {

  async getReservations(criteres) {
    const reservations = await axios.get(
      "http://localhost:3001/api/reservations", { params: criteres }
    );
    return reservations.data;
  },

  async getReservationsDuJour(criteres) {
    const reservations = await axios.get(
      "http://localhost:3001/api/reservations/reservationDuJour/jour", { params: criteres }
    );
    return reservations.data;
  },

  async verificationMail(criteres) {
    const reservations = await axios.get(
      "http://localhost:3001/api/reservations/confirmation/email", { params: criteres }
    );
    return reservations.data;
  },


  async getReservation(id) {
    const reservations = await axios.get(
      "http://localhost:3001/api/reservations/"+id
    );
    return reservations.data;
  },

  async updateReservation(id,updatedParams) {
    const reservations = await axios.put(
      "http://localhost:3001/api/reservations/"+id,updatedParams
    );
    return reservations.data;
  },

  async deleteReservation(id) {
    const reservations = await axios.delete(
      "http://localhost:3001/api/reservations/"+id
    );
    return reservations.data;
  },

  async deleteReservationToken(token) {
    const reservations = await axios.delete(
      "http://localhost:3001/api/reservations/deleteToken/"+token
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

}; */

export default {

  async getReservations(criteres) {
    const reservations = await axios.get(
      "https://server-le-waf.herokuapp.com/api/reservations", { params: criteres }
    );
    return reservations.data;
  },

   async getReservationsDuJour(criteres) {
    const reservations = await axios.get(
      "https://server-le-waf.herokuapp.com/api/reservations/reservationDuJour/jour", { params: criteres }
    );
    return reservations.data;
  },

    async verificationMail(criteres) {
    const reservations = await axios.get(
      "https://server-le-waf.herokuapp.com/api/reservations/confirmation/email", { params: criteres }
    );
    return reservations.data;
  },

  async addReservation(reservation) {
    const response = await axios.post(
      "https://server-le-waf.herokuapp.com/api/reservations",
      reservation
    );
    return response.data;
  },

  async getReservation(id) {
    const reservations = await axios.get(
      "https://server-le-waf.herokuapp.com/api/reservations/" + id
    );
    return reservations.data;
  },

  async updateReservation(id, updatedParams) {
    const reservations = await axios.put(
      "https://server-le-waf.herokuapp.com/api/reservations/" + id, updatedParams
    );
    return reservations.data;
  },

  async deleteReservation(id) {
    const reservations = await axios.delete(
      "https://server-le-waf.herokuapp.com/api/reservations/" + id
    );
    return reservations.data;
  },

  async deleteReservationToken(token) {
    const reservations = await axios.delete(
      "https://server-le-waf.herokuapp.com/api/reservations/deleteToken/" + token
    );
    return reservations.data;
  },
};