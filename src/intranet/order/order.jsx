import React, { useMemo } from "react";
import { OrdersDetailTable } from "../../utils/tablesHeaders";
import { useGetHttp } from "../../hooks/useHttp";
import Box from "../../common/box";
import Loader from "../../login/loader";
import OrderForm from "./orderForm";
import { OrderNav, OrderBody } from "./styles.js";
import Table from "../../common/table";

// orderId: 1
// productId: 1
// productName: "Ariel"
// price: 9000
// quantity: 1

// id: 1
// localId: 1
// storeId: 1
// orderStatusId: "Enqueued"
// orderStartDate: "2020-01-29T00:00:00"
// orderFinishDate: "2020-01-29T00:00:00"
// customerId: "5ME7EPsQFLZcPQUQq5HjRyWuDGg2"
// clientAddress: "Calle"
// clientMobile: "3002695678"
// clientEmail: "carlos@mail"
// userId: "0QOQ87L5AzdPw324kb3z27hzapB3"
// clientName: "Carlos Javier"
// clientLastName: "Salazar"
// storeName: "Merkar 170 "

const resToTable = arr => {
  return arr.map(item => {
    item["imageURL"] = (
      <img
        src={item["imageURL"]}
        style={{
          background: "white",
          height: "50px",
          width: "50px"
        }}
      />
    );
    return item;
  });
};

const Order = ({ match }) => {
  const { id } = match.params;
  const [orderHeader, loadingHeader] = useGetHttp(`/GetOrder?orderid=${id}`);
  const [orderDetail, loadingDetail] = useGetHttp(
    `/GetOrderDetail?orderId=${id}`
  );
  const memoizedOrders = useMemo(() => resToTable(orderDetail), [orderDetail]);
  const orderMain = orderHeader[0] ? orderHeader[0] : [{}];
  console.log(orderDetail);
  if (loadingDetail || loadingHeader) return <Loader></Loader>;
  return (
    <div>
      <h2>Order Module</h2>
      <Box>
        <OrderNav>
          <section>
            <h1>
              ORDEN --> <span>{orderMain.id}</span>
            </h1>
            <p>{orderMain.storeName}</p>
          </section>
          <section className="status">
            <p>ESTADO</p>
            <h2>{orderMain.orderStatusId}</h2>
          </section>
          <div>
            <div>Fecha Inicio: {orderMain.orderStartDate}</div>
            <div>Fecha modificacion: {orderMain.orderFinishDate}</div>
            <OrderForm></OrderForm>
          </div>
        </OrderNav>
        <OrderBody>
          <div>
            <h2>CLIENTE</h2>
            <p>
              <span>Id del cliente: </span> {orderMain.customerId}
            </p>
            <p>
              <span>Nombre del Cliente: </span> {orderMain.clientName}
            </p>
            <p>
              <span>Apellido del Cliente: </span> {orderMain.clientLastName}
            </p>
            <p>
              <span>Dirección del Cliente: </span> {orderMain.clientAddress}
            </p>
            <p>
              <span>Celular del Cliente: </span> {orderMain.clientMobile}
            </p>
            <p>
              <span>Eamil del Cliente: </span> {orderMain.clientEmail}
            </p>
          </div>
          <h1>--></h1>
          <div>
            <h2>PEDIDO</h2>
            <Table
              columns={OrdersDetailTable}
              data={memoizedOrders}
              loading={loadingDetail}
            ></Table>
          </div>
        </OrderBody>
      </Box>
    </div>
  );
};
export default Order;
