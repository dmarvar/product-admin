import React, { useEffect } from "react";
import Nav from "../common/navBar";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./main";
import Products from "./products";
import Accounts from "./accounts";
import Product from "./product";
import Orders from "./orders";
import Order from "./order";
import { useHttp } from "../hooks/useHttp";
// REDUX
import { connect } from "react-redux";
import { setProductList } from "../services/actions";
import { setOrdersList } from "../services/actions";

const Wrapper = styled.main`
  padding: 0px 50px;
  margin: 50px auto;
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 5px;
  }
`;

const Intranet = ({ saveProducts, saveOrders }) => {
  const [products] = useHttp("/GetProducts?ownerid=ALGOMERKAR");
  saveProducts(products);
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
          <Route path="/orders" component={Orders} />
          <Route path="/orders/:id" component={Order} />
          <Route path="/">
            <DashBoard />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    saveProducts: data => {
      dispatch(setProductList(data));
    },
    saveOrders: data => {
      dispatch(setOrdersList(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(Intranet);
