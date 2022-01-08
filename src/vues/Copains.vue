<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <TitleMenu title="Les copains du Waf"></TitleMenu>
        <h2>Philosophie canine</h2>
        <p>
          TEXTE EN ATTENTE
          <a href="https://www.philosophie-canine.com/" rel="nofollow"
            >philosophie-canine.com</a
          >
        </p>
        <img
         :src="require(`@/assets/canine.png`)"
          alt="Capture d_écran 2018-11-23 à 12.34.32"
          width="185"
          height="185"
        />

        <v-divider></v-divider>

        <h2>Tom &amp; Co Leers</h2>
        <p>
          TEXTE EN ATTENTE
          <a
            href="https://www.facebook.com/tomandco.leers/"
            target="_blank"
            rel="noopener"
            >tomandco.leers</a
          >
        </p>

        <img
         :src="require(`@/assets/TcoLeers.jpg`)"
          alt="toutoulys logo.png"
          width="200"
          height="200"
        />

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
