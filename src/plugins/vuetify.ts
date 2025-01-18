import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#006b52',
    background: '#e1e1e1',
    error: '#EF5350',
    info: '#26C6DA',
    success: '#66BB6A',
    warning: '#FFB300',
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#006b52',
    background: '#2c2b2b',
    error: '#E53935',
    info: '#00ACC1',
    success: '#43A047',
    warning: '#FFA000',
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
