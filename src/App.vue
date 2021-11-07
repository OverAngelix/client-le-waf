<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
   <!--   <SwitchTheme />-->
  </v-app>
</template>

<script>
//import SwitchTheme from "@/components/SwitchTheme";

export default {
  components: {
   // SwitchTheme,
  },
};
</script>


<style>
#app {
  background-color: #f06f53;
}
</style>