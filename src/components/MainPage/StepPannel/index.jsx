import LogoBar from "../../LogoBar";
import StepElement from "./StepElement";

import MasterWalletImage from "../../../assets/masterWallet.png";
import SmartContractImage from "../../../assets/Rectangle.png";
import SmartContractImage2 from "../../../assets/Rectangle2.png";
import ProjectCostImage from "../../../assets/Money.png";
import ProjectCostImage2 from "../../../assets/Money2.png";
import PaymentImage from "../../../assets/Sort.png";
import PaymentImage2 from "../../../assets/Sort2.png";
import WalletCreationImage from "../../../assets/Widget.png";
import WalletCreationImage2 from "../../../assets/Widget2.png";
import LablesImage from "../../../assets/Ticket_alt.png";
import LablesImage2 from "../../../assets/Ticket_alt2.png";

const stepContents = [
    { title: "Master Wallet", imgSrc2: MasterWalletImage },
    {
        title: "Smart Contract",
        imgSrc1: SmartContractImage,
        imgSrc2: SmartContractImage2,
    },
    {
        title: "Project Cost",
        imgSrc1: ProjectCostImage,
        imgSrc2: ProjectCostImage2,
    },
    { title: "Payment", imgSrc1: PaymentImage, imgSrc2: PaymentImage2 },
    {
        title: "Wallet Creation",
        imgSrc1: WalletCreationImage,
        imgSrc2: WalletCreationImage2,
    },
    { title: "Labels", imgSrc1: LablesImage, imgSrc2: LablesImage2 },
];

const StepPannel = () => {
    return (
        <div className="stepPannel">
            <LogoBar />
            {stepContents.map((content, i) => (
                <StepElement
                    key={i}
                    id={i + 1}
                    title={content.title}
                    imgSrc1={content.imgSrc1}
                    imgSrc2={content.imgSrc2}
                />
            ))}
        </div>
    );
};

export default StepPannel;
