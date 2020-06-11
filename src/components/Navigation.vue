<template>
  <v-navigation-drawer height="100%" permanent>
      <v-list dense>
          <v-list-item v-for="item in items" :key="item.code" @click="getList(item.code)">
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

export default {
    name: "Navigation",
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        getList(code) {
            EventBus.$emit("song", {videoId: "", playing: false})
            EventBus.$emit("chart", {category: "인기 차트", items: [
                {rank: 1, title: "비행기", singer: "수현", videoId: code},
                {rank: 2, title: "곰세마리", singer: "소라", videoId: code}
            ]})
        }
    }
}
</script>

<style>

</style>