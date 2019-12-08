import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom'; 
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { NavCarList } from './CarList';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import ArchiveIcon from '@material-ui/icons/Archive';
import ListAltIcon from '@material-ui/icons/ListAlt';

const drawerWidth = 240;

const drawerTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
const AppTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  linkStyle: { 
    textDecoration: 'none',
    color: 'inherit',
  },
}));

function Header(props) {
  const { container } = props;
  //const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem key='Title'>
          <ListItemIcon>
          <img src={`${process.env.PUBLIC_URL}/favicon.ico`} width='40%' alt='icon' />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" noWrap>
              Car CC
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <List>
        <Divider />
        <Link to='/' className={classes.linkStyle}>
          <ListItem button key='DashBoard'>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary='ダッシュボード' />
          </ListItem>
        </Link>
        <Divider />
        <Link to='/carlist' className={classes.linkStyle}>
          <ListItem button key='CarList'>
            <ListItemIcon><ListAltIcon /></ListItemIcon>
            <ListItemText primary='車両一覧' />
          </ListItem>
        </Link>
          <NavCarList />
        <Divider />
        <Link to='/news' className={classes.linkStyle}>
          <ListItem button key='News'>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary='ニュース' />
          </ListItem>
        </Link>
        <Link to='/archives' className={classes.linkStyle}>
          <ListItem button key='Archive'>
            <ListItemIcon><ArchiveIcon /></ListItemIcon>
            <ListItemText primary='アーカイブ' />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <ThemeProvider theme={AppTheme}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
    <ThemeProvider theme={drawerTheme}>
    <nav className={classes.drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
    </ThemeProvider>
  </ThemeProvider>
  );
}

export default Header;