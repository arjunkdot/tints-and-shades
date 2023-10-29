import React, { useEffect } from "react";
import { createPortal } from "react-dom";
interface ModalTypes {
  className: string;
  dismissMethod: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const Modal = (props: ModalTypes) => {
  const handleDismiss = () => {
    props.dismissMethod(false);
  };

  const handleDismissByEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      props.dismissMethod(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleDismissByEsc);

    return () => {
      document.removeEventListener("keydown", handleDismissByEsc);
    };
  }, []);
  return (
    <>
      {createPortal(
        <div className={props.className}>
          <div
            className={`w-[90%] md:w-[70%] lg:w-[55%] xl:w-[45%] max-w-[600px] h-auto max-h-[80%] overflow-y-auto bg-white dark:bg-slate-800 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm p-5 shadow-lg`}>
            {props.children}
          </div>
        </div>,
        document.getElementById("modal")!
      )}
      {createPortal(
        <div
          onClick={handleDismiss}
          className="fixed w-full h-full bg-black opacity-50 left-0 top-0 z-40"></div>,
        document.getElementById("overlay")!
      )}
    </>
  );
};

export default Modal;
