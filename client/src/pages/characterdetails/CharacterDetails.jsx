import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import axios from "axios";
import "./characterdetail.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://rick-and-morty-al6l.onrender.com/api/characters/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character details:", error.message);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="character-details">
        <div className="character-component">
          <img src={character.image} alt={character.name} loading="lazy" />
          <div className="character-detail">
            <h1>{character.name}</h1>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
          </div>
          <Link to="/" className="back-link">
            <IoReturnDownBack />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CharacterDetails;
