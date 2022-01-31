import React, { useState, useEffect } from "react";

function CharacterItem() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    fetch("https://cel-my-capstone-api.herokuapp.com/character/get/3")
      .then((response) => response.json())
      .then((data) => setCharacterData(data))
      .catch((error) => console.log("Error getting characters", error));
  }, []);

  return (
    <div className="character-data">
      <ol>
        Name: {characterData.name}
        <br />
        Age: {characterData.age}
        <br />
        Race: {characterData.race}
        <br />
        Gender: {characterData.gender}
        <br />
        Class: {characterData.class}
        <br />
        Description: {characterData.description}
        <br />
        Biography: {characterData.biography}
        <br />
        Level: {characterData.level}
        <br />
        Wealth: {characterData.wealth}
        <br />
        Strength: {characterData.strength}
        <br />
        Dexterity: {characterData.dextertiy}
        <br />
        Constitution: {characterData.constitution}
        <br />
        Intelligence: {characterData.intelligence}
        <br />
        Wisdom: {characterData.wisdom}
        <br />
        Charisma: {characterData.charisma}
        <br />
        HP: {characterData.hp}
        <br />
        Movement: {characterData.mp}
      </ol>
    </div>
  );
}

export default CharacterItem;
