import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../services/auth";
import app from "../utils/firebase";
import LoginForm from "./loginForm";
import Background from "../assets/img/background.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${`url('${Background}')`} no-repeat center center fixed;
  background-size: cover;
`;
const Card = styled.div`
  h2 {
    padding: 30px 30px 10px;
    letter-spacing: 3px;
  }
  hr {
    border-top: solid 1px rgba(255, 255, 255, 0.7);
    padding-bottom: 20px;
  }
  min-width: 300px;
  text-align: center;
  background-color: ${p => p.theme.bgColorDarkTrans};
  padding: 20px;
  box-shadow: ${p => p.theme.bShadow};
`;

const Login = ({ history }) => {
  const [status, setStatus] = useState({ sentStatus: false });
  const submitForm = useCallback(
    async ({ email, password }) => {
      setStatus({ sentStatus: true });
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        setStatus({ sentStatus: false });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) return <Redirect to="/products" />;
  return (
    <Wrapper>
      <Card>
        <section>
          <h2>REGISTRATE</h2>
          <hr />
        </section>
        <LoginForm submit={submitForm}></LoginForm>
      </Card>
    </Wrapper>
  );
};
export default Login;
