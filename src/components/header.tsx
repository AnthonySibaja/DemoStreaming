import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1100, backgroundColor: '#1976d2' }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Demo Streaming
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'grey', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
            component={Link}
            to="*"
          >
            Start your free trial
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">
              Login
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="*"
              sx={{ backgroundColor: 'grey', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
            >
              Start your free trial
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;