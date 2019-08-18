import React, { Component } from "react";
import api from "./services/api";

import Dice from "./images/dice.svg";
import Robot from "./images/robot.gif";

import Card from "./Card";

import "bootstrap/dist/css/bootstrap.css";

import { GlobalStyle, Container, ImageBottom } from "./style/styles";

export default class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.loadcharacter();
  }

  loadcharacter = async () => {
    const numberRandom = Math.floor(Math.random() * 10 + 1);

    const response = await api.get();

    this.setState(
      {
        characters: response.data.results.sort(this.sortByFilms("films"))
      },
      this.setState({
        characters: this.state.characters.sort(this.sortByProperty("name"))
      })
    );
  };

  sortByProperty = property => {
    return function(x, y) {
      return x[property] === y[property]
        ? 0
        : x[property] > y[property]
        ? 1
        : -1;
    };
  };

  sortByFilms = property => {
    return function(x, y) {
      return x[property].length === y[property].length
        ? 0
        : x[property].length < y[property].length
        ? 1
        : -1;
    };
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Container>
              <GlobalStyle whiteColor />

              {this.state.characters.length > 0 ? (
                this.state.characters.map(character => (
                  <Card
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    gender={character.gender}
                    birth={character.birth_year}
                  />
                ))
              ) : (
                <div className="page-not-loaded">
                  <h2>Carregando...</h2>

                  <img
                    src="https://media2.giphy.com/media/XLEbg1rCagFjy/giphy.gif"
                    width="500"
                  />
                </div>
              )}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
