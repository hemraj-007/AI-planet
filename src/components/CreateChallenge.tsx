import React from 'react';
import { Typography, Container, TextField, Button, MenuItem } from '@mui/material';
import Navbar from './Navbar';

const CreateChallenge: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Challenge Details
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Challenge Name"
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Start Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ mb: 3 }}
        >
          Upload Image
          <input type="file" hidden />
        </Button>
        <TextField
          fullWidth
          label="Level Type"
          select
          variant="outlined"
          sx={{ mb: 3 }}
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Hard">Hard</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Create Challenge
        </Button>
      </form>
    </Container>
    </>
  );
};

export default CreateChallenge;
