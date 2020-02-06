import React, { useMemo } from "react";
import Box from "../../common/box";
import TableWindow from "../../common/table/tableWindow";
import Loader from "../../common/loader";
import Table from "../../common/table";
import { connect } from "react-redux";
import Button from "../../common/button";
import { ProductsTable, CategoriesTable } from "../../utils/tablesHeaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../common/modal";
import { useModal } from "../../hooks/useModal";
import { Container, RigthSection } from "./styles";
import { useGetHttp } from "../../hooks/useHttp";

import Uploader from "./uploadFile";

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

const Products = ({ history }) => {
  const [categories, catLoad] = useGetHttp(
    "/GetCategoryProducts?ownerId=algomerkar"
  );
  const [products, prodLoad] = useGetHttp("/GetProducts?ownerid=ALGOMERKAR");
  // const [modalStatus, setModalStatus, toogleModal] = useModal();
  // const memoizedProducts = useMemo(() => resToTable(products), [products]);
  const memoizedProducts = useMemo(() => resToTable(products), [products]);
  const redirect = ({ id }) => {
    history.push(`/products/${id}`);
  };
  return (
    <div>
      <h2>Productos</h2>
      <Container>
        <Box>
          <TableWindow
            columns={ProductsTable}
            data={memoizedProducts}
            redirect={redirect}
            loading={prodLoad}
          ></TableWindow>
        </Box>
        <Box>
          <RigthSection>
            <Table
              columns={CategoriesTable}
              data={categories}
              filter={true}
              loading={catLoad}
            ></Table>
            {/* <button onClick={toogleModal}>Agregar</button> */}
            {/* <Button text="Add Category" action={this.toggleModal} /> */}
          </RigthSection>
          <RigthSection>
            <h6>Cambiar lista de precios</h6>
            <a href="">Plantilla_precios_Excel.xlsx</a>
          </RigthSection>
          <RigthSection>
            <h6>Subir productos</h6>
            <Uploader></Uploader>
            <a href="">Plantilla_productos_Excel.xlsx</a>
          </RigthSection>
        </Box>
      </Container>
      {/* <Modal
        title="Nuevo Modal"
        isActive={modalStatus}
        handleClose={() => setModalStatus(false)}
      > */}
      {/* <input
          type="text"
          value={this.state.category}
          onChange={this.changeCategory}
        /> */}
      {/* <Button text="Agregar" action={this.addCategory} /> */}
      {/* </Modal> */}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    products: state.productsPage.products
  };
};

export default connect(mapPropsToState, null)(Products);
