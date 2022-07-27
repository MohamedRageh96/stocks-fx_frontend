<template>
  <v-container>
    <v-row>
      <NewStockBtn />
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
import NewStockBtn from "../components/NewStockBtn.vue";

export default defineComponent({
  name: "StocksView",
  components: {
    StockCard,
    NewStockBtn,
  },
  data() {
    return {
      symbols: ["IBM"],
    };
  },
});
</script>
