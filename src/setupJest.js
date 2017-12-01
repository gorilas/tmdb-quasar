import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
import { tmdbRouterMixin } from './app/services/TMdbRouter'
import VueProgressiveImage from 'vue-progressive-image'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.mixin(tmdbRouterMixin)
Vue.use(VueProgressiveImage)

import { registerGlobalComponents } from './app/GlobalComponentsLoader'

registerGlobalComponents()
