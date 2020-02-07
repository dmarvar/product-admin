import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/button";
import { useHistory } from "react-router-dom";
import { AuthContext, Signout } from "../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faShoppingCart,
  faUserAlt,
  faBars,
  faMotorcycle,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.bgColorLight};
  h1 {
    color: ${p => p.theme.cOrange};
  }
  & > div:nth-child(2) {
    display: none;
    color: white;
    font-size: 25px;
  }
  @media screen and (max-width: 720px) {
    & > div:first-child {
      display: none;
    }
    & > div:nth-child(2) {
      display: block;
    }
  }
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  a {
    padding: 20px 30px;
    height: 100%;
    color: ${p => p.theme.cWhite};
    span {
      display: block;
      font-size: 40px;
    }
    &:hover {
      background: ${p => p.theme.cOrange};
      text-decoration: none;
    }
  }
  @media screen and (max-width: 720px) {
    display: none;
    position: absolute;
    background: ${p => p.theme.bgColorDark};
    top: 100px;
  }
`;

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Nav>
      <div>
        <h1>
          <FontAwesomeIcon icon={faEllipsisH} />
          WECOME
        </h1>
      </div>
      <div id="burger">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <NavItems>
        <Link to="/">
          <span>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </span>
          Dashboard
        </Link>
        <Link to="/products">
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          Productos
        </Link>
        <Link to="/orders">
          <span>
            <FontAwesomeIcon icon={faMotorcycle} />
          </span>
          Ordenes
        </Link>
        {/* <Link to="/accounts">
          <span>
            <FontAwesomeIcon icon={faUserAlt} />
          </span>
          Cuentas
        </Link> */}
      </NavItems>
      <Button text="Salir" action={Signout} />
    </Nav>
  );
}
