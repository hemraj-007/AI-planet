import React from 'react';
import LandingPage from './components/LandingPage';
import WhyParticipate from './components/WhyParticipate';
import ExploreChallenges from './components/ExploreChallenge';

const Page: React.FC = () => {
    return (
        <>
            <LandingPage />
            <WhyParticipate />
            <ExploreChallenges />
        </>
    );
};

export default Page;
