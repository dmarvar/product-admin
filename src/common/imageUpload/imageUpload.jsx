import React, { useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 250px;
  position: relative;
  border: 2px dashed ${p => p.theme.cOrangeDark};
  padding: 5px;
  img {
    width: 100%;
    cursor: pointer;
  }
  button {
    position: absolute;
    display: none;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
  }
  &:hover {
    background: ${p => p.theme.bgColorLight};
    border-color: ${p => p.theme.cOrange};
    button {
      display: block;
      outline: none;
    }
  }
`;

const Button = styled.button``;

const defaultListener = () => {};

const ImageUpload = ({ initialImg, changeListener = defaultListener }) => {
  const [image, setImage] = useState(null);
  const searchFile = useRef(null);
  const defaultImg =
    "https://d167y3o4ydtmfg.cloudfront.net/240/studio/assets/v1554362197556_613007740/Default-coming-soon.jpg";
  const handleChange = async ({ target }) => {
    const [file] = target.files;
    setImage(URL.createObjectURL(file));
    // Comprimir archivo de imagen
    changeListener(file);
  };
  const upload = e => {
    e.preventDefault();
    searchFile.current.click();
  };
  return (
    <Wrapper>
      <img
        src={image || initialImg || defaultImg}
        alt="Product Image"
        onClick={upload}
      />
      <Button onClick={upload}> Cambiar Imagen</Button>
      <input
        type="file"
        name="img"
        ref={searchFile}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
export default ImageUpload;
