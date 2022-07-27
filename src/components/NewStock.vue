<template>
  <v-col sm="8">
    <v-text-field
      v-model="symbol"
      :rules="symbolRules"
      label="Stock Symbol"
      required
    >
    </v-text-field>
  </v-col>
  <v-col sm="4">
    <v-btn
      :class="{ disabledButton: !isSymbol }"
      :disabled="!isSymbol"
      v-on:click="addSymbol"
      >Add Stock</v-btn
    >
  </v-col>
</template>

<script>
import store from "@/store";

export default {
  name: "NewStock",
  data: () => ({
    symbol: "",
    symbolRules: [(v) => !!v || "Symbol is required"],
  }),
  methods: {
    addSymbol() {
      store.commit("setSymbols", this.symbol);
    },
  },
  computed: {
    isSymbol() {
      return this.symbol.length > 0;
    },
  },
};
</script>
