import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Theme from "./utils/theme";
import Login from "./login";
import Intranet from "./intranet";
import { AuthProvider, AuthContext } from "./services/auth";
// REDUX
import { connect } from "react-redux";
import { setInitialData } from "./services/actions";
//STYLES
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "https://wecommerceapi.azurewebsites.net";

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
  overflow: hidden;
`;

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={() => (!!currentUser ? children : <Redirect to="/login" />)}
    />
  );
};

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Router>
          <Wrapper>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/">
                <Intranet />
              </PrivateRoute>
            </Switch>
          </Wrapper>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};
const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadData: data => {
      dispatch(setInitialData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
