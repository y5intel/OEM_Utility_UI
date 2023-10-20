import { useSelector } from "react-redux";
import { selectStepCount } from "../../../features/stepCounterSlice";
import CheckedImage from "../../../assets/Subtract.png";

const StepElement = ({ id, title, imgSrc1, imgSrc2 }) => {
    const stepCount = useSelector(selectStepCount);
    const isVisited = id < stepCount + 1 ? 0 : id === stepCount + 1 ? 1 : 2;
    const imgSrc = [CheckedImage, imgSrc2, imgSrc1][isVisited];

    // Define the classes to conditionally apply
    const classes = "stepElement" + [" visited", " active", ""][isVisited];

    return (
        <div className={classes}>
            <div className="stepElement-body">
                <span className="step-id" style={{ marginRight: "17px" }}>
                    {id}
                </span>
                <span className="step-title">{title}</span>
                <div className="step-image">
                    <img src={imgSrc} />
                </div>
            </div>
            <div className="stepElement-bottom"></div>
        </div>
    );
};

export default StepElement;
