<script>
export default {
  name: 'dorsys-video',
  methods: {
    bigPlayButtonTop () {
      if (this.$refs.myMedia && this.$refs.myMedia.$refs.media) {
        return this.$refs.myMedia.$refs.media.clientTop + (this.$refs.myMedia.$refs.media.clientHeight / 2).toFixed(2) - 130 + 'px'
      }
      return '50%'
    }
  },
  data () {
    return {
      isPlaying: false,
      poster: 'https://cdn.public.altisima.cz/video/dorsys-promo.png',
      sources: [
        {
          src: 'https://cdn.public.altisima.cz/video/dorsys-promo.mp4',
          type: 'video/mp4'
        }
      ]
    }
  }
}
</script>

<template lang="pug">
  q-media-player(
    ref="myMedia"
    type="video"
    :sources="sources"
    :poster="poster"
    :playback-rates="[]"
    dense
    big-play-button-color="white"
    @playing="isPlaying = true"
    @paused="isPlaying = false"
    radius="6px"
  )
    template(v-slot:bigPlayButton)
      .play-button(:style="{'top': bigPlayButtonTop()}")
        q-icon(name="mdi-play" size="200pt")
    template(v-slot:settings)
      span

</template>

<style scoped lang="stylus">
  .play-button
    position: absolute
    left: 50%
    margin-left: -8.5rem
    top: 50%
    margin-bottom: -1rem
    width: 3rem
    height: 3rem
    cursor: pointer
    // border-style: solid
    // border-color: white
    // border-width: 1px
    // border-radius: 1.5rem
    // opacity: 1.0
    color white
    font-size: 1rem
    z-index: 1000 // not to cover drawer from sides
</style>
