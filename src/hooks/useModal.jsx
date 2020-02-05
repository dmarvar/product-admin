import { useState } from "react";
export const useModal = (initialMode = false) => {
  const [modalStatus, setModalStatus] = useState(initialMode);
  const toggle = () => setModalStatus(!modalStatus);
  return [modalStatus, setModalStatus, toggle];
};
