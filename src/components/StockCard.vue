<template>
  <v-col v-if="stock" sm="1" md="3">
    <v-card class="d-flex flex-row justify-space-between">
      <div class="d-flex flex-column align-center flex-grow-1">
        <v-card-text>{{ stock["4. close"] }}</v-card-text>
        <v-card-text>{{ symbol }}</v-card-text>
      </div>
      <div class="d-flex flex-column align-center flex-grow-1">
        <v-card-text>Open: {{ stock["1. open"] }}</v-card-text>
        <v-card-text>Close: {{ stock["4. close"] }}</v-card-text>
        <v-card-text>High: {{ stock["2. high"] }}</v-card-text>
        <v-card-text>Low: {{ stock["3. low"] }}</v-card-text>
        <v-card-text>Volume: {{ stock["5. volume"] }}</v-card-text>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import StockService from "@/services/StockService";

export default {
  name: "StockCard",
  props: {
    symbol: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stock: null,
    };
  },
  created() {
    StockService.getStock(this.symbol)
      .then((response) => {
        this.stock =
          response.data["Time Series (Daily)"][
            response.data["Meta Data"]["3. Last Refreshed"]
          ];
        console.log(
          response.data["Time Series (Daily)"][
            response.data["Meta Data"]["3. Last Refreshed"]
          ]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
