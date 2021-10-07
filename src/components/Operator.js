import { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 1em;
  font-size: 20px;
  border: 1px solid white;
  border-bottom: 0;
  border-right: 0;
  flex: 1 1 50%;
  background-color: #fb9617;
  transition: 0.2s;

  &:last-child {
    border-bottom: 1px solid white;
  }

  &:hover {
    background-color: #c87812;
  }

  &:active {
    background-color: #7d4b0b;
  }
`;

class Operator extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Operator;
