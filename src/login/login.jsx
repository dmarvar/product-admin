import React, { Component } from "react";
import styled from "styled-components";
import Button from "../common/button";
import { Redirect } from "react-router-dom";
import auth from "../services/auth";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  min-height: 300px;
`;
const Form = styled.div`
  min-width: 300px;
  text-align: center;
  background-color: ${p => p.theme.bgColorDark};
  padding: 20px;
  box-shadow: ${p => p.theme.bShadow};
`;
const Fsection = styled.section`
  padding: 20px;
  input {
    padding: 5px 10px;
    background-color: ${p => p.theme.bgColor};
  }
  button {
    color: ${p => p.theme.cWhite};
    padding: 5px 15px;
    border-color: ${p => p.theme.cOrange};
    background: ${p => p.theme.cOrange};
    margin: 20px auto 30px;
  }
`;

export default class login extends Component {
  state = {
    redirect: false
  };
  validate = () => {};
  submitForm = e => {
    e.preventDefault();
    auth.authenticate(() => {
      this.setState({ redirect: true });
      console.log(this.state);
    });
  };
  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <Wrapper>
        <Form>
          <h2>Welcome to Dashboard</h2>
          <hr />
          <Fsection>
            <p>USERNAME</p>
            <input type="text" />
          </Fsection>
          <Fsection>
            <p>PASSWORD</p>
            <input type="password" />
          </Fsection>
          <Fsection>
            <Button text="LOGIN" action={this.submitForm.bind(this)}></Button>
          </Fsection>
          <hr />
          <p>Forgot your password?</p>
        </Form>
      </Wrapper>
    );
  }
}
