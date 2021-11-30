<template>
  <v-container>
    <div v-if="!isConnected">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" align="center" justify="center">
          <v-card class="pa-10" max-width="344" dark>
            <v-img
              alt="LE WAF"
              contain
              max-height="150"
              max-width="150"
              src="https://lewaf.files.wordpress.com/2016/06/cropped-cropped-logo-petit-trans2-1-1.png"
            ></v-img>

            <v-progress-linear
              v-if="loading"
              color="blue lighten-2"
              indeterminate
              rounded
              height="6"
              class="pa-6 mt-5"
            ></v-progress-linear>
            <v-text-field
              v-if="!loading"
              label="Mot de passe"
              type="password"
              v-on:keyup.enter="validePassword"
              v-model="password"
            ></v-text-field>
            <v-btn v-if="!loading" @click="validePassword" color="primary">
              Connexion
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row align="center" justify="center">
        <v-icon class="ma-2" x-large @click="previousDay()">
          mdi-arrow-left-bold</v-icon
        >
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
                v-model="formatDate"
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
        <v-icon class="ma-2" x-large @click="nextDay()">
          mdi-arrow-right-bold</v-icon
        >
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

            <v-row
              v-if="
                (heureCourante >= 48600 && dateDuJour == dateSelectionne) ||
                dateDuJour > dateSelectionne ||
                reservation.valide1
              "
            >
              <v-col cols="8">
                <strike>12:00 {{ reservation.nom1 }}</strike>
              </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="
                    (dateDuJour == dateSelectionne &&
                      reservation.nom1.length > 0 &&
                      heureCourante <= 48600) ||
                    (dateDuJour < dateSelectionne &&
                      reservation.nom1.length > 0)
                  "
                  dark
                  x-small
                  color="red"
                  @click="
                    changeValidation(reservation.id1, reservation.valide1)
                  "
                >
                  <v-icon dark> mdi-close-thick</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense v-else>
              <v-col cols="8"> 12:00 {{ reservation.nom1 }} </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="reservation.nom1.length > 0"
                  dark
                  x-small
                  color="blue"
                  @click="
                    changeValidation(reservation.id1, reservation.valide1)
                  "
                >
                  <v-icon dark> mdi-check-bold </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom1.length > 0"
                  dark
                  x-small
                  color="red"
                  @click="deleteReservation(reservation.id1)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom1.length == 0"
                  dark
                  x-small
                  color="green"
                  @click="newReservation(reservation.idTable, '12:00')"
                >
                  <v-icon dark> mdi-plus-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row
              dense
              v-if="
                (heureCourante >= 53100 && dateDuJour == dateSelectionne) ||
                dateDuJour > dateSelectionne ||
                reservation.valide2
              "
            >
              <v-col cols="8">
                <strike>13:30 {{ reservation.nom2 }}</strike>
              </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="
                    (dateDuJour == dateSelectionne &&
                      reservation.nom2.length > 0 &&
                      heureCourante <= 53100) ||
                    (dateDuJour < dateSelectionne &&
                      reservation.nom2.length > 0)
                  "
                  dark
                  x-small
                  color="red"
                  @click="
                    changeValidation(reservation.id2, reservation.valide2)
                  "
                >
                  <v-icon dark>mdi-close-thick</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense v-else>
              <v-col cols="8"> 13:30 {{ reservation.nom2 }} </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="reservation.nom2.length > 0"
                  dark
                  x-small
                  color="blue"
                  @click="
                    changeValidation(reservation.id2, reservation.valide2)
                  "
                >
                  <v-icon dark> mdi-check-bold </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom2.length > 0"
                  dark
                  x-small
                  color="red"
                  @click="deleteReservation(reservation.id2)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom2.length == 0"
                  dark
                  x-small
                  color="green"
                  @click="newReservation(reservation.idTable, '13:30')"
                >
                  <v-icon dark> mdi-plus-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row
              dense
              v-if="
                (heureCourante >= 57600 && dateDuJour == dateSelectionne) ||
                dateDuJour > dateSelectionne ||
                reservation.valide3
              "
            >
              <v-col cols="8">
                <strike>14:45 {{ reservation.nom3 }}</strike>
              </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="
                    (dateDuJour == dateSelectionne &&
                      reservation.nom3.length > 0 &&
                      heureCourante <= 57600) ||
                    (dateDuJour < dateSelectionne &&
                      reservation.nom3.length > 0)
                  "
                  dark
                  x-small
                  color="red"
                  @click="
                    changeValidation(reservation.id3, reservation.valide3)
                  "
                >
                  <v-icon dark> mdi-close-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense v-else>
              <v-col cols="8"> 14:45 {{ reservation.nom3 }} </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="reservation.nom3.length > 0"
                  dark
                  x-small
                  color="blue"
                  @click="
                    changeValidation(reservation.id3, reservation.valide3)
                  "
                >
                  <v-icon dark> mdi-check-bold </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom3.length > 0"
                  dark
                  x-small
                  color="red"
                  @click="deleteReservation(reservation.id3)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom3.length == 0"
                  dark
                  x-small
                  color="green"
                  @click="newReservation(reservation.idTable, '14:45')"
                >
                  <v-icon dark> mdi-plus-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row
              dense
              v-if="
                (heureCourante >= 62100 && dateDuJour == dateSelectionne) ||
                dateDuJour > dateSelectionne ||
                reservation.valide4
              "
            >
              <v-col cols="8">
                <strike>16:00 {{ reservation.nom4 }}</strike>
              </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="
                    (dateDuJour == dateSelectionne &&
                      reservation.nom4.length > 0 &&
                      heureCourante <= 62100) ||
                    (dateDuJour < dateSelectionne &&
                      reservation.nom4.length > 0)
                  "
                  dark
                  x-small
                  color="red"
                  @click="
                    changeValidation(reservation.id4, reservation.valide4)
                  "
                >
                  <v-icon dark> mdi-close-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row dense v-else>
              <v-col cols="8"> 16:00 {{ reservation.nom4 }} </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="reservation.nom4.length > 0"
                  dark
                  x-small
                  color="blue"
                  @click="
                    changeValidation(reservation.id4, reservation.valide4)
                  "
                >
                  <v-icon dark> mdi-check-bold </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom4.length > 0"
                  dark
                  x-small
                  color="red"
                  @click="deleteReservation(reservation.id4)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom4.length == 0"
                  dark
                  x-small
                  color="green"
                  @click="newReservation(reservation.idTable, '16:00')"
                >
                  <v-icon dark> mdi-plus-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row
              dense
              v-if="
                (heureCourante >= 66600 && dateDuJour == dateSelectionne) ||
                dateDuJour > dateSelectionne ||
                reservation.valide5
              "
            >
              <v-col cols="8">
                <strike>17:15 {{ reservation.nom5 }}</strike>
              </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="
                    (dateDuJour == dateSelectionne &&
                      reservation.nom5.length > 0 &&
                      heureCourante <= 66600) ||
                    (dateDuJour < dateSelectionne &&
                      reservation.nom5.length > 0)
                  "
                  dark
                  x-small
                  color="red"
                  @click="
                    changeValidation(reservation.id5, reservation.valide5)
                  "
                >
                  <v-icon dark> mdi-close-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense v-else>
              <v-col cols="8"> 17:15 {{ reservation.nom5 }} </v-col>
              <v-col class="text-right" cols="4">
                <v-btn
                  v-if="reservation.nom5.length > 0"
                  dark
                  x-small
                  color="blue"
                  @click="
                    changeValidation(reservation.id5, reservation.valide5)
                  "
                >
                  <v-icon dark> mdi-check-bold </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom5.length > 0"
                  dark
                  x-small
                  color="red"
                  @click="deleteReservation(reservation.id5)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
                <v-btn
                  v-if="reservation.nom5.length == 0"
                  dark
                  x-small
                  color="green"
                  @click="newReservation(reservation.idTable, '17:15')"
                >
                  <v-icon dark> mdi-plus-thick </v-icon>
                </v-btn>
              </v-col>
            </v-row>
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
    loading: true,
    menu: false,
    reservations: [
      {
        idTable: 1,
        nomTable: "Table 2(entrée)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 2,
        nomTable: "Table 2(milieu)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 7,
        nomTable: "Table 2 (verrière)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 8,
        nomTable: "Table 2 (toilettes)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 3,
        nomTable: "Table 2-3",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 4,
        nomTable: "Canapés palettes (entrée)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 5,
        nomTable: "Canapés (cave)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 9,
        nomTable: "Capanés palettes (verrière)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
      {
        idTable: 6,
        nomTable: "Espace canapés (milieu)",
        nom1: "",
        id1: -1,
        valide1: false,
        nom2: "",
        id2: -1,
        valide2: false,
        nom3: "",
        id3: -1,
        valide3: false,
        nom4: "",
        id4: -1,
        valide4: false,
        nom5: "",
        id5: -1,
        valide5: false,
      },
    ],
    dateSelectionne: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    dateDuJour: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    heureCourante: "",
    nbPlaceMax: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
  }),

  async created() {
    const heure = new Date();
    this.heureCourante = heure.getHours() * 60 * 60 + heure.getMinutes() * 60;
    let dateDuJour = new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    );
    if (dateDuJour.getDay() == 1) {
      dateDuJour.setDate(dateDuJour.getDate() + 2);
      this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
    } else if (dateDuJour.getDay() == 2) {
      dateDuJour.setDate(dateDuJour.getDate() + 1);
      this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
    }
  },

  mounted() {
    if (
      localStorage.savePassword != "" &&
      localStorage.savePassword !== undefined
    ) {
      this.password = localStorage.savePassword;
      this.validePassword();
    } else {
      this.loading = false;
    }
    this.loadReservations();
  },

  computed: {
    formatDate() {
      var datearray = this.dateSelectionne.split("-");
      return datearray[2] + "/" + datearray[1] + "/" + datearray[0];
    },
  },
  methods: {
    nextDay() {
      let tomorrow = new Date(this.dateSelectionne);
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.dateSelectionne = tomorrow.toISOString().substr(0, 10);
    },

    previousDay() {
      let yersterday = new Date(this.dateSelectionne);
      yersterday.setDate(yersterday.getDate() + -1);
      this.dateSelectionne = yersterday.toISOString().substr(0, 10);
    },

    async validePassword() {
      let result = await ReservationsRepository.login({
        password: this.password,
      });
      this.loading = false;
      if (result) {
        this.isConnected = true;
        localStorage.savePassword = this.password;
      } else {
        this.$alert("Mot de passe incorrect !", "", "error");
      }
    },

    async changeValidation(id, etat) {
      await ReservationsRepository.updateReservation(id, {
        valide: !etat,
      });
      this.loadReservations();
    },

    async deleteReservation(id) {
      this.$confirm(
        "Etes-vous sur de vouloir supprimer cette reservation ?",
        "",
        "question"
      )
        .then(async () => {
          await ReservationsRepository.deleteReservation(id);
          this.loadReservations();
        })
        .catch(() => {
          console.log("ERROR SUPPRESSION");
        });
    },

    async newReservation(idtable, heure) {
      this.$prompt("Nom de la reservation", "").then((prenom) => {
        this.$prompt("Nombre de personnes ?", "")
          .then(async (nbPersonnes) => {
            if (this.nbPlaceMax.includes(nbPersonnes)) {
              await ReservationsRepository.addReservation({
                nom: "",
                prenom: prenom,
                email: "",
                nbPersonne: nbPersonnes,
                informationComplementaires: "",
                dateReservation: this.dateSelectionne,
                idTable: idtable,
                heureReservation: heure,
              });
              this.loadReservations();
            } else {
              this.$alert(
                "",
                "Probleme avec le nombre de personnes",
                "error"
              );
            }
          })
          .catch(() => {
            console.log("ERROR SUPPRESSION");
          });
      });
    },

    async loadReservations() {
      let reservationsDTO = await ReservationsRepository.getReservationsDuJour({
        //date: this.dateSelectionne + " 01:00:00.000",
        date: this.dateSelectionne + " 00:00:00.000",
      });
      for (let j = 0; j < this.reservations.length; j++) {
        this.reservations[j].nom1 = "";
        this.reservations[j].nom2 = "";
        this.reservations[j].nom3 = "";
        this.reservations[j].nom4 = "";
        this.reservations[j].nom5 = "";
        this.reservations[j].id1 = -1;
        this.reservations[j].id2 = -1;
        this.reservations[j].id3 = -1;
        this.reservations[j].id4 = -1;
        this.reservations[j].id5 = -1;
        this.reservations[j].valide1 = false;
        this.reservations[j].valide2 = false;
        this.reservations[j].valide3 = false;
        this.reservations[j].valide4 = false;
        this.reservations[j].valide5 = false;
      }
      for (let i = 0; i < reservationsDTO.length; i++) {
        for (let j = 0; j < this.reservations.length; j++) {
          if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
            switch (reservationsDTO[i].heureReservation) {
              case "12:00:00":
                this.reservations[j].id1 = reservationsDTO[i].id;
                this.reservations[j].valide1 = reservationsDTO[i].valide;
                this.reservations[j].nom1 +=
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                if (
                  reservationsDTO[i].informationComplementaires != null &&
                  reservationsDTO[i].informationComplementaires != ""
                ) {
                  this.reservations[j].nom1 +=
                    " [" + reservationsDTO[i].informationComplementaires + "]";
                }
                break;
              case "13:30:00":
                this.reservations[j].id2 = reservationsDTO[i].id;
                this.reservations[j].valide2 = reservationsDTO[i].valide;
                this.reservations[j].nom2 +=
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                if (
                  reservationsDTO[i].informationComplementaires != null &&
                  reservationsDTO[i].informationComplementaires != ""
                ) {
                  this.reservations[j].nom2 +=
                    " [" + reservationsDTO[i].informationComplementaires + "]";
                }
                break;
              case "14:45:00":
                this.reservations[j].id3 = reservationsDTO[i].id;
                this.reservations[j].valide3 = reservationsDTO[i].valide;
                this.reservations[j].nom3 +=
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                if (
                  reservationsDTO[i].informationComplementaires != null &&
                  reservationsDTO[i].informationComplementaires != ""
                ) {
                  this.reservations[j].nom3 +=
                    " [" + reservationsDTO[i].informationComplementaires + "]";
                }
                break;
              case "16:00:00":
                this.reservations[j].id4 = reservationsDTO[i].id;
                this.reservations[j].valide4 = reservationsDTO[i].valide;
                this.reservations[j].nom4 +=
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                if (
                  reservationsDTO[i].informationComplementaires != null &&
                  reservationsDTO[i].informationComplementaires != ""
                ) {
                  this.reservations[j].nom4 +=
                    " [" + reservationsDTO[i].informationComplementaires + "]";
                }
                break;
              case "17:15:00":
                this.reservations[j].id5 = reservationsDTO[i].id;
                this.reservations[j].valide5 = reservationsDTO[i].valide;
                this.reservations[j].nom5 +=
                  " " +
                  reservationsDTO[i].prenom +
                  " (" +
                  reservationsDTO[i].nbPersonne +
                  ")";
                if (
                  reservationsDTO[i].informationComplementaires != null &&
                  reservationsDTO[i].informationComplementaires != ""
                ) {
                  this.reservations[j].nom5 +=
                    " [" + reservationsDTO[i].informationComplementaires + "]";
                }
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
      this.loadReservations();
    },
  },
};
</script>