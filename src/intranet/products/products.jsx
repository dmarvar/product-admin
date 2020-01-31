import React, { Component } from "react";
import styled from "styled-components";
import Box from "../../common/box";
import Table from "../../common/table";
import { connect } from "react-redux";
import Button from "../../common/button";
import { updateProducts } from "../../services/actions";
import { ProductsTable, CategoriesTable } from "../../utils/tablesHeaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  h5 {
    text-align: left;
  }
  & > div:first-child {
    width: 83%;
  }
  & > div:last-child {
    width: 15%;
  }
  @media screen and (max-width: 720px) {
    & > div {
      width: 100% !important;
      padding: 5px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-x: scroll;
  overflow-y: scroll;
`;

const Selector = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${p => p.theme.bgColorDark};
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${p => p.visibility};
  section {
    background: ${p => p.theme.bgColorDark};
    padding: 40px;
    position: relative;
    span {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 10px;
      font-size: 25px;
      font-weight: 600;
      color: ${p => p.theme.cOrange};
      cursor: pointer;
      &:hover {
        color: ${p => p.theme.cOrangeDark};
      }
    }
    input {
      padding: 10px 10px;
      /* width: 100%; */
      background-color: ${p => p.theme.bgColor};
      border: none;
      outline: none;
      color: ${p => p.theme.cWhite};
    }
  }
`;

const RigthSection = styled.section`
  background: ${p => p.theme.bgColorLight};
  border-bottom: 1px solid white;
`;

class Products extends Component {
  state = {
    selectedProducts: [],
    redirect: true,
    modal: false,
    category: ""
  };
  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({ selectedProducts: [] });
    }
  }
  deleteItems = () => {
    const data = this.props.productsList;
    let state = [...data.products];
    state = state.filter((x, i) => !this.state.selectedProducts.includes(i));
    data.products = state;
    this.props.onProductsChange(data);
  };
  selectProduct = i => {
    let selectedProducts = [...this.state.selectedProducts];
    if (selectedProducts.includes(i)) {
      selectedProducts.splice(selectedProducts.indexOf(i), 1);
    } else {
      selectedProducts.push(i);
    }
    this.setState({ selectedProducts });
  };
  deleteItem = (i, type) => {
    const data = this.props.productsList;
    let state = [...data[type]];
    state.splice(i, 1);
    data[type] = state;
    // updating redux store
    this.props.onProductsChange(data);
  };
  addCategory = () => {
    const categories = [...this.props.categories];
    const data = this.props.productsList;
    categories.push(this.state.category);
    data.categories = categories;
    this.props.onProductsChange(data);
    this.setState({ category: "" });
    this.toggleModal();
  };
  changeRoute = id => {
    this.props.history.push(`/products/${id}`);
  };
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  changeCategory = e => {
    const { value } = e.target;
    this.setState({ category: value });
  };
  render() {
    let { categories, products } = this.props;
    let { modal } = this.state;
    console.log(products);
    console.log(categories);
    let categorias = [
      { id: 0, name: "Lacteos" },
      { id: 1, name: "algo más" }
    ];
    console.log(categorias);
    return (
      <div>
        <h2>Productos</h2>
        <Container>
          <Box>
            <Table columns={ProductsTable} data={products}></Table>
          </Box>
          <Box>
            <RigthSection>
              <Table
                columns={CategoriesTable}
                data={categorias}
                filter={true}
              ></Table>
              hola
              <Button text="Add Category" action={this.toggleModal} />
            </RigthSection>
          </Box>
        </Container>
        <Modal visibility={modal ? "" : "hidden"}>
          <section>
            <span onClick={this.toggleModal}>X</span>
            <h5>New Category</h5>
            <input
              type="text"
              value={this.state.category}
              onChange={this.changeCategory}
            />
            <Button text="Agregar" action={this.addCategory} />
          </section>
        </Modal>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    productsList: state.productsPage,
    products: state.productsPage.products,
    categories: state.productsPage.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductsChange: data => {
      dispatch(updateProducts(data));
    }
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(Products);
