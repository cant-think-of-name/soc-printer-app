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
    Typography,
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import {withRouter} from "react-router-dom";
import theme from "../theme";
import StateContext from "../context"

class Print extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      remainingQuota: 100,
      fileNameDisplay: '',
      files: [],
      printer: 'psts'
    }
    this.upload = this.upload.bind(this);
    this.fileSelectHandler = this.fileSelectHandler.bind(this);
    this.changePrinter = this.changePrinter.bind(this);
    this.print = this.print.bind(this);
  }

  static contextType = StateContext

  upload() {
    document.getElementById("uploadButton").click();
  }

  changePrinter(event) {
    this.setState({printer: event.target.value})
  }

  fileSelectHandler(event) {
    const files = event.target.files
    if (files.length === 1) {
      const [fileName] = files
      this.setState({
        fileNameDisplay: fileName.name,
        files})
    } else {
      this.setState({
        fileNameDisplay: `${files.length} files`,
        files
      })
    }
  }

  print() {
    const wsConnection = this.context
    const { files, printer } = this.state
    wsConnection.print(files, printer)
    // const {history} = this.props
    // history.push("/status")
  }

  render() {
    const { remainingQuota, printer, fileNameDisplay } = this.state
    return (
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
              <Box display="flex" alignItems="center">
                <Button variant="outlined" color="primary" onClick={this.upload}>Upload a file</Button>
                <input id='uploadButton' type="file" hidden multiple onChange={this.fileSelectHandler} />
                <Typography style={{paddingLeft: '1.25rem'}}>{fileNameDisplay}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <FormControl>
                <InputLabel>Choose printer</InputLabel>               
                <Select labelId="label" id="select" value={printer} onChange={this.changePrinter} >
                  <MenuItem value="psts">psts</MenuItem>
                  <MenuItem value="pstsb">pstsb</MenuItem>
                  <MenuItem value="pstsc">pstsc</MenuItem>
                  <MenuItem value="psc008">psc008</MenuItem>
                  <MenuItem value="psc011">psc011</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Button color="primary" variant="contained" onClick={this.print}>Print</Button>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }
}

export default withRouter(Print);
