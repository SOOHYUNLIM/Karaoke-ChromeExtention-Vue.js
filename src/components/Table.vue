<template>
 <v-data-table :headers="headers" :items="items" :caption="caption" hide-default-footer disable-pagination>
       <template v-slot:item="{ item }">
        <tr @click="select(item.youtube)">
            <td>{{item.rank}}</td>
            <td>{{item.title}}</td>
            <td>{{item.singer}}</td>
        </tr>
    </template>
 </v-data-table>
</template>

<script>
import EventBus from "../util/EventBus"

export default {
    name: "Table",
    data() {
        return {
            caption: "",
            items: [],
            headers: [
          {
            text: '순위',
            align: 'start',
            sortable: false,
            value: 'rank',
          },
          { text: '제목', value: 'title' },
          { text: '가수', value: 'singer' },
        ]
        }
    },
    created() {
        EventBus.$on("chart", ({category, items}) => {
            this.caption = category
            this.items = items
        })
    },
    methods: {
        select(youtube) {
            EventBus.$emit("song", {youtube: youtube, playing: true})
        }
    }
}
</script>

<style>

</style>