import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Fsection = styled.section`
  padding-bottom: 10px;
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
    font-size: 12px;
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
    min-height: 22px;
    display: block;
    color: #d24d57;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
  }
`;

const Button = styled.button`
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

const LoginForm = ({ submit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      submit(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*Email invalido")
        .required("*Digita el email"),
      password: Yup.string().required("*Digita la contraseña")
    })
  });
  const {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur
  } = formik;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Fsection>
          <label htmlFor="email">Usuario</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div>{touched.email && errors.email ? errors.email : null}</div>
        </Fsection>
        <Fsection>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div>
            {touched.password && errors.password ? errors.password : null}
          </div>
        </Fsection>
        <Button disabled={isSubmitting} type="submit">
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
