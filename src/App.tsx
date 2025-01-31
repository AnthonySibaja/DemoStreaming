import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';  
import Login from './pages/Login';  
import Series from './pages/Series';  
import Movies from './pages/Peliculas'; 
const App: React.FC = () => {
    return (
      <Router>
        <CssBaseline />
        <Box sx={{display: 'flex',flexDirection: 'column',minHeight: '100vh'}}>
          <Header />
          <Box
            component="main"sx={{flex: 1, marginTop: '64px', paddingBottom: '64px',}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movies" element={<Movies />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    );
  };
  
  export default App;
