<template>
  <v-col sm="6" md="4">
    <v-text-field
      v-model="fromCur"
      :rules="fromCurRules"
      label="From Currency Code"
      required
    >
    </v-text-field>
  </v-col>
  <v-col sm="6" md="4">
    <v-text-field
      v-model="toCur"
      :rules="toCurRules"
      label="To Currency Code"
      required
    >
    </v-text-field>
  </v-col>
  <v-col sm="4">
    <v-btn
      :class="{ disabledButton: !isForex }"
      :disabled="!isForex"
      v-on:click="addForex"
      >Add Forex</v-btn
    >
  </v-col>
</template>

<script>
export default {
  name: "NewForex",
  data: () => ({
    fromCur: "",
    fromCurRules: [(v) => !!v || "Currency is required"],
    toCur: "",
    toCurRules: [(v) => !!v || "Currency is required"],
  }),
  methods: {
    addForex() {
      this.$store.commit("setForex", [this.fromCur, this.toCur]);
    },
  },
  computed: {
    isForex() {
      return this.fromCur.length > 0 && this.toCur.length > 0;
    },
  },
};
</script>
