import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearKeypair } from "features/keypairSingerSlice";

const ChangeWalletButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearKeypair());
        navigate("/wallet-import");
    };

    return (
        <button
            style={{
                border: "1px solid #A2A2A2",
                background: "#FFF",
                padding: "0px 15px",
                fontSize: "20px",
            }}
            onClick={handleClick}
        >
            Change Wallet
        </button>
    );
};

export default ChangeWalletButton;
