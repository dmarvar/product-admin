import React from "react";
import styled from "styled-components";
import NBox from "./notificationBox";

const Wrapper = styled.section`
  height: 280px;
  overflow: scroll;
`;

export default function notificationList({ data }) {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <NBox data={item} key={i}></NBox>
      ))}
      {data.map((item, i) => (
        <NBox data={item} key={i}></NBox>
      ))}
      {data.map((item, i) => (
        <NBox data={item} key={i}></NBox>
      ))}
    </Wrapper>
  );
}
