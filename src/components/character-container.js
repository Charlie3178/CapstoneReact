import React, { Component } from "react";
import CharacterItem from "./character-item";

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {},
      characterData: [],
    };
  }

  render() {
    return (
      <div>
        <CharacterItem />
      </div>
    );
  }
}
