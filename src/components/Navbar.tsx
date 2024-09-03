import React from 'react';
import { Toolbar, Box } from '@mui/material';
import logo from '../assets/logo.svg'

const Navbar: React.FC = () => {
  return (
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} style={{ width: '100px', marginRight: '10px', height: '40px' }} />
      </Box>
    </Toolbar>
  );
};

export default Navbar;
