import React, { Component } from "react";
import api from "./services/api";

import Card from "./Card";

import "bootstrap/dist/css/bootstrap.css";

import { GlobalStyle, Container } from "./style/styles";

import page404 from "./images/404.png";

import FilterStarWars from "./FilterStarWars";

export default class App extends Component {
  state = {
    characters: [],
    filterName: "",
    filterGender: "",
    loading: false
  };

  componentDidMount() {
    this.loadcharacter();
  }

  loadcharacter = async () => {
    const response = await api.get();

    this.setState(
      {
        characters: response.data.results.sort(this.sortByFilms("films")),
        loading: true
      },
      this.setState({
        characters: this.state.characters.sort(this.sortByProperty("name")),
        loading: false
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

  filterField = (name, gender) => {
    console.log(name.legth, gender.legth);

    if (name && gender) {
      return this.setState({
        characters: this.state.characters.filter(
          character => character.name === name && character.gender === gender
        )
      });
    }

    if (name) {
      return this.setState({
        characters: this.state.characters.filter(
          character => character.name === name
        )
      });
    }

    if (gender) {
      return this.setState({
        characters: this.state.characters.filter(
          character => character.gender === gender
        )
      });
    }
  };

  render() {
    const { characters, loading } = this.state;

    if (!!loading && characters.length === 0) {
      return (
        <a
          href="https://github.com/XxWexX5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={page404} alt="Nada encontrado" className="w-100" />
        </a>
      );
    }

    return (
      <div className="container-fluid">
        {characters.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <FilterStarWars filterField={this.filterField} />
            </div>
          </div>
        ) : null}

        <div className="row">
          <div className="col-12">
            <Container>
              <GlobalStyle whiteColor />
              {!!loading ? (
                characters.map(character => (
                  <Card
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    gender={character.gender}
                    birth={character.birth_year}
                    films={character.films}
                    key={character.id}
                  />
                ))
              ) : (
                <div className="page-not-loaded">
                  <h2>Carregando...</h2>

                  <img
                    src="https://media2.giphy.com/media/XLEbg1rCagFjy/giphy.gif"
                    width="500"
                    alt="Animação robô"
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
