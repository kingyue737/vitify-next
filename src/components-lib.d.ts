export {}

declare module 'vue' {
  export interface GlobalComponents {
    VChart: (typeof import('vue-echarts'))['default']
  }
}
