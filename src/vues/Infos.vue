<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <TitleMenu title="Infos pratiques"></TitleMenu>
        <p>
          <strong>Vous habitez où les Wafous?</strong>
        </p>
        <div class="frameResponsive">
          <iframe
            class="responsive-iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3426.8222729829668!2d3.054089620721253!3d50.638071425537085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92aabf1e3498bd76!2sLe%20Waf!5e0!3m2!1sfr!2sfr!4v1636454520714!5m2!1sfr!2sfr"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p>
          Nous sommes situés dans le Vieux Lille au
          <span style="color: #ff6600"
            ><strong>57 rue de la Barre (59000 Lille)</strong></span
          >
        </p>

        <v-divider></v-divider>

        <p>
          <strong>Quand est-ce qu&rsquo;on peut venir?</strong>
        </p>
        <p>Nos horaires d&rsquo;ouverture sont les suivants :</p>
        <p>
          <strong> Lundi : <span style="color: #ff0000">Fermé</span> </strong>
        </p>
        <p>
          <strong> Mardi : <span style="color: #ff0000">Fermé</span> </strong>
        </p>
        <p>
          <strong>
            Mercredi : <span style="color: #ff0000">12h - 18h30</span>
          </strong>
        </p>
        <p>
          <strong>
            Jeudi : <span style="color: #ff0000">12h - 18h30</span>
          </strong>
        </p>
        <p>
          <strong>
            Vendredi : <span style="color: #ff0000">12h - 18h30</span>
          </strong>
        </p>
        <p>
          <strong>
            Samedi : <span style="color: #ff0000">12h - 18h30</span>
          </strong>
        </p>
        <p>
          <strong>
            Dimanche : <span style="color: #ff0000">12h - 18h30</span>
          </strong>
        </p>

        <v-divider></v-divider>

        <p><strong>Il faut réserver ?</strong></p>
        <p>
          C&rsquo;est <strong>indispensable</strong> avec la forte demande !
        </p>
        <p>
          Nous vous conseillons de réserver 1 jour ou 2 à l&rsquo;avance pour
          être sur d&rsquo;avoir votre créneau ! Attention le numero de
          téléphone du WAF n'est en service !
        </p>
        <FichePreReservation />

        <v-divider></v-divider>

        <p>
          <strong>On peut venir avec son chien ?</strong>
        </p>
        <p>
          Non malheureusement il y a déjà 6 chiens en moyenne au Waf ! Et ils
          sont 6 à vouloir défendre leur territoire du coup on évite de ramener
          Médor pour sa survie ! En revanche, nous proposons un service de
          garderie mais il y a une intégration, n&rsquo;hésitez pas à nous
          contacter pour plus d&rsquo;informations.
        </p>
        <p>
          <span style="color: #ff6600"
            ><strong>contact : marine@lewaf.fr</strong></span
          >
        </p>
        <p>
          Mais le top du top pour rester en contact avec nous, c&rsquo;est de
          suivre les aventures du Waf sur facebook ou Instagram :
        </p>
        <p>
          <a
            href="https://www.facebook.com/lewaf/"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://lewaf.files.wordpress.com/2016/06/face.png"
              alt="face"
              width="169"
              height="47"
          /></a>
        </p>

        <v-divider></v-divider>

        <p>
          <strong>Dernière question ! Quels sont vos tarifs ?</strong>
        </p>
        <p>
          Au Waf, on ne marche pas comme dans un salon de thé habituel, car nos
          boissons sont sous forme de buffet à volonté à 7€ par personne : Café,
          thés, sirops, chocolat chaud, smoothie du jour, soda du jour à
          volonté!
        </p>
        <p>
          à noter que tout le monde doit consommer car le buffet est toujours
          facturé!
        </p>
        <v-img
          alt="MENU"
          contain
          max-height="824"
          max-width="985"
          src="https://lewaf.files.wordpress.com/2021/07/menu.jpg"
        ></v-img>
        <br />
        <v-img
          alt="trip"
          contain
          max-height="400"
          max-width="400"
          src="https://lewaf.files.wordpress.com/2018/11/capture-d_ecc81cran-2018-11-08-acc80-13-56-39.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TitleMenu from "../components/TitleMenu";
import FichePreReservation from "../components/FichePreReservation";
export default {
  name: "Infos",
  components: {
    TitleMenu,
    FichePreReservation,
  },
  data: () => ({}),

  methods: {},
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
