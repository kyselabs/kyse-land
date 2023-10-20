import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import Grid from './grid'
import { Landing } from 'pages/Landing'

import './i18n'
import './main.scss'

const theme = {
    mobile: '900px',
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Grid>
                <Landing />
            </Grid>
        </ThemeProvider>
    </React.StrictMode>,
)
