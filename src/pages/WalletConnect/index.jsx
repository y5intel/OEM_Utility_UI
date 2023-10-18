import { useNavigate } from "react-router-dom";

import LogoBar from "../../components/LogoBar";
import SelectWalletContainer from "./SelectWalletContainer";
import WalletList from "./WalletList";
import WalletConnect from "./WalletConnectButton";

import "./WalletConnect.css";

function WalletConnectionPage() {
    const navigate = useNavigate();
    const handleConnectClick = () => navigate("/main");

    return (
        <>
            <LogoBar />
            <SelectWalletContainer>
                <WalletList />
                <WalletConnect onClick={handleConnectClick} />
            </SelectWalletContainer>
        </>
    );
}

export default WalletConnectionPage;
