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
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="4"
          v-for="reservation in reservations"
          :key="reservation.idTable"
        >
          <v-card class="pa-1" outlined tile>
            <div>
              {{ reservation.nomTable }}
            </div>
            <strike v-if="heureCourante >= 48600"
              >12:00 {{ reservation.nom1 }}<br
            /></strike>
            <div v-else>12:00 {{ reservation.nom1 }}</div>

            <strike v-if="heureCourante >= 53100"
              >13:30 {{ reservation.nom2 }}<br
            /></strike>
            <div v-else>13:30 {{ reservation.nom2 }}</div>

            <strike v-if="heureCourante >= 57600"
              >14:45 {{ reservation.nom3 }}<br
            /></strike>
            <div v-else>14:45 {{ reservation.nom3 }}</div>

            <strike v-if="heureCourante >= 62100"
              >16:00 {{ reservation.nom4 }}<br
            /></strike>
            <div v-else>16:00 {{ reservation.nom4 }}</div>

            <strike v-if="heureCourante >= 66600"
              >17:15 {{ reservation.nom5 }}<br
            /></strike>
            <div v-else>17:15 {{ reservation.nom5 }}</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ReservationsRepository from "@/API/ReservationsRepository";

export default {
  name: "ReservationOfTheDay",
  data: () => ({
    isConnected: false,
    password: "",
    menu: false,
    reservations: [
      {
        idTable: 1,
        nomTable: "Table 2(entrée)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 2,
        nomTable: "Table 2(milieu)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 3,
        nomTable: "Table 2-3",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 4,
        nomTable: "Canapés palettes (entrée)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 5,
        nomTable: "Canapés (cave)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 6,
        nomTable: "Espace canapés (milieu)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 7,
        nomTable: "Table 2 (verrière)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 8,
        nomTable: "Table 2 (toilettes)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
      {
        idTable: 9,
        nomTable: "Capanés palettes (verrière)",
        nom1: "",
        nom2: "",
        nom3: "",
        nom4: "",
        nom5: "",
      },
    ],
    dateSelectionne: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    heureCourante: "",
  }),

  async created() {
    const heure = new Date();
    this.heureCourante = heure.getHours() * 60 * 60 + heure.getMinutes() * 60;
    if (localStorage.admin != "" && localStorage.admin !== undefined) {
      this.isConnected = true;
    }
    let reservationsDTO = await ReservationsRepository.getReservationsDuJour({
      //date: this.dateSelectionne + " 02:00:00.000",
      date: this.dateSelectionne + " 00:00:00.000",
    });
    for (let i = 0; i < reservationsDTO.length; i++) {
      for (let j = 0; j < this.reservations.length; j++) {
        if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
          switch (reservationsDTO[i].heureReservation) {
            case "12:00:00":
              this.reservations[j].nom1 =
                reservationsDTO[i].nom +
                " " +
                reservationsDTO[i].prenom +
                " (" +
                reservationsDTO[i].nbPersonne +
                ")";
              break;
            case "13:30:00":
              this.reservations[j].nom2 =
                reservationsDTO[i].nom +
                " " +
                reservationsDTO[i].prenom +
                " (" +
                reservationsDTO[i].nbPersonne +
                ")";
              break;
            case "14:45:00":
              this.reservations[j].nom3 =
                reservationsDTO[i].nom +
                " " +
                reservationsDTO[i].prenom +
                " (" +
                reservationsDTO[i].nbPersonne +
                ")";
              break;
            case "16:00:00":
              this.reservations[j].nom4 =
                reservationsDTO[i].nom +
                " " +
                reservationsDTO[i].prenom +
                " (" +
                reservationsDTO[i].nbPersonne +
                ")";
              break;
            case "17:15:00":
              this.reservations[j].nom5 =
                reservationsDTO[i].nom +
                " " +
                reservationsDTO[i].prenom +
                " (" +
                reservationsDTO[i].nbPersonne +
                ")";
              break;
            default:
              console.log("Error sur l'heure dans la base");
          }
        }
      }
    }
  },

  methods: {
    validePassword() {
      //console.log(process.env.VUE_APP_PASSWORD);
      if (this.password == "123") {
        this.isConnected = true;
        localStorage.admin = "TRUE";
      } else {
        this.$alert("Mot de passe incorrect !", "", "error");
      }
    },

    async loadReservations() {
      let reservationsDTO = await ReservationsRepository.getReservationsDuJour({
        //date: this.dateSelectionne + " 02:00:00.000",
        date: this.dateSelectionne + " 00:00:00.000",
      });
      for (let i = 0; i < reservationsDTO.length; i++) {
        for (let j = 0; j < this.reservations.length; j++) {
          if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
            switch (reservationsDTO[i].heureReservation) {
              case "12:00:00":
                this.reservations[j].nom1 =
                  reservationsDTO[i].nom +
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                break;
              case "13:30:00":
                this.reservations[j].nom2 =
                  reservationsDTO[i].nom +
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                break;
              case "14:45:00":
                this.reservations[j].nom3 =
                  reservationsDTO[i].nom +
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                break;
              case "16:00:00":
                this.reservations[j].nom4 =
                  reservationsDTO[i].nom +
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                break;
              case "17:15:00":
                this.reservations[j].nom5 =
                  reservationsDTO[i].nom +
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                break;
              default:
                console.log("Error sur l'heure dans la base");
            }
          }
        }
      }
    },
  },

  watch: {
    dateSelectionne() {
      for (let j = 0; j < this.reservations.length; j++) {
        this.reservations[j].nom1 = "";
        this.reservations[j].nom2 = "";
        this.reservations[j].nom3 = "";
        this.reservations[j].nom4 = "";
        this.reservations[j].nom5 = "";
      }
      this.loadReservations();
    },
  },
};
</script>