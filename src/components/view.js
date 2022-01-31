import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ViewBG from "../../static/assets/imgz/view-all-bg.png";

export default function () {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    fetch("https://cel-my-capstone-api.herokuapp.com/character/get")
      .then((response) => response.json())
      .then((data) => setCharactersData(data))
      .catch((error) => console.log("Error getting characters", error));
  }, []);

  return (
    <div className="ViewCharacters">
      <img src={ViewBG} />
      {charactersData.map((character) => (
        <ol className="list-data">
          Name: {character.name}
          <br />
          Age: {character.age}
          <br />
          Race: {character.race}
          <br />
          Gender: {character.gender}
          <br />
          Class: {character.class}
          <br />
          Alignment: {character.alignment}
          <br />
          Description: {character.description}
          <br />
          Biography: {character.biography}
          <br />
          Level: {character.level}
          <br />
          Wealth: {character.wealth}
          <br />
          Strength: {character.strength}
          <br />
          Dexterity: {character.dextertiy}
          <br />
          Constitution: {character.constitution}
          <br />
          Intelligence: {character.intelligence}
          <br />
          Wisdom: {character.wisdom}
          <br />
          Charisma: {character.charisma}
          <br />
          HP: {character.hp}
          <br />
          Movement: {character.mp}
        </ol>
      ))}
    </div>
  );
}
