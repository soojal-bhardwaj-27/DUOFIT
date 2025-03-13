import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
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
          backgroundImage: 'url("/images/hero-bg.jpg")', // You'll need to add this image
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
            opacity: 0.9
          }}
        >
          Design Your Perfect Look with DUO
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
  );
};

export default Hero;