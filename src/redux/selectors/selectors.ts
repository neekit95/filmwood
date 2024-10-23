import { RootState } from '../store/store';
import type { Film, FilmState } from '@lib/types';

export const isUserAuthSelector = (state: RootState): boolean =>
    state.auth.isUserAuth;

export const loadingFilmsSelector = (state: RootState): boolean =>
    state.films.loading;

export const errorFilmsSelector = (state: RootState): null | string =>
    state.films.error;

export const filmDetailsSelector = (state: RootState): Film | null =>
    state.films.filmDetails;

export const filmsSelector = (state: RootState): FilmState | null =>
    state.films;

export const searchResultsSelector = (state: RootState): Film[] =>
    state.search.searchResults;

export const searchLoadingSelector = (state: RootState): boolean =>
    state.search.loading;
