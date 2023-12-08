import React from "react";
import InfoImage from "../../assets/Info.png";

const WalletImportError: React.FC = () => {
    return (
        <div className="error-message">
            <img src={InfoImage} alt="Info" />
            <span>
                {
                    "Wallet not found. Please double check the 12-word phrase and try again"
                }
            </span>
        </div>
    );
};

export default WalletImportError;
