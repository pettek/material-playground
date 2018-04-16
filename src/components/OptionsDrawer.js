import React, { Component } from 'react';
import { Drawer, Divider, IconButton } from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Inbox, Drafts, ChevronRight } from '@material-ui/icons';

class OptionsDrawer extends Component {
  render () {
    return (
      <Drawer
        variant="persistent"
        open
      >
        <div>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronRight />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default OptionsDrawer;
