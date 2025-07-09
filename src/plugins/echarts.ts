import * as echarts from 'echarts/core'
import VChart from 'vue-echarts'
import type { Plugin } from 'vue'

import {
  LineChart,
  BarChart,
  EffectScatterChart,
  ScatterChart,
  PieChart,
  RadarChart,
} from 'echarts/charts'
import type {
  LineSeriesOption,
  BarSeriesOption,
  EffectScatterSeriesOption,
  ScatterSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
} from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  DataZoomComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  TitleComponent,
  MarkPointComponent,
  DatasetComponent,
  VisualMapComponent,
} from 'echarts/components'
import type {
  DataZoomComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
  ToolboxComponentOption,
  GridComponentOption,
  TitleComponentOption,
  MarkPointComponentOption,
  DatasetComponentOption,
  VisualMapComponentOption,
} from 'echarts/components'

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
  EffectScatterChart,
  ScatterChart,
  CanvasRenderer,
  DataZoomComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  TitleComponent,
  MarkPointComponent,
  DatasetComponent,
  VisualMapComponent,
])

export type ECOption = echarts.ComposeOption<
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
  | EffectScatterSeriesOption
  | ScatterSeriesOption
  | DataZoomComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | TitleComponentOption
  | MarkPointComponentOption
  | DatasetComponentOption
  | VisualMapComponentOption
>

export default {
  install(app) {
    app.component('VChart', VChart)
  },
} satisfies Plugin
