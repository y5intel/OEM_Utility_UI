import InfoImage from "../assets/Info.png";

const WarningSector = ({ text }) => {
    return (
        <div className="warn-block d-flex justify-content-center">
            <div className="d-flex align-items-center">
                <img src={InfoImage} alt="Info" /> <span>{text}</span>
            </div>
        </div>
    );
};

export default WarningSector;
