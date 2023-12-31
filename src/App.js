import { Route, Routes, Navigate, HashRouter } from "react-router-dom";

import WalletImportPage from "./pages/WalletImport";
import MainPage from "./pages/Main";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="custom-container position-relative">
            <HashRouter>
                <Routes>
                    <Route
                        path="/wallet-import"
                        element={<WalletImportPage />}
                    />
                    <Route path="/main" element={<MainPage />} />
                    <Route
                        path="/"
                        element={<Navigate to="/wallet-import" />}
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
