import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { en, zhHans } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount, mdiHome } from '@mdi/js'
import { mapKeys, kebabCase } from 'lodash'

const mdIcons = { mdiAccount, mdiHome }
const mdIconAlias = mapKeys(mdIcons, (v, k) => kebabCase(k))

const theme = {
  primary: '#0096C7',
  secondary: '#03A9F4',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export default createVuetify({
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, en },
  },
  theme: {
    themes: {
      light: {
        colors: theme,
      },
      dark: {
        colors: theme,
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      ...mdIconAlias,
    },
    sets: { mdi },
  },
})
