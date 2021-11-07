<template>
  <v-container>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <v-img
          alt="LE WAF"
          contain
          max-height="150"
          max-width="150"
          src="https://lewaf.files.wordpress.com/2016/06/cropped-cropped-logo-petit-trans2-1-1.png"
        ></v-img>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <Accueil v-if="item == `ACCUEIL`" />
          <Infos v-if="item == `INFOS PRATIQUES`" />
          <LesAdoptes v-if="item == `WAF À L’ADOPTION`" />
          <Adoption v-if="item == `L’ADOPTION`" />
          <Presse v-if="item == `ON PARLE DU WAF !`" />
          <Copains v-if="item == `LES COPAINS DU WAF`" />
          <English v-if="item == `WAF IN ENGLISH`" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-footer dark padless>
      <v-card flat tile class="blue lighten-3 flex white--text text-center">
        <v-card-text>
          <v-btn
            href="https://www.facebook.com/lewaf/"
            target="_blank"
            class="mx-4"
            color="black"
            icon
          >
            <v-icon size="24px"> mdi-facebook </v-icon>
          </v-btn>
          <v-btn
            href="https://www.instagram.com/le.waf/"
            target="_blank"
            class="mx-4"
            color="black"
            icon
          >
            <v-icon size="24px"> mdi-instagram </v-icon>
          </v-btn>
          <v-btn
            href="https://vm.tiktok.com/ZM8QfLLjG/"
            target="_blank"
            class="mx-4"
          >
            Tiktok
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          Copyright {{ new Date().getFullYear() }} —
          <strong>Steven Copin</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
import Accueil from "./Accueil";
import Infos from "./Infos";
import LesAdoptes from "./LesAdoptes";
import Adoption from "./Adoption";
import Presse from "./Presse";
import Copains from "./Copains";
import English from "./English";
export default {
  components: {
    Accueil,
    Infos,
    LesAdoptes,
    Adoption,
    Presse,
    Copains,
    English,
  },
  name: "Menu",
  data: () => ({
    tab: null,
    items: [
      "ACCUEIL",
      "INFOS PRATIQUES",
      "WAF À L’ADOPTION",
      "L’ADOPTION",
      "ON PARLE DU WAF !",
      "LES COPAINS DU WAF",
      "WAF IN ENGLISH",
    ],
    icons: ["mdi-facebook", "mdi-instagram"],
  }),

  methods: {},
};
</script>
