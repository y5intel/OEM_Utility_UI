import Loader from "react-spinner-loader";

const LoadingSpinner = ({ isDownloaded }) => {
    return (
        <Loader
            show={isDownloaded}
            type="inline"
            stack="vertical"
            message="Loading Description"
            spinnerSize="70px"
        />
    );
};

export default LoadingSpinner;
