<template>
  <v-container>
    <v-row class="justify-center">
      <FichePreReservation />
    </v-row>
  </v-container>
</template>

<script>
import FichePreReservation from "./FichePreReservation";
export default {
  components: {
    FichePreReservation,
  },

  name: "ReservationClient",
  props: ["reservation1"],
  data: () => ({
  }),
  
};
</script>
