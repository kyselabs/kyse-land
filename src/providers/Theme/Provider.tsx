import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import dark from './themes/dark'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <StyledThemeProvider theme={dark}>{children}</StyledThemeProvider>
}

export default ThemeProvider
