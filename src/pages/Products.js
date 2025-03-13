import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: '$24.99',
    image: '/products/tshirt.jpg',
    category: 'T-Shirts'
  },
  {
    id: 2,
    name: 'Premium Hoodie',
    price: '$49.99',
    image: '/products/hoodie.jpg',
    category: 'Hoodies'
  },
  {
    id: 3,
    name: 'Team Jersey',
    price: '$39.99',
    image: '/products/jersey.jpg',
    category: 'Jerseys'
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">{product.price}</Typography>
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
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