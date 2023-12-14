// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {

}

const theme = extendTheme({
  colors: {
    dsa: {
      100: '#f7fafc',
    }
  }
})

export default theme;