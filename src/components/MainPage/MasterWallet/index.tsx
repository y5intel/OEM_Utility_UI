import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import CopyImage from "../../../assets/Copy_alt_light.png";
import RefreshImage from "../../../assets/Refresh_light.png";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import NextButtonDisabled from "../StepButtons/NextButtonDisabled";
import "./style.css";

import {
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
} from "@solana/web3.js";

interface MasterWalletStepProps {
    // Define props if needed
}

const MasterWalletStep: React.FC<MasterWalletStepProps> = () => {
    const { publicKey, wallet, connect, disconnect } = useWallet();
    const walletName = wallet?.adapter.name;
    const walletIcon = wallet?.adapter.icon;
    const navigate = useNavigate();
    const handleBackButtonClick = () => navigate("/wallet-connect");
    const [balance, setBalance] = useState<number>(0);
    const [showCopied, setShowCopied] = useState(false);

    const WALLET_ADDRESS = useMemo(() => publicKey?.toBase58(), [publicKey]);

    const SOLANA_CONNECTION = useMemo(
        () => new Connection(clusterApiUrl("devnet")),
        []
    );

    useEffect(() => {
        if (!walletName) {
            handleBackButtonClick();
        }
        if (WALLET_ADDRESS) {
            (async () => {
                const balance = await SOLANA_CONNECTION.getBalance(
                    new PublicKey(WALLET_ADDRESS)
                );
                setBalance(balance / LAMPORTS_PER_SOL);
            })();
        }
    }, [WALLET_ADDRESS, SOLANA_CONNECTION]);

    const handleRefresh = () => {
        connect();
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard
            .writeText(WALLET_ADDRESS ? WALLET_ADDRESS : "") // Replace with the actual text you want to copy
            .then(() => {
                setShowCopied(true); // Display "Copied" text
                setTimeout(() => {
                    setShowCopied(false); // Hide "Copied" text after 1 second
                }, 1000);
            })
            .catch((error) => {
                console.error("Error copying to clipboard: ", error);
            });
    };

    return (
        <div className="masterWallet">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="block">
                    <div className="title">
                        <span className="d-flex align-items-center">
                            {walletName} Wallet
                            <img
                                src={walletIcon}
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    marginLeft: "10px",
                                }}
                                alt="icon"
                            />
                        </span>
                        <button
                            className="btn-no-style refresh-button"
                            onClick={handleRefresh}
                        >
                            <img src={RefreshImage} alt="Refresh" />
                        </button>
                    </div>
                    <div className="content d-flex justify-content-between align-items-center">
                        <div
                            className="d-flex align-items-center"
                            style={{ padding: "10px 10px 10px 27px" }}
                        >
                            <span
                                style={{
                                    marginRight: "12px",
                                    fontSize: "20px",
                                }}
                            >
                                Wallet ID:
                            </span>
                            <span style={{ fontSize: "14px" }}>
                                {WALLET_ADDRESS}
                            </span>
                        </div>
                        <button
                            className="btn-no-style"
                            onClick={handleCopyToClipboard}
                        >
                            {showCopied ? (
                                <span>Copied</span>
                            ) : (
                                <img
                                    src={CopyImage}
                                    alt="Copy"
                                    style={{ width: "30px" }}
                                />
                            )}
                        </button>
                    </div>
                </div>
                <div className="block">
                    <div className="title">
                        <span>Contents</span>
                    </div>
                    <div className="content" style={{ padding: "0px 18px" }}>
                        <div
                            className="d-flex"
                            style={{
                                borderBottom: "1px solid #000",
                                color: "#573CFA",
                                fontWeight: "500",
                                padding: "10px",
                            }}
                        >
                            <p>Name</p>
                            <p>Amount</p>
                        </div>
                        <div className="d-flex" style={{ padding: "10px" }}>
                            <p className="font-weight-bold">SOL</p>
                            <p className="font-weight-bold">{balance}</p>
                        </div>
                    </div>
                </div>
                <div className="btn-block">
                    <button
                        style={{
                            width: "145px",
                            height: "37px",
                            border: "1px solid #A2A2A2",
                            background: "#FFF",
                            color: "#A2A2A2",
                            fontSize: "20px",
                            fontWeight: "600",
                        }}
                        onClick={handleBackButtonClick}
                    >
                        Back
                    </button>
                    {balance ? (
                        <NextButtonEnabled>Continue</NextButtonEnabled>
                    ) : (
                        <NextButtonDisabled>Continue</NextButtonDisabled>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MasterWalletStep;
