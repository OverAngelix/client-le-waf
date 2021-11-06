<template>
  <v-container>
    <v-row align="center" justify="center">
      <span class="text-h4 double pa-1 mb-2">{{ title }}</span>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TitleMenu",
  props: ["title"],
};
</script>

<style scoped>
span.double {
  border-style: double;
  border-color: #ff6600;
  border-width: 4px;
}
</style>
