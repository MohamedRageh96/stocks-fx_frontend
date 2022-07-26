<template>
  <v-container>
    <v-row>
      <HelloWorld />
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";
import StockService from "@/services/StockService";

export default defineComponent({
  name: "StocksView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      symbol: ["IBM"],
      stock: null,
    };
  },
});
</script>
