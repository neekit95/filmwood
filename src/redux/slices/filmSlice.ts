import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGMwYjJjNDg3YjdlMmM4MTA4ODA3OWJlNjVlMDllYiIsIm5iZiI6MTcyNTYxNTgzOC41NTE1OTgsInN1YiI6IjY2ZGFjOTEwYmQxZjI2NWRlYjIxYmE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ul50g04VUei79bSjeromlh5di6i0E516MQTR72wBPKw';

export const fetchAllFilms = createAsyncThunk(
    'films/fetchAllFilms',
    async () => {
        const recommended = await axios.get(
            'https://api.themoviedb.org/3/movie/popular',
            {
                headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
                params: {
                    language: 'ru-RU',
                },
            }
        );
        const trending = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated',
            {
                headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
                params: {
                    language: 'ru-RU',
                },
            }
        );
        const newReleases = await axios.get(
            'https://api.themoviedb.org/3/movie/now_playing',
            {
                headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
                params: {
                    language: 'ru-RU',
                },
            }
        );

        return {
            recommended: recommended.data.results,
            trending: trending.data.results,
            newReleases: newReleases.data.results,
        };
    }
);

interface FilmState {
    recommended: any[];
    trending: any[];
    newReleases: any[];
    loading: boolean;
    error: string | null;
}

const initialState: FilmState = {
    recommended: [],
    trending: [],
    newReleases: [],
    loading: false,
    error: null,
};

const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFilms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.recommended = action.payload.recommended;
                state.trending = action.payload.trending;
                state.newReleases = action.payload.newReleases;
            })
            .addCase(fetchAllFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load films';
            });
    },
});

export default filmSlice.reducer;
