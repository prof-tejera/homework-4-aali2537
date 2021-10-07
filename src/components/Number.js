import { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 1em;
  background-color: #efefef;
  border: 1px solid white;
  border-right: 0;
  border-top: 0;
  font-size: 20px;
  flex: 1 1 33.3%;
  &:nth-child(3n) {
    border-right: 1px solid white;
  }
  &:nth-child(-n + 3) {
    border-top: 1px solid white;
  }
`;

class Number extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Number;
