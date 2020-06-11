<template>
    <v-list dense>
        <v-subheader>
            <v-flex xs9>Title</v-flex>
            <v-flex xs1>Play</v-flex>
            <v-flex xs1>Down</v-flex>
            <v-flex xs1>Del</v-flex>
        </v-subheader>
        <v-list-item-group v-model="selected" color="primary">
            <v-list-item v-for="item in items" :key="item.rank">
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <IconBtn :event="()=>{alert('play')}" icon="mdi-play"></IconBtn>
                </v-list-item-action>
                <v-list-item-action>
                    <IconBtn :event="()=>{alert('download')}" icon="mdi-download"></IconBtn>
                </v-list-item-action>
                <v-list-item-action>
                    <IconBtn :event="()=>{alert('delete')}" icon="mdi-delete"></IconBtn>
                </v-list-item-action>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
import EventBus from "../util/EventBus"

export default {
    name: "List",
    data() {
        return {
            selected: null,
            items: null
        }
    },
    created() {
        // this.items = EventBus.getStatus("list")
        EventBus.$on("list", x=>this.items = x)
    }
}
</script>

<style>

</style>