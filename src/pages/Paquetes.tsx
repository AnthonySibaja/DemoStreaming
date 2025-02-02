import React from 'react';
import { Card, Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/img/fondo_pantalla.png';

const Paquetes: React.FC = () => {
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
        Elige tu plan
      </Typography>

      <Grid 
        container 
        spacing={4} 
        justifyContent="center" 
        alignItems="center" 
        style={{ maxWidth: '1200px', width: '100%', marginTop: '20px' }} 
      >
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/paquete" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              sx={{
                maxWidth: 400,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8, border: '2px solid white' },
                padding: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Básico con anuncios
              </Typography>
              <Typography variant="h4" align="center" gutterBottom>
                ₡4000 /mes
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
                Precio total anual ₡48,000
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="2 dispositivos a la vez" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resolución Full HD" />
                </ListItem>
              </List>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/paquete" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              sx={{
                maxWidth: 400,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8, border: '2px solid white' },
                padding: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Estándar
              </Typography>
              
              <Typography variant="h4" align="center" gutterBottom>
                ₡10,000 /mes
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
                Precio total anual ₡120,000
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="2 dispositivos a la vez" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resolución Full HD" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="30 descargas para disfrutar offline" />
                </ListItem>
              </List>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/paquete" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              sx={{
                maxWidth: 400,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8, border: '2px solid white' },
                padding: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Platino
              </Typography>
              <Typography variant="h4" align="center" gutterBottom>
                ₡20,000 /mes
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
                Precio total anual ₡240,000
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="4 dispositivos a la vez" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resolución Full HD y 4K Ultra HD *" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Audio Dolby Atmos *" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="100 descargas para disfrutar offline" />
                </ListItem>
              </List>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Paquetes;