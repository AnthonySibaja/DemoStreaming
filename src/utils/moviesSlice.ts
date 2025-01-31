import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface Movie {
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
interface MoviesState {
  data: Movie[];
  loading: boolean;
  error: string | null;
}
const initialState: MoviesState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get<Movie[]>('/sample.json');
  console.log('Datos cargados:', response.data);
  return response.data;
});
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar los datos';
      });
  },
});

export default moviesSlice.reducer;