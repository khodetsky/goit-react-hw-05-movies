import styled from "styled-components";

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastGalleryItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    -webkit-box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.57);
    -moz-box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.57);
    box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.57);   
`;

export const ActorName = styled.p`
    font-weight: 500;
    font-size: 18px;
`;

export const ActorData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;
`;