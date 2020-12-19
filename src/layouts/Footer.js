import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Paper, withStyles, Grid, TextField, Button, AppBar, Typography, Toolbar, CssBaseline, Container} from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'auto',
    minHeight: '100vh',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    position: "fixed",
    bottom: "0",
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));



/**
 * For the footer
 * @param {} props 
 */

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
}

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
          <Box style={style}>
            <Container component="main" className={classes.main}>
              <Typography variant="h5" component="h1" gutterBottom>
                Credits to:
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column">
                    Chow Jia Ying:
                    <Typography className={classes.root}>
                      <Link href="https://www.github.com/C-likethis123" >
                        GitHub page
                      </Link>
                    </Typography>
                    <Typography className={classes.root}>
                      <Link href="https://c-likethis123.github.io/website/" >
                        Personal page
                      </Link>
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                    Lim Kang Yee:
                  <Typography className={classes.root}>
                    <Link href="https://github.com/kangyeelim" >
                      GitHub page
                    </Link>
                  </Typography>
                  <Typography className={classes.root}>
                    <Link href="https://kangyeelim.github.io/aboutme/" >
                      Personal page
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  Evon Dong Bing Bing:
                  <Typography className={classes.root}>
                    <Link href="https://github.com/EvonDong" >
                      GitHub page
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  Michaela Tang:
                  <Typography className={classes.root}>
                    <Link href="https://github.com/MichaelaTSH" >
                      GitHub page
                    </Link>
                  </Typography>
                </Box>
            </Box>
          </Container>
            <footer className={classes.footer} >
              <Container maxWidth="sm">
                <Typography variant="body1">My sticky footer can be found here.</Typography>
                <Copyright />
              </Container>
            </footer>
          </div>
      </div>
  )
}
}

export default withStyles(useStyles)(Footer);

