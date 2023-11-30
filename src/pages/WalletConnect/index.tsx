import React, { useState } from "react";

import LogoBar from "../../components/LogoBar";
import SelectWalletContainer from "./SelectWalletContainer";
import WalletList from "./WalletList";
import WalletConnect from "./WalletConnectButton";

import "./WalletConnect.css";

function WalletConnectionPage() {
    const [selectedWallet, setSelectedWallet] = useState<string>("");

    return (
        <>
            <LogoBar />
            <SelectWalletContainer>
                <WalletList
                    selectedWallet={selectedWallet}
                    setSelectedWallet={setSelectedWallet}
                />
                <WalletConnect selectedWallet={selectedWallet} />
            </SelectWalletContainer>
        </>
    );
}

export default WalletConnectionPage;
