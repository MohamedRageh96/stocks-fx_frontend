<template>
  <v-col v-if="stock" sm="12" md="3">
    <v-card class="d-flex flex-row justify-space-between">
      <div
        class="d-flex flex-column justify-space-around align-center flex-grow-1"
      >
        <div class="d-flex justify-center">
          <h4 v-if="stock['4. close'] >= stock['1. open']" class="text-green">
            {{ stock["4. close"] }}
          </h4>
          <h4 v-else-if="stock['4. close'] < stock['1. open']" class="text-red">
            {{ stock["4. close"] }}
          </h4>
        </div>
        <div class="d-flex justify-center">
          <v-card-text>{{ symbol }}</v-card-text>
        </div>
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
import AppService from "@/services/AppService";

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
    AppService.getStock(this.symbol)
      .then((response) => {
        this.stock =
          response.data["Time Series (Daily)"][
            response.data["Meta Data"]["3. Last Refreshed"]
          ];
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
