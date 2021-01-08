import { createMuiTheme } from "@material-ui/core/styles";
import {blue,green,lightBlue} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
      primary:blue,
      secondary:{
        main: '#6aaf08',
      },
      text:{
        // light: '#F6F6F6',
        primary: "#FFFFFF",
        secondary: "#666666"
      },
      background: {
        default: "#F6F6F6"
      },
    }
});

export default theme;