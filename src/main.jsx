import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { blueGrey, brown } from '@mui/material/colors';
const theme = createTheme({
    palette: {
        primary: blueGrey,
        secondary: brown
    }
})


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>

    </React.StrictMode>,
)
