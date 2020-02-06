import React, { useState } from "react";

const defaultListener = () => {};

const ImageUpload = ({ initialImg = "", changeListener = defaultListener }) => {
  const [image, setImage] = useState(initialImg);
  const handleChange = async ({ target }) => {
    // const [imageUrl] = useImageUpload();
    const [file] = target.files;
    console.log(file);
    setImage(URL.createObjectURL(file));
    changeListener(file);
    // storage
    //   .ref(`/merkar/products/${file.name}`)
    //   .put(file)
    //   .then(snapshot => {
    //     console.log(snapshot.ref.getDownloadURL()[i]);
    //   });
    // changeListener(file);
  };
  return (
    <div>
      <img src={image} alt="Product Image" />
      <input
        type="file"
        name="img"
        refs="fileUploader"
        onChange={handleChange}
      />
    </div>
  );
};
export default ImageUpload;
