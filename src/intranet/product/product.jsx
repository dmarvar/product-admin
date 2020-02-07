import React, { useState } from "react";
import ProductMainForm from "./productMainForm";
import { useGetHttp, usePostHttp } from "../../hooks/useHttp";
import { useImageUpload } from "../../hooks/useImageUpload";
import ImageUpload from "../../common/imageUpload";
import ProductPricesForm from "./productPricesForm";
import Box from "../../common/box";
import { Wrapper, ImageContainer } from "./styles";

const Product = ({ match }) => {
  const { id } = match.params;
  const [storesByProduct] = useGetHttp(
    `GetStoresByProduct?productid=${id}&ownerid=ALGOMERKAR`
  );
  const [product] = useGetHttp(`GetProductById?productid=${id}`);
  const [postProduct] = usePostHttp("UpdateProduct");
  const [newImgFile, setNewImgFile] = useState();
  const [getImageUrl] = useImageUpload("/ALGOMERKAR/products/");
  const imageChange = file => {
    setNewImgFile(file);
  };
  const submitMainForm = async values => {
    if (newImgFile) {
      // Se sube la imagen a firebase y se captura la url
      const url = await getImageUrl(newImgFile);
      values["imageURL"] = url;
    }
    const jsonProduct = JSON.stringify(values);
    postProduct(jsonProduct).then(res => {
      console.log(res);
    });
  };
  console.log(storesByProduct);
  return (
    <Wrapper>
      <Box>
        <ImageContainer>
          <ImageUpload
            initialImg={product[0] && product[0]["imageURL"]}
            changeListener={imageChange}
          ></ImageUpload>
        </ImageContainer>
        <ProductMainForm
          submit={submitMainForm}
          initialValues={product[0]}
        ></ProductMainForm>
      </Box>
      <Box>
        <h2 style={{ textAlign: "right", marginRight: "50px" }}>
          Precios y puntos de venta
        </h2>
        <ProductPricesForm initialValues={storesByProduct}></ProductPricesForm>
      </Box>
    </Wrapper>
  );
};

export default Product;

// class Product extends Component {
//   state = {
//     product: null,
//     id: null
//   };
//   componentDidMount() {
//     const { products, match } = this.props;
//     let id = match.params.id;
//     let product = products[id]
//       ? products[id]
//       : {
//           category: "",
//           description: "",
//           expireDate: "",
//           name: "",
//           stock: "",
//           unitSold: ""
//         };
//     this.setState({ product, id });
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.products !== this.props.products) {
//       const { products, match } = this.props;
//       let id = match.params.id;
//       let product = products[id] ? products[id] : {};
//       this.setState({ product, id });
//     }
//   }
//   changeValue = e => {
//     const { value, name, files } = e.target;
//     const product = files
//       ? { ...this.state.product, [name]: URL.createObjectURL(files[0]) }
//       : { ...this.state.product, [name]: value };
//     this.setState({ product });
//     console.log(product);
//   };
//   updateProduct = e => {
//     e.preventDefault();
//     const { match, productsPage } = this.props;
//     const state = { ...productsPage };
//     if (match.params.id === "new") {
//       state.products.push(this.state.product);
//     } else {
//       state.products[match.params.id] = this.state.product;
//     }
//     this.props.history.push("/products");
//   };
//   upload = e => {
//     e.preventDefault();
//     this.refs.fileUploader.click();
//   };
//   render() {
//     const { categories } = this.props;
//     const { product } = this.state;
//     if (!product) return <div></div>;
//     let date = new Date(product.expireDate);
//     if (isNaN(date.getTime())) date = new Date();
//     date =
//       date.getFullYear() +
//       "-" +
//       ("0" + (date.getMonth() + 1)).slice(-2) +
//       "-" +
//       ("0" + date.getDate()).slice(-2);
//     return (
//       <div>
//         <h2>{product.name || "New Product"}</h2>
//         <Box title="Edit product">
//           <Form>
//             <Section>
//               <Fsection>
//                 <p>Name</p>
//                 <input
//                   type="text"
//                   name="name"
//                   defaultValue={product.name}
//                   onChange={this.changeValue}
//                 />
//               </Fsection>
//               <Fsection>
//                 <p>Description</p>
//                 <textarea
//                   type="text"
//                   name="description"
//                   value={product.description}
//                   onChange={this.changeValue}
//                 />
//               </Fsection>
//               <Fsection>
//                 <p>Category</p>
//                 <select
//                   name="category"
//                   onChange={this.changeValue}
//                   defaultValue={product.category}
//                 >
//                   {categories.map((i, k) => (
//                     <option value={i} key={k}>
//                       {i}
//                     </option>
//                   ))}
//                 </select>
//               </Fsection>
//               <div id="double">
//                 <Fsection>
//                   <p>Expire Date</p>
//                   <input
//                     type="date"
//                     name="expireDate"
//                     value={date}
//                     onChange={this.changeValue}
//                   />
//                 </Fsection>
//                 <Fsection>
//                   <p>Units in Stock</p>
//                   <input
//                     type="number"
//                     name="stock"
//                     defaultValue={product.stock}
//                     onChange={this.changeValue}
//                   />
//                 </Fsection>
//               </div>
//               <Fsection>
//                 <p>Units Sold</p>
//                 <input
//                   type="number"
//                   name="unitSold"
//                   defaultValue={product.unitSold.replace(/,/g, ".")}
//                   onChange={this.changeValue}
//                 />
//               </Fsection>
//               <Button
//                 text="Update Product"
//                 action={this.updateProduct}
//               ></Button>
//             </Section>
//             <Section>
//               <Fsection id="image">
//                 <img
//                   src={
//                     product.img || "https://www.tibs.org.tw/images/default.jpg"
//                   }
//                   alt=""
//                 />

//               </Fsection>
//             </Section>
//           </Form>
//         </Box>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     productsPage: state.productsPage,
//     products: state.productsPage.products,
//     categories: state.productsPage.categories
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     updateProducts: data => dispatch(updateProducts(data))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Product);
