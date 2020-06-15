<template>
  <v-navigation-drawer height="100%" permanent>
      <v-list dense>
          <v-list-item v-for="item in items" :key="item.code" @click="getList(item)">
              <v-list-item-icon>
                  <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
import EventBus from "../util/EventBus"
import KaraokeApi from "../api/KaraokeApi";

export default {
    name: "Navigation",
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        getList({code, title}) {
            KaraokeApi.getChart(code, arr => EventBus.$emit("chart", {category: title, items: arr}).$emit("song", {youtube: "", playing: false}))
        }
    }
}
</script>

<style>

</style>
