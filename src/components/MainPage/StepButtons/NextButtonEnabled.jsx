import { useDispatch } from "react-redux";
import { incrementStepCount } from "../../../features/stepCounterSlice";

const NextButtonEnabled = ({ children, width, onClick }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        dispatch(incrementStepCount());
    };

    return (
        <button
            className="bg-blue-gradient"
            style={{
                width: width || "145px",
                height: "37px",
                fontSize: "20px",
                border: "1px solid #573CFA",
            }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default NextButtonEnabled;
