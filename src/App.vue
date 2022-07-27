<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Stocks and Fx</v-toolbar-title>
      <v-btn to="/" depressed rounded>Stocks</v-btn>
      <v-btn to="/fx" depressed rounded>Fx</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view
          @add-to-symbols="updateSymbols"
          :symbols="symbols"
        ></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      symbols: ["IBM"],
    };
  },
  methods: {
    updateSymbols(symbol) {
      this.symbols.push(symbol);
    },
  },
};
</script>
