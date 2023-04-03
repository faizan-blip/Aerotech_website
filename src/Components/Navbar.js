import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './IMAGES/LOGO.png';
// import About from './About';
const drawerWidth = 240;
const navItems = [
    { name: 'Home', link:'/' },
    { name: 'About'},
    { name: 'Projects', link: '/Projects' },
    { name: 'Events', link: '/Events' },
    { name: 'Contact Us', link: '/Contact Us' },
  ];

function Navbar(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isTransparent, setIsTransparent] = React.useState(true);

  window.onscroll = function () {
    if (window.scrollY <= 200) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="" width="70px" height="70px" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{ textAlign: 'center' , cursor:'pointer' }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container = windows !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
          background: isTransparent ? 'black' : 'rgba(0, 0, 0, 0.71)',
          boxShadow: isTransparent ? '2px 2px #252525' : 'none',
          backdropFilter: isTransparent ? 'none' : 'blur(14px) saturate(180%)',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(209, 213, 219, 0.3)',
          borderBottomLeftRadius:isTransparent ? 'none' : '15px',
          borderBottomRightRadius:isTransparent ? 'none' : '15px',
          transition: 'all 0.5s ease',
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <img src={logo} alt="" width="70px" height="70px" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
  <Button
  key={item.name}
  sx={{ color: '#fff', padding: '0 1em' }}
  className="Navlist"
  href={item.link}
  onClick={() => {
    if (item.name === 'About') {
      window.scrollTo({
        top: '720',
        behavior: 'smooth',
      });
    }
    if( item.name === 'About' && window.location.pathname !== '/'){
        window.location.href = '/';
    }
     else if(item.name === 'Home'){
        window.scrollTo({
            top:'0',
            behavior:'smooth',
        })
    }
  }}
>
    {item.name}
  </Button>
))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , background:"black" , color:"white" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windows: PropTypes.func,
};

export default Navbar;