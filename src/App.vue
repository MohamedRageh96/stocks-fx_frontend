<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Stocks and Fx</v-toolbar-title>
      <v-btn to="/" depressed rounded>Stocks</v-btn>
      <v-btn to="/fx" depressed rounded>Fx</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
