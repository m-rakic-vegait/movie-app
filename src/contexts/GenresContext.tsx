import React, { createContext, useEffect, useState, useContext, PropsWithChildren } from 'react';
import { getGenres } from '../services/MovieService';

const GenresContext = createContext({
    genresMap: {},
    isLoading: false,
});

const GenresContextProvider = (props: PropsWithChildren<unknown>) => {
    const [genres, setGenres] = useState<{ [key: number]: string; }>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchGenres = async () => {
        try {
            const MovieGenres = await getGenres();
            setGenres(MovieGenres);
        }
        catch (error: any) {
            console.log(`Error message: ${error.response.data}`);
            setGenres({});
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <GenresContext.Provider value={{
            genresMap: genres,
            isLoading: isLoading
        }}>
            {props.children}
        </GenresContext.Provider>
    );
}

const useGenresContext = () => {
    return useContext<{genresMap: { [key: number]: string; }; isLoading: boolean}>(GenresContext);
}

export { GenresContext, GenresContextProvider, useGenresContext };
