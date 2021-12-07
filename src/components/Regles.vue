<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span dark v-bind="attrs" v-on="on">
        J'ai lu et accepté les <a> règles et consignes du Waf</a>
      </span>
    </template>

    <v-card>
      <v-card-title class="grey darker-2">
        Règles et consignes du Waf
      </v-card-title>

      <v-card-text>
        <br />
        - Je ne nourris pas les chiens en dehors des distributions de friandises
        réalisées par le waf
        <br />
        - Je prends connaissance que le buffet de 7€ est facturé en cas de
        non-consommation et qu'il s'agit de creneaux 1h15 hormis le creneaux de
        12h à 13h30
        <br />
        - J'indique à mes enfants comment se comporter avec les chiens (ne pas
        courir, crier, frapper les chiens)
        <br />
        - En cas de retard je préviens Le Waf par mail à marine@lewaf.fr car si
        je ne préviens pas je prends conscience que ma réservation pourra être
        remplacée passé 20 minutes de retard
        <br />
        - Je laisse les chiens se reposer lorsqu'ils dorment et je ne porte
        jamais les chiens dans mes bras
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Regles",
  data: () => ({
    dialog: false,
  }),

  methods: {},
};
</script>
