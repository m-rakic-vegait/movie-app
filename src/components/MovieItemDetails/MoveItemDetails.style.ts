import styled from "styled-components";

export const ItemDetailsWrap = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.textColor};
    padding: 3em 10%;
    
    img {
        width: 400px;
    }
    `;

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 8em 0 4em;
    font-family: ${({ theme }) => theme.font.family.primary};
    
    p {
        font-size: ${({ theme }) => theme.font.size.m2}px;
        margin-bottom: 3em;
    }
    strong {
        font-size: ${({ theme }) => theme.font.size.m3}px;
    }
`;