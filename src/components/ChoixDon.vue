<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span dark v-bind="attrs" v-on="on"
        ><v-img
          alt="dons"
          contain
          class="rounded-card ma-1 img-border"
          max-height="150"
          max-width="200"
          :src="require(`@/assets/don.png`)"
        ></v-img>
      </span>
    </template>

    <v-card>
      <v-card-title class="grey darker-2"> Choix du montant du don </v-card-title>

      <v-card-text>
        <a
          href="https://buy.stripe.com/bIY5kX0nY6qGcI84gh"
          target="_blank"
          rel="noopener"
        >
          <v-img
            alt="dons"
            contain
            class="rounded-card ma-3 img-border"
            max-height="1000"
            max-width="1000"
            :src="require(`@/assets/1euro.png`)"
          ></v-img
        ></a>

        <a
          href="https://buy.stripe.com/5kA7t54Ee4iybE4cMO"
          target="_blank"
          rel="noopener"
        >
          <v-img
            alt="dons"
            contain
            class="rounded-card ma-3 img-border"
            max-height="1000"
            max-width="1000"
            :src="require(`@/assets/5euro.png`)"
          ></v-img
        ></a>

        <a
          href="https://buy.stripe.com/bIY8x97Qqg1g6jK4gg"
          target="_blank"
          rel="noopener"
        >
          <v-img
            alt="dons"
            contain
            class="rounded-card ma-3 img-border"
            max-height="1000"
            max-width="1000"
            :src="require(`@/assets/10euro.png`)"
          ></v-img
        ></a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Fermer </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ChoixDon",
  data: () => ({
    dialog: false,
  }),

  methods: {},
};
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
}

.img-border {
  border: 3px solid rgb(243, 94, 49);
}
</style>
