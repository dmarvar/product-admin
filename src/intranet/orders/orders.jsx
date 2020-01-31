import React, { useEffect, useState } from "react";
import Table from "../../common/table";

import Box from "../../common/box";
import http from "../../services/http";
import { OrdersTable } from "../../utils/tablesHeaders";

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

const Orders = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    async function queries() {
      let orders = await http.post(
        "https://wecommerceapiaz.azurewebsites.net/api/GetOrders?ownerid=algomerkar"
      );
      console.log(orders);
      orders = resToTable(orders);
      setOrderList(orders);
    }
    // Execute the created function directly
    queries();
  }, []);
  return (
    <div>
      <h2>Ordenes</h2>
      <Box title="Todas las ordenes">
        <Table columns={OrdersTable} data={orderList}></Table>
      </Box>
    </div>
  );
};
export default Orders;
