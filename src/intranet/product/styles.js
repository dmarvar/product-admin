import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;
export const Section = styled.section`
  flex: 1;
  div#double {
    display: flex;
  }
  #image {
    text-align: center;
    img {
      display: block;
      width: 250px;
      height: 250px;
      background: black;
      margin: 20px auto;
      object-fit: cover;
      overflow: hidden;
    }
  }
`;

export const Fsection = styled.section`
  padding: 20px;
  input,
  textarea,
  select {
    padding: 5px 10px;
    width: 100%;
    background-color: ${p => p.theme.bgColor};
    border: none;
    outline: none;
    color: ${p => p.theme.cWhite};
  }

  button {
    color: ${p => p.theme.cWhite};
    padding: 5px 15px;
    border-color: ${p => p.theme.cOrange};
    background: ${p => p.theme.cOrange};
    margin: 20px auto 30px;
  }
`;
