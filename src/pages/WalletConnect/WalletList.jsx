// import "../../pages/WalletConnect/WalletConnect.css";
// import WalletItem from "./WalletItem";
import PhantomLogo from "../../assets/phantom-logo-freelogovectors-2.png";
import SolflareLogo from "../../assets/Solflare-Logo-1.png";
import { useWallet } from "@solana/wallet-adapter-react";

const WalletList = ({ selectedWallet, setSelectedWallet }) => {
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
                  selectedWallet === wallet.adapter.name ? "active" : ""
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
                  {wallet.adapter.name === "Phantom" ? (
                    <img
                      className="wallet-icon"
                      src={PhantomLogo}
                      alt={wallet.adapter.name}
                      width="50px"
                      height="50px"
                    />
                  ) : (
                    <img
                      className="wallet-icon"
                      src={SolflareLogo}
                      alt={wallet.adapter.name}
                      width="50px"
                      height="50px"
                    />
                  )}
                  <p style={{ fontSize: "24px" }}>{wallet.adapter.name}</p>
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
        {/* <WalletItem
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
                </WalletItem> */}
      </div>
    </div>
  );
};

export default WalletList;
