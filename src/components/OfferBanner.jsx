import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';

const OfferBanner = () => {
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main, // Use theme colors for consistency
      color: theme.palette.primary.contrastText,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      top: '1310px',
      marginLeft:'50px',
    //   marginTop:'25px',
    //   marginBottom:'25px',
      left: 0,
      right: 0,
      zIndex:100,
    //   height:70px;
    minHeight: '65px',
    }}>
      <div>
       <h5><b>Get a chance to save a <strong>LIFE!</strong> It will save <strong>YOU</strong> one day!</b></h5>
      </div>
      <Button
        variant="contained"
        color="secondary" // Adjust the button color as needed
        sx={{ ml: theme.spacing(2) }} // Use sx prop for inline styling
        href="/your-offer-link" // Replace with your actual offer link
      >
        Donate Monthly!
      </Button>
    </Paper>
  );
};

export default OfferBanner;
