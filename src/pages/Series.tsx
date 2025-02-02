import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../utils/moviesSlice';
import { RootState, AppDispatch } from '../utils/store';
import { Card, CardMedia, Typography, Grid, Box, Skeleton, TextField, CircularProgress, Pagination, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Popup from '../components/Card';
import { useNavigate, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/img/fondo_pantalla.png';

interface Series {
  title: string;
  description: string;
  releaseYear: number;
  programType: string;
  images: {
    'Poster Art': {
      url: string;
    };
  };
}

const Series: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.movies);
  const entries = data?.entries || [];

  const [yearFilter, setYearFilter] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<Series | null>(null);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [page, setPage] = useState<number>(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setPage(parseInt(pageParam));
    }
  }, [location.search]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearFilter(e.target.value);
    setIsFiltering(true);
    setTimeout(() => {
      setIsFiltering(false);
    }, 500);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`?page=${value}`);
  };

  const handleItemsPerPageChange = (e: SelectChangeEvent<number>) => {
    setItemsPerPage(e.target.value as number);
    setPage(1);
  };

  const filteredSeries = Array.isArray(entries)
    ? entries
        .filter((item) => {
          const isSeries = item.programType?.toLowerCase() === 'series';
          const isYearValid = item.releaseYear >= 2010;
          return isSeries && isYearValid && (!yearFilter || item.releaseYear === parseInt(yearFilter));
        })
        .sort((a, b) => a.title.localeCompare(b.title))
    : [];

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedSeries = filteredSeries.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {Array.from({ length: 20 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" width={345} height={140} />
              <Skeleton variant="text" width={345} height={40} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <TextField
        label="Filtrar por año"
        variant="outlined"
        value={yearFilter}
        onChange={handleFilterChange}
        sx={{ marginBottom: 2, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="body2" sx={{ marginRight: 1, color: 'white' }}>
          Resultados por página:
        </Typography>
        <Select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          sx={{ marginLeft: 2, minWidth: 100, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Pagination
          count={Math.ceil(filteredSeries.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{
            display: { xs: 'block', sm: 'inline-block' },
            padding: '0 10px',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '4px',
          }}
        />
      </Box>
      {isFiltering && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {!isFiltering && filteredSeries.length === 0 && (
        <Typography variant="h6" align="center" sx={{ marginBottom: 2, color: 'white' }}>
          No hay resultados para el año seleccionado.
        </Typography>
      )}
      <Grid container spacing={4} justifyContent="center">
        {paginatedSeries.map((series) => (
          <Grid item xs={12} sm={6} md={4} key={series.title}>
            <Card
              sx={{
                maxWidth: 345,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8, border: '2px solid white' },
                backgroundColor: '#001a3d', // Color de fondo de la carta
              }}
              onClick={() => setSelectedItem(series)}
            >
              <CardMedia
                component="img"
                height="140"
                image={series.images?.['Poster Art']?.url || "/img/cine.jpg"}
                alt={series.title}
              />
              <Typography variant="h5" align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)', padding: 2 }}>
                {series.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedItem && (
        <Popup
          title={selectedItem.title}
          description={selectedItem.description}
          releaseYear={selectedItem.releaseYear}
          imageUrl={selectedItem.images['Poster Art'].url}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </Box>
  );
};

export default Series;