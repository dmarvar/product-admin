import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  h5 {
    text-align: left;
  }
  & > div:first-child {
    width: 83%;
  }
  & > div:last-child {
    width: 15%;
  }
  @media screen and (max-width: 720px) {
    & > div {
      width: 100% !important;
      padding: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-x: scroll;
  overflow-y: scroll;
`;

export const Selector = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${p => p.theme.bgColorDark};
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${p => p.visibility};
  section {
    background: ${p => p.theme.bgColorDark};
    padding: 40px;
    position: relative;
    span {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 10px;
      font-size: 25px;
      font-weight: 600;
      color: ${p => p.theme.cOrange};
      cursor: pointer;
      &:hover {
        color: ${p => p.theme.cOrangeDark};
      }
    }
    input {
      padding: 10px 10px;
      background-color: ${p => p.theme.bgColor};
      border: none;
      outline: none;
      color: ${p => p.theme.cWhite};
    }
  }
`;

export const RigthSection = styled.section`
  margin-top: 20px;
  background: ${p => p.theme.bgColorLight};
  border-bottom: 1px solid white;
  button {
    background: orange;
    border: 0;
    border-left: 1px solid ${p => p.theme.bgColorDark};
    border-right: 1px solid ${p => p.theme.bgColorDark};
    width: 100%;
    outline: none;
    color: white;
    &:visited {
      outline: none;
    }
    &:hover {
      background: ${p => p.theme.cOrangeDark};
    }
  }
`;
