import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

const Container = styled.div`
  border-radius: 5px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const NumPad = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0em;
`;

const OperatorPad = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-left: 0.1em;
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
    } else if (operator === "Clear") {
      this.setState({ first: 0, second: 0, operator: null });
    } else if (operator === "+/-") {
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
        <div style={{ display: "flex" }}>
          <NumPad>
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value="+/-" onClick={this.handleOperatorClick} />
            <Number value={0} onClick={this.handleNumberClick} />
            <Number value="." onClick={this.handleNumberClick} />
          </NumPad>
          <OperatorPad>
            <Operator value="Clear" onClick={this.handleOperatorClick} />

            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
          </OperatorPad>
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([".", "+/-"])]),
};

Operator.propTypes = {
  value: PropTypes.oneOf(["+", "/", "x", "-", "=", "Clear"]),
};

export default Calculator;
