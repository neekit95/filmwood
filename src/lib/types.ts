export type Genre = {
    id: number;
    name: string;
};

export type Film = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    genres?: Genre[];
};

export type FilmState = {
    filmDetails: Film | null;
    recommended: Film[];
    trending: Film[];
    newReleases: Film[];
    loading: boolean;
    error: string | null;
};

export type SearchState = {
    filmDetails: Film | null;
    searchResults: Film[];
    loading: boolean;
    error: string | null;
};

export type UserState = {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
};
