import CopyImage from "../../../assets/Copy_alt_light.png";
import SolflareLogoImage from "../../../assets/Solflare-Logo-1.png";
import RefreshImage from "../../../assets/Refresh_light.png";
import NextButtonDisabled from "../StepButtons/NextButtonDisabled";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import BackButton from "../StepButtons/BackButton";
import "./style.css";

const MasterWalletStep = () => {
    return (
        <div className="masterWallet">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="block">
                    <div className="title">
                        <div className="d-flex align-items-center">
                            <span>Solflare Wallet</span>
                            <img
                                src={SolflareLogoImage}
                                style={{ width: "36px", marginLeft: "9px" }}
                            />
                        </div>
                        <button className="btn-no-style">
                            <img src={RefreshImage} style={{ width: "30px" }} />
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
                                CXSs8AxHinwQD7E26Sy9jKaC2gXeSUE9s7JBjSfzpAiN
                            </span>
                        </div>
                        <button className="btn-no-style">
                            <img src={CopyImage} style={{ width: "30px" }} />
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
                            <div>Name</div>
                            <div>Amount</div>
                        </div>
                        <div className="d-flex" style={{ padding: "10px" }}>
                            <div>SOL</div>
                            <div>1,000,000.0000</div>
                        </div>
                    </div>
                </div>
                <div className="btn-block">
                    <BackButton />
                    {/* <NextButtonDisabled>Continue</NextButtonDisabled> */}
                    <NextButtonEnabled>Continue</NextButtonEnabled>
                </div>
            </div>
        </div>
    );
};

export default MasterWalletStep;
