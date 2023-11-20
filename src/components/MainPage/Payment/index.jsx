import { useState } from "react";

import PaymentMain from "./PaymentMain";
import PaymentSuccess from "./PaymentSuccess";
import TransactionFailed from "./TrasactionFailed";
import PaymentModal from "../../PaymentModal";
import "./style.css";

const PaymentStep = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [paymentStep, setPaymentStep] = useState(0);

    const handleOpenModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handlePaymentRequest = () => {
        setModalOpen(!isModalOpen);
        setPaymentStep(1);
    };

    return (
        <div className="payment">
            <div className="position-relative" style={{ height: "100%" }}>
                {paymentStep === 0 && (
                    <PaymentMain handleOpenModal={handleOpenModal} />
                )}
                {paymentStep === 1 && <PaymentSuccess />}
                {paymentStep === 2 && <TransactionFailed />}
                {isModalOpen && (
                    <PaymentModal
                        isOpen={isModalOpen}
                        onRequestClose={handleOpenModal}
                        onRequestPayment={handlePaymentRequest}
                    />
                )}
            </div>
        </div>
    );
};

export default PaymentStep;
