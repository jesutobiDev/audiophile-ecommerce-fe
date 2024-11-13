import { useEffect } from "react";
import Button from "./Button";

interface ModalProps {
  children: React.ReactNode;
  modalOpen: boolean;
  onClick: () => void;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  buttonText,
  onClick,
  modalOpen,
}) => {
  // Disable/enable scrolling when the modal is open/closed
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalOpen]);

  if (!modalOpen) return null;

  return (
    <div
      className="bg-black/30 w-screen h-screen fixed top-0 left-0 flex z-50 items-center justify-center pt-20 pb-7 px-5 md:px-10 lg:px-40 overflow-x-hidden"
    >
      <div className="bg-white rounded-lg p-5 md:p-10 space-y-3 w-[450px]">
        {children}
        <Button size="large" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Modal;
