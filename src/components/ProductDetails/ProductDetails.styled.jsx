import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieContainer = styled.div`
    display: flex;
    padding: 20px;

`;

export const MovieInfoContainer = styled.div`
    margin-left: 30px;
`;

export const MovieInfoTitle = styled.div`
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 20px;
`;

export const MovieInfoSubtitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const MovieInfoOverview = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const MovieInfoList = styled.ul`
    display: flex;
`;

export const MovieGenresListItem = styled.li`
    margin-left: 10px;
    font-size: 20px;

    :first-child {
        margin-left: 0;
    }
`;

export const MovieInfoImage = styled.img`
    border-radius: 10px;
`;

export const MovieAdditionallyListItem = styled.li`
    font-size: 20px;

    :first-child {
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export const MovieAdditionallyLink = styled(NavLink)`
    text-decoration: none;
    color: black;

    &.active {
    color: orange;
    }
`;