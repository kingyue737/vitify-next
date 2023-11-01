<p align="center">
  <img alt="Vitify - Opinionated Vuetify Admin Starter Template" src="public/favicon.svg" width=200px/>
</p>
<h1 align="center">Vitify Admin</h1>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuetifyjs/vuetify">
    <img src="https://img.shields.io/badge/vuetify-3-blue.svg" alt="vuetify">
  </a>
  <a href="https://github.com/kingyue737/vitify-admin/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

<p align='center'>
<b>Vite</b> + <b>Vuetify</b>, Opinionated Admin Starter Template<br><br>
</p>

<p align='center'>
<a href="https://vitify-next.netlify.app/">Live Demo<br><br></a>
Lightweight Vue 3 version of <a href="https://github.com/kingyue737/vitify-admin">Vitify Admin<br><br></a>
</p>

## Variants

- [vitify-nuxt](https://github.com/kingyue737/vitify-nuxt) - Vuetify 3 with Nuxt 3, the best DX 🔥🔥🔥

- [vitify-electron](https://github.com/kingyue737/vitify-electron) - Vuetify 3 with Electron
- [vitify-admin](https://github.com/kingyue737/vitify-admin) - Vuetify 2 but with full Typescript support and Vite

## Features

- ⚡️ [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂️ [File based routing](./src/pages)

- 📑 [Layout system](./src/layouts)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- ☁️ Deploy on [Netlify](https://www.netlify.com/), zero-config

- 🧪 Unit/Component Testing with [Vitest](https://github.com/vitest-dev/vitest) + [Testing Library](https://github.com/testing-library/vue-testing-library), E2E Testing with [Playwright](https://playwright.dev/) on [GitHub Actions](https://github.com/features/actions)

<br>

### Admin Starter Template

- 🪟 Default layout with drawer, header and footer

- 🧭 Auto generated navigation drawer and breadcrumbs based on routes

- 🔔 Notification store

- 📉 Data visualization with [vue-echarts](https://github.com/ecomfe/vue-echarts)

- 🎨 Theme color customization and dark mode

- 📱 Responsive layout

## Dropped Features from [Vitify](https://github.com/kingyue737/vitify-admin)

Currently I want to keep this template as light as possible, see [Vitify Admin](https://github.com/kingyue737/vitify-admin) of Vue 2 version for full featureset.

- ~~I18n~~
- ~~Browsers Compability~~
- ~~Mock API~~
- ~~Login Page~~
- ~~axios~~

## Pre-packed

### UI Frameworks

- [Vuetify 3](https://vuetifyjs.com/) - Material Design Framework

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - Next-gen file based typed routing for vue router
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - Layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the Composition API
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Auto import Vuetify 2 components
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [VueUse](https://github.com/antfu/vueuse) - Collection of useful composition APIs
- [`vite-svg-loader`](https://github.com/jpkleemans/vite-svg-loader) - SVG files are loaded as Vue components, optimised via [SVGO](https://github.com/svg/svgo) and auto registered as Vuetify `v-icon`s

### Coding Style

- [Prettier](https://prettier.io/), single quotes, no semi
- [ESLint](https://eslint.org/) with adapted [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Playwright](https://playwright.dev/docs/getting-started-vscode) - E2E testing
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - TypeScript support inside Vue SFCs
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Find and fix problems in your code
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Material Design Icons Intellisense](https://marketplace.visualstudio.com/items?itemName=lukas-tr.materialdesignicons-intellisense)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kingyue737/vitify-next/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit kingyue737/vitify-next my-vitify-app
cd my-vitify-app
pnpm i
```
