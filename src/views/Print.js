import React from 'react';
import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Typography
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";

class Print extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingQuota: 100,
      fileNameDisplay: '',
      files: []
    };
    this.upload = this.upload.bind(this);
    this.fileSelectHandler = this.fileSelectHandler.bind(this);
  }

  upload() {
    document.getElementById("uploadButton").click();
  }

  fileSelectHandler(event) {
    const files = event.target.files;
    if (files.length === 1) {
      const [fileName] = files;
      this.setState({
        fileNameDisplay: fileName.name,
        files});
    } else {
      this.setState({
        fileNameDisplay: `${files.length} files`,
        files
      });
    }
  }

  render() {
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
                <Typography variant="h6">You have {this.state.remainingQuota} pages left this month</Typography>
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
                <Box display="flex" alignItems="center">
                  <Button variant="outlined" color="primary" onClick={this.upload}>Upload a file</Button>
                  <input id='uploadButton' type="file" hidden multiple onChange={this.fileSelectHandler} />
                  <Typography style={{paddingLeft: '1.25rem'}}>{this.state.fileNameDisplay}</Typography>
                </Box>
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

export default Print;
