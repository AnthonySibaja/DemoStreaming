import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import appStoreImage from '../assets/img/app-store.png';
import googlePlayImage from '../assets/img/Google_Play_Store_badge_EN.svg.png';
import microsoftImage from '../assets/img/microsoft.png';
import instagramImage from '../assets/img/instagram.png';
import facebookImage from '../assets/img/facebook.png';
import xImage from '../assets/img/x.png';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#001a3d',
        color: 'white',
        textAlign: 'center',
        padding: '8px 0', 
        position: 'relative',
        bottom: 0,
        left: 0,
        zIndex: 1000,
        marginTop: 0, 
      }}
    >
      <Container maxWidth="lg" sx={{ padding: 0 }}> 
        <Grid container spacing={1} justifyContent="center" sx={{ marginBottom: 1 }}>
          {['Home', 'Terms and Conditions', 'Privacy Policy', 'Collection Statement', 'Help', 'Manage Account'].map(
            (text, index) => (
              <Grid item key={index}>
                <Link
                  href={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: '0.8rem' }} 
                >
                  {text}
                </Link>
              </Grid>
            ),
          )}
        </Grid>
        <Typography variant="body2" sx={{ marginBottom: 1, fontSize: '0.75rem' }}> 
          COPYRIGHT© {new Date().getFullYear()} DEMO Streaming. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            padding: 0,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramImage} alt="Instagram" style={{ height: '20px' }} /> 
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookImage} alt="Facebook" style={{ height: '20px' }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={xImage} alt="X (Twitter)" style={{ height: '20px' }} />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appStoreImage} alt="App Store" style={{ height: '30px' }} /> 
            </Link>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={googlePlayImage} alt="Google Play" style={{ height: '30px' }} />
            </Link>
            <Link href="https://www.microsoft.com/store" target="_blank" rel="noopener noreferrer">
              <img src={microsoftImage} alt="Microsoft Store" style={{ height: '30px' }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;