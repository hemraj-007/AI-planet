import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import rocket from '../assets/rocket.svg';
import StatsSection from './StatsSection';
import { useNavigate } from 'react-router-dom'; 

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#003145',
                    padding: '40px 0', // Added padding to give some space around the content
                    textAlign: 'left',  // Align text to the left
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderLeft: '4px solid #FFD700',  // Left border similar to the yellow line
                                    paddingLeft: '20px',  // Padding to move the text away from the border
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{ color: '#ffffff', fontWeight: 'bold', mb: 3 }}
                                >
                                    Accelerate Innovation with Global AI Challenges
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    sx={{ color: '#d0e1f9', mb: 5 }}
                                >
                                    AI Challenges at Dphi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#fff',
                                        color: '#003145',
                                        padding: '10px 20px',
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                    onClick={() => navigate('/create-challenge')}
                                >
                                    Create Challenge
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                            <Box
                                component="img"
                                src={rocket}
                                alt="Rocket"
                                sx={{ maxWidth: '80%', height: 'auto' }} // Adjusted to 80% width for better alignment
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <StatsSection/>
        </>
    );
};

export default LandingPage;
