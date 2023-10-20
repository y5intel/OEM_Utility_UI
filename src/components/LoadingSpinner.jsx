import Loader from "react-spinner-loader";

const LoadingSpinner = ({ isDownloading }) => {
    return (
        <Loader
            show={isDownloading}
            type="inline"
            stack="vertical"
            message="Loading Description"
            spinnerSize="70px"
        />
    );
};

export default LoadingSpinner;
