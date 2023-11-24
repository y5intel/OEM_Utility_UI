import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { selectWalletState } from "../../../features/walletItemSlice";

import WalletCreationLabel from "../../WalletCreationLabel";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import BackButton from "../StepButtons/BackButton";
import CopyImage from "../../../assets/Copy_alt_light.png";
import "./style.css";
import { useState } from "react";

const WalletCreationStep = () => {
    const [walletNumber, setWalletNumber] = useState(1);

    const totalWalletCount = useSelector(selectWalletState).count;

    const handleNextClick = () =>
        setWalletNumber(
            walletNumber === totalWalletCount
                ? totalWalletCount
                : walletNumber + 1
        );

    return (
        <div className="walletCreation">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="d-flex" style={{ height: "100%" }}>
                    <div
                        className="half-width"
                        style={{ paddingRight: "48px", marginTop: "-12px" }}
                    >
                        <div style={{ fontSize: "26px", marginBottom: "18px" }}>
                            <span
                                style={{ fontWeight: "800", color: "#573CFA" }}
                            >
                                Wallet {walletNumber}
                            </span>{" "}
                            of {totalWalletCount}
                        </div>
                        <div style={{ marginBottom: "18px" }}>
                            <div className="d-flex justify-content-between">
                                <span className="title">Recovery Phrase</span>
                                <button className="btn-no-style">
                                    <img
                                        src={CopyImage}
                                        style={{ width: "30px" }}
                                        alt="Copy"
                                    />
                                </button>
                            </div>
                            <div
                                style={{
                                    background: "#573CFA",
                                    color: "#FFF",
                                    fontSize: "18px",
                                    padding: "14px 12px",
                                }}
                            >
                                <span>
                                    design soy flavor frame transport printer
                                    pillowcase projector lamp alcohol container
                                    door lid
                                </span>
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: "5px" }}>
                                <span className="title">Information</span>
                            </div>
                            <div
                                style={{
                                    border: "1px solid #000",
                                    padding: "10px 17px",
                                }}
                            >
                                <div style={{ marginBottom: "30px" }}>
                                    <div>
                                        <span className="title">Contents</span>
                                    </div>
                                    <div className="detail-line">
                                        <div>Token</div>
                                        <div>ICHTSTDA560</div>
                                    </div>
                                    <div className="detail-line">
                                        <div>Amount</div>
                                        <div>100</div>
                                    </div>
                                    <div className="detail-line">
                                        <div>Data Account</div>
                                        <div>--</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="title">Sender</span>
                                    </div>
                                    <div className="detail-line">
                                        <div>Smart Contract</div>
                                        <div>Smart Contract 1</div>
                                    </div>
                                    <div className="detail-line">
                                        <div>Timestamp</div>
                                        <div>11/05/23 02:15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="half-width">
                        <div style={{ marginBottom: "10px" }}>
                            <span className="title">Label</span>
                        </div>
                        <div
                            style={{
                                background: "#D9D9D9",
                                padding: "97px 24px",
                            }}
                        >
                            <WalletCreationLabel />
                        </div>
                    </div>
                </div>
                <div className="btn-block">
                    <BackButton />
                    {walletNumber < totalWalletCount ? (
                        <button
                            className="bg-blue-gradient"
                            style={{
                                width: "145px",
                                height: "37px",
                                fontSize: "20px",
                                border: "1px solid #573CFA",
                            }}
                            onClick={handleNextClick}
                        >
                            Next Wallet
                        </button>
                    ) : (
                        <NextButtonEnabled>Proceed</NextButtonEnabled>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WalletCreationStep;
