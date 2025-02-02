import React from 'react';
import { Card, CardMedia, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import popularSeriesImage from '../assets/img/series.jpg';
import popularMoviesImage from '../assets/img/pelis.jpg';
import backgroundImage from '../assets/img/fondo_pantalla.png';

const Home: React.FC = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        padding: 2, 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        overflow: 'hidden',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', marginTop: '20px' }}>
        Títulos Populares
      </Typography>

      <Grid 
        container 
        spacing={4} 
        justifyContent="center" 
        alignItems="center" 
        style={{ maxWidth: '1200px', width: '100%', marginTop: '20px' }} 
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 400,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8, border: '2px solid white' },
              backgroundColor: '#001a3d', 
            }}
          >
            <Link to="/series" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="200"
                image={popularSeriesImage} 
                alt="Popular Series"
              />
              <Typography variant="h5" align="center" sx={{ padding: 2, color: '#white' }}> 
                Series Populares
              </Typography>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 400,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8, border: '2px solid white' },
              backgroundColor: '#001a3d', 
            }}
          >
            <Link to="/movies" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="200"
                image={popularMoviesImage}
                alt="Popular Movies"
              />
              <Typography variant="h5" align="center" sx={{ padding: 2, color: '#white' }}>
                Peliculas Populares
              </Typography>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;