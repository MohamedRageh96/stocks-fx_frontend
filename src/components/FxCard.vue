<template>
  <v-col v-if="fx" sm="12" md="3">
    <v-card>
      <div class="d-flex flex-column align-center">
        <p class="mt-3 mb-3">
          From
          {{ fx["Realtime Currency Exchange Rate"]["1. From_Currency Code"] }}
          to
          {{ fx["Realtime Currency Exchange Rate"]["3. To_Currency Code"] }}
        </p>
        <p class="mt-3 mb-3">
          Exchange rate:
          {{ fx["Realtime Currency Exchange Rate"]["5. Exchange Rate"] }}
        </p>
      </div>
    </v-card>
  </v-col>
</template>

<script>
//components

import StockService from "@/services/StockService";

export default {
  name: "FxCard",
  props: {
    forex: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fx: null,
    };
  },
  created() {
    StockService.getForex(this.forex[0], this.forex[1])
      .then((response) => {
        this.fx = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
