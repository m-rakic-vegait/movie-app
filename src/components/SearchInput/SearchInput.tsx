import React, { useEffect, useState } from "react";
import { MovieData } from "../../interfaces";
import { getMovies, searchMovies } from "../../services/MovieService";
import { InputWrap } from "./SearchInput.style";

interface SearchField {
    onSearch: (param: {
        movieData: MovieData;
        isSearchUsed: boolean;
        term: string;
    }) => void;
    page: number;
}

const SearchInput = (props: SearchField) => {
    const [value, setValue] = useState<string>('');
    const [isChanged, setIsChanged] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setIsChanged(true);
    }

    useEffect(() => {
        if (isChanged) {
            const delayDebounceFn = setTimeout(() => {
                if (value !== '') {
                    const nextPage = props.page + 1;
                    searchMovies(value, nextPage).then((response) => {
                        props.onSearch({
                            movieData: response,
                            isSearchUsed: true,
                            term: value
                        });
                    });
                }
                else {
                    getMovies(1).then((response) => {
                        props.onSearch({
                            movieData: response,
                            isSearchUsed: false,
                            term: ''
                        });
                    });
                }
            }, 500);

            return () => clearTimeout(delayDebounceFn);
        }
    }, [value]);

    return (
        <InputWrap>
            <input placeholder="Search by movie title" onChange={changeHandler} value={value} />
        </InputWrap>
    );
}

export default SearchInput;