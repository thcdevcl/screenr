import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#03A9F4"
    },
    secondary: {
      main: "#FFEB3B"
    },
    custom: {
      error: "#d45753",
      success: "#d1e37f",
      text: "#94d6d6",
      powder: "#FCFCFC"
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 50
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});
