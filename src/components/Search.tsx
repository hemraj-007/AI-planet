import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const Search: React.FC = () => {
    return (
        <Box
        sx={{
            backgroundColor: '#002A3B',
            padding: '40px 0',
            color: '#ffffff',
            textAlign: 'center',
        }}
    >
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            Explore Challenges
        </Typography>

        {/* Search and Filter Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, position: 'relative' }}>
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

            {/* Filter Button with Down Arrow */}
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
               
            >
                Filter
            </Button>
        </Box>
    </Box>
    )
}