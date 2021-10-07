import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

class Calculator extends Component {
  state = {
    first: 0,
    operator: null,
    second: 0,
    current: "first",
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({
        second: `${this.state.second || ""}${number}`,
        current: "second",
      });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseFloat(this.state.first);
      const second = parseFloat(this.state.second);

      if (this.state.operator === "+") {
        this.setState({
          operator: null,
          first: first + second,
          second: 0,
          current: "first",
        });
      } else if (this.state.operator === "/") {
        this.setState({
          operator: null,
          first: first / second,
          second: 0,
          current: "first",
        });
      } else if (this.state.operator === "-") {
        this.setState({
          operator: null,
          first: first - second,
          second: 0,
          current: "first",
        });
      } else if (this.state.operator === "x") {
        this.setState({
          operator: null,
          first: first * second,
          second: 0,
          current: "first",
        });
      }
    } else if (operator === "clear") {
      this.setState({ first: 0, second: 0, operator: null });
    } else if (operator === "+/-") {
      console.log("hit");
      if (this.state.current === "first") {
        this.setState({
          first: this.state.first - this.state.first * 2,
        });
      } else {
        this.setState({
          second: this.state.second - this.state.second * 2,
        });
      }
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => ({
    first: parseFloat(this.state.first),
    second: parseFloat(this.state.second),
    operator: this.state.operator,
  });

  render() {
    return (
      <Container>
        <Screen {...this.getScreenValue()} />
        <div>
          First: {this.state.first} | Second: {this.state.second} | Current:{" "}
          {this.state.current} | Operator: {this.state.operator}
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Number value={0} onClick={this.handleNumberClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
            <Number value="." onClick={this.handleNumberClick} />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Operator value="clear" onClick={this.handleOperatorClick} />
            <Operator value="+/-" onClick={this.handleOperatorClick} />
          </div>
        </div>
      </Container>
    );
  }
}

//Proptype validation
Screen.propTypes = {
  props: PropTypes.shape({
    first: PropTypes.number,
    second: PropTypes.number,
    operator: PropTypes.string,
  }),
};

Number.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["."])]),
};

Operator.propTypes = {
  value: PropTypes.oneOf(["+", "/", "x", "-", "=", "clear", "+/-"]),
};

export default Calculator;
