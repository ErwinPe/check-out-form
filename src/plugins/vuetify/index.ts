import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#fecfdf",
          secondary: "#fecfdf"
        }
      },
    },
    
  },


})

export default vuetify;