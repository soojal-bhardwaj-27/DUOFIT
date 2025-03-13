import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery, 
  useTheme,
  Badge,
  Box,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { state } = useCart();

  const menuItems = ['Home', 'Products', 'Custom Design', 'About', 'Contact'];
  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#1a1a1a' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ padding: { xs: 0 } }}>
            <Typography 
              variant="h5" 
              component={Link} 
              to="/" 
              sx={{ 
                flexGrow: 1, 
                textDecoration: 'none', 
                color: 'white',
                fontWeight: 'bold',
                '&:hover': { opacity: 0.8 }
              }}
            >
              DUO
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mr: 2 }}>
                {menuItems.map((item) => (
                  <Button 
                    color="inherit" 
                    key={item} 
                    component={Link} 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    sx={{
                      fontSize: '1rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            <IconButton 
              color="inherit" 
              onClick={() => setCartOpen(true)}
              sx={{ ml: isMobile ? 1 : 0 }}
            >
              <Badge 
                badgeContent={cartItemsCount} 
                color="secondary"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#f50057'
                  }
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar /> {/* Spacer for fixed AppBar */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#1a1a1a',
            color: 'white'
          }
        }}
      >
        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item} 
              component={Link} 
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1.1rem'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;