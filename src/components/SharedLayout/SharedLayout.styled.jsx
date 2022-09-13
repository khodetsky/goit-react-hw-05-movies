import styled from "styled-components";
import { NavLink} from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  margin: 0 10px;

  &.active {
    color: orange;
  }
`;

export const StyledHeader = styled.header`
  padding: 10px;
`;

export const LoadingStyled = styled.div`
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`; 