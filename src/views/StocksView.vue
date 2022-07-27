<template>
  <v-container>
    <v-row class="justify-end mb-6">
      <NewStock />
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
import store from "@/store/index";

export default defineComponent({
  name: "StocksView",
  components: {
    StockCard,
    NewStock,
  },
  computed: {
    symbols() {
      return store.state.symbols;
    },
  },
});
</script>
