import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeTokens, setConsumableToken } from "features/tokenItemSlice";
import { consumableTokenState } from "features/tokenItemSlice";

import Select from "react-select";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import NextButtonDisabled from "../StepButtons/NextButtonDisabled";
import BackButton from "../StepButtons/BackButton";
import InfoImage from "../../../assets/Info.png";
import Token1_Logo from "../../../assets/Token1.png";
import "./style.css";

const consumableTokens = [
    { value: "sc1", label: "Token 1", price: 0.000001, pages: 10 },
    { value: "sc2", label: "Token 2", price: 0.000002, pages: 20 },
    { value: "sc3", label: "Token 3", price: 0.000003, pages: 30 },
    { value: "sc4", label: "Token 4", price: 0.000004, pages: 40 },
    { value: "sc5", label: "Token 5", price: 0.000005, pages: 50 },
    { value: "sc6", label: "Token 6", price: 0.000006, pages: 60 },
    { value: "sc7", label: "Token 7", price: 0.000007, pages: 70 },
    { value: "sc8", label: "Token 8", price: 0.000008, pages: 80 },
    { value: "sc9", label: "Token 9", price: 0.000009, pages: 90 },
    { value: "sc10", label: "Token 10", price: 0.00001, pages: 100 },
];

const SmartContractStep = () => {
    // const [selectedOption, setSelectedOption] = useState(null);
    const selectedToken = useSelector(consumableTokenState).selectedToken;
    const dispatch = useDispatch();

    const handleOptionChange = (value) => {
        dispatch(setConsumableToken(value));
    };

    const handleIntialize = () => {
        dispatch(initializeTokens());
    };

    const customStyles = {
        dropdownIndicator: (base) => ({
            ...base,
            transition: "all .2s ease",
            transform: "none", // Change the transform to a valid type here
            color: selectedToken ? "#FFF" : undefined,
        }),

        option: (styles) => ({
            ...styles,
            padding: "10px 10px 10px 30px",
            fontSize: "20px",
        }),

        control: (styles) => ({
            ...styles,
            padding: "10px 10px 10px 20px",
            fontSize: "20px",
            ...(selectedToken
                ? {
                      border: "1px solid #000",
                      background:
                          "linear-gradient(90deg, #573CFA 51.36%, #372794 98.61%)",
                  }
                : null),
        }),

        singleValue: (styles) => ({
            ...styles,
            color: selectedToken ? "#FFF" : undefined,
        }),
    };

    return (
        <div className="smartContract">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="block">
                    <div className="title">
                        <div>
                            <span>Select A Consumable Token</span>
                        </div>
                    </div>
                    <Select
                        options={consumableTokens}
                        openMenuOnFocus
                        styles={customStyles}
                        placeholder="Select --"
                        value={selectedToken}
                        onChange={handleOptionChange}
                        // menuIsOpen
                    />
                </div>
                {selectedToken ? (
                    <div className="block">
                        <div className="title">
                            <span>Smart Contract Information</span>
                        </div>
                        <div className="content d-flex">
                            <div className="description">
                                <div className="d-flex">
                                    <div>Token Name</div>
                                    <div>{selectedToken.label}</div>
                                </div>
                                <div className="d-flex">
                                    <div>Cost</div>
                                    <div>{selectedToken.price} SOL</div>
                                </div>
                                <div className="d-flex">
                                    <div>Description</div>
                                    <div className="desc">
                                        {/* Example description */}
                                        {selectedToken.value}
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div>Pages</div>
                                    <div>{selectedToken.pages}</div>
                                </div>
                            </div>
                            <div className="image">
                                <img src={Token1_Logo} alt="TokenLogo" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="warn-block d-flex justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src={InfoImage} alt="Info" /> Please select a
                            Smart Contract
                        </div>
                    </div>
                )}

                <div className="btn-block">
                    <BackButton onClick={handleIntialize} />
                    {selectedToken ? (
                        <NextButtonEnabled>Proceed</NextButtonEnabled>
                    ) : (
                        <NextButtonDisabled>Continue</NextButtonDisabled>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmartContractStep;
