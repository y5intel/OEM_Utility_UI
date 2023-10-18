import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./pages//Login";
import WalletConnectPage from "./pages/WalletConnect";
import MainPage from "./pages/Main";

import "./App.css";

function App() {
    return (
        <div className="custom-container position-relative">
            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route
                        exact
                        path="/wallet-connect"
                        element={<WalletConnectPage />}
                    />
                    <Route exact path="/main" element={<MainPage />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
