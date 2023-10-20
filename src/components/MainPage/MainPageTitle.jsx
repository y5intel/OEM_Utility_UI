import ChangeWalletButton from "./ChangeWalletButton";

const MainPageTitle = () => {
    return (
        <div className="titlebar bg-blue-gradient">
            <span>Master Wallet</span>
            <ChangeWalletButton />
        </div>
    );
};

export default MainPageTitle;
