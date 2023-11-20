import {
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";

import { useMemo } from "react";

import LoginPage from "./pages/Login";
import WalletConnectPage from "./pages/WalletConnect";
import MainPage from "./pages/Main";

import "./App.css";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// import the styles
import "@solana/wallet-adapter-react-ui/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const solNetwork = WalletAdapterNetwork.Testnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [solNetwork]
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <div className="custom-container position-relative">
            <HashRouter>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/wallet-connect"
                  element={<WalletConnectPage />}
                />
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<Navigate to="/login" />} />
              </Routes>
            </HashRouter>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
