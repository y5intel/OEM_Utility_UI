import React from "react";
import { useNavigate } from "react-router-dom";

interface WalletImportProps {
    allFilled: boolean;
}

const WalletImport: React.FC<WalletImportProps> = ({ allFilled }) => {
    const navigate = useNavigate();
    const handleConnectClick = () => {
        if (allFilled) {
            navigate("/main");
        } else {
            // Handle the case where the wallet isn't selected
            // Maybe display a message to prompt the user to select a wallet
        }
    };

    return (
        <div className="button-area">
            <button
                className={`btn-custom ${
                    allFilled ? "btn-custom-enabled" : "btn-custom-disabled"
                }`}
                onClick={handleConnectClick}
                disabled={!allFilled}
            >
                Import Wallet
            </button>
        </div>
    );
};

export default WalletImport;
