import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Hero = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Delivery',
      description: 'Free shipping on orders above $50'
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: 'Premium Quality',
      description: 'High-quality materials and craftsmanship'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Customer service available anytime'
    }
  ];

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#000',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/hero/main-banner.jpg")', // Updated path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5
          }
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: { xs: 'center', md: 'left' },
            py: 8
          }}
        >
          <Typography 
            variant="h1" 
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 3
            }}
          >
            Premium Custom Apparel
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              maxWidth: '600px'
            }}
          >
            Elevate your style with DUO's premium collection of custom t-shirts, hoodies, uniforms, and jerseys.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              component={Link}
              to="/products"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Shop Now
            </Button>
            <Button 
              variant="outlined" 
              color="inherit"
              size="large"
              component={Link}
              to="/custom-design"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Custom Design
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: 'secondary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Why Choose DUO?
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
            We specialize in creating high-quality custom apparel that helps you express your unique style. 
            From team uniforms to personal fashion statements, we've got you covered.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Custom Design Service
              </Typography>
              <Typography variant="body1" paragraph>
                Work with our expert designers to create your perfect look. 
                Whether it's for your team, business, or personal style, we'll help bring your vision to life.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Quality Materials
              </Typography>
              <Typography variant="body1" paragraph>
                We use only the finest materials to ensure comfort, durability, and style. 
                Our garments are built to last and maintain their quality wash after wash.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;