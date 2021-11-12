<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-4" color="primary" dark v-bind="attrs" v-on="on">
        Je reserve
      </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid">
        <v-card-title>
          <span class="headline">Mes critères</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="disponibilite">
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Nom*"
                  v-model="nom"
                  :rules="nomRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Prenom*"
                  v-model="prenom"
                  persistent-hint
                  required
                  :rules="prenomRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  required
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  :items="raisons"
                  v-model="informationsComplementaires"
                  label="Informations complementaires"
                ></v-select>
              </v-col>
            </v-row>
            <v-row v-if="preReservation">
              <v-col cols="12" sm="6">
                <v-select
                  :items="selectPersonne"
                  v-model="nbPersonne"
                  label="Nombre de personne*"
                  outlined
                  :rules="[(v) => !!v || 'champs obligatoire']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
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
                      v-model="dateFR"
                      label="Jour"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dateSelectionne"
                    locale="fr-FR"
                    :min="new Date().toISOString().substr(0, 10)"
                    :allowed-dates="allowedDates"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Annuler
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(dateSelectionne)"
                    >
                      Valider
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  :items="heureReservation"
                  v-model="heureSelectionne"
                  label="Heure"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small
            >Rappel : Il s'agit de creneaux 1h15 hormis le creneaux de 12h à
            13h30</small
          >
          <br />
          <small
            >En cas de questions concernant les reservations, contacter
            <a href="mailto:marine@lewaf.fr">nous</a>
          </small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal">Annuler</v-btn>
          <v-btn
            color="blue darken-1"
            :disabled="!valid"
            text
            @click="processusReservation()"
            >Valider</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationsRepository from "@/API/ReservationsRepository";
