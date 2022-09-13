import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin: 10px 5px;

  :hover, :focus {
    color: orange;
  }
`;

export const MoviesListStyled = styled.ul`
    margin-left: 40px;
    list-style: disc;
`;

export const MoviesListItem = styled.li`
  :hover, :focus {
    color: orange;
  }
`;

