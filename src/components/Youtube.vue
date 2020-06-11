<template>
  <div>
      <h1>YoutubePage</h1>
      <p>{{videoId}}</p>
  </div>
</template>

<script>
import EventBus from "../util/EventBus"

export default {
  name: "Youtube",
  data() {
    return {
      videoId: ""
    }
  },
  created() {
    EventBus.$on("song", song => alert(song))
  }
}
</script>

<style>

</style>