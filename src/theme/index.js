import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"

let theme = createMuiTheme({
  "palette": {
    "common": {
      "black": "#000",
      "white": "#fff"
    }
  },

  overrides: {
    MuiPaper: {
      root: {
        margin: "0.8rem",
        padding: "1.6rem"
      }
    },
    MuiButton: {
      root: {  
        marginTop: "0.5rem"
      }
    },
    MuiFormControl: {
      root: {  
        minWidth: "10rem"
      }
    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;
