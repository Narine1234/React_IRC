import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { ThemeProvider } from '@mui/joy/styles';
import './button.css';

// ... (other imports)

export default function DonationCard({
  imageSrc,
  title,
  targetAmount,
  currentAmount,
  name,
  disease,
}) {
  return (
    <ThemeProvider>
       <Card sx={{ width: 320, maxWidth: '75%', boxShadow: 'lg', margin: '0', borderRadius: '20px' ,marginLeft:'100px'}}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={imageSrc} srcSet={`${imageSrc} 2x`} loading="lazy" alt={title} />
          </AspectRatio>
        </CardOverflow>
      <CardContent>
        {/* <Typography style={{ fontSize: '14px' }}>Urgency: {urgency}</Typography> */}
        <Typography style={{ fontSize: '20px' }}>Cause: {disease}</Typography>
        <Typography style={{ fontSize: '14px' }}>Name: {name}</Typography>
        {/* <Typography style={{ fontSize: '14px' }}>Age: {age}</Typography> */}
        <Typography style={{ fontSize: '14px' }}>Target Amount: {targetAmount} INR</Typography>
        <Typography style={{ fontSize: '14px' }}>Current Amount: {currentAmount} INR</Typography>
        
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Button style={{ backgroundColor: '#001f3f', color: 'white' }}>
            <ShareIcon />Share
          </Button>
          <Button style={{ backgroundColor: '#8b0000', color: 'white' }}>
            <FavoriteIcon />Donate
          </Button>
        </div>
      </CardContent>
      

      </Card>
    </ThemeProvider>
  );
}
