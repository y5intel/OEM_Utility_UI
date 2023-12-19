import React, { useState } from "react";

import LogoBar from "../../components/LogoBar";
import WalletPhraseInput from "./WalletPhraseInput";
import WalletImportButton from "./WalletImportButton";
import WalletImportError from "./WalletImportError";
import "./WalletImport.css";

const WalletImportPage: React.FC = () => {
    const [mnemonicWords, setMnemonicWords] = useState<string[]>(
        Array(12).fill("")
    );
    const [isWalletFound, setIsWalletFound] = useState(true);

    const allFilled = mnemonicWords.every((word) => word.trim() !== "");

    return (
        <div className={`wallet-import-page ${allFilled ? "active" : ""}`}>
            <LogoBar />
            <div className="main">
                <WalletPhraseInput
                    mnemonicWords={mnemonicWords}
                    setMnemonicWords={setMnemonicWords}
                />
                <WalletImportButton
                    mnemonicWords={mnemonicWords}
                    allFilled={allFilled}
                    setIsWalletFound={setIsWalletFound}
                />
                {!isWalletFound && <WalletImportError />}
            </div>
        </div>
    );
};

export default WalletImportPage;
