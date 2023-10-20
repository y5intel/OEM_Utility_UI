import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import BackButton from "../StepButtons/BackButton";

const PaymentMain = ({ handleOpenModal }) => {
    return (
        <>
            <div>
                <div className="block">
                    <div className="title">Transfer Details Summary</div>
                    <div className="details">
                        <div>
                            <div>Number of Wallets</div>
                            <div>10</div>
                        </div>
                        <div>
                            <div>Cost Factor</div>
                            <div>100</div>
                        </div>
                        <div>
                            <div>Total Project Cost</div>
                            <div>1,000.00</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">
                        Wallet Creation Contents
                        <span>this will be what is in the wallets</span>
                    </div>
                    <div className="details">
                        <div>
                            <div>Token Name</div>
                            <div>ICHTSTDA560</div>
                        </div>
                        <div>
                            <div>Amount to Transfer</div>
                            <div>100 SOL</div>
                        </div>
                        <div>
                            <div>Data Account</div>
                            <div>--</div>
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
                {/* <NextButtonDisabled>Proceed to Payment</NextButtonDisabled> */}
                <NextButtonEnabled width="220px" onClick={handleOpenModal}>
                    Proceed to Payment
                </NextButtonEnabled>
            </div>
        </>
    );
};

export default PaymentMain;
