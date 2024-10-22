import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiConfig, API_BASE_URL } from '@lib/api';
import axios from 'axios';
import { Film } from '@lib/types';

const config = getApiConfig();

type Props = string | number;

const createFilmThunk = (
    set: Props,
    name: Props
): AsyncThunk<Film[], void, {}> => {
    return createAsyncThunk(`films/${set}`, async () => {
        const response = await axios.get(
            `${API_BASE_URL}/movie/${name}`,
            config
        );
        return response.data.results;
    });
};

export const fetchRecomendedFilms = createFilmThunk(
    'fetchRecomendedFilms',
    'popular'
);

export const fetchTrendingFilms = createFilmThunk(
    'fetchTrendingFilms',
    'top_rated'
);

export const fetchNewReleasesFilms = createFilmThunk(
    'fetchNewReleasesFilms',
    'now_playing'
);

export const fetchAllFilms = createAsyncThunk(
    'films/fetchAllFilms',
    async (_, { dispatch }) => {
        try {
            const recommended = await dispatch(fetchRecomendedFilms()).unwrap();
            const trending = await dispatch(fetchTrendingFilms()).unwrap();
            const newReleases = await dispatch(
                fetchNewReleasesFilms()
            ).unwrap();

            return {
                recommended,
                trending,
                newReleases,
            };
        } catch (error) {
            if (error instanceof Error) {
                throw new Error('Failed to fetch all films: ' + error.message);
            } else {
                throw new Error('Failed to fetch all films: Unknown error');
            }
        }
    }
);

export const fetchFilmById = createAsyncThunk(
    'films/fetchFilmById',
    async (filmId: number) => {
        const response = await axios.get(
            `${API_BASE_URL}/movie/${filmId}`,
            config
        );
        return response.data;
    }
);

export const fetchFilmByTitle = createAsyncThunk(
    'films/fetchFilmByTitle',
    async (filmTitle: string | number) => {
        const response = await axios.get(
            `${API_BASE_URL}/search/movie?query=${filmTitle}`,
            config
        );
        return response.data.results;
    }
);
