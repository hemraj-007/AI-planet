import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import challengeImage1 from '../assets/challengeImage1.svg';
import challengeImage2 from '../assets/challengeImage2.svg';
import challengeImage3 from '../assets/challengeImage3.svg';
import challengeImage4 from '../assets/challengeImage4.svg';
import challengeImage5 from '../assets/challengeImage5.svg';
import challengeImage6 from '../assets/challengeImage6.svg';
import tickIcon from '../assets/tick.svg'; // Ensure this path is correct

const ExploreChallenges: React.FC = () => {
    return (
        <Box sx={{ padding: '60px 0', backgroundColor: '#003145', color: '#ffffff' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
                    Explore Challenges
                </Typography>

                {/* Search and Filter Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Box sx={{ flexGrow: 1, mr: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: '25px', px: 2 }}>
                            <SearchIcon sx={{ color: '#9e9e9e', mr: 1 }} />
                            <input
                                type="text"
                                placeholder="Search"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'transparent',
                                    width: '100%',
                                    padding: '10px 0',
                                    fontSize: '16px',
                                    color: '#333',
                                }}
                            />
                        </Box>
                    </Box>
                    <Button
                        variant="outlined"
                        startIcon={<FilterListIcon />}
                        sx={{
                            color: '#ffffff',
                            borderColor: '#ffffff',
                            borderRadius: '25px',
                            textTransform: 'none',
                        }}
                    >
                        Filter
                    </Button>
                </Box>


                {/* Challenges Grid */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                            <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                <img src={challengeImage1} alt="Challenge 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Chip label="Upcoming" color="primary" sx={{ marginBottom: '16px' }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Data Science Bootcamp - Graded Datathon
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                    Starts in 00 : 15 : 22 Hours Mins
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: '#ffffff',
                                        borderRadius: '50px', // Curvy edges
                                        padding: '10px 20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Participate Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                            <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                <img src={challengeImage2} alt="Challenge 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Chip label="Upcoming" color="primary" sx={{ marginBottom: '16px' }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Data Sprint 72 - Butterfly Identification
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                    Starts in 00 : 12 : 34 Hours Mins
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '10px 20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Participate Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                            <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                <img src={challengeImage3} alt="Challenge 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Chip label="Past" color="secondary" sx={{ marginBottom: '16px' }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Engineering Graduates Employment Outcomes
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                    Ended on 16th May '22 09:00 PM
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '10px 20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Participate Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                            <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                <img src={challengeImage4} alt="Challenge 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Chip label="Past" color="secondary" sx={{ marginBottom: '16px' }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Travel Insurance Claim Prediction
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                    Ended on 16th May '22 09:00 PM
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '10px 20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Participate Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                            <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                <img src={challengeImage5} alt="Challenge 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Chip label="Past" color="secondary" sx={{ marginBottom: '16px' }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Engineering Graduates Employment Outcomes
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                    Ended on 16th May '22 09:00 PM
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '10px 20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Participate Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ backgroundColor: '#f9f9f9', height: '100%', borderRadius: '20px' }}>
                            <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                                <img src={challengeImage6} alt="Challenge 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <CardContent sx={{ minHeight: '200px' }}>
                                <Chip label="Past" color="secondary" sx={{ marginBottom: '16px' }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Travel Insurance Claim Prediction
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                                    Ended on 16th May '22 09:00 PM
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={tickIcon} alt="Tick Icon" style={{ width: '20px', height: '20px' }} />}
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '10px 20px',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Participate Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ExploreChallenges;
