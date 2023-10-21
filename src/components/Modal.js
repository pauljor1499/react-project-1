import React from "react";
import { createPortal } from "react-dom";

const Modal = () => {
    return createPortal(<div>Modal</div>, document.getElementById("portal"));
};

export default Modal;
