import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  border: 16px solid ${p => p.theme.bgColorLight};
  border-radius: 50%;
  border-top: 16px solid ${p => p.theme.cOrangeDark};
  width: 100%;
  height: 100%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Loader = () => {
  return <Wrapper />;
};

export default Loader;
