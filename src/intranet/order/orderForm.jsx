import React from "react";
import { Selector } from "../../common/form";
import { useGetHttp } from "../../hooks/useHttp";
import { FormOrder } from "./styles";

const OrderForm = ({ orderInCourse }) => {
  const [status] = useGetHttp("/GetOrderStatusList");
  console.log(status);
  return (
    <FormOrder action="">
      <h3>Cambiar estado</h3>
      <Selector
        id="categoryId"
        name="categoryId"
        // label="Descripción"
        options={status}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // value={values.categoryId}
        // errors={errors}
        // touched={touched}
      />
      <button>Guardar</button>
    </FormOrder>
  );
};
export default OrderForm;
