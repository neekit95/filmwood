import { createSlice } from '@reduxjs/toolkit';
import { FilmState } from '@lib/types';
import { fetchFilmById, fetchAllFilms } from '@redux/thunks/fetch-films-thunk';

const initialState: FilmState = {
    filmDetails: null,
    recommended: [],
    trending: [],
    newReleases: [],
    loading: false,
    error: null,
};

const filmsSlice = createSlice({
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
            })

            .addCase(fetchFilmById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilmById.fulfilled, (state, action) => {
                state.loading = false;
                state.filmDetails = action.payload;
            })
            .addCase(fetchFilmById.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || 'Failed to load film details';
            });
    },
});

export default filmsSlice.reducer;
