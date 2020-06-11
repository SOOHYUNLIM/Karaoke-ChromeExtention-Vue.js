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
            alert(code)
            // EventBus.setStatus("list", [{rank: 1, title: "snowman", icon: "AGJSH123BS"},
            //     {rank: 2, title: "아로하", youtube: "KU23LN2H34"}])
            
            if(code === "BAL") {
                EventBus.$emit("list", [{rank: 1, title: "snowman", icon: "AGJSH123BS"},
                    {rank: 2, title: "아로하", youtube: "KU23LN2H34"}])

            } else if(code == "INGI") {
                 EventBus.$emit("list", [{rank: 1, title: "비행기", icon: "AGJSH123BS"},
                    {rank: 2, title: "곰세마리", youtube: "KU23LN2H34"}])
            }
        }
    }
}
</script>

<style>

</style>