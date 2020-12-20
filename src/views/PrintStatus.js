import React from 'react';
import {
    AppBar,
    Button,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

class PrintStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      uploading: false,
      printing: true,
      filesToBePrinted: 1
    }
  }

  componentDidMount() {
    //GET NUMBER OF FILES TO BE PRINTED?
  }

  render() {
    const {uploading, printing, filesToBePrinted} = this.state;
    return (
        <Paper>
          <AppBar position="static" alignitems="center" color="primary" style={{ marginBottom: '20px' }}>
            <Grid container justify="center" wrap="wrap">
              <Grid item>
                <Typography variant="h4">View Printing Status</Typography>
              </Grid>
            </Grid>
          </AppBar>
            {!uploading && !printing &&
              <Grid container justify="center" wrap="wrap">
                <Grid item>
                  <Typography variant="h6">Nothing to be printed currently.</Typography>
                </Grid>
            </Grid>}
            {uploading && !printing &&
              <Grid container justify="center" wrap="wrap">
                <Grid item xs={2}>
                  <Typography variant="h6">Uploading {filesToBePrinted} file(s)</Typography>
                </Grid>
                <Grid item>
                  <HourglassEmptyIcon/>
                </Grid>
              </Grid>}
            {!uploading && printing &&
              <div>
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
                    <Typography variant="h6">Printing {filesToBePrinted} file(s)</Typography>
                  </Grid>
                  <Grid item>
                    <HourglassEmptyIcon/>
                  </Grid>
                </Grid>
              </div>}
            {(uploading || printing ) &&
              <Grid container justify="center" wrap="wrap" style={{ marginTop: '20px' }}>
                <Grid item>
<<<<<<< HEAD
                  <Button variant="outlined" color="primary">Cancel</Button>
                </Grid>
              </Grid>}
        </Paper>
=======
                  <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Cancel</Button>
                </Grid>
              </Grid>}
        </Paper>
      </div>
>>>>>>> Edited suggested changes.
    );
  }
}

export default PrintStatus;
