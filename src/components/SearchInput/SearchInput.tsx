import React, { useEffect, useState } from "react";
import { Movie } from "../../interfaces";
import { searchMovies } from "../../services/MovieService";
import { InputWrap } from "./SearchInput.style";

interface SearchField {
    onSearch: (movies: Movie[]) => void;
}

const SearchInput = (props: SearchField) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        if (value !== '') {
            const delayDebounceFn = setTimeout(() => {
                searchMovies(value).then((response) => {
                    props.onSearch(response);
                });
            }, 500);

            return () => clearTimeout(delayDebounceFn);
        }
    }, [value]);

    return (
        <InputWrap>
            <input placeholder="Search by movie title" onChange={(e) => { setValue(e.target.value) }} value={value} />
        </InputWrap>
    );
}

export default SearchInput;