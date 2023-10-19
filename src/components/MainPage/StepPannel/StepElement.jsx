// import logoImage from "../../../assets/Utility-Wallet-Logo-1.png";

const StepElement = ({ id, title, imgSrc1, imgSrc2 }) => {
    const status = 1;

    return (
        <div className="stepElement">
            <div className="stepElement-body">
                <span className="step-id">{id}</span>
                <span className="step-title">{title}</span>
                <div className="step-image">
                    {status === 1 ? (
                        <img src={imgSrc1} />
                    ) : (
                        <img src={imgSrc2} />
                    )}
                </div>
            </div>
            <div className="stepElement-bottom"></div>
        </div>
    );
};

export default StepElement;
