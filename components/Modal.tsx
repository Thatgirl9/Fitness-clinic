interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="relative flex justify-center items-center">
        <div className="rounded shadow-lg w-[90%] lg:w-full">
          <button
            onClick={onClose}
            className="absolute top-[-2em] right-[1em] rounded-full h-7 w-7 p-1 bg-green-primary text-center"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
