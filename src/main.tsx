import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'providers/Theme'

import Grid from './grid'
import { Landing } from 'pages/Landing'

import './i18n'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Grid>
                <Landing />
            </Grid>
        </ThemeProvider>
    </React.StrictMode>,
)
