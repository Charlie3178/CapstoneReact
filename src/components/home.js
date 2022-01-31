import React from "react";

import HomeBgImg from "../../static/assets/imgz/home-bg.png";
import CharacterContainer from "./character-container";

export default function () {
  return (
    <div className="SampleCharacter">
      <img className="home-bg-img" src={HomeBgImg} />
      <CharacterContainer />
    </div>
  );
}
