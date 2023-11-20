import Modal from "react-modal";
import "./modal.css";

const PaymentModal = ({ isOpen, onRequestClose, onRequestPayment }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            // contentLabel="Modal"
            className={{
                base: "modal-base",
                afterOpen: "modal-base_after-open",
                beforeClose: "modal-base_before-close",
            }}
            overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-base_after-open",
                beforeClose: "overlay-base_before-close",
            }}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={2000}
        >
            <div style={{ padding: "0px 17px", marginBottom: "40px" }}>
                Are you sure you want to proceed?
            </div>
            <div className="d-flex justify-content-between">
                <button
                    onClick={onRequestClose}
                    style={{
                        border: "1px solid #A2A2A2",
                        color: "#A2A2A2",
                        background: "transparent",
                    }}
                >
                    Close
                </button>
                <button
                    onClick={onRequestPayment}
                    style={{
                        background: "#573CFA",
                        color: "#FFF",
                        border: "1px solid #573CFA",
                    }}
                >
                    Yes
                </button>
            </div>
        </Modal>
    );
};

export default PaymentModal;
