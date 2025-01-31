import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../utils/moviesSlice';
import { RootState, AppDispatch } from '../utils/store';
import { Card, CardMedia, Typography, Grid, Box, Skeleton, TextField, CircularProgress } from '@mui/material';
import Popup from '../components/Card';

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

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearFilter(e.target.value);
    setIsFiltering(true); 
    setTimeout(() => {
      setIsFiltering(false); 
    }, 500);
  };

  const filteredSeries = Array.isArray(entries)
    ? entries
        .filter((item) => {
          const isSeries = item.programType?.toLowerCase() === 'series';
          const isYearValid = item.releaseYear >= 2010;
          return isSeries && isYearValid && (!yearFilter || item.releaseYear === parseInt(yearFilter));
        })
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 20)
    : [];

  console.log("Series filtradas:", filteredSeries);

  if (loading) {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
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
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* Filtro por año */}
      <TextField
        label="Filtrar por año"
        variant="outlined"
        value={yearFilter}
        onChange={handleFilterChange}
        sx={{ marginBottom: 2 }}
      />
      {isFiltering && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {!isFiltering && filteredSeries.length === 0 && (
        <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
          No hay resultados para el año seleccionado.
        </Typography>
      )}
      <Grid container spacing={2}>
        {filteredSeries.map((series) => (
          <Grid item xs={12} sm={6} md={4} key={series.title}>
            <Card
              sx={{
                maxWidth: 345,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8, border: '2px solid white' },
              }}
              onClick={() => setSelectedItem(series)}
            >
              <CardMedia
                component="img"
                height="140"
                image={series.images?.['Poster Art']?.url || "/img/cine.jpg"} 
              />
              <Typography variant="h5" align="center">
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