import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const overlayId = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      <div>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlayId)}
        {ReactDOM.createPortal(
          <ModalOverlay className={classes.overlay}>
            {props.children}
          </ModalOverlay>,
          overlayId
        )}
      </div>
    </Fragment>
  );
};

export default Modal;
