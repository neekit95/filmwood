import { createSlice } from '@reduxjs/toolkit';
import { SearchState } from '@lib/types';
import { fetchFilmByTitle } from '../thunks/fetch-films-thunk';

const initialState: SearchState = {
    filmDetails: null,
    searchResults: [],
    loading: false,
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearSearchResults(state) {
            state.searchResults = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmByTitle.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.searchResults = [];
            })
            .addCase(fetchFilmByTitle.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload;
            })
            .addCase(fetchFilmByTitle.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || 'Failed to load search results';
            });
    },
});

export const { clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
