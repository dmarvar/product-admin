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