export default {
  name: "FichePreReservation",
  data: () => ({
    dialog: false,
    preReservation: true,
    disponibilite: false,
    reservations: [
      {
        idTable: 1,
        nombreDePersonneMin: 1,
        nombreDePersonneMax: 2,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 2,
        nombreDePersonneMin: 1,
        nombreDePersonneMax: 2,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 3,
        nombreDePersonneMin: 2,
        nombreDePersonneMax: 3,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 4,
        nombreDePersonneMin: 3,
        nombreDePersonneMax: 6,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 5,
        nombreDePersonneMin: 3,
        nombreDePersonneMax: 6,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 6,
        nombreDePersonneMin: 4,
        nombreDePersonneMax: 10,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 7,
        nombreDePersonneMin: 1,
        nombreDePersonneMax: 2,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 8,
        nombreDePersonneMin: 1,
        nombreDePersonneMax: 2,
        reserve: false,
        nbPersonne: 0,
      },
      {
        idTable: 9,
        nombreDePersonneMin: 3,
        nombreDePersonneMax: 6,
        reserve: false,
        nbPersonne: 0,
      },
    ],
    nbPersonne: "",
    selectPersonne: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    menu: false,
    dateSelectionne: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    heureSelectionne: "",
    heureCourante: "",
    nom: "",
    prenom: "",
    email: "",
    informationsComplementaires: "",
    idTableSelected: -1,
    emailRules: [
      (v) => !!v || "Email obligatoire",
      (v) => /.+@.+\..+/.test(v) || "Email non valide",
    ],
    nomRules: [
      (v) => !!v || "Nom obligatoire",
      (v) =>
        (v && v.length <= 15) || "Le nom doit faire moins de 15 caractères",
    ],
    prenomRules: [
      (v) => !!v || "Prenom obligatoire",
      (v) =>
        (v && v.length <= 15) || "Le prenom doit faire moins de 15 caractères",
    ],
    valid: false,
    raisons: ["Anniversaire", "Seminaire", "Association", "EVJF/EVJG"],
  }),

  created() {
    const heure = new Date();
    this.heureCourante = heure.getHours() * 60 * 60 + heure.getMinutes() * 60;
  },

  computed: {
    dateFR() {
      return this.formatDate();
    },

    heureReservation() {
      return this.changeDebutCreneaux();
    },
  },

  methods: {
    formatDate() {
      var datearray = this.dateSelectionne.split("-");
      return datearray[2] + "/" + datearray[1] + "/" + datearray[0];
    },
    changeDebutCreneaux() {
      let dateDuJour = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      );
      if (dateDuJour.toString().substring(0, 3) == "Mon") {
        dateDuJour.setDate(dateDuJour.getDate() + 2);
        this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
      } else if (dateDuJour.toString().substring(0, 3) == "Tue") {
        dateDuJour.setDate(dateDuJour.getDate() + 1);
        this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
      } else if (
        dateDuJour.toISOString().substr(0, 10) == this.dateSelectionne
      ) {
        if (this.heureCourante < 46200) {
          this.heureSelectionne = "12:00";
          return ["12:00","13:30", "14:45", "16:00", "17:15"];
        }
        if (this.heureCourante < 49800) {
          this.heureSelectionne = "13:30";
          return ["13:30", "14:45", "16:00", "17:15"];
        }
        if (this.heureCourante < 54300) {
          this.heureSelectionne = "14:45";
          return ["14:45", "16:00", "17:15"];
        }
        if (this.heureCourante < 58800) {
          this.heureSelectionne = "16:00";
          return ["16:00", "17:15"];
        }
        if (this.heureCourante < 63300) {
          this.heureSelectionne = "17:15";
          return ["17:15"];
        }
        if (this.heureCourante > 63300) {
          let tomorrow = new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          );
          tomorrow.setDate(tomorrow.getDate() + 1);
          if (tomorrow.toString().substring(0, 3) == "Mon") {
            tomorrow.setDate(tomorrow.getDate() + 2);
          }
          this.dateSelectionne = tomorrow.toISOString().substr(0, 10);
          this.heureSelectionne = "12:00";
          return ["12:00", "13:30", "14:45", "16:00", "17:15"];
        }
      }
      this.heureSelectionne = "12:00";
      return ["12:00", "13:30", "14:45", "16:00", "17:15"];
    },

    allowedDates(val) {
      let idxDate = new Date(val).getDay();
      //Transfoormer liste en formulaire
      return idxDate !== 1 && idxDate !== 2 && !["2021-10-31"].includes(val);
    },

    closeModal() {
      this.nom = "";
      this.nbPersonne = "";
      this.prenom = "";
      this.idTableSelected = -1;
      this.email = "";
      this.informationsComplementaires = "";
      this.changeDebutCreneaux();
      this.heureSelectionne = "12:00";
      this.preReservation = true;
      this.disponibilite = false;
      this.resetReservationModel();
      this.dialog = false;
    },

    resetReservationModel() {
      for (let j = 0; j < this.reservations.length; j++) {
        this.reservations[j].reserve = false;
      }
    },

    async processusReservation() {
      if (this.disponibilite) {
        let result = await ReservationsRepository.verificationMail({
          //date: this.dateSelectionne + " 01:00:00.000",
          date: this.dateSelectionne + " 00:00:00.000",
          email: this.email,
        });

        if (result.length == 1) {
          if (result[0].heureReservation.includes(this.heureSelectionne)) {
            this.$alert(
              "Vous avez deja une reservation sur ce creneau. Il faut d'abord annuler cette reservation avant d'en reprendre une nouvelle (Lien d'annulation dans le mail de votre reservation)",
              "",
              "error"
            );
          } else {
            this.$confirm(
              `Vous avez deja un reservation ce jour à ${result[0].heureReservation.substring(
                0,
                5
              )} avec ${
                result[0].nbPersonne
              }. \nPensez à l'annuler si elle n'est plus necessaire (Lien d'annulation dans le mail de votre reservation)`,
              "Attention",
              ""
            )
              .then(async () => {
                await ReservationsRepository.addReservation({
                  nom: this.nom,
                  prenom: this.prenom,
                  email: this.email,
                  nbPersonne: this.nbPersonne,
                  informationComplementaires: this.informationsComplementaires,
                  dateReservation: this.dateSelectionne,
                  idTable: this.idTableSelected,
                  heureReservation: this.heureSelectionne,
                });
                this.$alert(
                  "La reservation au nom de " +
                    this.nom +
                    " le " +
                    this.formatDate() +
                    " à " +
                    this.heureSelectionne +
                    " a été validé avec succès ! \n Un email de confirmation vous a été envoyé (pensez au spam :D)",
                  "",
                  "success"
                );
                this.closeModal();
              })
              .catch(() => {
                this.closeModal();
              });
          }
        } else if (result.length > 1) {
          this.$alert(
            "Vous avez deja deux reservations ! Il faut laisser la place aux autres :)",
            "",
            "error"
          );
        } else {
          await ReservationsRepository.addReservation({
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            nbPersonne: this.nbPersonne,
            informationComplementaires: this.informationsComplementaires,
            dateReservation: this.dateSelectionne,
            idTable: this.idTableSelected,
            heureReservation: this.heureSelectionne,
          });
          this.$alert(
            "La reservation au nom de " +
              this.nom +
              " le " +
              this.formatDate() +
              " à " +
              this.heureSelectionne +
              " a été validé avec succès ! \n Un email de confirmation vous a été envoyé (pensez au spam :D)",
            "",
            "success"
          );
          this.closeModal();
        }
      } else {
        let reservationsDTO = await ReservationsRepository.getReservations({
          heureReservation: this.heureSelectionne,
          //dateReservation: this.dateSelectionne + " 01:00:00.000",
          dateReservation: this.dateSelectionne + " 00:00:00.000",
        });
        for (let i = 0; i < reservationsDTO.length; i++) {
          for (let j = 0; j < this.reservations.length; j++) {
            if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
              this.reservations[j].reserve = true;
              this.reservations[j].nbPersonne = reservationsDTO[i].nbPersonne;
            }
          }
        }
        let isResa = false;
        for (let i = 0; i < this.reservations.length; i++) {
          if (
            this.reservations[i].reserve == false &&
            this.idTableSelected == -1
          ) {
            if (
              this.nbPersonne >= this.reservations[i].nombreDePersonneMin &&
              this.nbPersonne <= this.reservations[i].nombreDePersonneMax
            ) {
              this.preReservation = false;
              this.disponibilite = true;
              this.idTableSelected = this.reservations[i].idTable;
              isResa = true;
            }
          }
        }
        let nbReservationCanape = 0;
        for (let i = 0; i < reservationsDTO.length; i++) {
          if (
            reservationsDTO[i].idTable == 6 &&
            reservationsDTO[i].nbPersonne < 4
          ) {
            nbReservationCanape++;
          }
        }
        if (nbReservationCanape == 1 && !isResa && this.nbPersonne <= 3) {
          this.preReservation = false;
          this.disponibilite = true;
          this.idTableSelected = 6;
          isResa = true;
        }
        if (!isResa) {
          for (let i = 0; i < this.reservations.length; i++) {
            if (
              this.reservations[i].reserve == false &&
              this.idTableSelected == -1
            ) {
              let today = new Date(
                Date.now() - new Date().getTimezoneOffset() * 60000
              );
              let tomorrow = new Date(
                Date.now() - new Date().getTimezoneOffset() * 60000
              );
              tomorrow.setDate(tomorrow.getDate() + 1);
              let currentDate = new Date(this.dateSelectionne);
              if (
                this.nbPersonne <= this.reservations[i].nombreDePersonneMax &&
                (currentDate.toISOString().substr(0, 10) ===
                  today.toISOString().substr(0, 10) ||
                  currentDate.toISOString().substr(0, 10) ===
                    tomorrow.toISOString().substr(0, 10))
              ) {
                this.preReservation = false;
                this.disponibilite = true;
                this.idTableSelected = this.reservations[i].idTable;
              }
            }
          }
        }
        if (this.idTableSelected == -1) {
          this.preReservation = true;
          this.disponibilite = false;
          this.resetReservationModel();
          this.$alert(
            "Pas de place pour le creneau que vous desirez, veuillez recommencer avec d'autres critères",
            "",
            "error"
          );
        }
      }
    },
  },
};
</script>
