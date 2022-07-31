<template>
  <v-container>
    <v-row class="justify-end mb-6">
      <NewStock />
    </v-row>
    <v-row>
      <v-col sm="12">
        <p>
          Plase note that the API which i use is limted to 5 API calls per
          minute and 500 calls per day.
        </p>
      </v-col>
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
  computed: {
    symbols() {
      return this.$store.state.symbols;
    },
  },
});
</script>
