import React from 'react';
import { Card, CardMedia, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import popularSeriesImage from './img/cine.png';
import popularMoviesImage from './img/cine.png';

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
        alignItems: 'center' 
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
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
              maxWidth: 345,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8, border: '2px solid white' },
            }}
          >
            <Link to="/series" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="140"
                image={popularSeriesImage} 
                alt="Popular Series"
              />
              <Typography variant="h5" align="center" sx={{ padding: 2 }}>
                Series Populares
              </Typography>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8, border: '2px solid white' },
            }}
          >
            <Link to="/movies" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="140"
                image={popularMoviesImage}
                alt="Popular Movies"
              />
              <Typography variant="h5" align="center" sx={{ padding: 2 }}>
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
