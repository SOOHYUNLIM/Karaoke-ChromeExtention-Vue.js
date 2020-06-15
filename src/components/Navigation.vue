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
import AxiosUtil from "../util/AxiosUtil"

export default {
    name: "Navigation",
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        getList(code) {
            let chart = {category: "DANCE", items: null}

            chart.items = AxiosUtil.get("https://tv3czyoqsh.execute-api.ap-northeast-2.amazonaws.com/karaoke/getchart/DANCE")
            console.log(chart);
            
            EventBus.$emit("song", {youtube: "", playing: false})
            EventBus.$emit("chart", chart)
        }
    }
}
</script>

<style>

</style>