import React, { useEffect, useState } from "react";
import { MovieData } from "../../interfaces";
import { getMovies, searchMovies } from "../../services/MovieService";
import { InputWrap } from "./SearchInput.style";

interface SearchField {
    onSearch: (movies: MovieData) => void;
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
                    searchMovies(value).then((response) => {
                        props.onSearch(response);
                    });
                }
                else {
                    getMovies(1).then((response) => {
                        props.onSearch(response);
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