import { useDispatch } from "react-redux";
import { incrementStepCount } from "../../../features/stepCounterSlice";

const NextButtonEnabled = ({ children, width }) => {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-blue-gradient"
            style={{
                width: width || "145px",
                height: "37px",
                fontSize: "20px",
                border: "1px solid #573CFA",
            }}
            onClick={() => dispatch(incrementStepCount())}
        >
            {children}
        </button>
    );
};

export default NextButtonEnabled;
