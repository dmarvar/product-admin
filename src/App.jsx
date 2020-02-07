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
import Loader from "./login/loader";
import Intranet from "./intranet";
import { AuthProvider, AuthContext } from "./services/auth";
// REDUX
// import { connect } from "react-redux";
// import { setInitialData } from "./services/actions";
//STYLES
import "./App.css";
// import axios from "axios";
// import { id } from "postcss-selector-parser";
// axios.defaults.baseURL = "https://wecommerceapi.azurewebsites.net";

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
  overflow: hidden;
`;

// const Loader = () => {
//   return <div>Loading</div>;
// };

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, loadingUser } = useContext(AuthContext);
  const routing = () => {
    if (currentUser) {
      return children;
    }
    if (!currentUser) {
      if (loadingUser) {
        return <Loader></Loader>;
      } else {
        return <Redirect to="/login" />;
      }
    }
  };
  return <Route {...rest} render={routing} />;
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

export default App;
