import styled from "styled-components"
export const Link = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline;
    margin: 0;
    padding: 0;
`;

export const Details = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;