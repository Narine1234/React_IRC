// Contact.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import '../App.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container style={{ marginTop: '40px' }}>
      <Grid container spacing={3}>
        {/* Office Details Cards */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Office Address</Typography>
              <Typography>Your Company Address</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Phone Number</Typography>
              <Typography>(123) 456-7890</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Fax</Typography>
              <Typography>(123) 456-7891</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Email</Typography>
              <Typography>info@example.com</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5">Contact Us</Typography>
            <TextField label="Name" variant="outlined" margin="normal" fullWidth required />
            <TextField label="Email" type="email" variant="outlined" margin="normal" fullWidth required />
            <TextField label="Message" multiline rows={4} variant="outlined" margin="normal" fullWidth required />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
