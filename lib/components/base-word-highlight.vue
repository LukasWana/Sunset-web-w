<script>
  import { highlightWords } from '../utils/filterByWords'

  export default {
    name: 'base-word-highlight',
    props: {
      text: { type: String, required: true },
      sentence: { type: String, required: true },
      highlightClass: { type: String, default: 'hl-' }
    },
    computed: {
      highLightedText () {
        return highlightWords({ sentence: this.sentence, text: this.text, cls: this.highlightClass })
      }
    }
  }
</script>

<template lang="pug">
  span(classname="WordHighliter") {{highLightedText}} hello world

</template>

<style scoped lang="stylus">
  .WordHighliter {
    span.hl-1 {
      background: #ffffaa;
    }
    span.hl-2 {
      background: #ccffcc;
    }
    span.hl-3 {
      background: #ccccff;
    }
    span.hl-4 {
      background: #ffcccc;
    }
    span.hl-5 {
      background: #ff88ff;
    }
    span.hl-6 {
      background: #6fffa9;
    }
  }
  .active .WordHighliter span {
    color: black;
  }
</style>
