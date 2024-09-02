import React from 'react';
import { AppBar, Toolbar,  Box } from '@mui/material';
import logo from '../assets/logo.svg'

const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="static"
      sx={{ backgroundColor: '#fff', padding: '0 24px' }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} style={{ width: '100px', marginRight: '10px',height:'40px' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
