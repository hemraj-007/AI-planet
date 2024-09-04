import React from 'react';
import { Toolbar, Box } from '@mui/material';
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} style={{ width: '100px', marginRight: '10px', height: '40px',marginLeft:'30px' }} onClick={handleClick} />
      </Box>
    </Toolbar>
  );
};

export default Navbar;
