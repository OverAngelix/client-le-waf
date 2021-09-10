<template>
  <v-container>
    <v-row class="justify-center">
      <v-carousel
        hide-delimiters
        :show-arrows="false"
        cycle
        height="450"
        class="ma-4"
      >
        <v-carousel-item
          v-for="(doggo, i) in doggos"
          :key="i"
          :src="doggo.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-btn
              class="ma-4"
              @click="confirmationAnnulation"
              color="primary"
              dark
            >
              Confirmation de l'annulation
            </v-btn>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
import ReservationsRepository from "@/API/ReservationsRepository";
export default {
  name: "AnnulationReservation",
  data: () => ({
    doggos: [
      {
        src: require("../assets/beans.jpg"),
      },
      {
        src: require("../assets/patate.jpg"),
      },
      {
        src: require("../assets/gypsie.jpg"),
      },
      {
        src: require("../assets/jo.jpg"),
      },
    ],
  }),

  methods: {
    async confirmationAnnulation() {
      this.$alert("Votre reservation a bien été annulé", "", "success").then(
        async () => {
          await ReservationsRepository.deleteReservationToken(
            this.$route.params.token
          );
          this.$router.push({path: '/'});
        }
      );
    },
  },
};
</script>
