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
