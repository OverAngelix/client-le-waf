<template>
  <v-container>
     <v-row class="justify-center">
      <v-carousel
        hide-delimiters
        :show-arrows="false"
        cycle
        height="200"
        class="ma-4"
      >
        <v-carousel-item
          v-for="(doggo, i) in doggos"
          :key="i"
          :src="doggo.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row class="fill-height"
          align="center"
          justify="center">
            <FichePreReservation />
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <header class="entry-header">
      <h1 class="entry-title">Des Chiens, du Café -Waf&nbsp;Else?</h1>
    </header>
    <!-- end .entry-header -->

    <p style="text-align: center">
      <strong><span style="color: #ff6600">Le Waf est le 1er</span></strong
      ><span style="color: #ff6600"> <strong>c</strong></span
      ><strong
        ><span style="color: #ff6600">afé</span
        ><span style="color: #ff6600">
          chien d&rsquo;Europe mais aussi le seul endroit fréquentable où la
          moitié des individus est à poils !</span
        ></strong
      >
    </p>
    <p style="text-align: center">
      <img
        loading="lazy"
        data-attachment-id="1150"
        data-permalink="https://lewaf.fr/contact/menu-3/"
        data-orig-file="https://lewaf.files.wordpress.com/2021/07/menu.jpg"
        data-orig-size="1416,2001"
        data-comments-opened="1"
        data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
        data-image-title="MENU"
        data-image-description=""
        data-image-caption=""
        data-medium-file="https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=212"
        data-large-file="https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=725"
        class="alignnone wp-image-1150"
        src="https://lewaf.files.wordpress.com/2021/07/menu.jpg"
        alt="MENU"
        width="424"
        height="600"
        srcset="
          https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=424&amp;h=600  424w,
          https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=848&amp;h=1198 848w,
          https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=106&amp;h=150  106w,
          https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=212&amp;h=300  212w,
          https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=768&amp;h=1085 768w,
          https://lewaf.files.wordpress.com/2021/07/menu.jpg?w=725&amp;h=1024 725w
        "
        sizes="(max-width: 424px) 100vw, 424px"
      />
    </p>
    <p style="text-align: center">
      Au Waf, c&rsquo;est un buffet de boissons a volonté ! Alors faites comme à
      la maison et servez vous!
    </p>
    <p style="text-align: center">
      C&rsquo;est la raison pour laquelle tout le monde est facturé du buffet,
      nous ne faisons pas de boissons à la carte!
    </p>
    <p style="text-align: center">
      Au Waf nous vendons du café, nous offrons de l&rsquo;affection canine et
      nous faisons adopter des chiens abandonnés.
    </p>
    <h3 style="text-align: center">
      <span style="color: #000000"
        >Merci de bien vouloir <strong>réserver</strong> avant votre venue par
        mail à <strong>marine@lewaf.fr</strong> afin d&rsquo;être sûr
        d&rsquo;avoir une place !</span
      >
    </h3>
    <p></p>
    <h3 style="text-align: center">
      <strong
        ><span style="color: #ff0000"
          >Car le weekend nous sommes rapidement complets !
        </span>
        Ce sont des créneaux de 1H15 par réservation !</strong
      >
    </h3>
    <p style="text-align: center">
      Quotidiennement, en moyenne 6 chiens en moyenne font une balade de 1h30
      avant de venir passer la journée affalés sur les canapés à attendre des
      câlins et à réclamer pour jouer à la balle. Parfois, ils volent votre
      déjeuner ou se bagarre tout en discrétion à côté de vous&#8230;.
      <span class="text_exposed_show"
        >Parmi eux, certains sont des chiens abandonnés dont nous nous occupons
        le temps de leur trouver une super famille pour la vie. Les autres sont
        des chiens permanents ou qui viennent s&rsquo;éclater en garderie
        pendant que leurs parents travaillent.</span
      >
    </p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Th8W2gbAOrE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <h2 style="text-align: center">
      <span style="color: #ff6600"
        ><strong>Des chiens à l&rsquo;adoption</strong></span
      >
    </h2>
    <p style="text-align: center">
      Tous les ans, près de 60 000 chiens sont abandonnés. C’est énorme et c’est
      pour ça que le Waf se mobilise pour faire adopter le plus de chiens
      possible et sensibiliser à l&rsquo;adoption <strong>réfléchie</strong>.
    </p>
    <p style="text-align: center">
      Du format chihuahua au bouvier bernois, on les prend tous en famille
      d’accueil tant qu&rsquo;ils sont sociables avec leurs congénères et un peu
      aussi avec les humains.
    </p>
    <p style="text-align: center">
      Depuis la création du Waf, il y a 4 ans, plus de
      <span style="color: #ff0000"
        ><strong>8</strong><strong>0 chiens</strong></span
      >
      ont foulé notre sol et participé à nos balades avant de trouver un foyer
      aimant !
    </p>
    <p style="text-align: center">
      Nous sommes famille d&rsquo;accueil pour plusieurs associations, telles
      que la
      <strong
        >Ligue Protectrice des Animaux, Action Adoption ou Beagle en
        Nord!</strong
      >
    </p>
    <p style="text-align: center">Mais comment se passe une adoption ?</p>
    <p style="text-align: center">
      <strong
        >Au Waf vous ne pouvez pas partir avec un chien le jour même de votre
        venue,</strong
      >
      vous devez constituer un dossier d&rsquo;adoption auprès de
      l&rsquo;association, qui choisira un dossier et organisera une pré-visite
      à domicile avant de finaliser l&rsquo;adoption !
    </p>
    <p style="text-align: center">
      Le temps de trouver une famille, les chiens abandonnés viennent au waf
      avec leurs copains plutôt qu&rsquo;en chenil -l&rsquo;ambiance y est
      carrément plus cool et surtout ça vous permet de les rencontrer dans de
      supers conditions !
    </p>
    <p style="text-align: center">
      <span style="color: #000000"
        >Attention aucun chien ne reste au Waf en dehors des horaires
        d&rsquo;ouverture !
      </span>
    </p>
    <p style="text-align: center">
      <span style="color: #ff0000"
        ><span style="color: #000000"
          >Tout les chiens nous suivent à domicile !</span
        ></span
      >
    </p>
    <p>
      <img
        loading="lazy"
        data-attachment-id="932"
        data-permalink="https://lewaf.fr/waf-a-ladoption/titi/"
        data-orig-file="https://lewaf.files.wordpress.com/2018/11/titi.jpg"
        data-orig-size="788,960"
        data-comments-opened="1"
        data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
        data-image-title="Titi"
        data-image-description=""
        data-image-caption=""
        data-medium-file="https://lewaf.files.wordpress.com/2018/11/titi.jpg?w=246"
        data-large-file="https://lewaf.files.wordpress.com/2018/11/titi.jpg?w=788"
        class="wp-image-932 aligncenter"
        src="https://lewaf.files.wordpress.com/2018/11/titi.jpg"
        alt="Titi"
        width="500"
        height="610"
        srcset="
          https://lewaf.files.wordpress.com/2018/11/titi.jpg?w=500&amp;h=610 500w,
          https://lewaf.files.wordpress.com/2018/11/titi.jpg?w=123&amp;h=150 123w,
          https://lewaf.files.wordpress.com/2018/11/titi.jpg?w=246&amp;h=300 246w,
          https://lewaf.files.wordpress.com/2018/11/titi.jpg?w=768&amp;h=936 768w,
          https://lewaf.files.wordpress.com/2018/11/titi.jpg                 788w
        "
        sizes="(max-width: 500px) 100vw, 500px"
      />
    </p>
    <h2 style="text-align: center">
      <strong><span style="color: #ff6600">De la garderie</span> </strong>
    </h2>
    <p style="text-align: center">
      Au Waf on garde aussi les chiens ! Vous travaillez beaucoup et votre chien
      est seul comme une âme en peine ? Ou simplement vous voulez faire une
      journée shopping sans laisse au bout du bras ?
    </p>
    <div class="text_exposed_show" style="text-align: justify">
      <p style="text-align: center">
        Nous prenons uniquement des chiens sociables avec enfants, chiens males
        et femelles !
      </p>
      <p style="text-align: center">
        Attention : Nous gardons uniquement les chiens sur les horaires
        d&rsquo;ouverture, sous réserve que la balade d&rsquo;intégration se
        soit bien passée!
      </p>
    </div>
    <h2 style="text-align: center">
      <span style="color: #ff6600"
        >Au Waf on régale les babines des chiens mais aussi des humains</span
      >
    </h2>
    <p style="text-align: justify"></p>
    <p style="text-align: justify">
      <img
        loading="lazy"
        data-attachment-id="559"
        data-permalink="https://lewaf.fr/gateaux/"
        data-orig-file="https://lewaf.files.wordpress.com/2016/11/gateaux.png"
        data-orig-size="685,309"
        data-comments-opened="1"
        data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
        data-image-title="gateaux"
        data-image-description=""
        data-image-caption=""
        data-medium-file="https://lewaf.files.wordpress.com/2016/11/gateaux.png?w=300"
        data-large-file="https://lewaf.files.wordpress.com/2016/11/gateaux.png?w=685"
        class="size-full wp-image-559 aligncenter"
        src="https://lewaf.files.wordpress.com/2016/11/gateaux.png"
        alt="gateaux"
        width="685"
        height="309"
        srcset="
          https://lewaf.files.wordpress.com/2016/11/gateaux.png                 685w,
          https://lewaf.files.wordpress.com/2016/11/gateaux.png?w=150&amp;h=68  150w,
          https://lewaf.files.wordpress.com/2016/11/gateaux.png?w=300&amp;h=135 300w
        "
        sizes="(max-width: 685px) 100vw, 685px"
      />
    </p>
    <p style="text-align: center"></p>
    <h1 style="text-align: center">
      <span style="color: #ff6600">Les permanents du Waf !</span>
    </h1>
    <p style="text-align: center"><strong>BEANS</strong></p>
    <p style="text-align: center">
      Voilà Bean’s ! C’est notre petit chef de meute, il se prend pour un chef
      de cartel on le surnomme Don Binouz ! Si vous l&rsquo;avez dans votre
      poche vous pourrez surement entrer au Waf sans problème ! Vous le verrez
      surement, si vous avez acheté un gateau, et vous nous verrez nous aussi,
      le surveiller !
    </p>
    <p>
      Vous l&rsquo;avez compris sa passion c&rsquo;est de manger (et voler!)
      mais c&rsquo;est pour ça qu&rsquo;on l&rsquo;aime : Bean&rsquo;s
    </p>
    <p>
      <strong
        ><img
          loading="lazy"
          data-attachment-id="1040"
          data-permalink="https://lewaf.fr/accueil/59869390_1033762840154679_6573515495989837824_n/"
          data-orig-file="https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg"
          data-orig-size="540,720"
          data-comments-opened="1"
          data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
          data-image-title="59869390_1033762840154679_6573515495989837824_n"
          data-image-description=""
          data-image-caption=""
          data-medium-file="https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg?w=225"
          data-large-file="https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg?w=540"
          class="alignnone wp-image-1040 aligncenter"
          src="https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg"
          alt="59869390_1033762840154679_6573515495989837824_n"
          width="351"
          height="469"
          srcset="
            https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg?w=351&amp;h=469 351w,
            https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg?w=113&amp;h=150 113w,
            https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg?w=225&amp;h=300 225w,
            https://lewaf.files.wordpress.com/2019/07/59869390_1033762840154679_6573515495989837824_n.jpg                 540w
          "
          sizes="(max-width: 351px) 100vw, 351px"
      /></strong>
    </p>
    <p style="text-align: justify"></p>
    <p style="text-align: center"><strong>PATATE</strong></p>
    <p style="text-align: center">
      <b>La star du Waf, il se la joue même !</b>
    </p>
    <p style="text-align: center">
      Vous le verrez toujours super heureux de vous acceuillir même si ça
      impressionne beaucoup d&rsquo;entre vous par sa grande taille !
    </p>
    <p style="text-align: center">
      C&rsquo;est un grand gentil mais il sait que c&rsquo;est un des chouchou
      alors il en profite pour se la jouer sous-chef ! Toujours suivre son grand
      frère de coeur Bean&rsquo;s,
    </p>
    <p style="text-align: center">
      C&rsquo;est par son petit corps de peluche du haut de ses 2 mois
      qu&rsquo;on lui a trouvé le nom de : Patate<img
        loading="lazy"
        data-attachment-id="1042"
        data-permalink="https://lewaf.fr/accueil/65026038_1064507737080189_1007695371700273152_o/"
        data-orig-file="https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg"
        data-orig-size="1440,1800"
        data-comments-opened="1"
        data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
        data-image-title="65026038_1064507737080189_1007695371700273152_o"
        data-image-description=""
        data-image-caption=""
        data-medium-file="https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg?w=240"
        data-large-file="https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg?w=819"
        class="alignnone size-full wp-image-1042"
        src="https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg"
        alt="65026038_1064507737080189_1007695371700273152_o"
        width="1440"
        height="1800"
        srcset="
          https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg                  1440w,
          https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg?w=120&amp;h=150   120w,
          https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg?w=240&amp;h=300   240w,
          https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg?w=768&amp;h=960   768w,
          https://lewaf.files.wordpress.com/2019/07/65026038_1064507737080189_1007695371700273152_o.jpg?w=819&amp;h=1024  819w
        "
        sizes="(max-width: 1440px) 100vw, 1440px"
      />
    </p>
    <p style="text-align: center"><strong>Jo</strong>&lsquo;</p>
    <p style="text-align: center">
      Jo est un survivant, accompagné de son copain Engie, ils ont été retrouvés
      accroché dans une forêt avec ses confrères. Son histoire se poursuit avec
      la fourrière et la LPA, touché par leur histoire, nous avons pris Engie et
      Jo&rsquo; en famille d&rsquo;accueil. Engie a trouvé sa famille et revient
      en Garderie, quant à Jo&rsquo; il séjourne au sein du Waf .. 🙂<img
        loading="lazy"
        data-attachment-id="1044"
        data-permalink="https://lewaf.fr/accueil/67244976_518658518875136_1655078321962090496_n/"
        data-orig-file="https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg"
        data-orig-size="1242,1126"
        data-comments-opened="1"
        data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
        data-image-title="67244976_518658518875136_1655078321962090496_n"
        data-image-description=""
        data-image-caption=""
        data-medium-file="https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg?w=300"
        data-large-file="https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg?w=950"
        class="alignnone size-full wp-image-1044"
        src="https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg"
        alt="67244976_518658518875136_1655078321962090496_n"
        width="1242"
        height="1126"
        srcset="
          https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg                  1242w,
          https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg?w=150&amp;h=136   150w,
          https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg?w=300&amp;h=272   300w,
          https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg?w=768&amp;h=696   768w,
          https://lewaf.files.wordpress.com/2019/07/67244976_518658518875136_1655078321962090496_n.jpg?w=1024&amp;h=928 1024w
        "
        sizes="(max-width: 1242px) 100vw, 1242px"
      />
    </p>
    <p style="text-align: justify"></p>

    <p style="text-align: center"><strong>Gypsie</strong></p>
    <p>
      C&rsquo;est notre doyenne, elle aime faire ses siestes sur les canapés,
      vous réclamez des gratouilles ! C&rsquo;est celle qu&rsquo;on emmène
      partout sans laisse car elle est super fidèle malgré qu&rsquo;on
      l&rsquo;ait adoptée à ses 9 ans ; Du haut de ses 12 ans mamie aime raler
      sur les jeunes trop foufou pour elle ! Et elle sait se faire respecter !
    </p>
    <p>
      De base, elle s&rsquo;appelait Cindy, nous l&rsquo;avons renommé Gypsie
      alias Fifi !
    </p>
    <p>
      <img
        loading="lazy"
        data-attachment-id="952"
        data-permalink="https://lewaf.fr/waf-a-ladoption/48416949_950666855130945_8257791856033660928_n/"
        data-orig-file="https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg"
        data-orig-size="905,958"
        data-comments-opened="1"
        data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
        data-image-title="48416949_950666855130945_8257791856033660928_n"
        data-image-description=""
        data-image-caption=""
        data-medium-file="https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=283"
        data-large-file="https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=905"
        class="wp-image-952 aligncenter"
        src="https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=283"
        alt=""
        width="351"
        height="372"
        srcset="
          https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=283 283w,
          https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=351 351w,
          https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=702 702w,
          https://lewaf.files.wordpress.com/2018/12/48416949_950666855130945_8257791856033660928_n.jpg?w=142 142w
        "
        sizes="(max-width: 351px) 100vw, 351px"
      />
    </p>
    <p></p>
  </v-container>
</template>

<script>
import FichePreReservation from "../components/FichePreReservation";
export default {
  name: "Accueil",
  components: {
    FichePreReservation,
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
