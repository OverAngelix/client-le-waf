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
          src="https://www.philosophie-canine.com/wp-content/uploads/2021/06/logo.svg"
          alt="Capture d_écran 2018-11-23 à 12.34.32"
          width="255"
          height="118"
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
          src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/120530885_773577256521952_2609871921655302846_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=A0A92d0c1T0AX_iu-XK&_nc_ht=scontent-cdg2-1.xx&oh=bdf54bac98e147323a07e84c0acff80d&oe=61A9EDE0"
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
          max-height="642"
          max-width="800"
          src="https://lewaf.files.wordpress.com/2017/03/13909199_508252772705691_1786022416806087443_o-1.jpg"
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
