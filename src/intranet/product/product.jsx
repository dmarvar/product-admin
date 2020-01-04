import React, { Component } from "react";
import { connect } from "react-redux";
import Box from "../../common/box";
import styled from "styled-components";
import Button from "../../common/button";
import { updateProducts } from "../../services/actions";

const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Section = styled.section`
  flex: 1;
  div#double {
    display: flex;
  }
  #image {
    text-align: center;
    img {
      display: block;
      width: 250px;
      height: 250px;
      background: black;
      margin: 20px auto;
      object-fit: cover;
      overflow: hidden;
    }
  }
`;

const Fsection = styled.section`
  padding: 20px;
  input,
  textarea,
  select {
    padding: 5px 10px;
    width: 100%;
    background-color: ${p => p.theme.bgColor};
    border: none;
    outline: none;
    color: ${p => p.theme.cWhite};
  }

  button {
    color: ${p => p.theme.cWhite};
    padding: 5px 15px;
    border-color: ${p => p.theme.cOrange};
    background: ${p => p.theme.cOrange};
    margin: 20px auto 30px;
  }
`;

class Product extends Component {
  state = {
    product: null,
    id: null
  };
  componentDidMount() {
    const { products, match } = this.props;
    let id = match.params.id;
    let product = products[id]
      ? products[id]
      : {
          category: "",
          description: "",
          expireDate: "",
          name: "",
          stock: "",
          unitSold: ""
        };
    this.setState({ product, id });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      const { products, match } = this.props;
      let id = match.params.id;
      let product = products[id] ? products[id] : {};
      this.setState({ product, id });
    }
  }
  changeValue = e => {
    const { value, name, files } = e.target;
    const product = files
      ? { ...this.state.product, [name]: URL.createObjectURL(files[0]) }
      : { ...this.state.product, [name]: value };
    this.setState({ product });
    console.log(product);
  };
  updateProduct = e => {
    e.preventDefault();
    const { match, productsPage } = this.props;
    const state = { ...productsPage };
    if (match.params.id === "new") {
      state.products.push(this.state.product);
    } else {
      state.products[match.params.id] = this.state.product;
    }
    this.props.history.push("/products");
  };
  upload = e => {
    e.preventDefault();
    this.refs.fileUploader.click();
  };
  render() {
    const { categories } = this.props;
    const { product } = this.state;
    if (!product) return <div></div>;
    let date = new Date(product.expireDate);
    if (isNaN(date.getTime())) date = new Date();
    date =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    return (
      <div>
        <h2>{product.name || "New Product"}</h2>
        <Box title="Edit product">
          <Form>
            <Section>
              <Fsection>
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  defaultValue={product.name}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Fsection>
                <p>Description</p>
                <textarea
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Fsection>
                <p>Category</p>
                <select
                  name="category"
                  onChange={this.changeValue}
                  defaultValue={product.category}
                >
                  {categories.map((i, k) => (
                    <option value={i} key={k}>
                      {i}
                    </option>
                  ))}
                </select>
              </Fsection>
              <div id="double">
                <Fsection>
                  <p>Expire Date</p>
                  <input
                    type="date"
                    name="expireDate"
                    value={date}
                    onChange={this.changeValue}
                  />
                </Fsection>
                <Fsection>
                  <p>Units in Stock</p>
                  <input
                    type="number"
                    name="stock"
                    defaultValue={product.stock}
                    onChange={this.changeValue}
                  />
                </Fsection>
              </div>
              <Fsection>
                <p>Units Sold</p>
                <input
                  type="number"
                  name="unitSold"
                  defaultValue={product.unitSold.replace(/,/g, ".")}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Button
                text="Update Product"
                action={this.updateProduct}
              ></Button>
            </Section>
            <Section>
              <Fsection id="image">
                <img
                  src={
                    product.img || "https://www.tibs.org.tw/images/default.jpg"
                  }
                  alt=""
                />
                <Button text="Change Image" action={this.upload} />
                <input
                  type="file"
                  name="img"
                  ref="fileUploader"
                  style={{ display: "none" }}
                  onChange={this.changeValue}
                />
              </Fsection>
            </Section>
          </Form>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsPage: state.productsPage,
    products: state.productsPage.products,
    categories: state.productsPage.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProducts: data => dispatch(updateProducts(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
