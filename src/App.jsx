import React from 'react';
import Container from './components/Container/Container'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig'
import PrimarySearchAppBar from './ejemplo'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container></Container>
            {/* <PrimarySearchAppBar></PrimarySearchAppBar> */}
        </ThemeProvider>
    )
}

export default App;