import React from "react";
// import { ModalTag } from "./modalStyles";

const Modal = ({ isActive, children, title, handleClose }) => {
  return (
    <div></div>
    // <ModalTag visibility={isActive ? "" : "hidden"}>
    //   <section>
    //     <span onClick={handleClose}>X</span>
    //     <h5>{title}</h5>
    //     {...children}
    //   </section>
    // </ModalTag>
  );
};

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Modal;
// const CustomModal = ({ isActive, children, title, handleClose }) => {
//   return (
//     <Modal isActive={isActive}>
//       <ModalBackground onClick={handleClose} />
//       <ModalContent
//         style={{ backgroundColor: "white", padding: "2rem", maxWidth: "100vw" }}
//       >
//         <Title isSize={6}>{title}</Title>
//         {children}
//       </ModalContent>
//       <ModalClose onClick={handleClose} />
//     </Modal>
//   );
// };

// CustomModal.propTypes = {
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string.isRequired,
//   isActive: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired
// };
// export default CustomModal;
