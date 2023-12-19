import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import importWallet from "apis/importWallet";
import { storeKeypair } from "features/keypairSingerSlice";

interface WalletImportProps {
    allFilled: boolean;
    mnemonicWords: string[];
    setIsWalletFound: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletImport: React.FC<WalletImportProps> = ({
    allFilled,
    mnemonicWords,
    setIsWalletFound,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleConnectClick = async () => {
        if (allFilled) {
            const data = await importWallet(mnemonicWords.join(" "));
            if (!data) {
                setIsWalletFound(false);
            } else {
                setIsWalletFound(true);
                dispatch(storeKeypair(data));
                navigate("/main");
            }
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
