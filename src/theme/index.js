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
        margin: "16px",
        padding: "32px"
      }
    },
    MuiButton: {
      root: {  
        marginTop: "5px"
      }
    },
    MuiFormControl: {
      root: {  
        minWidth: "130px"
      }
    },
    MuiTypography: {
      h4: {
        marginBottom: "4px",
        marginTop: "4px"
      },
      h6: {
        marginBottom: "2px"
      }
    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;
