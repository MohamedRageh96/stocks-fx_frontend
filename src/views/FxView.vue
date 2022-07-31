<template>
  <v-container>
    <v-row class="justify-end mb-6">
      <new-forex></new-forex>
    </v-row>
    <v-row>
      <v-col sm="12">
        <p>
          Plase note that the API which i use is limted to 5 API calls per
          minute and 500 calls per day.
        </p>
      </v-col>
      <fx-card v-for="forex of forexs" :key="forex.index" :forex="forex">
      </fx-card>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
import FxCard from "@/components/FxCard.vue";
import NewForex from "@/components/NewForex.vue";

export default defineComponent({
  name: "FxView",
  components: {
    FxCard,
    NewForex,
  },
  computed: {
    forexs() {
      return this.$store.state.forexs;
    },
  },
});
</script>
