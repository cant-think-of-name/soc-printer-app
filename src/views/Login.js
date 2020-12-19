import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, AppBar,Typography, Toolbar, } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});


class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <AppBar position="static" alignitems="center" color="primary">
              <Toolbar>
                <Grid container justify="center" wrap="wrap">
                  <Grid item>
                    <Typography variant="h6">To print, login using SOC UNIX account</Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <Face />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField id="username" label="Password" type="password" fullWidth required />
                </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary">Login</Button>
              </Grid>
          </div>
        </Paper>
    );
  }
}

export default withStyles(styles)(Login);
// export default Login
