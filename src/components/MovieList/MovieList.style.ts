import styled from "styled-components";

export const ListWrap = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary};
`;

export const ItemWrap = styled.div`
    width: 300px;
    margin: .5rem;
`