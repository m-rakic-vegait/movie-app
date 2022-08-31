import React from "react";
import { InputWrap } from "./SearchInput.style";

const SearchInput = () => {
    return (
        <InputWrap>
            <input placeholder="Search by movie title" />
        </InputWrap>
    );
}

export default SearchInput;