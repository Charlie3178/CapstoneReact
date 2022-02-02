import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import ViewBG from "../../static/assets/imgz/home-bg.png";

export default function () {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    fetch("https://cel-my-capstone-api.herokuapp.com/character/get")
      .then((response) => response.json())
      .then((data) => setCharactersData(data))
      .catch((error) => console.log("Error getting characters", error));
  }, []);

  return (
    <div className="container-wrapper">
      {charactersData.map((character) => (
        <div key={character.id} className="container">
          <div className="character-data-wrapper" key={character.id}>
            <div className="character-data view" key={character.id}>
              Name: {character.name}
            </div>
            <div className="character-data" key={character.id}>
              Age: {character.age}
            </div>
            <div className="character-data" key={character.id}>
              Race: {character.race}
            </div>
            <div className="character-data" key={character.id}>
              Gender: {character.gender}
            </div>
            <div className="character-data" key={character.id}>
              Class: {character.pclass}
            </div>
            <div className="character-data" key={character.id}>
              Alignment: {character.alignment}
            </div>
            <div className="character-data" key={character.id}>
              Description: {character.description}
            </div>
            <div className="character-data" key={character.id}>
              Biography: {character.biography}
            </div>
            <div className="character-data" key={character.id}>
              Level: {character.level}
            </div>
            <div className="character-data" key={character.id}>
              Wealth: {character.wealth}
            </div>
            <div className="character-data" key={character.id}>
              Strength: {character.strength}
            </div>
            <div className="character-data" key={character.id}>
              Dexterity: {character.dextertiy}
            </div>
            <div className="character-data" key={character.id}>
              Constitution: {character.constitution}
            </div>
            <div className="character-data" key={character.id}>
              Intelligence: {character.intelligence}
            </div>
            <div className="character-data" key={character.id}>
              Wisdom: {character.wisdom}
            </div>
            <div className="character-data" key={character.id}>
              Charisma: {character.charisma}
            </div>
            <div className="character-data" key={character.id}>
              HP: {character.hp}
            </div>
            <div className="character-data" key={character.id}>
              Movement: {character.mp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
