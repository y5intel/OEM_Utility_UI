// import "../../pages/WalletConnect/WalletConnect.css";
// import WalletItem from "./WalletItem";
import { useWallet } from "@solana/wallet-adapter-react";

interface WalletListProps {
    selectedWallet: string;
    setSelectedWallet: (wallet: string) => void;
}

const WalletList: React.FC<WalletListProps> = ({
    selectedWallet,
    setSelectedWallet,
}) => {
    const { wallets, select } = useWallet();

    return (
        <div className="select-wallet-sector">
            <div className="text text-center" style={{ marginBottom: "26px" }}>
                <h2 style={{ fontSize: "32px" }}>Select Wallet</h2>
                <p style={{ fontSize: "20px", marginBottom: "0px" }}>
                    Connect a wallet on Solana to continue
                </p>
            </div>
            <div>
                {wallets &&
                    wallets.map((wallet, index) => {
                        return (
                            <div
                                className={`walletblock ${
                                    selectedWallet === wallet.adapter.name
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => {
                                    try {
                                        select(wallet.adapter.name);
                                    } catch (err) {
                                        console.log("err ==> ", err);
                                    }
                                    setSelectedWallet(wallet.adapter.name);
                                }}
                                key={wallet.adapter.name}
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        className="wallet-icon"
                                        src={wallet.adapter.icon}
                                        alt={wallet.adapter.name}
                                        width="50px"
                                        height="50px"
                                    />
                                    <p style={{ fontSize: "24px" }}>
                                        {wallet.adapter.name}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: "16px" }}>
                                        {wallet.readyState === "Installed"
                                            ? "Detected"
                                            : "Not Installed"}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default WalletList;
