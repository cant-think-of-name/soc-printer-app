import React from 'react';
import {
    AppBar,
    Button,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import theme from "../theme";

class PrintStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      uploading: false,
      printing: false,
      filesToBePrinted: 0
    }
  }

  componentDidMount() {
    //GET NUMBER OF FILES TO BE PRINTED?
  }

  render() {
    return (
            <div>
                <ThemeProvider theme={theme}>
                    <Paper>
                        <AppBar position="static" alignitems="center" color="primary" style={{ marginBottom: '20px' }}>
                                <Grid container justify="center" wrap="wrap">
                                    <Grid item>
                                        <Typography variant="h4">View Printing Status</Typography>
                                    </Grid>
                                </Grid>
                        </AppBar>
                        {!this.state.uploading && !this.state.printing && <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">Nothing to be printed currently.</Typography>
                            </Grid>
                        </Grid>}
                        {this.state.uploading && !this.state.printing &&
                          <Grid container justify="center" wrap="wrap">
                            <Grid item xs={2}>
                                <Typography variant="h6">Uploading {this.state.filesToBePrinted} file(s)</Typography>
                            </Grid>
                            <Grid item>
                              <HourglassEmptyIcon/>
                            </Grid>
                        </Grid>}
                        {!this.state.uploading && this.state.printing && <div>
                        <Grid container justify="center" wrap="wrap">
                          <Grid item xs={2}>
                              <Typography variant="h6">Uploaded file(s)</Typography>
                          </Grid>
                          <Grid item>
                            <DoneOutlineIcon/>
                          </Grid>
                        </Grid>
                        <Grid container justify="center" wrap="wrap">
                          <Grid item xs={2}>
                              <Typography variant="h6">Printing {this.state.filesToBePrinted} file(s)</Typography>
                          </Grid>
                          <Grid item>
                            <HourglassEmptyIcon/>
                          </Grid>
                        </Grid>
                        </div>}
                        {(this.state.uploading || this.state.printing ) && <Grid container justify="center" wrap="wrap" style={{ marginTop: '20px' }}>
                            <Grid item>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Cancel</Button>
                            </Grid>
                        </Grid>}
                    </Paper>
                </ThemeProvider>
            </div>
    );
  }
}

export default PrintStatus;
