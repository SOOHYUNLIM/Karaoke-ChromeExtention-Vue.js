<template>
  <v-container>
      <v-row>
        <Navigation :items="items" />
        <List/>
    </v-row>
  </v-container>
</template>

<script>
import Navigation from "../components/Navigation"
import List from "../components/List"

export default {
    name: "Main",
    components: {
        Navigation,
        List
    },
    data() {
        return {
            items: [
                {code: "INGI", title: "인기차트", icon: "mdi-chart"},
                {code: "BAL", title: "발라드", icon: "mdi-chart"}
            ]
        }
    }
}
</script>

<style>

</style>