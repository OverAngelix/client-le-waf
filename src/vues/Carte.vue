<template>
  <v-container>
    <v-row justify="center">
      <v-col justify="center">
        <v-img
          alt="menu"
          contain
          class="mb-4"
          max-height="1000"
          max-width="2000"
          :src="require(`@/assets/carte.jpg`)"
        >
        </v-img> </v-col
    ></v-row>
  </v-container>
</template>

<script>
export default {
  name: "Carte",
};
</script>
