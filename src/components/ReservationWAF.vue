<template>
  <v-container>
    <div v-if="!isConnected">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <v-text-field
            label="Mot de passe"
            type="password"
            v-on:keyup.enter="validePassword"
            v-model="password"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row align="center" justify="center">
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
            @click="changeReservation(item)"
          ></v-simple-checkbox>
        </template>

        <template v-slot:[`item.valide`]="{ item }">
          <v-simple-checkbox
            :ripple="false"
            v-model="item.valide"
            @click="changeValidation(item)"
          ></v-simple-checkbox>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
import ReservationsRepository from "@/API/ReservationsRepository";

export default {
  name: "ReservationWAF",
  data: () => ({
    isConnected: false,
    password: "",
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
        idReservation: "",
        idTable: 1,
        nomTable: "Table 2(entrée)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 2,
        nomTable: "Table 2(milieu)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 3,
        nomTable: "Table 2-3",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 4,
        nomTable: "Canapés palettes (entrée)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 5,
        nomTable: "Canapés (cave)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 6,
        nomTable: "Espace canapés (milieu)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 7,
        nomTable: "Table 2 (verrière)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
        idTable: 8,
        nomTable: "Table 2 (toilettes)",
        nbPersonne: "",
        reserve: false,
        nom: "",
        valide: false,
      },
      {
        idReservation: "",
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
    if (localStorage.admin != "" && localStorage.admin !== undefined) {
      this.isConnected = true;
    }
    let reservationsDTO = await ReservationsRepository.getReservations({
      heureReservation: this.heureSelectionne,
      // dateReservation: this.dateSelectionne + " 02:00:00.000",
      dateReservation: this.dateSelectionne + " 00:00:00.000",
    });
    for (let i = 0; i < reservationsDTO.length; i++) {
      for (let j = 0; j < this.reservations.length; j++) {
        if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
          this.reservations[j].reserve = true;
          this.reservations[j].nom =
            reservationsDTO[i].nom + " " + reservationsDTO[i].prenom;
          this.reservations[j].nbPersonne = reservationsDTO[i].nbPersonne;
          this.reservations[j].valide = reservationsDTO[i].valide;
          this.reservations[j].idReservation = reservationsDTO[i].id;
        }
      }
    }
  },

  methods: {
    async changeReservation(reservation) {
      if (reservation.reserve == false && reservation.idReservation != "") {
        reservation.reserve = true;
        this.$confirm(
          "Etes-vous sur de vouloir supprimer cette reservation ?",
          "",
          "question"
        )
          .then(async () => {
            await ReservationsRepository.deleteReservation(
              reservation.idReservation
            );
            reservation.valide = false;
            reservation.reserve = false;
            reservation.idReservation = "";
            reservation.nbPersonne = "";
            reservation.nom = "";
            this.loadReservations();
          })
          .catch(() => {
            reservation.reserve = true;
          });
      } else {
        await ReservationsRepository.addReservation({
          nom: "Sans",
          prenom: "Reservations",
          email: "",
          nbPersonne: "0",
          informationComplementaires: "",
          dateReservation: this.dateSelectionne,
          idTable: reservation.idTable,
          heureReservation: this.heureSelectionne,
        });
        this.loadReservations();
      }
    },

    async changeValidation(reservation) {
      await ReservationsRepository.updateReservation(
        reservation.idReservation,
        {
          valide: reservation.valide,
        }
      );
      this.loadReservations();
    },

    validePassword() {
      console.log(process.env.VUE_APP_PASSWORD);
      if (this.password == "123") {
        this.isConnected = true;
        localStorage.admin = "TRUE";
      } else {
        this.$alert("Mot de passe incorrect !", "", "error");
      }
    },

    async loadReservations() {
      let reservationsDTO = await ReservationsRepository.getReservations({
        heureReservation: this.heureSelectionne,
        //dateReservation: this.dateSelectionne + " 02:00:00.000",
        dateReservation: this.dateSelectionne + " 00:00:00.000",
      });
      for (let i = 0; i < reservationsDTO.length; i++) {
        for (let j = 0; j < this.reservations.length; j++) {
          if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
            this.reservations[j].reserve = true;
            this.reservations[j].nom =
              reservationsDTO[i].nom + " " + reservationsDTO[i].prenom;
            this.reservations[j].nbPersonne = reservationsDTO[i].nbPersonne;
            this.reservations[j].valide = reservationsDTO[i].valide;
            this.reservations[j].idReservation = reservationsDTO[i].id;
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
  background-color: lightsalmon !important;
}
.rouge {
  background-color: lightcoral !important;
}
.vert {
  background-color: lightgreen !important;
}
</style>