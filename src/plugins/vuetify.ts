import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { en, zhHans } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  mdiAccount,
  mdiHome,
  mdiPaletteOutline,
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiBellRemove,
  mdiBellBadgeOutline,
  mdiBellOutline,
  mdiCloseCircle,
  mdiAlertCircle,
} from '@mdi/js'
import { mapKeys, kebabCase } from 'lodash'
import { useDark } from '@vueuse/core'

const mdIcons = {
  mdiAccount,
  mdiHome,
  mdiPaletteOutline,
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiBellRemove,
  mdiBellBadgeOutline,
  mdiBellOutline,
}
const mdIconAlias = mapKeys(mdIcons, (v, k) => kebabCase(k))
// fix vuetify#16870(https://github.com/vuetifyjs/vuetify/issues/16870)
mdIconAlias['warning'] = mdiAlertCircle
mdIconAlias['error'] = mdiCloseCircle

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
  defaults: {
    VSwitch: {
      color: 'primary',
    },
  },
  theme: {
    defaultTheme: useDark().value ? 'dark' : 'light',
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
  display: {
    mobileBreakpoint: 'sm',
  },
})
