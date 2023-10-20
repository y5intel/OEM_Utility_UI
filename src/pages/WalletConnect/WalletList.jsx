// import "../../pages/WalletConnect/WalletConnect.css";
import WalletItem from "./WalletItem";
import PhantomLogo from "../../assets/phantom-logo-freelogovectors-2.png";
import SolflareLogo from "../../assets/Solflare-Logo-1.png";

const WalletList = ({ selectedWallet, setSelectedWallet }) => {
    return (
        <div className="select-wallet-sector">
            <div className="text text-center" style={{ marginBottom: "26px" }}>
                <h2 style={{ fontSize: "32px" }}>Select Wallet</h2>
                <p style={{ fontSize: "20px", marginBottom: "0px" }}>
                    Connect a wallet on Solana to continue
                </p>
            </div>
            <div>
                <WalletItem
                    imgSrc={PhantomLogo}
                    onClick={() => setSelectedWallet("phantom")}
                    isActive={selectedWallet === "phantom" ? true : false}
                >
                    Phantom
                </WalletItem>
                <WalletItem
                    imgSrc={SolflareLogo}
                    onClick={() => setSelectedWallet("solflare")}
                    isActive={selectedWallet === "solflare" ? true : false}
                >
                    Solflare
                </WalletItem>
            </div>
        </div>
    );
};

export default WalletList;
