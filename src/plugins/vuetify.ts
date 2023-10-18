import 'vuetify/styles'
import type { FunctionalComponent } from 'vue'
import { createVuetify, type IconSet, type IconProps } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { en, zhHans } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { useDark } from '@vueuse/core'
import { md3 } from 'vuetify/blueprints'

type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>>
  ? UnwrapReadonlyArrayType<I>
  : A
type DT = InstanceType<typeof VDataTable>
export type DataTableHeader = UnwrapReadonlyArrayType<DT['headers']>

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
    }),
  ).map(([k, v]) => [filename(k), v]),
)
const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, [h(svgIcons[props.icon as string])]),
}

const theme = {
  primary: localStorage.getItem('theme-primary') || '#1697f6',
  secondary: '#03A9F4',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export default createVuetify({
  blueprint: md3,
  components: { VDataTable },
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, en },
  },
  defaults: {
    VSwitch: {
      color: 'primary',
    },
    VDataTable: {
      fixedHeader: true,
      hover: true,
    },
    VCard: {
      flat: true,
      border: true,
    },
    VBtn: { color: undefined },
    VNavigationDrawer: {
      VList: {
        nav: true,
        VListItem: {
          rounded: 'xl',
        },
      },
    },
    VChip: { rounded: 'lg' },
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
    aliases,
    sets: { mdi, custom },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
})
