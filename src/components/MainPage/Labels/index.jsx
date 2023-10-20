import WalletCreationLabel from "../../WalletCreationLabel";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import ArrowLeftImage from "../../../assets/Expand_left.png";
import ArrowRightImage from "../../../assets/Expand_right.png";
import "./style.css";
import { useState } from "react";

const LabelStep = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [startNumber, endNumber] = pageNumber === 0 ? [1, 6] : [7, 10];

    return (
        <div className="labels">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="title">Preview</div>
                <div className="count">
                    Wallets {startNumber}-{endNumber}
                </div>
                <div
                    style={{
                        background: "#D9D9D9",
                        height: "444px",
                        padding: "14px 212px",
                    }}
                >
                    <div
                        style={{
                            padding: "28px 8px",
                            background: "#FFF",
                            height: "388px",
                        }}
                    >
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <WalletCreationLabel />
                                </div>
                                <div className="col-6">
                                    <WalletCreationLabel />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <WalletCreationLabel />
                                </div>
                                <div className="col-6">
                                    <WalletCreationLabel />
                                </div>
                            </div>
                            {pageNumber === 0 && (
                                <div className="row">
                                    <div className="col-6">
                                        <WalletCreationLabel />
                                    </div>
                                    <div className="col-6">
                                        <WalletCreationLabel />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginTop: "6px", fontSize: "14px" }}
                    >
                        <div>Page {pageNumber + 1} of 2</div>
                        <div className="pagination">
                            <button
                                style={{ marginRight: "5px" }}
                                onClick={() => setPageNumber(0)}
                            >
                                <img src={ArrowLeftImage} />
                            </button>
                            <button onClick={() => setPageNumber(1)}>
                                <img src={ArrowRightImage} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="btn-block">
                    <NextButtonEnabled>Download</NextButtonEnabled>
                </div>
            </div>
        </div>
    );
};

export default LabelStep;
