<script>
import { codemirror } from 'vue-codemirror'

/**
 * @type {{mode: string, lineNumbers: boolean, tabSize: number, autoRefresh: boolean, line: boolean}}
 */
const defaultCodeMirrorsOptions = {
  // codemirror options
  tabSize: 2,
  mode: 'text/text',
  // theme: 'base16-dark',
  lineNumbers: true,
  line: true,
  // https://codemirror.net/doc/manual.html#addon_autorefresh
  refresh: false,
  autoRefresh: false,
  showInvisibles: false,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
}

function guessFromFileName (absolutePath) {
  if (!absolutePath) {
    console.warn(`base-editor: no absolutePath and no type specified, type is set to 'txt'`)
    return 'txt'
  }
  return absolutePath.split('.').pop()
}

export default {
  name: 'base-code-editor',

  mounted () {
    this.$nextTick(function () {
      console.log({ 'mounted this.$refs.editor': this.$refs.editor.cminstance })
      this.$refs.editor.cminstance.on('cursorActivity', (ci) => {
        this.cursorPosition = ci.getCursor()
      })
    })
  },

  props: {
    value: { type: String, default: '' },

    type: {
      type: String,
      default: '',
      validator: value => ['txt', 'sql', 'sh', 'js', 'md', 'json', 'yaml', ''].indexOf(value) !== -1
    },

    absolutePath: {
      type: String,
      default: null
    },

    options: { type: Object }
  },

  data () {
    return {
      cursorPosition: {}
    }
  },

  inheritAttrs: false,
  components: { codemirror },
  watch: {
    value: {
      immediate: true,
      handler () {
        if (this.$refs.editor) {
          const pos = { ...this.cursorPosition }
          this.$nextTick(() => {
            try {
              this.$refs.editor.cminstance.setCursor(pos)
            } catch (err) {
              this.$log('potlačená chyba codemirroru')
            }
          })
        }
      }
    }
  },
  computed: {
    computedOptions () {
      return {
        ...defaultCodeMirrorsOptions,
        ...this.typeOptions,
        ...this.options
      }
    },
    typeOptions () {
      let type = this.type
      if (this.type === '') {
        type = guessFromFileName(this.absolutePath)
      }
      switch (type) {
        case 'txt':
          return {}
        case 'sql':
          return {
            mode: 'text/x-pgsql',
            // theme: 'base16-dark',
            lineNumbers: true,
            line: true
          }
        case 'js':
        case 'json':
          return {
            mode: 'text/javascript'
          }
        case 'shell':
          return {}
        case 'md':
          return {
            mode: 'text/x-markdown'
          }
        case 'yaml':
          return {
            mode: 'text/x-yaml'
          }
        default:
          return {}
      }
    }
  },
  methods: {
    onVisibilityChanged () {
      this.$nextTick(() => this.$refs.editor.refresh())
      console.log({ 'this.$refs.editor.cminstance.getCursor': this.$refs.editor.cminstance.getCursor() })
      this.$refs.editor.cminstance.setSize('100%', '100%')
    }
  }
}
</script>

<template lang="pug">
  codemirror(v-observe-visibility="onVisibilityChanged" ref="editor" :options="computedOptions" v-bind="$attrs" :value="value" @input="text => $emit('input', text)")
</template>
