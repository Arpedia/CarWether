import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icon
import DriveEtaIcon from '@material-ui/icons/DriveEta';

function NavCarList() {
    return (
        <ListItem button key='Car'>
          <ListItemIcon><DriveEtaIcon /></ListItemIcon>
          <ListItemText primary='CT200h' />
        </ListItem>
    )
}

export { NavCarList };