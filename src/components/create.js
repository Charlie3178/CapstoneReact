import React, { Component } from "react";

export default class CharacterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
      gender: "",
      alignment: "",
      description: "",
      biography: "",
      level: 0,
      wealth: 0,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      hp: 10,
      mp: 30,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("https://cel-my-capstone-api.herokuapp.com/character/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        alignment: this.state.alignment,
        description: this.state.description,
        biography: this.state.biography,
        level: this.state.level,
        wealth: this.state.wealth,
        strength: this.state.strength,
        dexterity: this.state.dexterity,
        constitution: this.state.constitution,
        intelligence: this.state.intelligence,
        wisdom: this.state.wisdom,
        charisma: this.state.charisma,
        hp: this.state.hp,
        mp: this.state.mp,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))

      .catch((error) => console.log(error));
    this.setState({
      name: "",
      age: 0,
      race: "",
      gender: "",
      pclass: "",
      alignment: "",
      description: "",
      biography: "",
      level: 0,
      wealth: 0,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      hp: 10,
      mp: 30,
    });
  }

  render() {
    return (
      <div className="">
        <form className="CharacterCreation" onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Age: </label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <label>Race: </label>
          <input
            type="text"
            name="race"
            placeholder="Race"
            value={this.state.race}
            onChange={this.handleChange}
          />
          <label>Gender: </label>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />
          <label>Class: </label>
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={this.state.pclass}
            onChange={this.handleChange}
          />
          <label>Alignment: </label>
          <input
            type="text"
            name="alignment"
            placeholder="Alignment"
            value={this.state.alignment}
            onChange={this.handleChange}
          />
          <label>Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label>Biography: </label>
          <input
            type="text"
            name="biography"
            placeholder="Biography"
            value={this.state.biography}
            onChange={this.handleChange}
          />
          <label>Level: </label>
          <input
            type="number"
            name="level"
            placeholder="Level"
            value={this.state.level}
            onChange={this.handleChange}
          />
          <label>Wealth: </label>
          <input
            type="number"
            name="wealth"
            placeholder="wealth"
            value={this.state.wealth}
            onChange={this.handleChange}
          />
          <label>Strength: </label>
          <input
            type="number"
            name="strength"
            placeholder="Strength"
            value={this.state.strength}
            onChange={this.handleChange}
          />
          <label>Dexterity: </label>
          <input
            type="number"
            name="dexterity"
            placeholder="Dexterity"
            value={this.state.dexterity}
            onChange={this.handleChange}
          />
          <label>Constitution: </label>
          <input
            type="number"
            name="constitution"
            placeholder="Constitution"
            value={this.state.constitution}
            onChange={this.handleChange}
          />
          <label>Intelligence: </label>
          <input
            type="number"
            name="intelligence"
            placeholder="Intelligence"
            value={this.state.intelligence}
            onChange={this.handleChange}
          />
          <label>Wisdom: </label>
          <input
            type="number"
            name="wisdom"
            placeholder="Wisdom"
            value={this.state.wisdom}
            onChange={this.handleChange}
          />
          <label>Charisma: </label>
          <input
            type="number"
            name="charisma"
            placeholder="Charisma"
            value={this.state.charisma}
            onChange={this.handleChange}
          />
          <label>HP: </label>
          <input
            type="number"
            name="hp"
            placeholder="HP"
            value={this.state.hp}
            onChange={this.handleChange}
          />
          <label>Movement: </label>
          <input
            type="number"
            name="mp"
            placeholder="Movement"
            value={this.state.mp}
            onChange={this.handleChange}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
