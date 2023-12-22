import { useSelector } from "react-redux";
import { selectWalletState } from "../../../features/walletItemSlice";
import BackButton from "../StepButtons/BackButton";
import { FC } from "react";
import { consumableTokenState } from "features/tokenItemSlice";

interface WalletState {
    count: number;
    // Define other properties here if needed
}

interface PaymentMainProps {
    handleOpenModal: () => void;
}

const PaymentMain: FC<PaymentMainProps> = ({ handleOpenModal }) => {
    const walletState = useSelector(selectWalletState) as WalletState;
    const selectedToken = useSelector(consumableTokenState).selectedToken;

    return (
        <>
            <div>
                <div className="block">
                    <div className="title">Transfer Details Summary</div>
                    <div className="details">
                        <div>
                            <div>Number of Wallets</div>
                            <div>{walletState.count}</div>
                        </div>
                        <div>
                            <div>Cost Factor</div>
                            <div>{selectedToken.price}</div>
                        </div>
                        <div>
                            <div>Total Project Cost</div>
                            <div>{selectedToken.price * walletState.count}</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">
                        Wallet Creation Contents
                        <span
                            style={{
                                fontWeight: "400",
                                fontSize: "0.8em",
                            }}
                        >
                            {/* {" "}
                            (this will be what is in the wallets) */}
                        </span>
                    </div>
                    <div className="details">
                        <div>
                            <div>Token Name</div>
                            <div>{selectedToken.label}</div>
                        </div>
                        <div>
                            <div>Amount to Transfer</div>
                            <div>{selectedToken.price} SOL</div>
                        </div>
                        <div>
                            <div>Pages</div>
                            <div>{selectedToken.pages}</div>
                        </div>
                        <div>
                            <div>Information 1</div>
                            <div>--</div>
                        </div>
                        <div>
                            <div>Information 2</div>
                            <div>--</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-block">
                <BackButton />
                <button
                    className="bg-blue-gradient"
                    style={{
                        width: "220px",
                        height: "37px",
                        fontSize: "20px",
                        border: "1px solid #573CFA",
                    }}
                    onClick={handleOpenModal}
                >
                    Proceed to Payment
                </button>
            </div>
        </>
    );
};

export default PaymentMain;
