import React, { Fragment, Component } from "react";

import { StyledFilter, StyledButton } from "./style/StyledFilter";

export default class FilterStarWars extends Component {
  state = {
    fieldName: "",
    fieldGender: ""
  };

  render() {
    const { fieldName, fieldGender } = this.state;

    const { filterField } = this.props;

    return (
      <Fragment>
        <StyledFilter className="content-filter">
          <label>Filtrar por nome:</label>
          <input
            type="text"
            value={fieldName}
            onChange={e => this.setState({ fieldName: e.target.value })}
          />
        </StyledFilter>

        <StyledFilter className="content-filter">
          <label>Filtrar por gênero:</label>
          <input
            type="text"
            value={fieldGender}
            onChange={e => this.setState({ fieldGender: e.target.value })}
          />
        </StyledFilter>

        <StyledButton
          onClick={filterField.bind(
            this,
            this.state.fieldName,
            this.state.fieldGender
          )}
        >
          Aplicar Filtro
        </StyledButton>
      </Fragment>
    );
  }
}
