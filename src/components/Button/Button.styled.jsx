import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.div`
    display: inline-block;
    padding: 5px;
    border: 2px solid black;
    margin: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;

    :hover, :focus {
        background-color: orange;
    }
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: black;
`;