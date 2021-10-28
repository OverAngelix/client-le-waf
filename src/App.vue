<template>
  <v-app id="app">
    <!-- <v-app-bar
      app
      color="#cde8f8"
      
    >
      <div class="d-flex align-center">
          Reservations du WAF
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://lewaf.fr/"
        target="_blank"
        text
      >
        <span class="mr-2">Retour au WAF</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
   <router-view/>
    </v-main>
  </v-app>
</template>

<style>
#app {
  background-color: #f7a37d;
}
</style>