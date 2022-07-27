<template>
  <v-container>
    <v-row class="justify-end mb-6">
      <new-forex></new-forex>
    </v-row>
    <v-row>
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
import store from "@/store/index";

export default defineComponent({
  name: "FxView",
  components: {
    FxCard,
    NewForex,
  },
  computed: {
    forexs() {
      return store.state.forexs;
    },
  },
});
</script>
