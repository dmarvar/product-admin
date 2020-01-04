import React from "react";
import Nav from "../common/navBar";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./main";
import Products from "./products";
import Accounts from "./accounts";
import Product from "./product";

const Wrapper = styled.main`
  padding: 0px 50px;
  margin: 50px auto;
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 5px;
  }
`;

export default function intranet() {
  return (
    <div>
      <Nav />
      <Wrapper>
        <Switch>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />
          <Route path="/">
            <DashBoard />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
}
