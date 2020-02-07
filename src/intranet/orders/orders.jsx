import React, { useState, useMemo } from "react";
import Table from "../../common/table";
import Loader from "../../login/loader";
import Box from "../../common/box";
import http from "../../services/http";
import { OrdersTable } from "../../utils/tablesHeaders";
import { useGetHttp } from "../../hooks/useHttp";

const orderStatus = {
  pending: "Esta en la canastilla del cliente",
  enquueued: "El cliente lo lanzo",
  processing: "El pedido esta en alistamiento",
  ready: "El pedido esta listo para enviar",
  shipped: "Pedido fue envíado",
  delivered: "Entregado",
  canceled: "Ya no va"
};

const formatDate = date => {
  const d = new Date(date);
  return (
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " ( " +
    d.getHours() +
    "h:" +
    d.getMinutes() +
    "m ) "
  );
};

const resToTable = arr => {
  return arr.map(item => {
    item["orderCode"] = item["id"];
    item["orderStartDate"] = formatDate(item["orderStartDate"]);
    item["orderFinishDate"] = formatDate(item["orderFinishDate"]);
    item["orderStatus"] = item["orderStatusId"];
    item["clientName"] = item["name"] + " " + item["lastName"];
    return item;
  });
};

const Orders = ({ history }) => {
  const [orders, loadingOrders] = useGetHttp("GetOrders?ownerid=algomerkar");
  const memoizedOrders = useMemo(() => resToTable(orders), [orders]);
  const redirect = ({ id }) => {
    // console.log(JSON.stringify(item));
    // const { reference } = item;
    history.push(`/orders/${id}`);
  };
  return (
    <div>
      <h2>Ordenes</h2>
      <Box title="Todas las ordenes">
        {loadingOrders ? (
          <Loader></Loader>
        ) : (
          <Table
            columns={OrdersTable}
            data={memoizedOrders}
            redirect={redirect}
            loading={loadingOrders}
          ></Table>
        )}
      </Box>
    </div>
  );
};
export default Orders;
