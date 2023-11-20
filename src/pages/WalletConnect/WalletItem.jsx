const WalletItem = ({ imgSrc, children, onClick, isActive }) => {
    return (
        <div
            className={`walletblock ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="d-flex align-items-center">
                <img src={imgSrc} alt={children} />
                <p style={{ fontSize: "24px" }}>{children}</p>
            </div>
            <div>
                <p style={{ fontSize: "16px" }}>Detected</p>
            </div>
        </div>
    );
};

export default WalletItem;
