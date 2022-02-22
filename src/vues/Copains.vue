<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <TitleMenu title="Les copains du Waf"></TitleMenu>

        <p>
          Vous trouverez ci dessous nos partenaires sélectionnés par leur
          passion du chien et soucieux de leur bien-être !
        </p>

        <v-divider></v-divider>

        <a
          href="https://www.philosophie-canine.com/"
          target="_blank"
          rel="nofollow"
        >
          <img
            :src="require(`@/assets/canine.png`)"
            alt="Capture d_écran 2018-11-23 à 12.34.32"
            width="185"
            height="185"
            class="pa-2"
        /></a>
        <p>
          Anthony est un éducateur canin capable de gérer tout type de chiens qui propose à
          la fois de la garde, de l'éducation en séance individuelle, des
          balades collectives, des récréations canines ! Il nous accompagne
          dès lors que nous avons besoin sur nos chiens en famille d'accueil ou
          nos wafous quand nécessaire! Anthony propose également des activités
          sportives accessible à tout niveau tel que le canicross
        </p>

        <v-divider></v-divider>

        <a
          href="https://www.facebook.com/tomandco.leers/"
          target="_blank"
          rel="nofollow"
        >
          <img
            :src="require(`@/assets/TcoLeers.jpg`)"
            alt="toutoulys logo.png"
            width="200"
            height="200"
            class="pa-2"
        /></a>
        <p>
          Cette animalerie a mis sa priorité sur le bien être des animaux 
          grâce à son équipe qualifiée. Ils vous aideront à choisir ce qu'il y a
          de mieux pour votre animal de compagnie ou à préparer son arrivée !
          Dans leurs rayons, vous trouverez un large assortiment pour couvrir ses
          différents besoins... Et lui faire plaisir. D'ailleurs, n'hésitez pas
          à venir leur rendre visite en sa compagnie, car chez eux, les animaux
          sont aussi chez eux !
        </p>

        <v-divider></v-divider>

        <h2>Et on garde le meilleur pour la fin&#8230;</h2>
        <p>
          <strong>
            Les 184 Contributeurs à notre Campagne de Crowdfunding, grâce à qui
            on a réussi à lancer le projet!</strong
          >
        </p>
        <v-img
          alt="184 fondateurs"
          contain
          max-height="542"
          max-width="600"
          :src="require(`@/assets/leWaf.jpg`)"
        ></v-img>
        <p>
          Merci les copains, sans vous on n&rsquo;en serait pas là
          aujourd&rsquo;hui 🙂
        </p>
      </v-col></v-row
    >
  </v-container>
</template>

<script>
import TitleMenu from "../components/TitleMenu";
export default {
  name: "Copains",
  components: {
    TitleMenu,
  },
  data: () => ({}),

  methods: {},
};
</script>
