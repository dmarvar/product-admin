import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${p => p.theme.cWhite};
  padding: 10px 15px;
  border-color: ${p => p.theme.cOrange};
  background-color: ${p => p.theme.cOrange};
  margin: 20px 10px 30px;
  &:hover {
    background-color: ${p => p.theme.cOrangeDark};
    border-color: ${p => p.theme.cOrangeDark};
    color: white;
    text-decoration: none;
  }
`;

export default function button({ text, action }) {
  return <Button onClick={action}>{text}</Button>;
}
