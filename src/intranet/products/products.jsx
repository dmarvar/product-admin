import React, { useMemo } from "react";
import Box from "../../common/box";
import Table from "../../common/table";
import { connect } from "react-redux";
import Button from "../../common/button";
import { ProductsTable, CategoriesTable } from "../../utils/tablesHeaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../common/modal";
import { useModal } from "../../hooks/useModal";
import { Container, RigthSection } from "./styles";
import { useHttp } from "../../hooks/useHttp";

import Uploader from "./uploadFile";

const resToTable = arr => {
  console.log(arr);
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

const Products = ({ history, products }) => {
  // console.log(props);
  // let [products] = useHttp("/GetProducts?ownerid=ALGOMERKAR");
  const [categories] = useHttp("/GetCategoryProducts?ownerId=algomerkar");
  const [modalStatus, setModalStatus, toogleModal] = useModal();
  const memoizedProducts = useMemo(() => resToTable(products), [products]);
  const redirect = item => {
    const { reference } = item;
    history.push(`/products/${reference}`);
  };
  return (
    <div>
      <h2>Productos</h2>
      <Container>
        <Box>
          <Table
            columns={ProductsTable}
            data={memoizedProducts}
            redirect={redirect}
          ></Table>
          {/* {memoizedProducts.map(item => (
            <div>Este es el {item.name}</div>
          ))} */}
        </Box>
        <Box>
          <RigthSection>
            <Table
              columns={CategoriesTable}
              data={categories}
              filter={true}
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
  // Conectar http y pedir categorias
};

// class Products extends Component {
//   state = {
//     selectedProducts: [],
//     redirect: true,
//     modal: false,
//     category: ""
//   };
//   componentDidUpdate(prevProps) {
//     if (prevProps.products !== this.props.products) {
//       this.setState({ selectedProducts: [] });
//     }
//   }
//   deleteItems = () => {
//     const data = this.props.productsList;
//     let state = [...data.products];
//     state = state.filter((x, i) => !this.state.selectedProducts.includes(i));
//     data.products = state;
//     this.props.onProductsChange(data);
//   };
//   selectProduct = i => {
//     let selectedProducts = [...this.state.selectedProducts];
//     if (selectedProducts.includes(i)) {
//       selectedProducts.splice(selectedProducts.indexOf(i), 1);
//     } else {
//       selectedProducts.push(i);
//     }
//     this.setState({ selectedProducts });
//   };
//   deleteItem = (i, type) => {
//     const data = this.props.productsList;
//     let state = [...data[type]];
//     state.splice(i, 1);
//     data[type] = state;
//     // updating redux store
//     this.props.onProductsChange(data);
//   };
//   addCategory = () => {
//     const categories = [...this.props.categories];
//     const data = this.props.productsList;
//     categories.push(this.state.category);
//     data.categories = categories;
//     this.props.onProductsChange(data);
//     this.setState({ category: "" });
//     this.toggleModal();
//   };
//   changeRoute = id => {
//     this.props.history.push(`/products/${id}`);
//   };
//   toggleModal = () => {
//     this.setState({ modal: !this.state.modal });
//   };
//   changeCategory = e => {
//     const { value } = e.target;
//     this.setState({ category: value });
//   };
//   render() {
//     let { categories, products } = this.props;
//     let { modal } = this.state;
//     let categorias = [
//       { id: 0, name: "Lacteos" },
//       { id: 1, name: "algo más" }
//     ];
//     return (
//       <div>
//         <h2>Productos</h2>
//         <Container>
//           <Box>
//             <Table columns={ProductsTable} data={products}></Table>
//           </Box>
//           <Box>
//             <RigthSection>
//               <Table
//                 columns={CategoriesTable}
//                 data={categorias}
//                 filter={true}
//               ></Table>
//               hola
//               <Button text="Add Category" action={this.toggleModal} />
//             </RigthSection>
//           </Box>
//         </Container>
//         <Modal visibility={modal ? "" : "hidden"}>
//           <section>
//             <span onClick={this.toggleModal}>X</span>
//             <h5>New Category</h5>
//             <input
//               type="text"
//               value={this.state.category}
//               onChange={this.changeCategory}
//             />
//             <Button text="Agregar" action={this.addCategory} />
//           </section>
//         </Modal>
//       </div>
//     );
//   }
// }

const mapPropsToState = state => {
  return {
    // productsList: state.productsPage,
    products: state.productsPage.products
    // categories: state.productsPage.categories
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onProductsChange: data => {
//       dispatch(updateProducts(data));
//     }
//   };
// };

// export default connect(mapPropsToState, mapDispatchToProps)(Prod);

export default connect(mapPropsToState)(Products);
