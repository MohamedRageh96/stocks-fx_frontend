<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary" dark>
        <v-toolbar-title>Stocks and Fx</v-toolbar-title>
        <v-btn to="/" depressed rounded>Stocks</v-btn>
        <v-btn to="/fx" depressed rounded>Fx</v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
