import React, { Fragment, Component } from "react";

import { Link } from "react-router-dom";

import { api2 } from "../services/api";

import { ReactComponent as Paper } from "../Card/images/paper.svg";

import anonymous from "../images/anonymous.png";

import { GlobalStyle, CardStyle } from "../style/styles";

import { StyledFilms } from "./style/StyledFilms";

export default class Films extends Component {
  state = {
    films: []
  };

  informBirth = birth => {
    if (birth === "unknown") return 0;

    return birth.replace("BBY", "");
  };

  componentDidMount() {
    this.loadFilms();
  }

  loadFilms = async () => {
    const response = await api2.get();

    this.setState({
      films: response.data.results
    });
  };

  render() {
    const { location } = this.props;

    const randomColor = require("randomcolor");
    const color = randomColor({
      luminosity: "random",
      hue: "random",
      format: "rgb"
    });

    const borderColor = randomColor({
      color,
      alpha: 0.5
    });

    return (
      <Fragment>
        {console.log(location.state.data)}

        <GlobalStyle />

        <StyledFilms>
          {this.state.films.length > 0
            ? this.state.films.map(film =>
                location.state.data.map(personFilm => {
                  if (film.episode_id === personFilm) {
                    return (
                      <CardStyle
                        color={color}
                        borderColor={borderColor}
                        key={film.id}
                      >
                        <div className="circle">
                          <img
                            src={anonymous}
                            alt="anonymous"
                            width="45px"
                            height="60px"
                          />
                        </div>
                        <div className="title">{film.title}</div>
                        <div className="content">
                          <div>
                            <strong>Episódio:</strong>
                            <span>{film.episode_id}</span>
                          </div>

                          <div>
                            <strong>Descrição:</strong>{" "}
                            <span>{film.opening_crawl}</span>
                          </div>

                          <div>
                            <strong>Diretor:</strong>{" "}
                            <span>{film.director}</span>
                          </div>

                          <div>
                            <strong>Data:</strong>{" "}
                            <span>{film.release_date}</span>
                          </div>
                        </div>

                        <div className="content-link">
                          <a
                            href="https://www.youtube.com/watch?v=-5f7oR0vMAM"
                            target="_blank"
                            className="button"
                            rel="noopener noreferrer"
                          >
                            <Paper width={35} height={35} />
                            Veja mais
                          </a>
                        </div>
                      </CardStyle>
                    );
                  }

                  return null;
                })
              )
            : null}
        </StyledFilms>

        <Link to="/" className="m-3 btn btn-info">{`< Voltar`}</Link>
      </Fragment>
    );
  }
}
