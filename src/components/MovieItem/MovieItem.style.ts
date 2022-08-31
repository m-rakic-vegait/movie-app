import styled from "styled-components";

export const MovieItemWrap = styled.div`
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.secondary};
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.palette.textColor};
    line-height: 1.0;
    border: 1px solid ${({ theme }) => theme.palette.textColor};
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: transform .5s;

    :hover {
        cursor: pointer;
        box-shadow: 0 8px 32px 0 rgba(0,0,0,0.2);
        transform: scale(1.1);
    }

    img {
        width: 300px;
        height: 350px;
        border-radius: 1rem;
    }

    p {
        padding: 2px 5px;
        font-family: ${({ theme }) => theme.font.family.primary};
        font-size: ${({ theme }) => theme.font.size.m1}px;
    }
`;