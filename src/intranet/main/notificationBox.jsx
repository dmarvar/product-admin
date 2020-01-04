import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: ${p => p.theme.bgColor};
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    background: orange;
    border-radius: 40px;
    margin-right: 20px;
  }
  p {
    margin-bottom: 0px;
  }
  span {
    color: gray;
  }
`;

export default function notificationBox({ data }) {
  return (
    <Box>
      <img src={data.pic} alt="" />
      <div>
        <p>{data.message}</p>
        <p>
          <span>{data.time}</span>
        </p>
      </div>
    </Box>
  );
}
