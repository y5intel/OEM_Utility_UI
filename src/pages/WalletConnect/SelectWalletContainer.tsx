import React, { ReactNode } from "react";

interface SelectWalletContainerProps {
    children: ReactNode;
}

const SelectWalletContainer: React.FC<SelectWalletContainerProps> = ({
    children,
}) => {
    return (
        <div className="main">
            <div className="select-wallet-main position-center">{children}</div>
        </div>
    );
};

export default SelectWalletContainer;
