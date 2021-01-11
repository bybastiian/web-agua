import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro'
import About from './components/About/About';
import Scroll from './components/Scroll/Scroll'
import Products from "./components/Products/Products";
import Briefcase from "./components/Briefcase/Briefcase";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Social from "./components/Social/Social";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar></Navbar>
            <Scroll showBelow={50}></Scroll>
            <Intro></Intro>
            <About></About>
            <Products></Products>
            <Briefcase></Briefcase>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Social></Social>
        </ThemeProvider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);