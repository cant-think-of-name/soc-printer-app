import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, AppBar, Typography, Toolbar, } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import StateContext from "../context"
import { withRouter } from "react-router";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loading: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static contextType = StateContext
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  async handleSubmit(event) {
    const { history } = this.props
    const wsConnection = this.context
    const {username, password, loading} = this.state
    this.setState({ loading: true });
    wsConnection.connect(username, password)
      .then(() => history.push("/print"))
      .catch(() => this.setState({ loading: false }))
  }

  render() {
      const { classes } = this.props;
      const { loading } = this.state;

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
                  <TextField id="username" label="Username" type="email" onChange={this.handleChange} fullWidth autoFocus required />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField id="password" label="Password" type="password" onChange={this.handleChange} fullWidth required />
                </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" id="loginbutton" color="primary" onClick={this.handleSubmit} disabled={loading}>
                    {loading && <span>Loading</span>}
                    {!loading && <span>Login</span>}
                </Button>
              </Grid>
          </div>
        </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(Login));
