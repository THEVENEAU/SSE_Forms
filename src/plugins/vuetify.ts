import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#006b52',
    background: '#e1e1e1'
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#006b52',
    background: '#2c2b2b',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: lightTheme,
      darkTheme: darkTheme,
    },
  },
})
