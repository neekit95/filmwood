import style from './search.module.scss';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import SearchResult from './search-result/search-result';
import { useDispatch, useSelector } from 'react-redux';
import {
    searchResultsSelector,
    searchLoadingSelector,
} from '@redux/selectors/selectors';
import { fetchFilmByTitle } from '@redux/thunks/fetch-films-thunk';
import { AppDispatch } from '@redux/store/store';
import { clearSearchResults } from '@redux/slices/search-slice';
import Loader from '@components/loader/loader';

const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isResultsVisible, setIsResultsVisible] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();
    const results = useSelector(searchResultsSelector);
    const loading = useSelector(searchLoadingSelector);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchQuery(e.target.value);
    };

    const searchFilmByName = async (): Promise<void> => {
        if (searchQuery.trim() === '') {
            return;
        }
        await dispatch(fetchFilmByTitle(searchQuery));
        setIsResultsVisible(true);
    };

    const clearResults = (): void => {
        dispatch(clearSearchResults());
        setSearchQuery('');
        setIsResultsVisible(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            searchFilmByName();
        }
    };

    return (
        <div className={style.container}>
            <input
                className={style.search}
                type="text"
                placeholder={'Search'}
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button className={style.button} onClick={searchFilmByName}>
                <IoIosSearch className={style.img} />
            </button>

            {isResultsVisible && (
                <div className={style.results}>
                    {loading && (
                        <div className={style.loader}>
                            <Loader />
                        </div>
                    )}

                    {!loading && (
                        <>
                            {results.length > 0 ? (
                                results.map((film) => (
                                    <SearchResult
                                        film={film}
                                        key={film.id}
                                        clearResults={clearResults}
                                    />
                                ))
                            ) : (
                                <div className={style.notFound}>
                                    Фильмы не найдены
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
