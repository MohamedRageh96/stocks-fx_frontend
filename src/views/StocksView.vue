<template>
  <v-container>
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

export default defineComponent({
  name: "StocksView",
  components: {
    StockCard,
  },
  data() {
    return {
      symbols: ["IBM"],
    };
  },
});
</script>
