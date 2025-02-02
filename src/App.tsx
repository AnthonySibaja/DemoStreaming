import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';  
import Login from './pages/Login';  
import Series from './pages/Series';  
import Movies from './pages/Peliculas'; 
import Paquetes from './pages/Paquetes'; 
const Layout: React.FC = () => {
  const location = useLocation();

  const noFooterPages = ['/login'];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, marginTop: '64px', paddingBottom: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/paquete" element={<Paquetes />} />
        </Routes>
      </Box>
      {noFooterPages.indexOf(location.pathname) === -1 && <Footer />}
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Layout />
    </Router>
  );
};

export default App;
