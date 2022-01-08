<template>
  <v-container>
    <v-row class="justify-center">
      <v-card flat tile class="flex">
        <v-card-title class="text-center justify-center py-6">
          <v-img
            alt="LE WAF"
            contain
            max-height="150"
            max-width="150"
            :src="require(`@/assets/logoMenu.png`)"
          ></v-img>
        </v-card-title>

        <v-img
          alt="reservation"
          contain
          class="mb-4"
          max-height="350"
          max-width="2000"
          :src="require(`@/assets/imageReservation.jpg`)"
          ><v-row class="fill-height" align="end" justify="center">
            <v-btn
              class="ma-4"
              @click="confirmationAnnulation"
              color="primary"
              dark
            >
              Confirmation de l'annulation
            </v-btn>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ReservationsRepository from "@/API/ReservationsRepository";
export default {
  name: "AnnulationReservation",

  methods: {
    async confirmationAnnulation() {
      this.$alert("Votre reservation a bien été annulé", "", "success").then(
        async () => {
          await ReservationsRepository.deleteReservationToken(
            this.$route.params.token
          );
          this.$router.push({ path: "/" });
        }
      );
    },
  },
};
</script>
