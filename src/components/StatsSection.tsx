import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ModelIcon from '../assets/model_icon.svg';
import ScientistIcon from '../assets/scientist_icon.svg';
import ChallengesIcon from '../assets/challenges_icon.svg';

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
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {/* AI Model Submissions */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ModelIcon} alt="AI model submissions" style={{ width: '55px', height: 'auto', marginRight: '20px' }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    100K+
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#d0e1f9' }}>
                                    AI model submissions
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Divider Line */}
                    <Grid item xs={12} md={1}>
                        <Box sx={{ width: '1px', height: '80px', backgroundColor: '#ffffff', margin: '0 auto' }} />
                    </Grid>

                    {/* Data Scientists */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ScientistIcon} alt="Data Scientists" style={{ width: '55px', height: 'auto', marginRight: '20px' }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    50K+
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#d0e1f9' }}>
                                    Data Scientists
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Divider Line */}
                    <Grid item xs={12} md={1}>
                        <Box sx={{ width: '1px', height: '80px', backgroundColor: '#ffffff', margin: '0 auto' }} />
                    </Grid>

                    {/* AI Challenges Hosted */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ChallengesIcon} alt="AI Challenges hosted" style={{ width: '55px', height: 'auto', marginRight: '20px' }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    100+
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#d0e1f9' }}>
                                    AI Challenges hosted
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsSection;
