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
import theme from "../theme";
import { w3cwebsocket as WebSocket } from "websocket"

const ws = new WebSocket("ws://localhost:5000", "echo-protocol")

const rows = [
    {printer: 'psc008 psc008-dx psc008-sx psc008-nb psc011 psc011-dx psc011-sx psc011-nb', location: 'COM1, Basement (outside Programming Lab 3)',
    model: 'LEXMARK MS821DN, A4 Postscript III', banner: 'yes'},
    {printer: 'psts psts-dx psts-sx psts-nb pstsb pstsb-dx pstsb-sx pstsb-nb pstsc pstsc-dx pstsc-sx pstsc-nb',
    location: 'COM1, Level 1, Printer Area', model: 'LEXMARK MS821DN, A4 Postscript III', banner: 'yes'},
    {printer: 'cptsc cptsc-dx', location:'COM1-01-06, Technical Services', model:'LEXMARK CS921DE, Colour A4 Postscript III', 
    banner: 'no'},
    {printer: 'cptsc-a3 cptsc-a3-dx', location:'COM1-01-06, Technical Services', model:'LEXMARK CS921DE, Colour A3 Postscript III', 
    banner: 'no'},
    {printer: 'psx342a psx342a-dx psx342a-sx psx342b psx342b-dx psx342b-sx', location:'I3 -03-42, Student Printing Room', model:'LEXMARK T654DN, A4 Postscript III', 
    banner: 'yes'},
]

const printers = [
    'psc008', 'psc008-dx', 'psc008-sx', 'psc008-nb', 'psc011', 'psc011-dx', 'psc011-sx', 'psc011-nb',
    'psts', 'psts-dx', 'psts-sx', 'psts-nb', 'pstsb', 'pstsb-dx', 'pstsb-sx', 'pstsb-nb', 'pstsc', 'pstsc-dx', 'pstsc-sx', 'pstsc-nb',
    'cptsc', 'cptsc-dx', 'cptsc-a3', 'cptsc-a3-dx',
    'psx342a', 'psx342a-dx', 'psx342a-sx', 'psx342b', 'psx342b-dx', 'psx342b-sx'
]

class Print extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            remainingQuota: 0,
            fileNameDisplay: '',
            files: [],
            message: ""
        }
        this.upload = this.upload.bind(this);
        this.fileSelectHandler = this.fileSelectHandler.bind(this);
        this.parseQuota = this.parseQuota.bind(this);
    }

    async componentDidMount() {
        setTimeout(this.parseQuota, 2000);
        let data = {method: "command",
        command: 'pusage'}
        ws.send(JSON.stringify(data))
        var message = "";
        ws.onmessage = msg => {
            message = message + JSON.parse(msg.data).data
            this.setState({message:message});
        }
        
    }

    parseQuota() {
        var str = this.state.message.split('PS-printer paper usage:')[1];
        var quotaStr = str.split(':')[1]
        var remainingQuota = quotaStr.split(' ')[1];
        this.setState({remainingQuota: remainingQuota});
    }

    upload() {
        document.getElementById("uploadButton").click();
    }

    fileSelectHandler(event) {
      const files = event.target.files
      if (files.length === 1) {
          const [fileName] = files
          this.setState({
            fileNameDisplay: fileName.name,
            files})
            var extension = fileName.name.split('.')[1];
            if (extension == 'pdf') {

            }
      } else {
          this.setState({
            fileNameDisplay: `${files.length} files`,
            files
          })
      }
    }

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Paper>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item xs={6}>
                                <Grid container justify="center" wrap="wrap">
                                    <Grid item>
                                        <Typography variant="h4" color="primary" style={{ marginBottom: "0.5rem" }}>Quota</Typography>                    
                                    </Grid>
                                </Grid>
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
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container justify="center" wrap="wrap">
                                    <Grid item>
                                        <Typography variant="h4" color="primary">Print Documents</Typography>                    
                                    </Grid>
                                </Grid>
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
                                                {printers.map((printer) => (
                                                    <MenuItem value={printer}>{printer}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h4" color="primary" style={{ marginTop: "4rem" }}>Printer Names & Locations</Typography>                    
                            </Grid>
                        </Grid>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Name of Print Queues</TableCell>
                                    <TableCell align="right">Location of Printer</TableCell>
                                    <TableCell align="right">Model of Printer</TableCell>
                                    <TableCell align="right">Banner</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.printer}
                                    </TableCell>
                                    <TableCell align="right">{row.location}</TableCell>
                                    <TableCell align="right">{row.model}</TableCell>
                                    <TableCell align="right">{row.banner}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                    </Paper>
                </ThemeProvider>
            </div>
        );
    }
}

export default Print;
