import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Scroll from './components/Scroll/Scroll'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar></Navbar>
            <Scroll showBelow={50}></Scroll>
            <Intro></Intro>
            <About></About>
        </ThemeProvider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);