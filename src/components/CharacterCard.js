import React from "react";
import styled from "styled-components";

const Character = styled.div`
  width: 48%;
  margin-right: 5px;
  &:nth-child(2n) {
    margin-right: 0;
  }
`;

export default function CharacterCard({ character }) {
  let { image, name, status, species, origin } = character;
  return (
    <Character>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
      <p>{origin.name}</p>
    </Character>
  );
}
