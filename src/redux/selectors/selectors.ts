import { RootState } from '../store/store';
import type { Film } from '@redux/slices/films-slice';

export const isUserAuthSelector = (state: RootState): boolean =>
    state.auth.isUserAuth;

export const loadingFilmsSelector = (state: RootState): boolean =>
    state.films.loading;

export const errorFilmsSelector = (state: RootState): null | string =>
    state.films.error;

export const filmDetailsSelector = (state: RootState): Film | null =>
    state.films.filmDetails;
