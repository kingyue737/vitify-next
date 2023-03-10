import 'vuetify/styles'
import type { FunctionalComponent } from 'vue'
import { createVuetify, type IconSet, type IconProps } from 'vuetify'
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

function filename(path: string) {
  return path
    .split(/(\\|\/)/g)
    .pop()!
    .replace(/\.[^/.]+$/, '')
}

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob<FunctionalComponent>('@/assets/icons/*.svg', {
      eager: true,
      import: 'default',
      as: 'component',
    })
  ).map(([k, v]) => [filename(k), v])
)
const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, [h(svgIcons[props.icon as string])]),
}

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
    sets: { mdi, custom },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
})
