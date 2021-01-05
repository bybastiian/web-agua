import React from 'react';
import Container from './components/Container/Container'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container></Container>
        </ThemeProvider>
    )
}

export default App;