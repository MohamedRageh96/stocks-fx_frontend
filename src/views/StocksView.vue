<template>
  <v-container>
    <v-row class="justify-end mb-6">
      <NewStock @add-to-symbols="updateSymbols" />
    </v-row>
    <v-row>
      <StockCard
        v-for="symbol in symbols"
        :key="symbol.index"
        :symbol="symbol"
      />
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
import StockCard from "../components/StockCard.vue";
import NewStock from "../components/NewStock.vue";

export default defineComponent({
  name: "StocksView",
  components: {
    StockCard,
    NewStock,
  },
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
});
</script>
