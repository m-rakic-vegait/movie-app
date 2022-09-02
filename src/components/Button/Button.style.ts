import styled from "styled-components";

export const ButtonWrap = styled.div`
    padding: 1.5em 0;
    background-color: ${({ theme }) => theme.palette.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        padding: 0.5em 3em;
        border-radius: 5px;
        font-family: ${({ theme }) => theme.font.family.primary};
        font-size: ${({ theme }) => theme.font.size.m2}px;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        background-color: ${({ theme }) => theme.palette.textColor};
    }

`;