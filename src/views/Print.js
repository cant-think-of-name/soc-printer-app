import React from 'react';
import {
    AppBar,
    Button,
    FormControl,
    Grid,
    InputLabel,
    Link,
    MenuItem,
    Paper,
    Select,
    Toolbar,
    Typography
} from "@material-ui/core";
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
                        <AppBar position="static" alignitems="center" color="primary">
                                <Grid container justify="center" wrap="wrap">
                                    <Grid item>
                                        <Typography variant="h4">Quota</Typography>                    
                                    </Grid>
                                </Grid>
                        </AppBar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">You have {remainingQuota} pages left this month</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item xs={2}>
                                <Typography>
                                    <Link href="https://socpay.comp.nus.edu.sg/" variant="body2">
                                        Want coloured printing?
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    <Link href="https://socpay.comp.nus.edu.sg/" variant="body2">
                                        Increase printing quota!
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid> 
                        <AppBar position="static" alignitems="center" color="primary">
                                <Grid container justify="center" wrap="wrap">
                                    <Grid item>
                                        <Typography variant="h4">Print Documents</Typography>                    
                                    </Grid>
                                </Grid>
                        </AppBar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Upload a file</Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <FormControl>
                                    <InputLabel>Choose printer</InputLabel>               
                                    <Select labelId="label" id="select" >
                                            <MenuItem value="demo1">Demo Printer #1</MenuItem>
                                            <MenuItem value="demo2">Demo Printer #2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
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
