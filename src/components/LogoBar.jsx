import logoImage from "../assets/Utility-Wallet-Logo-1.png";

const LogoBar = () => {
    return (
        <div className="logobar d-flex align-items-center">
            <img
                src={logoImage}
                style={{ width: "36px", height: "36px" }}
                alt="logo"
            />
            <div style={{ width: "180px" }} className="text-center">
                Utility Project
            </div>
        </div>
    );
};

export default LogoBar;
