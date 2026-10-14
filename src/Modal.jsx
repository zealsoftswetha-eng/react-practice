import { createPortal } from "react-dom";

function Modal({ onClose }) {
    return createPortal(
        <div className="modal">
            <h2>Welcome!</h2>

            <p>This is a React Portal.</p>

            <button onClick={onClose}>
                Close
            </button>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;
