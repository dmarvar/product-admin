export const OrdersTable = [
  {
    Header: "Código Pedido",
    accessor: "orderCode"
  },
  {
    Header: "Tienda",
    accessor: "storeName"
  },

  {
    Header: "Cliente",
    accessor: "clientName"
  },
  {
    Header: "Dirección",
    accessor: "clientAddress"
  },
  {
    Header: "Contacto",
    accessor: "clientMobile"
  },
  {
    Header: "Email",
    accessor: "clientEmail"
  },
  {
    Header: "Fecha Inicio",
    accessor: "orderStartDate"
  },

  {
    Header: "Fecha Cierre",
    accessor: "orderFinishDate"
  },
  {
    Header: "Status",
    accessor: "orderStatus"
  }
];
export const OrdersDetailTable = [
  {
    Header: "Referencia",
    accessor: "reference"
  },
  {
    Header: "Img",
    accessor: "imageURL"
  },
  {
    Header: "Producto",
    accessor: "productName"
  },
  {
    Header: "Precio x Producto",
    accessor: "price"
  },
  {
    Header: "Cantidad",
    accessor: "quantity"
  }
];

export const ProductsTable = [
  {
    Header: "Ref.",
    accessor: "reference"
  },
  {
    Header: "Img.",
    accessor: "imageURL"
  },
  {
    Header: "Nombre",
    accessor: "name"
  },
  {
    Header: "Descripción",
    accessor: "description"
  },
  {
    Header: "Categoría",
    accessor: "categoryName"
  }
];

export const CategoriesTable = [
  {
    Header: "Categorias",
    accessor: "name"
  }
];
