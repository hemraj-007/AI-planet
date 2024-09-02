import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ModelIcon from '../assets/model_icon.svg';
import ScientistIcon from '../assets/scientist_icon.svg';
import ChallengesIcon from '../assets/challenges_icon.svg'; // Assuming you have these icons

const StatsSection: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#002A3B',
                padding: '40px 0',
                color: '#ffffff',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Box>
                            <img src={ModelIcon} alt="AI model submissions" style={{ width: '60px', height: 'auto', marginBottom: '10px' }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                100K+
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#d0e1f9' }}>
                                AI model submissions
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <img src={ScientistIcon} alt="Data Scientists" style={{ width: '60px', height: 'auto', marginBottom: '10px' }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                50K+
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#d0e1f9' }}>
                                Data Scientists
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <img src={ChallengesIcon} alt="AI Challenges hosted" style={{ width: '60px', height: 'auto', marginBottom: '10px' }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                100+
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#d0e1f9' }}>
                                AI Challenges hosted
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsSection;
