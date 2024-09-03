import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import SkillsIcon from '../assets/skills_icon.svg';
import CommunityIcon from '../assets/community_icon.svg';
import ChallengeIcon from '../assets/challenge_icon.svg';
import RecognitionIcon from '../assets/recognition_icon.svg';

const WhyParticipate: React.FC = () => {
    return (
        <Box sx={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
                    Why Participate in <Typography component="span" sx={{ color: '#4caf50' }}>AI Challenges?</Typography>
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none', backgroundColor: '#f9f9f9', height: '100%' }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image={SkillsIcon}
                                    alt="Prove your skills"
                                    sx={{ width: '50px', height: 'auto', mb: 3 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Prove your skills
                                </Typography>
                                <Typography variant="body1">
                                    Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none', backgroundColor: '#f9f9f9', height: '100%' }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image={CommunityIcon}
                                    alt="Learn from community"
                                    sx={{ width: '50px', height: 'auto', mb: 3 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Learn from community
                                </Typography>
                                <Typography variant="body1">
                                    One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none', backgroundColor: '#f9f9f9', height: '100%' }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image={ChallengeIcon}
                                    alt="Challenge yourself"
                                    sx={{ width: '50px', height: 'auto', mb: 3 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Challenge yourself
                                </Typography>
                                <Typography variant="body1">
                                    There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none', backgroundColor: '#f9f9f9', height: '100%' }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image={RecognitionIcon}
                                    alt="Earn recognition"
                                    sx={{ width: '50px', height: 'auto', mb: 3 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Earn recognition
                                </Typography>
                                <Typography variant="body1">
                                    You will stand out from the crowd if you do well in AI challenges; it not only helps you shine in the community but also earns rewards.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyParticipate;
