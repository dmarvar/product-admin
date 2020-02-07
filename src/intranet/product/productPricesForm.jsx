import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText, Selector, Button, RadioGroup } from "../../common/form";
import { ProductDetailForm } from "./styles";

const initialValuesMain = [
  {
    storeId: "",
    productId: "",
    price: "9000",
    unitValue: "19",
    badge: "60%",
    promotion: false,
    active: true
  }
];
const ProductPricesForm = ({ submit, initialValues = [] }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    },
    enableReinitialize: true
  });
  const {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    isSubmitting,
    errors,
    touched,
    handleBlur
  } = formik;
  return (
    <ProductDetailForm onSubmit={handleSubmit}>
      {initialValues.map((store, i) => {
        if (!values[i]) return;
        return (
          <section>
            <h4>
              {store.storeId} - {store.storeName}
            </h4>
            <div>
              <InputText
                id="price"
                name={`[${i}].price`}
                type="number"
                label="PRECIO"
                onChange={handleChange}
                value={values[i]["price"]}
              />
              <InputText
                id="badge"
                name={`[${i}].badge`}
                type="text"
                label="ETIQUETA"
                onChange={handleChange}
                value={values[i]["badge"]}
              />
              <RadioGroup
                title="PROMOCION"
                name={`[${i}].promotion`}
                value={values[i]["promotion"]}
                setFieldValue={setFieldValue}
                options={[
                  { label: "Es una promoción", inputValue: true },
                  { label: "No es una promoción", inputValue: false }
                ]}
              ></RadioGroup>
              <RadioGroup
                title="ACTIVO"
                name={`[${i}].active`}
                value={values[i]["active"]}
                setFieldValue={setFieldValue}
                options={[
                  { label: "Activo", inputValue: true },
                  { label: "Inactivo", inputValue: false }
                ]}
              ></RadioGroup>
            </div>
            <hr />
          </section>
        );
      })}
      <Button type="submit">Bumit</Button>
    </ProductDetailForm>
  );
};

export default ProductPricesForm;
