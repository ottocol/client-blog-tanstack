import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
      //gcTime: 5 * 60_000,
      refetchOnWindowFocus: true,
      retry: 1,
    },
  },
})
const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin, {queryClient, enableDevtoolsV6Plugin: true})

app.mount('#app')
