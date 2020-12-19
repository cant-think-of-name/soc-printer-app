import React from 'react';
import Link from '@material-ui/core/Link';
import { Paper, withStyles, Grid, TextField, Button, AppBar, Typography, Toolbar, CssBaseline, Container } from '@material-ui/core';

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

const useStyles = theme => ({
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
  },
});



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

var phantom = {
  display: 'block',
  padding: '20px',
  height: '80%',
  width: '100%',
}

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
          <div style={phantom} />
          <div style={style}>
            <CssBaseline/>
            <Container component="main" className={classes.main} maxWidth="sm">
              <Typography variant="h2" component="h1" gutterBottom>
                Credits to:
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
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

                Evon Dong Bing Bing:
                <Typography className={classes.root}>
                  <Link href="https://github.com/EvonDong" >
                    GitHub page
                  </Link>
                </Typography>

                Michaela Tang::
                <Typography className={classes.root}>
                  <Link href="https://github.com/MichaelaTSH" >
                    GitHub page
                  </Link>
                </Typography>

              </Typography>
              
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

