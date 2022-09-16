import styled from "styled-components";

export const ReviewsList = styled.ul`
    padding: 10px;
`;

export const ReviewsListItem = styled.li`
    margin-bottom: 10px;

    :last-child {
        margin-bottom: 0;
    }
`;

export const ReviewAuthor = styled.p`
    margin-bottom: 10px;
    margin-left: 20px;
    font-weight: 500;
    font-size: 20px;
`;

export const ReviewsNotification = styled.p`
    margin: 20px;
    font-size: 24px;
    font-weight: 500;
`;