import {defineClientAppEnhance} from '@vuepress/client'

import BusTable from "./components/BusTable.vue";
import Realtimemap from './components/Realtime-map.vue'
import WeatherSpan from './components/weather-span.vue'
// import AdsenseUnit from './components/adsense-inline-article.vue'

export default defineClientAppEnhance(({app, router, siteData}) => {
    app.component("BusTable", BusTable)
    app.component("Realtimemap", Realtimemap)
    app.component("WeatherSpan", WeatherSpan)
    // app.component("AdsenseUnit", AdsenseUnit)
})
