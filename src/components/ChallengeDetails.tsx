import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ChallengeDetails: React.FC = () => {
    const location = useLocation();
    const challenge = location.state;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-challenge');
    };

    return (
        <>
            <Navbar />
            <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
                {/* Header section */}
                <Box
                    sx={{
                        backgroundColor: '#003145',
                        color: '#ffffff',
                        padding: '40px 50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // Align content to the left
                    }}
                >
                    <Chip
                        label={`Starts on ${challenge.time}`}
                        sx={{
                            backgroundColor: '#ffc107',
                            color: '#333',
                            fontWeight: 'bold',
                            mb: 2,
                            padding: '10px',
                            borderRadius: '8px',
                        }}
                    />
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {challenge.title} {/* Dynamic Title */}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {challenge.description}
                    </Typography>
                    <Chip label={challenge.difficulty} color="primary" />
                </Box>

                {/* Overview Section with Edit/Delete buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between', // Align Overview on the left and buttons on the right
                        alignItems: 'center',
                        padding: '20px 40px',
                        backgroundColor: '#ffffff',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0 }}>
                        Overview
                    </Typography>

                    <Box>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ marginRight: 2, fontWeight: 'bold', borderRadius: '8px' }}
                            onClick={handleClick}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            sx={{ fontWeight: 'bold', borderRadius: '8px' }}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>

                {/* Overview Content */}
                <Box sx={{ padding: '20px 40px' }}>
                    <Typography variant="body1" sx={{ lineHeight: '1.8',fontFamily: 'Poppins, sans-serif' }}>
                        Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word
                        "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are
                        covered with thousands of tiny scales overlapping in rows.
                        <br />
                        <br />
                        An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision
                        so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for
                        developing an efficient model.
                        <br />
                        <br />
                        Your task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs
                        to.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default ChallengeDetails;
