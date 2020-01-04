import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import http from "./services/http";
import Theme from "./utils/theme";
import Login from "./login";
import Intranet from "./intranet";
import auth from "./services/auth";
// REDUX
import { connect } from "react-redux";
import { setInitialData } from "./services/actions";
//STYLES
import "./App.css";

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
  overflow: hidden;
`;

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (auth.isAuthenticated ? children : <Redirect to="/login" />)}
  />
);

class App extends Component {
  async componentDidMount() {
    const { data } = await http.get("/project-data.json");
    this.props.onLoadData(data);
  }
  render() {
    return (
      <ThemeProvider theme={Theme}>
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
      </ThemeProvider>
    );
  }
}
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
