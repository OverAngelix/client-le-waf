<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <TitleMenu title="L' adoption"></TitleMenu>
        <p>
          <strong>
            Comme vous le savez, vous avez la possibilité de venir voir toujours
            1 à 3 chiens à l&rsquo;adoption au sein du Waf ! Mais où adopter si
            on ne trouve pas de chiens qui nous correspondent au Waf ? La
            réponse dans cet article !</strong
          >
        </p>

        <v-divider width="70%"></v-divider>

        <h2>Privilégiez les refuges !</h2>

        <p>
          En effet les chiens en refuges sont ceux qui sont le plus en détresse
          et sont malheureusement trop nombreux !
        </p>

        <p class="has-normal-font-size">
          En fonction de votre département, retrouvez la liste suivante
          <a href="http://www.lejpa.com/structures-refuge" rel="nofollow"
            >http://www.lejpa.com/structures-refuge</a
          >
          <br />Il est important de se rendre directement sur place afin de
          connaître les chiens qui sont compatibles à votre vie, les bénévoles
          seront toujours là pour vous renseigner afin de vous conseiller!
        </p>

        <p>
          Dans notre coin ce sont les refuges de la LPA de Roubaix et Lille qui
          sont les plus proches ! C&rsquo;est d&rsquo;ailleurs de Roubaix que
          vient notre Patate!
        </p>

        <v-divider width="70%"></v-divider>

        <h2>Au sein d&rsquo;associations de familles d&rsquo;accueil !</h2>

        <p class="has-normal-font-size">
          Nombreuses sont les associations qui recueillent directement les
          chiens en famille d&rsquo;accueil, c&rsquo;est d&rsquo;ailleurs notre
          cas lorsque nous recueillons des chiens des associations telles que
          Réflexe Adoption, Action Adoption, Beagle en Nord! La procédure est en
          général la suivante : vous réaliser un formulaire afin de rencontrer
          le chien que vous souhaiteriez adopter, la famille d&rsquo;accueil
          rentre en contact avec vous afin de réaliser une rencontre!
        </p>

        <p>
          Retrouvez ci dessous la liste des associations de protection animales
          en fonction de votre département ; Si vous ne trouvez pas leur site
          web, n&rsquo;hésitez pas à consulter leurs réseaux sociaux ;
          C&rsquo;est souvent le meilleur moyen de communication pour les
          associations !
        </p>

        <p>
          <a href="http://www.lejpa.com/structures-association" rel="nofollow"
            >http://www.lejpa.com/structures-association</a
          >
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TitleMenu from "../components/TitleMenu";
export default {
  name: "Adoption",
  components: {
    TitleMenu,
  },
  data: () => ({}),

  methods: {},
};
</script>
