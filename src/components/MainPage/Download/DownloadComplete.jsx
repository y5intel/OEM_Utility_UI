import NextButtonEnabled from "../StepButtons/NextButtonEnabled";

const DownloadComplete = () => {
    return (
        <>
            <div className="title position-absolute ">
                <div>Download complete!</div>
                <div>Thank you!</div>
            </div>
            <NextButtonEnabled width={314}>
                Create another batch of wallets
            </NextButtonEnabled>
        </>
    );
};

export default DownloadComplete;
