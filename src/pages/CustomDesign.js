import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Box, MenuItem } from '@mui/material';

const CustomDesign = () => {
  const [formData, setFormData] = useState({
    productType: '',
    size: '',
    color: '',
    quantity: '',
    designNotes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Custom Design
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Product Type"
              value={formData.productType}
              onChange={(e) => setFormData({...formData, productType: e.target.value})}
            >
              <MenuItem value="tshirt">T-Shirt</MenuItem>
              <MenuItem value="hoodie">Hoodie</MenuItem>
              <MenuItem value="jersey">Jersey</MenuItem>
              <MenuItem value="uniform">Uniform</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Size"
              value={formData.size}
              onChange={(e) => setFormData({...formData, size: e.target.value})}
            >
              <MenuItem value="S">Small</MenuItem>
              <MenuItem value="M">Medium</MenuItem>
              <MenuItem value="L">Large</MenuItem>
              <MenuItem value="XL">Extra Large</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              value={formData.color}
              onChange={(e) => setFormData({...formData, color: e.target.value})}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Design Notes"
              value={formData.designNotes}
              onChange={(e) => setFormData({...formData, designNotes: e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="large" type="submit">
              Submit Design Request
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomDesign;