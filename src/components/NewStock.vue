<template>
  <v-col cols="4">
    <v-text-field
      v-model="symbol"
      :rules="symbolRules"
      label="Stock Symbol"
      required
    >
    </v-text-field>
  </v-col>
  <v-col cols="2">
    <v-btn
      :class="{ disabledButton: !isSymbol }"
      :disabled="!isSymbol"
      v-on:click="addSymbol"
      >Add Stock</v-btn
    >
  </v-col>
</template>

<script>
export default {
  emits: {
    "add-to-symbols": String,
  },
  name: "NewStock",
  data: () => ({
    symbol: "",
    symbolRules: [(v) => !!v || "Symbol is required"],
  }),
  methods: {
    addSymbol() {
      this.$emit("add-to-symbols", this.symbol);
    },
  },
  computed: {
    isSymbol() {
      return this.symbol.length > 0;
    },
  },
};
</script>
