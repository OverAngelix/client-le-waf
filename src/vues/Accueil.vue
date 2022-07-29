<template>
  <v-container class="colorTheme">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <TitleMenu title="Des Chiens, du Café - Waf Else?"></TitleMenu>
        <v-img
          alt="reservation"
          contain
          class="mb-4"
          max-height="300"
          max-width="2000"
          :src="require(`@/assets/imageReservation.jpg`)"
          ><v-row class="fill-height" align="end" justify="center">
            <FichePreReservation />
          </v-row>
        </v-img>

        <ChoixDon></ChoixDon>
        <p>
          <strong
            ><span style="color: #ff6600"
              >Le Waf est le 1er café chien d&rsquo;Europe mais aussi le seul
              endroit fréquentable où la moitié des individus est à poils
              !</span
            ></strong
          >
        </p>
        <v-img
          alt="MENU"
          contain
          max-height="568"
          max-width="700"
          :src="require(`@/assets/carte.jpg`)"
        ></v-img>
        <br />

        <h2>
          <b>⭐ LE CONCEPT ⭐</b>
        </h2>
        <p>
          Chaque jour, nos 4 wafous accompagnés de 1 à 3 wafou à l'adoption sont
          présents au Waf !<br />
          Au waf vous pouvez : <br />
          JOUER avec les wafous ! <br />
          BOIRE ce que vous souhaitez ! <br />
          CALINER les wafous ! <br />
        </p>

        <h2>
          <b>☕ TARIF ☕</b>
        </h2>
        <p>Entrée à 8€/personne avec accès au buffet à volonté</p>

        <h2>
          <b>⚠️ RÉSERVATION FORTEMENT RECOMMANDÉE ⚠️</b>
        </h2>
        <p>
          Créneaux de 1h15 par table (obligatoire pour le week-end)<br />
          Les créneaux réservables sont : <br />
          12h00 - 13h30 <br />
          13h30 - 14h45 <br />
          14h45 - 16h00 <br />
          16h00 - 17h15 <br />
          17h15 - 18h30 <br />
        </p>

        <br />
        <div class="frameResponsive">
          <iframe
            class="responsive-iframe"
            src="https://www.youtube.com/embed/7XaicMkSRGM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />

        <h2><b>🐶 WAFOUS À L'ADOPTION 🐶</b></h2>
        <p>
          En tant que famille d'accueil, au Waf on y trouve toujours 1 à 3
          chiens à l'adoption !<br />
          Les associations : Action Adoption et LPA Roubaix <br />
          Plus de 100 chiens adoptés depuis 2016 ! <br />
        </p>

        <h2><b>✍️ PROCÉDURE D'ADOPTION ✍️</b></h2>
        <p>
          1️⃣ Rencontrer le chien au Waf<br />
          2️⃣ Remplir un formulaire d'adoption<br />
          3️⃣ Pré-visite prevué si votre dossier est selectionné par
          l'association<br />
          4️⃣ On procède à L'ADOPTION<br />
          5️⃣ Post-visite quelques mois apres l'adoption
        </p>

        <v-divider></v-divider>

        <h2><b>🐕 LES WAFOUS PERMANENTS 🐕</b></h2>
        <p><strong>BEANS</strong></p>
        <p>
          Voilà Bean’s ! C’est notre petit chef de meute, il se prend pour un
          chef de cartel on le surnomme Don Binouz ! Si vous l&rsquo;avez dans
          votre poche vous pourrez surement entrer au Waf sans problème ! Vous
          le verrez surement, si vous avez acheté un gateau, et vous nous verrez
          nous aussi, le surveiller !
        </p>
        <p>
          Vous l&rsquo;avez compris sa passion c&rsquo;est de manger (et voler!)
          mais c&rsquo;est pour ça qu&rsquo;on l&rsquo;aime : Bean&rsquo;s
        </p>

        <v-img
          alt="Beans"
          contain
          max-height="470"
          max-width="350"
          :src="require(`@/assets/bibi.jpg`)"
        ></v-img>
        <br />

        <v-divider width="50%"></v-divider>
        <p><strong>PATATE</strong></p>
        <p>La star du Waf, il se la joue même !</p>
        <p>
          Vous le verrez toujours super heureux de vous acceuillir même si ça
          impressionne beaucoup d&rsquo;entre vous par sa grande taille !
        </p>
        <p>
          C&rsquo;est un grand gentil mais il sait que c&rsquo;est un des
          chouchou alors il en profite pour se la jouer sous-chef ! Toujours
          suivre son grand frère de coeur Bean&rsquo;s,
        </p>
        <p>
          C&rsquo;est par son petit corps de peluche du haut de ses 2 mois
          qu&rsquo;on lui a trouvé le nom de : Patate
        </p>
        <v-img
          alt="Patate"
          contain
          max-height="470"
          max-width="350"
          :src="require(`@/assets/Pat.jpg`)"
        ></v-img>
        <br />

        <v-divider width="50%"></v-divider>
        <p><strong>Gypsie</strong></p>
        <p>
          C&rsquo;est notre doyenne, elle aime faire ses siestes sur les
          canapés, vous réclamez des gratouilles ! C&rsquo;est celle qu&rsquo;on
          emmène partout sans laisse car elle est super fidèle malgré
          qu&rsquo;on l&rsquo;ait adoptée à ses 9 ans ; Du haut de ses 12 ans
          mamie aime raler sur les jeunes trop foufou pour elle ! Et elle sait
          se faire respecter !
        </p>
        <p>
          De base, elle s&rsquo;appelait Cindy, nous l&rsquo;avons renommé
          Gypsie alias Fifi !
        </p>
        <v-img
          alt="Gypsie"
          contain
          max-height="470"
          max-width="350"
          :src="require(`@/assets/Gyps.jpg`)"
        ></v-img>
        <br />

        <v-divider width="50%"></v-divider>
        <p><strong>Loki</strong></p>
        <p>
          Loki est un croisé Doberman que nous avons recueilli en Décembre 2021.
          <br />Ce jeune petit père est un rescapé de la rue. <br />Au Waf vous
          aurez surement le droit à une sieste et une lechouille de sa part ! 🙂
        </p>
        <v-img
          alt="Jo"
          contain
          max-height="470"
          max-width="350"
          :src="require(`@/assets/Loki.jpg`)"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FichePreReservation from "../components/FichePreReservation";
import ChoixDon from "../components/ChoixDon";
import TitleMenu from "../components/TitleMenu";
export default {
  name: "Accueil",
  components: {
    FichePreReservation,
    TitleMenu,
    ChoixDon,
  },
};
</script>

<style scoped>
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.frameResponsive {
  position: relative;
  overflow: hidden;
  width: 75%;
  padding-top: 42.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
</style>