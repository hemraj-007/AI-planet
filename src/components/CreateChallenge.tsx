import React from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import Navbar from './Navbar';
import uploadIcon from '../assets/upload.svg'
import { useNavigate } from 'react-router-dom';

const ChallengeDetails: React.FC = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/')
  }

  return (
    <>
      <Navbar />

      {/* Challenge Details Header */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#F8F9FD',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            marginLeft: '30px'
          }}
        >
          Challenge Details
        </Typography>
      </Box>

      {/* Form Section */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: '50%',
          paddingLeft: '20px',
          mt: 4,
          marginLeft: '30px'
        }}
      >
        {/* Challenge Name */}
        <Typography variant="subtitle1" sx={{ fontWeight: '500', color: '#333' }}>
          Challenge Name
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          required
        />

        {/* Start Date */}
        <Typography variant="subtitle1" sx={{ fontWeight: '500', color: '#333' }}>
          Start Date
        </Typography>
        <TextField
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* End Date */}
        <Typography variant="subtitle1" sx={{ fontWeight: '500', color: '#333' }}>
          End Date
        </Typography>
        <TextField
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Description */}
        <Typography variant="subtitle1" sx={{ fontWeight: '500', color: '#333' }}>
          Description
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />

        {/* Image Upload */}
        <Typography variant="subtitle1" sx={{ fontWeight: '500', color: '#333' }}>
          Image
        </Typography>
        <Button
          variant="outlined"
          component="label"
          sx={{
            padding: '10px 20px',
            width: '200px',
            backgroundColor: '#F4F4F4',
            color: '#333',
          }}
        >
          Upload
          <img src={uploadIcon} alt="" style={{ marginLeft: '10px' }} /> {/* Add margin to the img */}
          <i className="fas fa-upload" style={{ marginLeft: '10px' }} />
          <input type="file" hidden />
        </Button>


        {/* Level Type */}
        <Typography variant="subtitle1" sx={{ fontWeight: '500', color: '#333' }}>
          Level Type
        </Typography>
        <TextField
          select
          fullWidth
          defaultValue="Easy"
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Hard">Hard</MenuItem>
        </TextField>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '200px',backgroundColor:'#44924C' }}
          onClick={handleClick}
        >
          Create Challenge
        </Button>
      </Box>
    </>
  );
};

export default ChallengeDetails;
