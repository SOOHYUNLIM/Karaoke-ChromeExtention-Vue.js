<template>
  <v-container>
      <v-row>
        <Navigation :items="items" />
        <component :is="playing ? 'Youtube' : 'Table'"></component>
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
                {code: "DANCE", title: "인기차트", icon: "mdi-chart"},
                {code: "BALLADE", title: "발라드", icon: "mdi-chart"},
              {code: "DANCE", title: "댄스", icon: "mdi-chart"},
              {code: "RANDB", title: "R&B", icon: "mdi-chart"},
              {code: "HIPHOP", title: "힙합", icon: "mdi-chart"},
              {code: "ROCK", title: "락", icon: "mdi-chart"},
              {code: "TROT", title: "트로트", icon: "mdi-chart"},
              {code: "POP", title: "팝송", icon: "mdi-chart"},
              {code: "JPOP", title: "일본곡", icon: "mdi-chart"},
              {code: "MEDLEY", title: "메들리", icon: "mdi-chart"},
              {code: "CATOON", title: "동요&만화", icon: "mdi-chart"}
            ],
            playing: false
        }
    },
    created() {
        EventBus.$on("song", ({playing}) => this.playing = playing)
    },
}
</script>

<style>

</style>
