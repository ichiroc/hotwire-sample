import registerCustomElement from '@sonicgarden/vue-custom-element-rails'

import app from './app.vue'
console.log('initvue')

registerCustomElement('my-app', app)
