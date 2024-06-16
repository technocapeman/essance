import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {orange} from '@mui/material/colors';

// Create a theme to customize the color of the CircularProgress
const theme = createTheme({
    palette: {
        primary: {
            main: orange[200],
        },
    },
});

export const LoadingSpinner = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    bgcolor: 'white',
                }}
            >
                <CircularProgress color="primary"/>
            </Box>
        </ThemeProvider>
    );
};
