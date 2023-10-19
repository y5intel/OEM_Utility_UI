// import "../../pages/WalletConnect/WalletConnect.css";
import PhantomLogo from "../../assets/phantom-logo-freelogovectors-2.png";
import SolflareLogo from "../../assets/Solflare-Logo-1.png";

const WalletList = () => {
    return (
        <div className="select-wallet-sector">
            <div className="text text-center" style={{ marginBottom: "26px" }}>
                <h2 style={{ fontSize: "32px" }}>Select Wallet</h2>
                <p style={{ fontSize: "20px", marginBottom: "0px" }}>
                    Connect a wallet on Solana to continue
                </p>
            </div>
            <div>
                <div className="walletblock">
                    <div className="d-flex align-items-center">
                        <img src={PhantomLogo} alt="Phantom" />
                        <p style={{ fontSize: "24px" }}>Phantom</p>
                    </div>
                    <div>
                        <p style={{ fontSize: "16px" }}>Detected</p>
                    </div>
                </div>
                <div className="walletblock">
                    <div className="d-flex align-items-center">
                        <img src={SolflareLogo} alt="Solflare" />
                        <p style={{ fontSize: "24px" }}>Solflare</p>
                    </div>
                    <div className="d-none">
                        <p style={{ fontSize: "16px" }}>Detected</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletList;
