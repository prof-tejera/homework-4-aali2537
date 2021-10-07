import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  text-align: right;
  background-color: #72788d;
  color: white;
  padding-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Result = styled.div`
  margin-right: 0.5em;
  margin-top: 0em;
  margin-bottom: 1em;
  font-size: 22px;
  font-weight: bold;
`;

const Operation = styled.div`
  margin-bottom: 1em;
  margin-right: 0.5em;
`;

class Screen extends Component {
  render() {
    return (
      <Container>
        <Operation>
          {this.props.operator
            ? `${this.props.first} ${this.props.operator}`
            : " "}
        </Operation>
        <Result>{this.props.second || this.props.first}</Result>
      </Container>
    );
  }
}

export default Screen;
