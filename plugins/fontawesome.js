import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faUser, faHome, faLock, faWhatsapp,faEnvelope)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
