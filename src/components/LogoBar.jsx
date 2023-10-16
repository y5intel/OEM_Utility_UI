import logoImage from "../assets/Utility-Wallet-Logo-1.png";

const LogoBar = () => {
  return (
    <div className="logobar d-flex align-items-center">
      <img
        src={logoImage}
        style={{ width: "65px", height: "65px" }}
        alt="logo"
      />
      <div style={{ width: "319px" }} className="text-center">
        Utility Project
      </div>
    </div>
  );
};

export default LogoBar;
