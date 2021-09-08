<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Je reserve </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Mes critères</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row v-if="disponibilite">
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Nom" v-model="nom" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Prenom"
                v-model="prenom"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Email"
                v-model="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Informations complementaires"
                v-model="informationsComplementaires"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="preReservation">
            <v-col cols="12" sm="6">
              <v-select
                :items="selectPersonne"
                v-model="nbPersonne"
                label="Nombre de personne"
                outlined
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
                    v-model="dateSelectionne"
                    label="Jour"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="dateSelectionne" no-title scrollable>
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
                :items="creneaux"
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
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false"
          >Annuler</v-btn
        >
        <v-btn color="blue darken-1" text @click="processusReservation()"
          >Valider</v-btn
        >
      </v-card-actions>
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
        nombreDePersonne: 2,
        reserve: false,
      },
      {
        idTable: 2,
        nombreDePersonne: 2,
        reserve: false,
      },
      {
        idTable: 3,
        nombreDePersonne: 3,
        reserve: false,
      },
      {
        idTable: 4,
        nombreDePersonne: 5,
        reserve: false,
      },
      {
        idTable: 5,
        nombreDePersonne: 5,
        reserve: false,
      },
      {
        idTable: 6,
        nombreDePersonne: 7,
        reserve: false,
      },
      {
        idTable: 7,
        nombreDePersonne: 2,
        reserve: false,
      },
      {
        idTable: 8,
        nombreDePersonne: 2,
        reserve: false,
      },
      {
        idTable: 9,
        nombreDePersonne: 5,
        reserve: false,
      },
    ],
    nbPersonne: "",
    creneaux: ["12:00", "13:30", "14:45", "16:00", "17:15"],
    selectPersonne: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    menu: false,
    dateSelectionne: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    heureSelectionne: "16h00",
    nom: "",
    prenom: "",
    email: "",
    informationsComplementaires: "",
    idTableSelected: -1,
  }),

  methods: {
    reservationWaf() {
      // this.dialog = false;
      this.placeReservable();
    },

    resetReservationModel() {
      for (let j = 0; j < this.reservations.length; j++) {
        this.reservations[j].reserve = false;
      }
    },

    async processusReservation() {
      if (this.disponibilite) {
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
            this.dateSelectionne +
            " à " +
            this.heureSelectionne +
            " a été validé avec succès !"
        );
        this.dialog = false;
      } else {
        let reservationsDTO = await ReservationsRepository.getReservations({
          heureReservation: this.heureSelectionne,
          dateReservation: this.dateSelectionne + " 02:00:00.000",
        });
        for (let i = 0; i < reservationsDTO.length; i++) {
          for (let j = 0; j < this.reservations.length; j++) {
            if (reservationsDTO[i].idTable == this.reservations[j].idTable) {
              this.reservations[j].reserve = true;
            }
          }
        }

        for (let i = 0; i < this.reservations.length; i++) {
          if (
            this.reservations[i].reserve == false &&
            this.idTableSelected == -1
          ) {
            if (
              this.nbPersonne == this.reservations[i].nombreDePersonne - 1 ||
              this.nbPersonne == this.reservations[i].nombreDePersonne
            ) {
              this.preReservation = false;
              this.disponibilite = true;
              this.idTableSelected = this.reservations[i].idTable;
            }
          }
        }

        if (this.idTableSelected == -1) {
          this.preReservation = true;
          this.disponibilite = false;
          this.resetReservationModel();
          this.$alert(
            "Pas de place pour le creneau que vous desirez, veuillez recommencer avec d'autres critères"
          );
        }
      }
    },
  },
};
</script>
