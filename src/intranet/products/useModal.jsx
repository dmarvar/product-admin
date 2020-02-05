import React, { useState } from "react";
import Button from "../../common/button";
import { Modal } from "./styles";

const CategoriesModal = () => {
  const [modal, setModal] = useState(true);
  const toogleModal = () => {
    setModal(!modal);
  };
  return [
    <Modal visibility={modal ? "" : "hidden"}>
      <section>
        <span onClick={() => setModal(false)}>X</span>
        <h5>Nueva Categoria</h5>
        {/* <input
          type="text"
          value={this.state.category}
          onChange={this.changeCategory}
        /> */}
        {/* <Button text="Agregar" action={this.addCategory} /> */}
      </section>
    </Modal>,
    toogleModal
  ];
};

export default CategoriesModal;
