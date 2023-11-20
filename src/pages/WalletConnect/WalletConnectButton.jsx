import { useNavigate } from "react-router-dom";

const WalletConnect = ({ selectedWallet }) => {
  const navigate = useNavigate();
  const handleConnectClick = () => navigate("/main");

  return !selectedWallet ? (
    <button
      className="btn-custom btn-custom-disabled disabled"
      style={{ marginTop: "26px" }}
    >
      Continue
    </button>
  ) : (
    <button
      className="btn-custom btn-custom-enabled"
      style={{ marginTop: "26px" }}
      onClick={handleConnectClick}
    >
      Continue
    </button>
  );
};

export default WalletConnect;
