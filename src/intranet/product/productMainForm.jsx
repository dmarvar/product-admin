import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText, Selector } from "../../common/form";
import { useHttp } from "../../hooks/useHttp";

// {
//   id: 1
// ownerId: "ALGOMERKAR"
// reference: "0001"
// name: "Detergente en polvo ARIEL"
// description: "Detergente en polvo para lavar ropa blanca y de color ARIEL"
// categoryId: 1
// imageURL: "https://firebasestorage.googleapis.com/v0/b/merkar-5e730.appspot.com/o/ariel.jpg?alt=media&token=b895c378-ac5f-4868-8596-9aa288eb1536"
// measurementUnit: "Kilogramo"
// weight: 1
// active: true
// categoryName: "Lácteos"
// }

const initialValuesMain = {
  ownerId: "",
  reference: "",
  name: "",
  description: "",
  categoryId: "",
  imageURL: "",
  measurementUnit: "",
  weight: 0,
  active: true,
  categoryName: ""
};

const ProductMainForm = ({ submit, initialValues = initialValuesMain }) => {
  console.log("Initial values are those:", initialValues);
  const categoriesUrl = "/GetCategoryProducts?ownerId=algomerkar";
  const [categories] = useHttp(categoriesUrl);
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      // submit(values);
      alert(JSON.stringify(values));
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      reference: Yup.string().required("*Este campo es obligatorio"),
      name: Yup.string().max(100, "*Máximo 100 caracteres"),
      description: Yup.string().max(200, "*Máximo 20 caracteres"),
      weight: Yup.number(),
      categoryId: Yup.string().required("*La categoria es obligatoria")
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
    <form onSubmit={handleSubmit}>
      <InputText
        id="reference"
        name="reference"
        type="text"
        label="Referencia"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.reference}
        errors={errors}
        touched={touched}
      />
      <InputText
        id="name"
        name="name"
        type="text"
        label="Nombre"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        errors={errors}
        touched={touched}
      />
      <InputText
        id="description"
        name="description"
        type="text"
        label="Descripción"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        errors={errors}
        touched={touched}
      />
      <Selector
        id="categoryId"
        name="categoryId"
        label="Descripción"
        options={categories}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.categoryId}
        errors={errors}
        touched={touched}
      />
      <InputText
        id="measurementUnit"
        name="measurementUnit"
        type="text"
        label="Unidad de medida"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.measurementUnit}
        errors={errors}
        touched={touched}
      />
      <InputText
        id="weight"
        name="weight"
        type="number"
        label="Peso"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.weight}
        errors={errors}
        touched={touched}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ProductMainForm;
