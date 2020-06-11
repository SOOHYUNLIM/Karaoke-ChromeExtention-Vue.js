<template>
  <v-container>
      <v-row>
        <Navigation :items="items" />
        <component :is="play ? 'Youtube' : 'Table'"></component>
    </v-row>
  </v-container>
</template>

<script>
import Navigation from "../components/Navigation"
import Table from "../components/Table"
import Youtube from "../components/Youtube"
import EventBus from "../util/EventBus"

export default {
    name: "Main",
    components: {
        Navigation,
        Table,
        Youtube
    },
    data() {
        return {
            items: [
                {code: "INGI", title: "인기차트", icon: "mdi-chart"},
                {code: "BAL", title: "발라드", icon: "mdi-chart"}
            ],
            play: false
        }
    },
    created() {
        EventBus.$on("play", play => this.play = play)
    },
}
</script>

<style>

</style>