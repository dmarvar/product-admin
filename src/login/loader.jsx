import React from "react";
import styled from "styled-components";
import Loader from "../common/loader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div.box {
    width: 130px;
    height: 130px;
  }
`;

export default function loader() {
  return (
    <Wrapper>
      <div className="box">
        <Loader></Loader>
      </div>
    </Wrapper>
  );
}
