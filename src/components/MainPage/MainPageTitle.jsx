import { useSelector } from "react-redux";
import { selectStepCount } from "../../features/stepCounterSlice";
import ChangeWalletButton from "./ChangeWalletButton";

const titles = [
    "Master Wallet",
    "Smart Contract",
    "Project Cost",
    "Payment",
    "Wallet Creation",
    "Labels",
    "Loading",
    "Completed!",
];

const MainPageTitle = () => {
    const stepCount = useSelector(selectStepCount);

    return (
        <div className="titlebar bg-blue-gradient">
            <span>{titles[stepCount]}</span>
            {stepCount === 0 && <ChangeWalletButton />}
        </div>
    );
};

export default MainPageTitle;
