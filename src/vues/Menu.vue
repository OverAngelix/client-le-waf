<template>
  <v-container>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">Le Waf</h1>
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
  }),

  methods: {},
};
</script>
