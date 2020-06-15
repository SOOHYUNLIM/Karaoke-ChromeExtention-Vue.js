<template>
    <div>
        <h1>YoutubePage</h1>
        <p>{{youtube}}</p>
        <iframe id="player" type="text/html" width="640" height="360"
                src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                frameborder="0"></iframe>
    </div>
</template>

<script>
    import EventBus from "../util/EventBus"

    export default {
        name: "Youtube",
        data() {
            return {
                youtube: ""
            }
        },
        created() {
            EventBus.$on("song", ({videoId}) => this.videoId = videoId)
        }
    }
</script>

<style>

</style>
