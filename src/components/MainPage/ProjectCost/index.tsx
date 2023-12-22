import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWalletCount } from "../../../features/walletItemSlice";
import { isSufficientBalance } from "apis/globalApi";
import { selectKeypairState } from "features/keypairSingerSlice";
import { consumableTokenState } from "features/tokenItemSlice";
import { getSolBalance } from "apis/walletApi";

import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import NextButtonDisabled from "../StepButtons/NextButtonDisabled";
import BackButton from "../StepButtons/BackButton";
import WarningSector from "../../WarningSector";
import "./style.css";

const ProjectCostStep: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [balance, setBalance] = useState<number>(0);

    const dispatch = useDispatch();
    const selectedToken = useSelector(consumableTokenState).selectedToken;
    const costFactor = selectedToken ? selectedToken.price : 0;

    const totalCost = (costFactor * 1000000000 * amount) / 1000000000;

    const handleNextClick = () => {
        dispatch(setWalletCount(amount));
    };

    const publicKey = useSelector(selectKeypairState).publicKey;

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const wallet_balance = await getSolBalance(publicKey);
                setBalance(wallet_balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, [publicKey]);

    return (
        <div className="projectCost">
            <div className="position-relative" style={{ height: "100%" }}>
                <div style={{ padding: "26px", border: "1px solid #000" }}>
                    <div
                        className="d-flex justify-content-between align-items-center bg-blue-gradient"
                        style={{ padding: "10px 26px", fontSize: "20px" }}
                    >
                        <div>Number of Wallets</div>
                        <input
                            placeholder="insert amount"
                            style={{ padding: "5px 36px", width: "200px" }}
                            onChange={(e) =>
                                setAmount(parseInt(e.target.value))
                            }
                            value={amount}
                        ></input>
                    </div>
                    <div className="cost-area" style={{ padding: "26px 0px" }}>
                        <div style={{ borderBottom: "1px solid #000" }}>
                            <div>Cost Factor</div>
                            <div>{costFactor}</div>
                        </div>
                        <div style={{ fontWeight: "700" }}>
                            <div>Total Project Cost</div>
                            <div>{totalCost}</div>
                        </div>
                    </div>
                    <div
                        className={`balance-area ${
                            // isBalanceEnough ? "sufficient" : "insufficient"
                            isSufficientBalance(totalCost, balance)
                                ? "sufficient"
                                : "insufficient"
                        }`}
                    >
                        <div>
                            <div>Solana Balance</div>
                            <div>
                                <span style={{ marginRight: "10px" }}>SOL</span>
                                <span>{balance}</span>
                            </div>
                        </div>
                        {/* {isBalanceEnough ? ( */}
                        {isSufficientBalance(totalCost, balance) ? (
                            <div className="status-area">
                                Sufficient Balance
                            </div>
                        ) : (
                            <div className="status-area">
                                Insufficient Balance
                            </div>
                        )}
                    </div>
                </div>

                {!isSufficientBalance(totalCost, balance) && (
                    <WarningSector text="Please insert number of wallets" />
                )}
                {/* {isPositiveInteger(amount) && !isBalanceEnough && (
                    <WarningSector text="You don't have enough balance" />
                )} */}

                <div className="btn-block">
                    <BackButton />
                    {/* {isPositiveInteger(amount) && isBalanceEnough ? ( */}
                    {isSufficientBalance(totalCost, balance) ? (
                        <NextButtonEnabled
                            width="180px"
                            onClick={handleNextClick}
                        >
                            Check Summary
                        </NextButtonEnabled>
                    ) : (
                        <NextButtonDisabled width="180px">
                            Check Summary
                        </NextButtonDisabled>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCostStep;
