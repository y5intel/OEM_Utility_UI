import BackButton from "../StepButtons/BackButton";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";

const TransactionFailed = () => {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "460px",
                }}
            >
                <div
                    className="text-center"
                    style={{
                        color: "#573CFA",
                        fontSize: "26px",
                        fontWeight: "800",
                        marginBottom: "8px",
                    }}
                >
                    Transaction Failed
                </div>
                <div style={{ fontSize: "20px" }}>
                    Error: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.{" "}
                </div>
            </div>
            <div className="btn-block">
                <BackButton />
                <NextButtonEnabled>Retry</NextButtonEnabled>
            </div>
        </>
    );
};

export default TransactionFailed;
