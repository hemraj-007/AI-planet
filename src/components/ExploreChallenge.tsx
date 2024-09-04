import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import challengeImage1 from '../assets/challengeImage1.svg';
import challengeImage2 from '../assets/challengeImage2.svg';
import challengeImage3 from '../assets/challengeImage3.svg';
import challengeImage4 from '../assets/challengeImage4.svg';
import challengeImage5 from '../assets/challengeImage5.svg';
import challengeImage6 from '../assets/challengeImage6.svg';
import tickIcon from '../assets/tick.svg';
import { Search } from './Search';

const ExploreChallenges: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Data for the challenges
    const challenges = [
        {
            title: 'Data Science Bootcamp - Graded Datathon',
            description: 'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
            time: 'Starts in 00 : 15 : 22 Hours Mins',
            status: 'Upcoming',
            difficulty: 'Easy',
            image: challengeImage1, // Image path
        },
        {
            title: 'Data Sprint 72 - Butterfly Identification',
            description: 'Identify the class to which each butterfly belongs.',
            time: 'Starts in 00 : 12 : 34 Hours Mins',
            status: 'Upcoming',
            difficulty: 'Easy',
            image: challengeImage2,
        },
        {
            title: 'Data Sprint 71 - Weather Recognition',
            description: 'Analyze the employment outcomes of engineering graduates across various industries.',
            time: 'Ended on 16th May 2022 09:00 PM',
            status: 'Past',
            difficulty: 'Medium',
            image: challengeImage3, // Store the correct image path
        },
        {
            title: 'Data Sprint 70-Airline Passenger Satisfaction',
            description: 'Analyze the employment outcomes of engineering graduates across various industries.',
            time: 'Ended on 16th May 2022 09:00 PM',
            status: 'Past',
            difficulty: 'Medium',
            image: challengeImage4, // Store the correct image path
        },
        {
            title: 'Engineering Graduates Employment Outcomes',
            description: 'Analyze the employment outcomes of engineering graduates across various industries.',
            time: 'Ended on 16th May 2022 09:00 PM',
            status: 'Past',
            difficulty: 'Medium',
            image: challengeImage5, // Store the correct image path
        },
        {
            title: 'Travel Insurance Claim Prediction',
            description: 'Analyze the employment outcomes of engineering graduates across various industries.',
            time: 'Ended on 16th May 2022 09:00 PM',
            status: 'Past',
            difficulty: 'Medium',
            image: challengeImage6, // Store the correct image path
        },
    ];

    const handleNavigate = (challenge: any) => {
        // Navigate to /challenge-details and pass the challenge data using state
        navigate('/details', { state: challenge });
    };

    return (
        <>
            <Search />
            <Box sx={{ padding: '60px 0', backgroundColor: '#003145', color: '#ffffff' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {challenges.map((challenge: any, index: any) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                                    {/* Add challenge.image here */}
                                    <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                        <img
                                            src={challenge.image}
                                            alt={challenge.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            minHeight: '200px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Chip label={challenge.status} color="primary" sx={{ marginBottom: '16px' }} />
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                            {challenge.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                            {challenge.time}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            onClick={() => handleNavigate(challenge)} // Pass challenge data on click
                                            startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                            sx={{
                                                backgroundColor: '#4caf50',
                                                color: '#ffffff',
                                                borderRadius: '50px',
                                                padding: '10px 20px',
                                                textTransform: 'none',
                                                fontWeight: 'bold',
                                                alignSelf: 'center',
                                            }}
                                        >
                                            Participate Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ExploreChallenges;
