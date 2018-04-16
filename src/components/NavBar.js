import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from 'material-ui';
import { Menu } from '@material-ui/icons';
import { withStyles } from 'material-ui/styles';

const styles = {
  flex: {
    flex: 1,
  }
}

class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.flex}>
        <AppBar color="primary">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Nazwa aplikacji
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
