import React from 'react';
import { withStyles, Box, Link, Typography, Container} from '@material-ui/core';

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

const styles = (theme) => ({
  root: {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: theme.spacing(2.5),
    width: "100%",
  },
  footer: {
    bottom: "0",
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <footer className={classes.footer} >
          <Container>
              Credits to:
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="column">
                Chow Jia Ying:
                <Link href="https://www.github.com/C-likethis123" >
                  GitHub page
                </Link>
                <Link href="https://c-likethis123.github.io/website/" >
                  Personal page
                </Link>
              </Box>
              <Box display="flex" flexDirection="column">
                Lim Kang Yee:
                <Link href="https://github.com/kangyeelim" >
                  GitHub page
                </Link>
                <Link href="https://kangyeelim.github.io/aboutme/" >
                  Personal page
                </Link>
              </Box>
              <Box display="flex" flexDirection="column">
                Evon Dong Bing Bing:
                <Link href="https://github.com/EvonDong" >
                  GitHub page
                </Link>
              </Box>
              <Box display="flex" flexDirection="column">
                Michaela Tang:
                  <Link href="https://github.com/MichaelaTSH" >
                    GitHub page
                  </Link>
              </Box>
            </Box>
            <Copyright />
          </Container>
        </footer>
      </Box>
  )
}
}

export default withStyles(styles)(Footer);

