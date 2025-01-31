import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import appStoreImage from './img/app-store.png';
import googlePlayImage from './img/Google_Play_Store_badge_EN.svg.png';
import microsoftImage from './img/microsoft.png';
import instagramImage from './img/instagram.png';
import facebookImage from './img/facebook.png';
import xImage from './img/x.png';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
        padding: 2,
        textAlign: 'center',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        {/* Enlaces del footer */}
        <Grid container spacing={2} justifyContent="center">
          {['Home', 'Terms and Conditions', 'Privacy Policy', 'Collection Statement', 'Help', 'Manage Account'].map(
            (text, index) => (
              <Grid item key={index}>
                <Link href={`/${text.toLowerCase().replace(/\s+/g, '-')}`} color="inherit" underline="hover">
                  {text}
                </Link>
              </Grid>
            ),
          )}
        </Grid>

        
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          COPYRIGHT© {new Date().getFullYear()} DEMO Streaming. All Rights Reserved.
        </Typography>

        
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramImage} alt="Instagram" style={{ height: '30px' }} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookImage} alt="Facebook" style={{ height: '30px' }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={xImage} alt="X (Twitter)" style={{ height: '30px' }} />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appStoreImage} alt="App Store" style={{ height: '40px' }} />
            </Link>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={googlePlayImage} alt="Google Play" style={{ height: '40px' }} />
            </Link>
            <Link href="https://www.microsoft.com/store" target="_blank" rel="noopener noreferrer">
              <img src={microsoftImage} alt="Microsoft Store" style={{ height: '40px' }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;