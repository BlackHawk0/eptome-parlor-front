import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Services', 'Contact Us'];
const navItems = [<NavLink to="/">Home</NavLink>, <NavLink to="/about">About</NavLink>, <NavLink to="/services">Services</NavLink>, <NavLink to="/contactpage">Contact Us</NavLink>];


export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EPITOME PARLOUR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <AppBar component="nav" sx = {{backgroundColor: '#fff'}}>
      <Grid container spacing={3}sx={{color: 'black', backgroundColor: '#F9F3F1', pt : "1rem", pb : "1rem"}}>
        <Grid item xs={2} sx={{color: "#000000",
        fontSize: "1rem",
        textDecoration: "none",
        "&:hover": {
          fontWeight: "bold",
          paddingBottom: "0.15rem",
          borderBottom: "3px solid #ED806B",
        },
          "&:focus": {
            fontWeight: "bold",
            paddingBottom: "0.15rem",
            borderBottom: "3px solid #ED806B",
          },}}
         >
          <a href="mailto: bookings@epitomeparlour.co.ke" sx={{color: "#000000"}}>bookings@epitomeparlour.co.ke</a>
        </Grid>
        <Grid item xs={7} >
        <a variant="body2" href="tel: +254716212865" sx={{color: "#000000"}}>
                  +254716212865
        </a>
        </Grid>
        </Grid>    
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#000000', display: { xs: 'none', sm: 'block' }, }}
          >
           EPITOME PARLOUR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000000' }}>
                {item}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 5 }}>
        <Toolbar />
        <Typography>
        
        </Typography>
      </Box>
    </Box>
  );
}