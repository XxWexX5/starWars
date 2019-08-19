import styled from "styled-components";

export const StyledFilter = styled.div`
  color: #fff;
  margin: 10px;
  text-align: right;
  animation: 1.5s animation-show-right forwards;

  @keyframes animation-show-right {
    0% {
      opacity: 0;
      transform: translate3d(350px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  label {
    display: inline-block;
    margin-right: 5px;
  }

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #ffffff;
    padding: 0 5px;
    color: #ffffff;
  }
`;

export const StyledButton = styled.button`
  float: right;
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 5px 20px;
  animation: 1.5s animation-button forwards;

  @keyframes animation-button {
    0% {
      opacity: 0;
      transform: translate3d(200px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  &:hover {
    background-color: #ffffff;
    color: #333333;
  }
`;
