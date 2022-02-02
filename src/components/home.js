import React from "react";

import CharacterContainer from "./character-container";

export default function () {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div></div>
        <div className="character-data SampleData">
          <CharacterContainer />
        </div>
        <div></div>
      </div>
    </div>
  );
}
