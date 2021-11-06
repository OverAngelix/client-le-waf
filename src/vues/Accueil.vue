<template>
  <v-container>
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
          max-height="424"
          max-width="600"
          src="https://lewaf.files.wordpress.com/2021/07/menu.jpg"
        ></v-img>

        <p>
          Au Waf, c&rsquo;est un buffet de boissons a volonté ! Alors faites
          comme à la maison et servez vous!
        </p>
        <p>
          C&rsquo;est la raison pour laquelle tout le monde est facturé du
          buffet, nous ne faisons pas de boissons à la carte!
        </p>
        <p>
          Au Waf nous vendons du café, nous offrons de l&rsquo;affection canine
          et nous faisons adopter des chiens abandonnés.
        </p>

        <h3>
          <strong style="color: #ff0000">
            Le weekend nous sommes rapidement complets ! Donc n'hesitez pas à
            vite reserver (créneaux de 1H15 par réservation).
          </strong>
        </h3>
        <p>
          Quotidiennement, en moyenne 6 chiens en moyenne font une balade de
          1h30 avant de venir passer la journée affalés sur les canapés à
          attendre des câlins et à réclamer pour jouer à la balle. Parfois, ils
          volent votre déjeuner ou se bagarre tout en discrétion à côté de
          vous&#8230;. Parmi eux, certains sont des chiens abandonnés dont nous
          nous occupons le temps de leur trouver une super famille pour la vie.
          Les autres sont des chiens permanents ou qui viennent s&rsquo;éclater
          en garderie pendant que leurs parents travaillent.
        </p>

        <!--IFRAME PAS OK  -->
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Th8W2gbAOrE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <v-divider></v-divider>

        <h2>
          <span style="color: #ff6600"
            ><strong>Des chiens à l&rsquo;adoption</strong></span
          >
        </h2>
        <p>
          Tous les ans, près de 60 000 chiens sont abandonnés. C’est énorme et
          c’est pour ça que le Waf se mobilise pour faire adopter le plus de
          chiens possible et sensibiliser à l&rsquo;adoption
          <strong>réfléchie</strong>.
        </p>
        <p>
          Du format chihuahua au bouvier bernois, on les prend tous en famille
          d’accueil tant qu&rsquo;ils sont sociables avec leurs congénères et un
          peu aussi avec les humains.
        </p>
        <p>
          Depuis la création du Waf, il y a 5 ans, plus de
          <span style="color: #ff0000"><strong>90 chiens</strong></span>
          ont foulé notre sol et participé à nos balades avant de trouver un
          foyer aimant !
        </p>
        <p>
          Nous sommes famille d&rsquo;accueil pour plusieurs associations,
          telles que la
          <strong
            >Ligue Protectrice des Animaux, Action Adoption ou Beagle en
            Nord!</strong
          >
        </p>
        <p>Mais comment se passe une adoption ?</p>
        <p>
          <strong
            >Au Waf vous ne pouvez pas partir avec un chien le jour même de
            votre venue,</strong
          >
          vous devez constituer un dossier d&rsquo;adoption auprès de
          l&rsquo;association, qui choisira un dossier et organisera une
          pré-visite à domicile avant de finaliser l&rsquo;adoption !
        </p>
        <p>
          Le temps de trouver une famille, les chiens abandonnés viennent au waf
          avec leurs copains plutôt qu&rsquo;en chenil -l&rsquo;ambiance y est
          carrément plus cool et surtout ça vous permet de les rencontrer dans
          de supers conditions !
        </p>
        <p>
          Attention aucun chien ne reste au Waf en dehors des horaires
          d&rsquo;ouverture !
        </p>
        <p>Tous les chiens nous suivent à domicile !</p>

        <v-divider></v-divider>

        <h2>
          <strong><span style="color: #ff6600">De la garderie</span> </strong>
        </h2>
        <p>
          Au Waf on garde aussi les chiens ! Vous travaillez beaucoup et votre
          chien est seul comme une âme en peine ? Ou simplement vous voulez
          faire une journée shopping sans laisse au bout du bras ?
        </p>
        <p>
          Nous prenons uniquement des chiens sociables avec enfants, chiens
          males et femelles !
        </p>
        <p>
          Attention : Nous gardons uniquement les chiens sur les horaires
          d&rsquo;ouverture, sous réserve que la balade d&rsquo;intégration se
          soit bien passée!
        </p>

        <v-divider></v-divider>

        <h2>
          <span style="color: #ff6600"
            >Au Waf on régale les babines des chiens mais aussi des
            humains</span
          >
        </h2>
        <v-img
          alt="gateaux"
          contain
          max-height="309"
          max-width="685"
          src="https://lewaf.files.wordpress.com/2016/11/gateaux.png"
        ></v-img>

        <v-divider></v-divider>

        <h1>
          <span style="color: #ff6600">Les permanents du Waf !</span>
        </h1>
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
          src="https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg"
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
          src="https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg"
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
          src="https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=283"
        ></v-img>
        <br />

        <v-divider width="50%"></v-divider>
        <p><strong>Jo</strong>&lsquo;</p>
        <p>
          Jo est un survivant, accompagné de son copain Engie, ils ont été
          retrouvés accroché dans une forêt avec ses confrères. Son histoire se
          poursuit avec la fourrière et la LPA, touché par leur histoire, nous
          avons pris Engie et Jo&rsquo; en famille d&rsquo;accueil. Engie a
          trouvé sa famille et revient en Garderie, quant à Jo&rsquo; il
          séjourne au sein du Waf .. 🙂
        </p>
        <v-img
          alt="Jo"
          contain
          max-height="470"
          max-width="350"
          src="https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FichePreReservation from "../components/FichePreReservation";
import TitleMenu from "../components/TitleMenu";
export default {
  name: "Accueil",
  components: {
    FichePreReservation,
    TitleMenu,
  },
  data: () => ({
    doggos: [
      {
        src: require("../assets/beans.jpg"),
      },
      {
        src: require("../assets/patate.jpg"),
      },
      {
        src: require("../assets/gypsie.jpg"),
      },
      {
        src: require("../assets/jo.jpg"),
      },
    ],
  }),
};
</script>
