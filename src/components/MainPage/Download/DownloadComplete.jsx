import { useDispatch } from "react-redux";
import { setStepCount } from "../../../features/stepCounterSlice";

const DownloadComplete = () => {
    const dispatch = useDispatch();

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
                onClick={() => dispatch(setStepCount(4))}
            >
                Create another batch of wallets
            </button>
        </>
    );
};

export default DownloadComplete;
