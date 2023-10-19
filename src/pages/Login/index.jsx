import LogoBar from "../../components/LogoBar";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <LogoBar />
            <div className="main">
                <div className="login-sector position-center">
                    <div
                        className="text text-center"
                        style={{ marginBottom: "22px" }}
                    >
                        <h2 style={{ fontSize: "27px" }}>Log in</h2>
                        <p style={{ fontSize: "17px" }}>
                            Log into your admin account
                        </p>
                    </div>
                    <div className="inputbox">
                        <input type="mail" placeholder="User" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button
                        className="btn-custom btn-custom-default"
                        onClick={() => navigate("/wallet-connect")}
                    >
                        Log in
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
