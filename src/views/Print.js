import React from 'react';
import {
    Button,
    createMuiTheme,
    FormControl,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography,
    Link,
    Grid,
    Paper,
    Select,
    MenuItem,
    InputLabel
} from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";

const remainingQuota = 100;

class Print extends React.Component {
  render() {
    const { classes } = this.props;
    return (
            <div>
                <ThemeProvider theme={theme}>
                    <Paper>
                        <Typography variant="h4">Quota</Typography>                    
                        <Typography variant="h6">You have {remainingQuota} pages left this month</Typography>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Typography>
                                    <Link href="#" >
                                        Want coloured printing?
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <Typography>
                                    <Link href="#" variant="body2">
                                        Increase printing quota!
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="h4">Print Documents</Typography>     
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Upload a file</Button>
                        <Grid>
                            <FormControl>
                                <InputLabel>Choose printer</InputLabel>               
                                <Select labelId="label" id="select" >
                                        <MenuItem value="demo1">Demo Printer #1</MenuItem>
                                        <MenuItem value="demo2">Demo Printer #2</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Paper>
                </ThemeProvider>
            </div>
    );
  }
}
/*

                      <Link href="#" color="inherit">
                        {'color="inherit"'}
                      </Link>*/

export default Print;
