import MainPageContainer from "./MainPageContainer";
import MasterWalletStep from "../../components/MainPage/MasterWallet";
import PaymentStep from "../../components/MainPage/Payment";
import ProjectCostStep from "../../components/MainPage/ProjectCost";
import SmartContractStep from "../../components/MainPage/SmartContract";
import WalletCreationStep from "../../components/MainPage/WalletCreation";
import LabelStep from "../../components/MainPage/Labels";
import DownloadStep from "../../components/MainPage/Download";

import { useSelector } from "react-redux";
import { selectStepCount } from "../../features/stepCounterSlice";

import "./MainPage.css";

const stepComponents = [
    <MasterWalletStep key="1" />,
    <SmartContractStep key="2" />,
    <ProjectCostStep key="3" />,
    <PaymentStep key="4" />,
    <WalletCreationStep key="5" />,
    <LabelStep key="6" />,
    <DownloadStep key="7" />,
    <DownloadStep key="8" />,
];

function MainPage() {
    const stepCount = useSelector(selectStepCount);

    return <MainPageContainer>{stepComponents[stepCount]}</MainPageContainer>;
}

export default MainPage;
