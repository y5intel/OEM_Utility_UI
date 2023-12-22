import React from "react";
import { useDispatch } from "react-redux";
import { decrementStepCount } from "../../../features/stepCounterSlice";

interface BackButtonProps {
    onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        dispatch(decrementStepCount());
    };

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
            onClick={handleClick}
        >
            Back
        </button>
    );
};

export default BackButton;
