import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";
import styled from "styled-components";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";

const CharacterListStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");
  const [Error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        setError(true);
      });
  }, []);

  return (
    <>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CharacterListStyles>
        {Error ? (
          <p className="error">Unable to get data from database at this time</p>
        ) : (
          characters
            .filter(character => {
              return (
                `${character.name}`
                  .toUpperCase()
                  .indexOf(searchTerm.toUpperCase()) >= 0
              );
            })
            .map(character => {
              return <CharacterCard key={character.id} character={character} />;
            })
        )}
      </CharacterListStyles>
    </>
  );
}
