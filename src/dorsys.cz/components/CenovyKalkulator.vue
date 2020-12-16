<script>
export default {
  name: 'CenovyKalkulator',
  data () {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false
    }
  },
  methods: {
    reset () {
      this.step = 1
      this.done1 = false
      this.done2 = false
      this.done3 = false
    }
  }
}
</script>

<template lang="pug">
  div
    .q-pa-md
      q-btn.q-mb-md(label="Reset" push="" color="white" text-color="primary" @click="reset")

      q-stepper(v-model="step" header-nav ref="stepper" color="secondary" animated vertical)
        q-step(:name="1" title="Select campaign settings" icon="settings" :done="done1")
          | For each ad campaign that you create, you can control how much you&apos;re willing to
          | spend on clicks and conversions, which networks and geographical locations you want
          | your ads to show on, and more.
          q-stepper-navigation
            q-btn(@click="() => { done1 = true; step = 2 }" color="primary" label="Continue")

        q-step(:name="2" title="Create an ad group" caption="Optional" icon="create_new_folder" :done="done2")
          | An ad group contains one or more ads which target a shared set of keywords.
          q-stepper-navigation
            q-btn(@click="() => { done2 = true; step = 3 }" color="primary" label="Continue")
              q-btn.q-ml-sm(flat="" @click="step = 1" color="primary" label="Back")

        q-step(:name="3" title="Create an ad" icon="add_comment" :done="done3")
          | Try out different ad text to see what brings in the most customers, and learn how to
          | enhance your ads using features like ad extensions. If you run into any problems with
          | your ads, find out how to tell if they&apos;re running and how to resolve approval issues.
          q-stepper-navigation
            q-btn(color="primary" @click="done3 = true" label="Finish")
              q-btn.q-ml-sm(flat="" @click="step = 2" color="primary" label="Back")

</template>

<style scoped lang="stylus">

</style>
