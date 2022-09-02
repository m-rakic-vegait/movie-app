import styled from "styled-components";

export const InputWrap = styled.div`
    padding: 1.5em 0;
    background-color: ${({ theme }) => theme.palette.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        padding: 0.5em 2em;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.palette.textColor};
        font-weight: ${({ theme }) => theme.font.weight.bold};
    }
`;