import React, { useState, useEffect } from "react";

function CharacterItem() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    fetch("https://cel-my-capstone-api.herokuapp.com/character/get/1")
      .then((response) => response.json())
      .then((data) => setCharacterData(data))
      .catch((error) => console.log("Error getting characters", error));
  }, []);

  return (
    <div key={characterData.id} className="list-container">
      <div className="character-data-wrapper" key={characterData.id}>
        <div className="character-data" key={characterData.id}>
          Name: {characterData.name}
        </div>
        <div className="character-data" key={characterData.id}>
          Age: {characterData.age}
        </div>
        <div className="character-data" key={characterData.id}>
          Race: {characterData.race}
        </div>
        <div className="character-data" key={characterData.id}>
          Gender: {characterData.gender}
        </div>
        <div className="character-data" key={characterData.id}>
          Class: {characterData.pclass}
        </div>
        <div className="character-data" key={characterData.id}>
          Alignment: {characterData.alignment}
        </div>
        <div className="character-data" key={characterData.id}>
          Description: {characterData.description}
        </div>
        <div className="character-data" key={characterData.id}>
          Biography: {characterData.biography}
        </div>
        <div className="character-data" key={characterData.id}>
          Level: {characterData.level}
        </div>
        <div className="character-data" key={characterData.id}>
          Wealth: {characterData.wealth}
        </div>
        <div className="character-data" key={characterData.id}>
          Strength: {characterData.strength}
        </div>
        <div className="character-data" key={characterData.id}>
          Dexterity: {characterData.dextertiy}
        </div>
        <div className="character-data" key={characterData.id}>
          Constitution: {characterData.constitution}
        </div>
        <div className="character-data" key={characterData.id}>
          Intelligence: {characterData.intelligence}
        </div>
        <div className="character-data" key={characterData.id}>
          Wisdom: {characterData.wisdom}
        </div>
        <div className="character-data" key={characterData.id}>
          Charisma: {characterData.charisma}
        </div>
        <div className="character-data" key={characterData.id}>
          HP: {characterData.hp}
        </div>
        <div className="character-data" key={characterData.id}>
          Movement: {characterData.mp}
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
