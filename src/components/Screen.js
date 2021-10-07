import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 70px;
  text-align: right;
  padding-right: 0.5em;
  padding-top: 0.5em;
`;

const Result = styled.div`
  margin-top: 0em;
  margin-bottom: 1em;
  font-size: 22px;
  font-weight: bold;
`;

const Operation = styled.div`
  margin-bottom: 1em;
`;

class Screen extends Component {
  render() {
    return (
      <Container>
        <Operation>
          {this.props.operator
            ? `${this.props.first} ${this.props.operator}`
            : ""}
        </Operation>
        <Result>{this.props.second || this.props.first}</Result>
      </Container>
    );
  }
}

export default Screen;
