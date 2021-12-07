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
              <v-col cols="12" sm="12" md="12">
                <v-checkbox
                  v-model="regle"
                  :rules="[
                    (v) =>
                      !!v || 'Vous acceptez si vous souhaitez reserver au WAF',
                  ]"
                >
                  <template v-slot:label> <Regles /> </template
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-row v-if="preReservation">
              <v-col cols="12" sm="5">
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
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="dateSelectionne"
                  persistent
                  width="290px"
                >
                  <template #activator="{ on: menu }">
                    <v-text-field
                      v-model="dateFR"
                      label="Jour"
                      outlined
                      readonly
                      v-on="{ ...menu }"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dateSelectionne"
                    locale="fr-FR"
                    :min="new Date().toISOString().substr(0, 10)"
                    :allowed-dates="allowedDates"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Annuler
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(dateSelectionne)"
                    >
                      Valider
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="heureReservation"
                  item-text="heurelabel"
                  item-value="heure"
                  v-model="heureSelectionne"
                  label="Heure"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
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
            :disabled="!valid || loading"
            :loading="loading"
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
import Regles from "../components/Regles";
import ReservationsRepository from "@/API/ReservationsRepository";
export default {
  name: "FichePreReservation",
  components: {
    Regles,
  },
  data: () => ({
    dialog: false,
    preReservation: true,
    disponibilite: false,
    regle: false,
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
    modal: false,
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
    loading: false,
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

  mounted() {
    this.changeDebutDate();
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
    changeDebutDate() {
      let dateDuJour = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      );
      if (dateDuJour.getDay() == 1) {
        dateDuJour.setDate(dateDuJour.getDate() + 2);
        this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
      } else if (dateDuJour.getDay() == 2) {
        dateDuJour.setDate(dateDuJour.getDate() + 1);
        this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
      } else {
        this.dateSelectionne = dateDuJour.toISOString().substr(0, 10);
      }
    },
    formatDate() {
      var datearray = this.dateSelectionne.split("-");
      return datearray[2] + "/" + datearray[1] + "/" + datearray[0];
    },

    async checkComplet() {
      let response = await ReservationsRepository.isComplet({
        //date: this.dateSelectionne + " 01:00:00.000",
        date: this.dateSelectionne + " 00:00:00.000",
      });
      if (response["code"] == 1000) {
        this.$alert(
          "Veuillez ressayer ulterieurement si quelqu'un annule sa reservation, ou selectionnez un autre jour.",
          "Attention, nous sommes complet le " + this.formatDate(),
          "warning"
        );
        //return null;
      }
      if (response["code"] == 1001) {
        //return response["creneaux"];
      }
    },

    changeDebutCreneaux() {
      let dateDuJour = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      );
      if (dateDuJour.toISOString().substr(0, 10) == this.dateSelectionne) {
        if (this.heureCourante < 46200) {
          return this.creneaux(0);
        }
        if (this.heureCourante < 49800) {
          return this.creneaux(1);
        }
        if (this.heureCourante < 54300) {
          return this.creneaux(2);
        }
        if (this.heureCourante < 58800) {
          return this.creneaux(3);
        }
        if (this.heureCourante < 63300) {
          return this.creneaux(4);
        }
        if (this.heureCourante > 63300) {
          let tomorrow = new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          );
          tomorrow.setDate(tomorrow.getDate() + 1);
          if (tomorrow.getDay() == 1) {
            tomorrow.setDate(tomorrow.getDate() + 2);
          }
          this.dateSelectionne = tomorrow.toISOString().substr(0, 10);
          return this.creneaux(0);
        }
      }
      return this.creneaux(0);
    },

    creneaux(val) {
      this.checkComplet();
      let creneaux = [
        {
          heure: "12:00",
          heurelabel: "12:00 - 13:30",
        },
        {
          heure: "13:30",
          heurelabel: "13:30 - 14:45",
        },
        {
          heure: "14:45",
          heurelabel: "14:45 - 16:00",
        },
        {
          heure: "16:00",
          heurelabel: "16:00 - 17:15",
        },
        {
          heure: "17:15",
          heurelabel: "17:15 - 18:30",
        },
      ];
      //console.log(this.differenceBetweenCreneaux(creneaux, creneauxPlein));
      this.heureSelectionne = creneaux[val].heure;
      return creneaux.slice(val, 5);
    },

    /*     differenceBetweenCreneaux(creneaux, creneauxPlein) {
      const isSameUser = (creneaux, creneauxPlein) =>
        creneaux.heure == creneauxPlein.heure &&
        creneaux.heurelabel == creneauxPlein.heurelabel;

      // Get items that only occur in the left array,
      // using the compareFunction to determine equality.
      const onlyInLeft = (left, right, compareFunction) =>
        left.filter(
          (leftValue) =>
            !right.some((rightValue) => compareFunction(leftValue, rightValue))
        );

      const onlyInA = onlyInLeft(creneaux, creneauxPlein, isSameUser);
      const onlyInB = onlyInLeft(creneauxPlein, creneaux, isSameUser);

      const result = [...onlyInA, ...onlyInB];
      return result;
    },
 */
    allowedDates(val) {
      let idxDate = new Date(val).getDay();
      //Transfoormer liste en formulaire
      return (
        idxDate !== 1 &&
        idxDate !== 2 &&
        !["2021-10-31"].includes(val) &&
        !["2021-12-24"].includes(val) &&
        !["2021-12-25"].includes(val) &&
        !["2022-01-01"].includes(val)
      );
    },

    closeModal() {
      this.nom = "";
      this.nbPersonne = "";
      this.prenom = "";
      this.idTableSelected = -1;
      this.email = "";
      this.informationsComplementaires = "";
      this.changeDebutDate();
      this.changeDebutCreneaux();
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
        this.loading = true;
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
                this.loading = false;
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
          this.loading = true;
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
          this.loading = false;
          this.closeModal();
        }
      } else {
        this.loading = true;
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
        this.loading = false;
      }
    },
  },
};
</script>
