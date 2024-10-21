export type Film = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
};

export type FilmState = {
    filmDetails: Film | null;
    recommended: Film[];
    trending: Film[];
    newReleases: Film[];
    loading: boolean;
    error: string | null;
};
