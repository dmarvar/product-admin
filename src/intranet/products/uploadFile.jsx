import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState({ selectedFile: null });
  const changeUploader = e => {
    setFile(e.target.files[0]);
    alert(JSON.stringify(file));
  };
  const submit = async () => {
    // const doc = { name: "perro", filename: "ERo" };
    const fd = new FormData();
    fd.append("csv", file, file.name);
    console.log(fd.getAll("name"));
    // console.log();
    // console.log(file);
    const info = [{ Campo1: "Hello" }];
    const res = await axios.post(
      "https://wecommerceapiaz.azurewebsites.net/api/UploadProducts",
      info
    );
    // console.log(res);
  };
  return (
    <div>
      <input type="file" onChange={e => changeUploader(e)} />
      <button onClick={() => submit()}>Submit</button>
    </div>
  );
};
export default Upload;
