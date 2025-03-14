import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  TextField, 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Chip 
} from '@mui/material';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Classic Cotton T-Shirt',
      price: 29.99,
      category: 'T-Shirts',
      image: '/images/products/tshirt-1.jpg',
      description: 'Premium cotton t-shirt with comfortable fit'
    },
    {
      id: 2,
      name: 'Hooded Sweatshirt',
      price: 49.99,
      category: 'Hoodies',
      image: '/images/products/t-2.png',
      description: 'Warm and cozy hoodie for everyday wear'
    },
    {
      id: 3,
      name: 'Premium Basketball Jersey',
      price: 59.99,
      category: 'Jerseys',
      image: '/images/products/t-3.png',
      description: 'Professional-grade basketball jersey with moisture-wicking fabric'
    },
    {
      id: 4,
      name: 'Team Uniform Set',
      price: 89.99,
      category: 'Uniforms',
      image: '/images/products/t-4.png',
      description: 'Complete team uniform set including jersey and shorts'
    },
    {
      id: 5,
      name: 'Vintage Logo T-Shirt',
      price: 34.99,
      category: 'T-Shirts',
      image: '/images/products/t-5.png',
      description: 'Retro-style t-shirt with classic team logo design'
    },
    {
      id: 6,
      name: 'Performance Zip Hoodie',
      price: 64.99,
      category: 'Hoodies',
      image: '/images/products/t-6.png',
      description: 'Athletic zip-up hoodie with thermal regulation technology'
    },
    {
      id: 7,
      name: 'Limited Edition Jersey',
      price: 79.99,
      category: 'Jerseys',
      image: '/images/products/t-7.png',
      description: 'Collector\'s edition commemorative team jersey'
    },
    {
      id: 8,
      name: 'Practice Uniform Kit',
      price: 69.99,
      category: 'Uniforms',
      image: '/images/products/t-8.png',
      description: 'Lightweight practice uniform for training sessions'
    },
    {
      id: 9,
      name: 'Graphic Print T-Shirt',
      price: 32.99,
      category: 'T-Shirts',
      image: '/images/products/t-9.png',
      description: 'Bold graphic design t-shirt with team mascot'
    },
    {
      id: 10,
      name: 'Winter Fleece Hoodie',
      price: 54.99,
      category: 'Hoodies',
      image: '/images/products/t-shirt-1.jpg',
      description: 'Warm fleece-lined hoodie for cold weather'
    },
    {
      id: 11,
      name: 'Away Game Jersey',
      price: 69.99,
      category: 'Jerseys',
      image: '/images/products/jersey-3.jpg',
      description: 'Official away game jersey with team colors'
    },
    {
      id: 12,
      name: 'Custom Name T-Shirt',
      price: 39.99,
      category: 'T-Shirts',
      image: '/images/products/tshirt-4.jpg',
      description: 'Customizable t-shirt with your name and number'
    }
  ];

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Jerseys', 'Uniforms'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $30', value: '0-30' },
    { label: '$30 - $50', value: '30-50' },
    { label: 'Over $50', value: '50-above' }
  ];

  const filterProducts = () => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || product.category === category;
      const matchesPriceRange = priceRange === 'all' || checkPriceRange(product.price, priceRange);
      
      return matchesSearch && matchesCategory && matchesPriceRange;
    });
  };

  const checkPriceRange = (price, range) => {
    switch(range) {
      case '0-30': return price < 30;
      case '30-50': return price >= 30 && price <= 50;
      case '50-above': return price > 50;
      default: return true;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Products
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Price Range</InputLabel>
              <Select
                value={priceRange}
                label="Price Range"
                onChange={(e) => setPriceRange(e.target.value)}
              >
                {priceRanges.map((range) => (
                  <MenuItem key={range.value} value={range.value}>
                    {range.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {filterProducts().map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                  <Chip label={product.category} color="secondary" size="small" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;