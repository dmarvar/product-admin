import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field, useFormik } from "formik";

const Bar = styled.div`
  display: flex;
  justify-content: center;
`;
const Busqueda = styled.div`
  background: ${p => p.theme.bgColorLight};
  min-width: 300px;
  padding: 10px 30px;
  input {
    width: 100%;
    height: 18px;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    outline: none;
    &::placeholder {
      color: #ddd;
    }
  }
`;
// const Others = styled.section`
//   background: ${p => p.theme.bgColorLight};
//   display: flex;
//   color: white;
//   div {
//     padding: 10px 15px;
//     &:hover {
//       background: ${p => p.theme.bgColor};
//       cursor: pointer;
//     }
//     &:hover section {
//       display: block;
//     }
//   }
// `;
// const DropDownList = styled.section`
//   background: ${p => p.theme.bgColorDark};
//   display: none;
//   position: absolute;
//   margin-top: 10px;
//   margin-left: -15px;
//   width: 200px;
// `;

const filters = [
  { Categorias: ["Lacteos", "Quesos", "Granos"] },
  { Tiendas: ["170", "32", "32"] },
  { Status: ["Activo", "Inactivo"] }
];

const apply = () => {
  alert("No hay una funcion definida para el filtro");
};

const FiltersBar = ({ othersFilters = filters, applyFilter = apply }) => {
  const formik = useFormik({
    initialValues: {
      textFilter: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      applyFilter(values);
    }
  });
  const { handleSubmit, handleChange, values } = formik;
  return (
    <Bar>
      <Busqueda>
        <input
          type="text"
          name="textFilter"
          placeholder="Buscar"
          onChange={handleChange}
          value={values.textFilter}
        ></input>
      </Busqueda>
      {/* <Others>
        {othersFilters.map(f => (
          <div>
            {Object.keys(f)[0]}{" "}
            <DropDownList>
              {f[Object.keys(f)[0]].map(item => (
                <label>
                  <input type="checkbox" value={item} />
                  {item}
                </label>
                <Checkbox name="roles" value="admin" />
              ))}
            </DropDownList>
          </div>
        ))}
      </Others> */}
      <button onClick={handleSubmit}>Aplicar</button>
    </Bar>
  );
};

export default FiltersBar;
