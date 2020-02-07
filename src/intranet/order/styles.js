import styled from "styled-components";

export const FormOrder = styled.form`
  display: flex;
  justify-content: space-between;
  h3 {
    margin-right: 20px;
  }
  button {
    margin: 5px;
    height: 30px;
  }
`;
export const OrderBody = styled.section`
  display: flex;
  padding: 30px;
  margin-top: 20px;
  p {
    font-size: 20px;
    span {
      margin-right: 15px;
      color: orange;
    }
    margin-bottom: 20px;
  }
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
  div {
    flex: 1;
  }
  background: ${p => p.theme.bgColor};
`;

export const OrderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  span {
    color: orange;
    padding-left: 20px;
  }
  form {
    h3 {
      color: orange;
    }
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    input {
      margin-left: 20px;
    }
  }
  section.status {
    padding: 20px;
    border: 2px dashed orange;
    text-align: center;
    p {
      color: orange;
    }
    h2 {
      text-transform: uppercase;
    }
  }
  div {
    color: white;
  }
`;
