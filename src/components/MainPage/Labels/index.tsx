import { useSelector } from "react-redux";
import { selectWalletState } from "../../../features/walletItemSlice";
import { getSmallerValueOfTwo } from "../../../apis/globalApi";
import WalletCreationLabel from "../../WalletCreationLabel";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import ArrowLeftImage from "../../../assets/Expand_left.png";
import ArrowRightImage from "../../../assets/Expand_right.png";
import "./style.css";
import { useState } from "react";

interface ArrangeIndex {
    startIndex: number;
    endIndex: number;
}

const LabelStep: React.FC = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    const walletState = useSelector(selectWalletState) as { count: number } | undefined;
    const totalWalletCount: number = walletState?.count || 0;

    const totalPages: number = Math.ceil(totalWalletCount / 6);

    const [arrangeIndex, setArrangeIndex] = useState<ArrangeIndex>({
        startIndex: 1,
        endIndex: getSmallerValueOfTwo(totalWalletCount, 6),
    });

    const handlePageChange = (value: number) => {
        if (value > 0) {
            if (pageNumber * 6 >= totalWalletCount) return;
            setArrangeIndex({
                startIndex: pageNumber * 6 + 1,
                endIndex: getSmallerValueOfTwo(pageNumber * 6 + 6, totalWalletCount),
            });
        }
        if (value < 0) {
            if (pageNumber === 1) return;
            setArrangeIndex({
                startIndex: (pageNumber - 1) * 6 - 5,
                endIndex: (pageNumber - 1) * 6,
            });
        }
        setPageNumber(pageNumber + value);
    };

    return (
        <div className="labels">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="title">Preview</div>
                <div className="count">
                    Wallets {arrangeIndex.startIndex}-{arrangeIndex.endIndex}
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
                        <div className="row">
                            {Array.from(
                                { length: arrangeIndex.endIndex - arrangeIndex.startIndex + 1 },
                                (_, index) => index + arrangeIndex.startIndex
                            ).map((item) => (
                                <div key={item} className="col-6">
                                    <WalletCreationLabel />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginTop: "6px", fontSize: "14px" }}
                    >
                        <div>
                            Page {pageNumber} of {totalPages}
                        </div>
                        <div className="pagination">
                            <button
                                style={{ marginRight: "5px" }}
                                onClick={() => handlePageChange(-1)}
                            >
                                <img src={ArrowLeftImage} alt="Left Arrow" />
                            </button>
                            <button onClick={() => handlePageChange(1)}>
                                <img src={ArrowRightImage} alt="Right Arrow" />
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
