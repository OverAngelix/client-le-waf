<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
          Reservations du WAF
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://lewaf.wordpress.com/"
        target="_blank"
        text
      >
        <span class="mr-2">Retour au WAF</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <ReservationClient :reservation1="reservation1"/>
      --------------------------------------------------------------------------------------------------
      <ReservationWAF :reservation1="reservation1" :reservation2="reservation2" :reservation3="reservation3"/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import ReservationClient from './components/ReservationClient';
import ReservationWAF from './components/ReservationWAF';

export default {
  name: 'App',

  components: {
    HelloWorld,
    ReservationClient,
    ReservationWAF,
  },

  data: () => ({

    reservation1: {
      heureDebut: "16h00",
      heureFin: "17h15",
      jourCourant: "08/08/2021",
      creneaux: [
        {
          table: "Table 2(entrée)",
          nombreDePersonne: 2,
          reserve: true,
          valide: true,
          nom:"Martin",
          prenom:"Michel",
          email:"robe.de@ytrp.fr",
          tel:"0685747474",
          nbPersonne:2,
        },
        {
          table: "Table 2",
          nombreDePersonne: 2,
          reserve: true,
          valide: true,
          nom:"Durand",
          prenom:"Robert",
          email:"Desc.ht@plop.fr",
          tel:"0687548723",
          nbPersonne:2,
        },
        {
          table: "Table 2-3",
          nombreDePersonne: 3,
          reserve: true,
          valide: false,
          nom:"Dubois",
          prenom:"Michel",
          email:"Efhndjs@plop.fr",
          tel:"0787478564",
          nbPersonne:3,
        },
        {
          table: "Canapés palettes (entrée)",
          nombreDePersonne: 5,
          reserve: true,
          valide: true,
          nom:"Leroy",
          prenom:"Bry",
          email:"Bry.gtii@gtrrr.fr",
          tel:"0687848585",
          nbPersonne:4,
        },
        {
          table: "Canapés (cave)",
          nombreDePersonne: 5,
          reserve: true,
          valide: true,
          nom:"Martin",
          prenom:"Sebastien",
          email:"Seb.mar@gttt.fr",
          tel:"0785621465",
          nbPersonne:5,
        },
        {
          table: "Tonneaux",
          nombreDePersonne: 2,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Espace canapés (milieu)",
          nombreDePersonne: 7,
          reserve: true,
          valide: true,
          nom:"Durand",
          prenom:"Jean",
          email:"mmprkek.gted@gtrjefj.fr",
          tel:"0682365418",
          nbPersonne:6,
        },
        {
          table: "Table 2 (verrière)",
          nombreDePersonne: 2,
          reserve: true,
          valide: true,
          nom:"Martin",
          prenom:"Alix",
          email:"Monmail.plop.fr",
          tel:"0684654756",
          nbPersonne:2,
        },
        {
          table: "Table 2 (toilettes)",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Petit",
          prenom:"Michel",
          email:"Monchatestla@lol.com",
          tel:"0606060606",
          nbPersonne:2,
          
        },
        {
          table: "Capanés palettes (verrière)",
          nombreDePersonne: 5,
          reserve: true,
          valide: true,
          nom:"Dubois",
          prenom:"Fred",
          email:"Fredo@hoyp.fr",
          tel:"0698745126",
          nbPersonne:4,
        },
        {
          table: "Table noir",
          nombreDePersonne: 5,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
      ],
    },
    reservation2: {
      heureDebut: "17h15",
      heureFin: "18h30",
      jourCourant: "08/08/2021",
      creneaux: [
        {
          table: "Table 2(entrée)",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Durand",
          prenom:"MArcia",
          email:"MArciaLoppp@loppp.fr",
          tel:"0746251465",
          nbPersonne:2,
        },
        {
          table: "Table 2",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Martin",
          prenom:"Michel",
          email:"ekedfkffk@grfff.pol",
           tel:"0687478595",
          nbPersonne:2,
        },
        {
          table: "Table 2-3",
          nombreDePersonne: 3,
          reserve: true,
          valide: false,
          nom:"Dubois",
          prenom:"Jean",
          email:"Rekfkd@dpzp.fr",
           tel:"0684484848",
          nbPersonne:2,
        },
        {
          table: "Canapés palettes (entrée)",
          nombreDePersonne: 5,
          reserve: true,
          valide: false,
          nom:"Petit",
          prenom:"Marc",
          email:"Marciii@ploppp.uk",
           tel:"0684057474",
          nbPersonne:4,
        },
        {
          table: "Canapés (cave)",
          nombreDePersonne: 5,
          reserve: true,
          valide: false,
          nom:"Leroy",
          prenom:"Paul",
          email:"Popol@gtrf.fr",
           tel:"0684475896",
          nbPersonne:5,
        },
        {
          table: "Tonneaux",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Durand",
          prenom:"Jean",
          email:"D_j@aol.com",
           tel:"0698748596",
          nbPersonne:2,
        },
        {
          table: "Espace canapés (milieu)",
          nombreDePersonne: 7,
          reserve: true,
          valide: false,
          nom:"Martin",
          prenom:"Yohan",
          email:"yoyo@hot.uk",
           tel:"0674859645",
          nbPersonne:5,
        },
        {
          table: "Table 2 (verrière)",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Dubois",
          prenom:"Michel",
          email:"Mimi@azer.fr",
           tel:"0684859615",
          nbPersonne:2,
        },
        {
          table: "Table 2 (toilettes)",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Copin",
          prenom:"Steven",
          email:"0686087474",
           tel:"Steven59260@hotmail.fr",
          nbPersonne:1,
        },
        {
          table: "Capanés palettes (verrière)",
          nombreDePersonne: 5,
          reserve: true,
          valide: false,
          nom:"Dubois",
          prenom:"Jean",
          email:"Jeannnnn@hotmail.fr",
           tel:"0684065845",
          nbPersonne:4,
        },
        {
          table: "Table noir",
          nombreDePersonne: 5,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
      ],
    },
    reservation3: {
      heureDebut: "12h00",
      heureFin: "13h30",
      jourCourant: "11/08/2021",
      creneaux: [
        {
          table: "Table 2(entrée)",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"Martin",
          prenom:"Jean",
          email:"JeanMii@fredopppp.com",
           tel:"0684562314",
          nbPersonne:2,
        },
        {
          table: "Table 2",
          nombreDePersonne: 2,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Table 2-3",
          nombreDePersonne: 3,
          reserve: true,
          valide: false,
          nom:"Petit",
          prenom:"Michel",
          email:"P.micjel@eeedg.fr",
           tel:"0685413645",
          nbPersonne:3,
        },
        {
          table: "Canapés palettes (entrée)",
          nombreDePersonne: 5,
          reserve: true,
          valide: false,
          nom:"Verrier",
          prenom:"Vincent",
          email:"Azer@test.Fr",
          tel:"0685654715",
          nbPersonne:5
        },
        {
          table: "Canapés (cave)",
          nombreDePersonne: 5,
          reserve: true,
          valide: false,
          nom:"Tedora",
          prenom:"Teddy",
          email:"Ahah@plop.fr",
          tel:"0685412649",
          nbPersonne:4
        },
        {
          table: "Tonneaux",
          nombreDePersonne: 2,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Espace canapés (milieu)",
          nombreDePersonne: 7,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Table 2 (verrière)",
          nombreDePersonne: 2,
          reserve: true,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Table 2 (toilettes)",
          nombreDePersonne: 2,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Capanés palettes (verrière)",
          nombreDePersonne: 5,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
           tel:"",
          nbPersonne:0,
        },
        {
          table: "Table noir",
          nombreDePersonne: 5,
          reserve: false,
          valide: false,
          nom:"",
          prenom:"",
          email:"",
          tel:"",
          nbPersonne:0,
        },
      ],
    },
  }),
};
</script>
