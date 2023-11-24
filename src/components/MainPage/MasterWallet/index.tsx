import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import CopyImage from "../../../assets/Copy_alt_light.png";
import RefreshImage from "../../../assets/Refresh_light.png";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import "./style.css";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import SolflareLogoImage from "../../../assets/Solflare-Logo-1.png";
// import NextButtonDisabled from "../StepButtons/NextButtonDisabled";

import {
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    GetProgramAccountsFilter,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
// import { AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";

// const solanaWeb3 = require("@solana/web3.js");
interface MasterWalletStepProps {
    // Define props if needed
}

const MasterWalletStep: React.FC<MasterWalletStepProps> = () => {
    const { publicKey } = useWallet();
    const navigate = useNavigate();
    const handleBackButtonClick = () => navigate("/login");
    const [balance, setBalance] = useState<number>(0);
    const [mintAddress, setMintAddress] = useState<string>("");
    const [tokenBalance, setTokenBalance] = useState<string>("");

    // const SOLANA_CONNECTION = new Connection(clusterApiUrl("devnet"));
    const WALLET_ADDRESS = useMemo(() => publicKey?.toBase58(), [publicKey]);

    const SOLANA_CONNECTION = useMemo(
        () => new Connection(clusterApiUrl("devnet")),
        []
    );

    // const getAccountInfo = async (address) => {
    //     console.log(new solanaWeb3.PublicKey(address));
    //     console.log({ TOKEN_PROGRAM_ID });
    //     let accountInfo = await SOLANA_CONNECTION.getParsedTokenAccountsByOwner(
    //         new solanaWeb3.PublicKey(address),
    //         {
    //             programId: new solanaWeb3.PublicKey(TOKEN_PROGRAM_ID),
    //         }
    //     );
    //     return accountInfo.value;
    // };

    // useEffect(() => {
    //     if (WALLET_ADDRESS)
    //         getAccountInfo(WALLET_ADDRESS)
    //             .then((data) => console.log(data))
    //             .catch((err) => console.error(err));
    // }, [WALLET_ADDRESS]);

    const getTokenAccounts = async (
        wallet: PublicKey | null,
        connection: Connection
    ) => {
        if (!wallet) return;
        const filters: GetProgramAccountsFilter[] = [
            {
                dataSize: 165,
            },
            {
                memcmp: {
                    offset: 32,
                    bytes: wallet?.toBuffer()?.toString("base64") || "", // Convert Buffer to base64 string
                },
            },
        ];
        const accounts = await connection.getParsedProgramAccounts(
            TOKEN_PROGRAM_ID,
            { filters }
        );
        console.log(
            `Found ${accounts.length} token account(s) for wallet ${wallet}.`
        );
        accounts.forEach((account, i) => {
            const parsedAccountInfo = account.account.data;

            if ("parsed" in parsedAccountInfo) {
                const mintAddress = parsedAccountInfo["parsed"]["info"]["mint"];
                const tokenBalance =
                    parsedAccountInfo["parsed"]["info"]["tokenAmount"][
                        "uiAmount"
                    ];
                console.log(
                    `Token Account No. ${i + 1}: ${account.pubkey.toString()}`
                );
                console.log(`--Token Mint: ${mintAddress}`);
                setMintAddress(mintAddress);
                console.log(`--Token Balance: ${tokenBalance}`);
                setTokenBalance(tokenBalance);
            }
        });
    };

    useEffect(() => {
        if (WALLET_ADDRESS) getTokenAccounts(publicKey, SOLANA_CONNECTION);
    }, [WALLET_ADDRESS, publicKey, SOLANA_CONNECTION]);

    // useEffect(() => {
    //     if (WALLET_ADDRESS)
    //         (async () => {

    //             const tokenAccounts =
    //                 await SOLANA_CONNECTION.getTokenAccountsByOwner(publicKey, {
    //                     programId: TOKEN_PROGRAM_ID,
    //                 });
    //             console.log(tokenAccounts);
    //             console.log(
    //                 "Token                                         Balance"
    //             );
    //             console.log(
    //                 "------------------------------------------------------------"
    //             );
    //             tokenAccounts.value.forEach((tokenAccount) => {
    //                 const accountData = AccountLayout.decode(
    //                     tokenAccount.account.data
    //                 );
    //                 console.log(
    //                     `${new PublicKey(accountData.mint)}   ${
    //                         accountData.amount
    //                     }`
    //                 );
    //             });
    //         })();
    // });

    useEffect(() => {
        if (WALLET_ADDRESS) {
            (async () => {
                const balance = await SOLANA_CONNECTION.getBalance(
                    new PublicKey(WALLET_ADDRESS)
                );
                setBalance(balance / LAMPORTS_PER_SOL);
            })();
        }
    }, [WALLET_ADDRESS, SOLANA_CONNECTION]);

    return (
        <div className="masterWallet">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="block">
                    <div className="title">
                        <span>About Wallet</span>
                        {/* <img
                            src={SolflareLogoImage}
                            alt="Solflare"
                            style={{ width: "36px", marginLeft: "9px" }}
                        /> */}
                        <button className="btn-no-style">
                            <img
                                src={RefreshImage}
                                alt="Refresh"
                                style={{ width: "30px" }}
                            />
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
                        <button className="btn-no-style">
                            <img
                                src={CopyImage}
                                alt="Copy"
                                style={{ width: "30px" }}
                            />
                        </button>
                    </div>
                </div>
                <div className="block">
                    <div className="title">
                        <span>Contents</span>
                    </div>
                    <div className="content" style={{ padding: "0px 18px" }}>
                        <div
                            className="d-flex justify-content-between"
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
                        <div
                            className="d-flex justify-content-between"
                            style={{ padding: "10px" }}
                        >
                            <p>SOL</p>
                            <p>{balance}</p>
                        </div>
                        <div
                            className="d-flex justify-content-between"
                            style={{ padding: "10px" }}
                        >
                            <p>{mintAddress}</p>
                            <p>{tokenBalance}</p>
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
                    {/* <NextButtonDisabled>Continue</NextButtonDisabled> */}
                    <NextButtonEnabled>Continue</NextButtonEnabled>
                </div>
            </div>
        </div>
    );
};

export default MasterWalletStep;
