import { useDispatch } from "react-redux";
import { setStepCount } from "../../../features/stepCounterSlice";
import { initializeWallets } from "../../../features/walletItemSlice";

const DownloadComplete = () => {
    const dispatch = useDispatch();
    const handleCreateBatch = () => {
        dispatch(initializeWallets());
        dispatch(setStepCount(0));
    };

    return (
        <>
            <div className="title position-absolute ">
                <div>Download complete!</div>
                <div>Thank you!</div>
            </div>
            <button
                className="bg-blue-gradient"
                style={{
                    width: "314px",
                    height: "37px",
                    fontSize: "20px",
                    border: "1px solid #573CFA",
                }}
                onClick={handleCreateBatch}
            >
                Create another batch of wallets
            </button>
        </>
    );
};

export default DownloadComplete;
