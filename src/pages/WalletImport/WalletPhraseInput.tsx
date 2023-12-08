import React, { useState } from "react";

interface WalletPhraseInputProps {
    mnemonicWords: string[];
    setMnemonicWords: React.Dispatch<React.SetStateAction<string[]>>;
}

const WalletPhraseInput: React.FC<WalletPhraseInputProps> = ({
    mnemonicWords,
    setMnemonicWords,
}) => {
    const handleMnemonicWordChange = (index: number, word: string) => {
        const updatedWords = [...mnemonicWords];
        updatedWords[index] = word;
        setMnemonicWords(updatedWords);
        // Change button color based on mnemonic completion
        // ...
    };

    return (
        <div className="row">
            {mnemonicWords.map((word, index) => (
                <div className="col-md-4 phrase-word-input" key={index}>
                    <input
                        type="text"
                        value={word}
                        onChange={(e) =>
                            handleMnemonicWordChange(index, e.target.value)
                        }
                        placeholder={`Wallet ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default WalletPhraseInput;
