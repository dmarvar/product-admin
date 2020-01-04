import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${p => p.theme.bgColorDark};
  padding: 20px;
  margin: 30px 0;
`;

export default function box({ children, title }) {
  return (
    <Wrapper>
      <h5>{title}</h5>
      {children}
    </Wrapper>
  );
}
