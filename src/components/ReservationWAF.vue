<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6" md="2">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dateSelectionne"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateSelectionne"
              label="Jour de la reservation"
              readonly
              v-bind="attrs"
              v-on="on"
              outlined
            ></v-text-field>
          </template>
          <v-date-picker v-model="dateSelectionne" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dateSelectionne)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="6" md="2">
        <v-select
          :items="creneaux"
          v-model="heureSelectionne"
          label="Selectionnez l'horaire"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="reservations"
      :item-class="row_classes"
      class="elevation-1"
      :hide-default-footer="true"
      :items-per-page="12"
    >
      <template v-slot:[`item.nom`]="{ item }">
        {{ item.nom }} {{ item.prenom }}
      </template>

      <template v-slot:[`item.reserve`]="{ item }">
        <v-simple-checkbox
          :ripple="false"
          v-model="item.reserve"
        ></v-simple-checkbox>
      </template>

      <template v-slot:[`item.valide`]="{ item }">
        <v-simple-checkbox
          :ripple="false"
          v-model="item.valide"
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import ReservationsRepository from "@/API/ReservationsRepository";

export default {
  name: "ReservationWAF",
  data: () => ({
    headers: [
      { text: "Table", value: "nomTable", sortable: false },
      { text: "Nom", value: "nom" },
      { text: "Nombre de personnes", value: "nbPersonne" },
      { text: "Reservation", value: "reserve" },
      { text: "Validation", value: "valide" },
    ],

    creneaux: ["12:00", "13:30", "14:45", "16:00", "17:15"],
    menu: false,
    reservations: [
      {
        idTable: 1,
        nomTable: "Table 2(entrée)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 2,
        nomTable: "Table 2(milieu)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 3,
        nomTable: "Table 2-3",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 4,
        nomTable: "Canapés palettes (entrée)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 5,
        nomTable: "Canapés (cave)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 6,
        nomTable: "Espace canapés (milieu)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 7,
        nomTable: "Table 2 (verrière)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 8,
        nomTable: "Table 2 (toilettes)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idTable: 9,
        nomTable: "Capanés palettes (verrière)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
    ],

    dateSelectionne: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    heureSelectionne: "12:00",
  }),

  async created() {
    let reservationsDTO = await ReservationsRepository.getReservations({
      heureReservation: this.heureSelectionne,
      dateReservation: this.dateSelectionne + " 02:00:00.000",
    });
    for (let i = 0; i < reservationsDTO.length; i++) {
      for (let j = 0; j < this.reservations.length; j++) {
        if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
          this.reservations[j].reserve = true;
          this.reservations[j].nom =
            reservationsDTO[i].nom + " " + reservationsDTO[i].prenom;
          this.reservations[j].nbPersonne = reservationsDTO[i].nbPersonne;
        }
      }
    }
  },

  methods: {
    async loadReservations() {
      console.log("LOAD");
      let reservationsDTO = await ReservationsRepository.getReservations({
        heureReservation: this.heureSelectionne,
        dateReservation: this.dateSelectionne + " 02:00:00.000",
      });
      for (let i = 0; i < reservationsDTO.length; i++) {
        for (let j = 0; j < this.reservations.length; j++) {
          if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
            this.reservations[j].reserve = true;
            this.reservations[j].nom =
              reservationsDTO[i].nom + " " + reservationsDTO[i].prenom;
            this.reservations[j].nbPersonne = reservationsDTO[i].nbPersonne;
          }
        }
      }
    },

    row_classes(item) {
      if (item.reserve == false) {
        return "orange"; //can also return multiple classes e.g ["orange","disabled"]
      }
      if (item.reserve == true && item.valide == false) {
        return "rouge"; //can also return multiple classes e.g ["orange","disabled"]
      }
      if (item.reserve == true && item.valide == true) {
        return "vert"; //can also return multiple classes e.g ["orange","disabled"]
      }
    },
  },

  watch: {
    heureSelectionne() {
      for (let j = 0; j < this.reservations.length; j++) {
        this.reservations[j].reserve = false;
        this.reservations[j].valide = false;
        this.reservations[j].nom = "";
        this.reservations[j].nbPersonne = "";
      }
      this.loadReservations();
    },
    dateSelectionne() {
      for (let j = 0; j < this.reservations.length; j++) {
        this.reservations[j].reserve = false;
        this.reservations[j].valide = false;
        this.reservations[j].nom = "";
        this.reservations[j].nbPersonne = "";
      }
      this.loadReservations();
    },
  },
};
</script>

<style >
.orange {
  background-color: lightsalmon;
}
.rouge {
  background-color: lightcoral;
}
.vert {
  background-color: lightgreen;
}
</style>