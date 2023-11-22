import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWalletCount } from "../../../features/walletItemSlice";
import { isPositiveInteger } from "../../../apis/globalApi";

import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import NextButtonDisabled from "../StepButtons/NextButtonDisabled";
import BackButton from "../StepButtons/BackButton";
import WarningSector from "../../WarningSector";
import "./style.css";

const ProjectCostStep: React.FC = () => {
    const [amount, setAmount] = useState<string>("");
    // const [isBalanceEnough, setIsBalanceEnough] = useState(false);
    const dispatch = useDispatch();

    const handleNextClick = () => {
        dispatch(setWalletCount(amount));
    };

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
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                        ></input>
                    </div>
                    <div className="cost-area" style={{ padding: "26px 0px" }}>
                        <div style={{ borderBottom: "1px solid #000" }}>
                            <div>Cost Factor</div>
                            <div>100</div>
                        </div>
                        <div style={{ fontWeight: "700" }}>
                            <div>Total Project Cost</div>
                            <div>0</div>
                        </div>
                    </div>
                    <div
                        className={`balance-area ${
                            // isBalanceEnough ? "sufficient" : "insufficient"
                            isPositiveInteger(amount)
                                ? "sufficient"
                                : "insufficient"
                        }`}
                    >
                        <div>
                            <div>Solflare Balance</div>
                            <div>
                                <span style={{ marginRight: "10px" }}>SOL</span>
                                <span>1,000,000.0000</span>
                            </div>
                        </div>
                        {/* {isBalanceEnough ? ( */}
                        {isPositiveInteger(amount) ? (
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

                {!isPositiveInteger(amount) && (
                    <WarningSector text="Please insert number of wallets" />
                )}
                {/* {isPositiveInteger(amount) && !isBalanceEnough && (
                    <WarningSector text="You don't have enough balance" />
                )} */}

                <div className="btn-block">
                    <BackButton />
                    {/* {isPositiveInteger(amount) && isBalanceEnough ? ( */}
                    {isPositiveInteger(amount) ? (
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
