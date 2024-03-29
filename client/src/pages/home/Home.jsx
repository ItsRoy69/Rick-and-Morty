import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/bannerimg.png";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rick-and-morty-al6l.onrender.com/api/characters"
        );
        setCharacters(response.data);
      } catch (error) {
        console.error(
          "Error fetching characters:",
          error.response?.data || error.message
        );
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Rick and Morty Characters</h1>
          <div className="hero-bg-character">
            <img
              src={bannerImg}
              alt=""
              className="hero-img-character"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        className="characters-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Search characters by name"
          className="character-search"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </section>

      <section className="characters-lists">
        <ul className="character-container">
          {filteredCharacters.map((character) => (
            <li key={character.id}>
              <Link to={`/character/${character.id}`}>
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-img"
                  loading="lazy"
                />
                <p className="character-name">{character.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
