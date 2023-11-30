import React, { ReactNode } from "react";

interface WalletItemProps {
    imgSrc: string;
    children: ReactNode;
    onClick: () => void;
    isActive: boolean;
}

const WalletItem: React.FC<WalletItemProps> = ({
    imgSrc,
    children,
    onClick,
    isActive,
}) => {
    return (
        <div
            className={`walletblock ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="d-flex align-items-center">
                <img src={imgSrc} alt={children?.toString()} />
                <p style={{ fontSize: "24px" }}>{children}</p>
            </div>
            <div>
                <p style={{ fontSize: "16px" }}>Detected</p>
            </div>
        </div>
    );
};

export default WalletItem;
