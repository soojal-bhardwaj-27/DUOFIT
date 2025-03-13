import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About DUO
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            DUO is a premium clothing manufacturer specializing in custom t-shirts, hoodies, uniforms, and jerseys. 
            Founded with a passion for quality and design, we've been serving customers with excellence since our inception.
          </Typography>
          <Typography variant="body1" paragraph>
            Our commitment to quality materials and innovative designs has made us a trusted partner for individuals, 
            teams, and organizations looking for premium custom apparel.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Our Mission</Typography>
                <Typography variant="body2">
                  To provide high-quality, customizable apparel that helps our customers express their unique identity.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Our Vision</Typography>
                <Typography variant="body2">
                  To become the leading custom apparel provider, known for quality, innovation, and customer satisfaction.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;