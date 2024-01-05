import MuiTypography from '@mui/material/Typography';
import React from 'react';

const CardHeader = ({ children }) => {
  const headerStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '12px',
    borderRadius: '8px 8px 0 0',
    marginBottom: '30px',
    marginTop:'30px',
    fontFamily: 'Playfair Display, sans-serif',
  };
  return (
    <MuiTypography variant="h5" style={headerStyle} gutterBottom>
      {children}
    </MuiTypography>
  );
};

export default CardHeader;
