import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import BackButton from "../StepButtons/BackButton";
import InfoImage from "../../../assets/Info.png";
import "./style.css";

const ProjectCostStep = () => {
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
                    <div className="balance-area">
                        <div>
                            <div>Solflare Balance</div>
                            <div>
                                <span style={{ marginRight: "10px" }}>SOL</span>
                                <span>1,000,000.0000</span>
                            </div>
                        </div>
                        <div
                            className="d-flex justify-content-center bg-blue-gradient"
                            style={{
                                padding: "3px",
                                fontSize: "14px",
                                fontWeight: "500",
                            }}
                        >
                            Sufficient Balance
                        </div>
                    </div>
                </div>

                <div className="warn-block d-flex justify-content-center">
                    <div className="d-flex align-items-center">
                        <img src={InfoImage} alt="Info" />{" "}
                        <span>You don't have enough balance</span>
                    </div>
                </div>

                <div className="btn-block">
                    <BackButton />
                    {/* <NextButtonDisabled>Check Summary</NextButtonDisabled> */}
                    <NextButtonEnabled width="180px">
                        Check Summary
                    </NextButtonEnabled>
                </div>
            </div>
        </div>
    );
};

export default ProjectCostStep;
