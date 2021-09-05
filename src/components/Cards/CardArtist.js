import React from "react";
import styled from "styled-components";

const CardArtist = props => {
  const { name, image, title } = props.data;
  return (
    <>
      <Card>
        <img src={image} alt={name} width={320} height={320} />
        <ArtistName>{name}</ArtistName>
        <ArtistTitle>{title}</ArtistTitle>
      </Card>
    </>
  );
};

export default CardArtist;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  display: grid;
  gap: 20px;
`;
const ArtistName = styled.div`
  color: black;
`;
const ArtistTitle = styled.div`
  color: black;
`;
