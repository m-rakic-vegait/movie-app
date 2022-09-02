import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.palette.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: ${({ theme }) => theme.font.family.primary};
        font-size: ${({ theme }) => theme.font.size.l3}px;
        color: ${({ theme }) => theme.palette.textColor};
    }
`;