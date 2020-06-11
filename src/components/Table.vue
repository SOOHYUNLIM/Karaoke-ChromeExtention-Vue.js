<template>
 <v-data-table :headers="headers" :items="items" :caption="caption" @click:row="select" hide-default-footer disable-pagination/>
</template>

<script>
import EventBus from "../util/EventBus"

export default {
    name: "Table",
    data() {
        return {
            // selected: null,
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
        select() {
            EventBus.$emit("play", true)
        }
    }
}
</script>

<style>

</style>