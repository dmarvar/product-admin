import styled from "styled-components";

export const InputTextStyles = styled.section`
  padding-bottom: 5px;
  label {
    display: block;
    color: white;
  }
  input {
    /* margin: 0px 20px; */
    padding: 5px 10px;
    background-color: transparent;
    color: white;
    outline: none;
    width: calc(100% - 40px);
    font-size: 10px;
    .pac-selected,
    .pac-item,
    .pac-container {
      background-color: transparent;
    }
  }
  button {
    color: ${p => p.theme.cWhite};
    padding: 5px 15px;
    border-color: ${p => p.theme.cOrange};
    background: ${p => p.theme.cOrange};
    margin: 20px auto 30px;
  }
  div {
    min-height: 20px;
    display: block;
    color: #d24d57;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
  }
`;

export const ButtonStyles = styled.button`
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
