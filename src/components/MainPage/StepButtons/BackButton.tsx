import React from "react";
import { useDispatch } from "react-redux";
import { decrementStepCount } from "../../../features/stepCounterSlice";

const BackButton: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <button
            style={{
                width: "145px",
                height: "37px",
                border: "1px solid #A2A2A2",
                background: "#FFF",
                color: "#A2A2A2",
                fontSize: "20px",
                fontWeight: "600",
            }}
            onClick={() => dispatch(decrementStepCount())}
        >
            Back
        </button>
    );
};

export default BackButton;
