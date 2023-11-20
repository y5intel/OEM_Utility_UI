import BackButton from "../StepButtons/BackButton";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";

const PaymentSuccess = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#573CFA",
                    fontSize: "26px",
                    fontWeight: "800",
                }}
            >
                Payment Success
            </div>
            <div className="btn-block">
                <BackButton />
                <NextButtonEnabled>Next</NextButtonEnabled>
            </div>
        </div>
    );
};

export default PaymentSuccess;
