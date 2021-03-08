// "async" is optional
import { initSentryVue } from '@ent/ent-plugin-sentry-browser'

export default async ({ Vue }) => {
  initSentryVue('https://a74f18d70fc44b319158fa98f7f0663d@glitchtip.alltisima.cz/5', {
    Vue
  })
}
