import styled from "styled-components";

export const StyledErrorMessage = styled.div`
    background-color: ${({ theme }) => theme.palette.primary};
    text-align: center;
    padding: 3em;
`;

export const StyledErrorStatus = styled.p`
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: 64px;
    color: ${({ theme }) => theme.palette.textColor};
`;

export const StyledErrorText = styled.p`
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.m3}px;
    color: ${({ theme }) => theme.palette.textColor};
`;