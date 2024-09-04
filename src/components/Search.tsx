import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

export const Search: React.FC = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Manage the filter dropdown visibility

    // Toggle filter dropdown
    const handleToggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <Box sx={{ backgroundColor: '#002A3B', padding: '40px 0', color: '#ffffff', textAlign: 'center', position: 'relative' }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
                Explore Challenges
            </Typography>

            {/* Search and Filter Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                {/* Search Bar */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        borderRadius: '15px',
                        px: 2,
                        width: '60%',
                        maxWidth: '600px',
                    }}
                >
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

                {/* Filter Button */}
                <Button
                    variant="outlined"
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        color: 'black',
                        borderColor: '#ffffff',
                        borderRadius: '15px',
                        textTransform: 'none',
                        ml: 2,
                        height: '50px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        backgroundColor: '#fff',
                    }}
                    onClick={handleToggleFilter} // Toggle the filter dropdown on click
                >
                    Filter
                </Button>
            </Box>

            {/* Filter Dropdown */}
            {isFilterOpen && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '120px',
                        right: '50px',
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        padding: '20px',
                        width: '250px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
                        zIndex: 20, // Ensure the dropdown is above other elements
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        sx={{ position: 'absolute', top: '10px', right: '10px' }}
                        onClick={handleToggleFilter}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Filter Title */}
                    <Typography variant="h6" sx={{ mb: 2, color: 'black', fontWeight: 'bold' }}>
                        Filter
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    {/* Status Filter */}
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold', color: '#333' }}>
                        Status
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            All
                        </label>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Active
                        </label>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Upcoming
                        </label>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Past
                        </label>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {/* Level Filter */}
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold', color: '#333' }}>
                        Level
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Easy
                        </label>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Medium
                        </label>
                        <label style={{ color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '8px' }} />
                            Hard
                        </label>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
