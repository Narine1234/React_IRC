// Home.jsx
import * as React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import ImageCarousel from "./ImageCarousel";
import images from "./images";
import Box from '@mui/material/Box';
import ContactButton from './ContactButton';
import ProductCardSlider from './CardSlider';
import donationCards from './flowers';
import ColumnGroupingTable from './ColumnGroupingTable';
import OfferBanner from './OfferBanner';
import ApexChart from './ApexChart';
import StockAnalysisChart from './AnalysisChart';

// import { useTheme } from './ThemeContext';

const Home = () => {

  // const themeContext = useTheme(); // Use the context

  // // Access theme and toggleTheme from themeContext
  // const { theme, toggleTheme } = themeContext;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
        <ImageCarousel images={images} />
    <Layout>
      <Container>
      <OfferBanner/>
        {/* Hero Section */}
        <Typography variant="h5" gutterBottom>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
          Our Mission
        </Typography> 
        <Typography paragraph>
        WeCareForYou is not just a donation and fundraising platform; it's a movement driven by the mission to spread love, hope, and support to communities around the globe. Our core objective is to empower individuals and organizations to make a difference by providing a reliable and accessible platform for fundraising and charitable giving..
        </Typography>
        <Grid container justifyContent="space-between">
      <Grid item xs={12} md={6}>
        <StockAnalysisChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexChart />
      </Grid>
    </Grid>

        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            {/* Make a Difference Box */}
            <Box
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '25px',
                width: '100%',
                marginBottom: '100px',
                
              }}
            >
              <Typography variant="h4" gutterBottom>
                Make Difference with Generosity
              </Typography>
              <Typography paragraph>
                Welcome to our donation and fundraising platform, where every contribution creates a positive impact. Join us in supporting causes that matter and creating a lasting impact and be a catalyst for positive change today.
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/start-fundraiser">
                Start Your Fundraiser
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Our Impact Box */}
            <Box
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '25px',
                width: '100%',
                marginBottom: '100px',
                
              }}
            >
              <Typography variant="h4" gutterBottom>
                Our Impact
              </Typography>
              <Typography paragraph>
                At WeCareForU, our impact is measured in the lives transformed and communities uplifted through collective giving. Every donation made contributes to real, tangible change, fostering hope, supporting causes that matter, and making a positive difference in the world. Join us.
              </Typography>

              {/* Call-to-Action Buttons */}
              <Grid container spacing={3} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={Link} to="/explore-campaigns">
                    Explore Campaigns
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" component={Link} to="/make-donation">
                    Make a Donation
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Mission Statement */}
        

        {/* Featured Campaigns */}
        {/* <Typography variant="h5" gutterBottom>
          Featured Campaigns
        </Typography> */}
        {/* Display a few featured campaigns with images, descriptions, and progress indicators */}

        {/* Testimonials or Success Stories */}
        {/* <Typography variant="h5" gutterBottom>
          Success Stories
        </Typography> */}
        {/* Showcase real stories with testimonials, photos, and outcomes */}

        {/* How It Works Section */}
        {/* <Typography variant="h5" gutterBottom>
          How It Works
        </Typography> */}
        {/* Visual explanation of how your donation platform works in steps */}

        {/* Impact Metrics */}
        {/* Display real-time or cumulative impact metrics */}

        {/* <SuccessStories stories={SuccessStoriesData} /> */}
        {/* <TestiMonials></TestiMonials> */}
        <ContactButton />
      </Container>

      {/* Fundraiser Widget */}
      <div className="fundraiser-widget">
        {/* Add your fundraiser widget content */}
      </div>
      <section className="container2">
    <div className="title2">
    <h2>Thousands are in NEED</h2>
    <div className="underline2"></div>
    </div>
    </section>
      <ProductCardSlider products={donationCards} />
      <section className="container2">
    <div className="title3">
    <h2>Data Analytics</h2>
    <div className="underline3"></div>
    </div>
    </section>
    <Typography variant="h6" paragraph  sx={{ marginLeft:'60px',marginTop:'20px', marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0' }}>
            We believe in transparency, and your trust is important to us. 
            Our platform ensures that every donation is accounted for, and 
            our commitment to transparency is reflected in our operations and the DETAILS OF DONORS!!!
          </Typography>
          
          {/* Typography 'Details of the donors' */}
          <Typography variant="h6" paragraph>
            
          </Typography>
      <ColumnGroupingTable />
    </Layout>
    </div>
  );
};

export default Home;
