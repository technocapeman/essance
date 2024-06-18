import React from 'react'; // Importing React library
import CircularProgress from '@mui/material/CircularProgress'; // Importing CircularProgress component from MUI
import Box from '@mui/material/Box'; // Importing Box component from MUI for layout
import {createTheme, ThemeProvider} from '@mui/material/styles'; // Importing theme creation and ThemeProvider from MUI
import {orange} from '@mui/material/colors'; // Importing orange color from MUI colors

// Create a theme to customize the color of the CircularProgress
const theme = createTheme({
    palette: {
        primary: {
            main: orange[200], // Setting the primary color to a specific shade of orange
        },
    },
});

// Functional component LoadingSpinner to display a loading spinner
export const LoadingSpinner = () => {
    return (
        <ThemeProvider theme={theme}> {/* Wrapping the component with ThemeProvider to apply the custom theme */}
            <Box
                sx={{
                    display: 'flex', // Flexbox layout
                    alignItems: 'center', // Centering items vertically
                    justifyContent: 'center', // Centering items horizontally
                    minHeight: '100vh', // Setting minimum height to full viewport height
                    bgcolor: 'white', // Background color white
                }}
            >
                <CircularProgress color="primary"/> {/* CircularProgress component with custom primary color */}
            </Box>
        </ThemeProvider>
    );
};
