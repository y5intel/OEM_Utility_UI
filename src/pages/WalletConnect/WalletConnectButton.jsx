const WalletConnect = (props) => {
    console.log({ props });
    return (
        <button
            className="btn-custom btn-custom-disabled float-right disabled"
            style={{ marginTop: "32px" }}
            onClick={props.onClick}
        >
            Continue
        </button>
    );
};

export default WalletConnect;
