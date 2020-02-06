import React from "react";
import { useHttp } from "../../hooks/useHttp";

const Order = () => {
  const [products] = useHttp("/GetOrderDetail?orderId=1");
  return (
    <div>
      <h2>Order Module</h2>
      {products.map(item => (
        <ul key={item.orderId + item.productName}>
          <li>{item.productName}</li>
          <li>{item.price}</li>
          <li>{item.quantity}</li>
        </ul>
      ))}
    </div>
  );
};
export default Order;
