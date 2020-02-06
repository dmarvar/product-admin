import React from "react";
import styled from "styled-components";
import Loader from "../common/loader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  div.box {
    width: 120px;
    height: 120px;
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
