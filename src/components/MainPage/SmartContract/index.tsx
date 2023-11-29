import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import NextButtonEnabled from "../StepButtons/NextButtonEnabled";
import NextButtonDisabled from "../StepButtons/NextButtonDisabled";
import BackButton from "../StepButtons/BackButton";
import InfoImage from "../../../assets/Info.png";
import "./style.css";

interface Option {
    value: string;
    label: string;
}

const selectOptions: Option[] = [
    { value: "sc1", label: "Smart Contract 1" },
    { value: "sc2", label: "Smart Contract 2" },
    { value: "sc3", label: "Smart Contract 3" },
    { value: "sc4", label: "Smart Contract 4" },
    { value: "sc5", label: "Smart Contract 5" },
    { value: "sc6", label: "Smart Contract 6" },
    { value: "sc7", label: "Smart Contract 7" },
    { value: "sc8", label: "Smart Contract 8" },
    { value: "sc9", label: "Smart Contract 9" },
    { value: "sc10", label: "Smart Contract 10" },
    // Add other options here
];

const SmartContractStep: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const customStyles: StylesConfig<Option, false> = {
        dropdownIndicator: (base) => ({
            ...base,
            transition: "all .2s ease",
            transform: "none", // Change the transform to a valid type here
            color: selectedOption ? "#FFF" : undefined,
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
            ...(selectedOption
                ? {
                      border: "1px solid #000",
                      background:
                          "linear-gradient(90deg, #573CFA 51.36%, #372794 98.61%)",
                  }
                : null),
        }),

        singleValue: (styles) => ({
            ...styles,
            color: selectedOption ? "#FFF" : undefined,
        }),
    };

    return (
        <div className="smartContract">
            <div className="position-relative" style={{ height: "100%" }}>
                <div className="block">
                    <div className="title">
                        <div>
                            <span>Select a Smart Contract</span>
                        </div>
                    </div>
                    <Select
                        options={selectOptions}
                        openMenuOnFocus
                        styles={customStyles}
                        placeholder="Select --"
                        value={selectedOption}
                        onChange={(value) => setSelectedOption(value)}
                        // menuIsOpen
                    />
                </div>
                <div className="block">
                    <div className="title">
                        <span>Smart Contract Information</span>
                    </div>
                    <div className="content">
                        <div className="d-flex">
                            <div>Token Name</div>
                            <div>ICHTSTDA560</div>
                        </div>
                        <div className="d-flex">
                            <div>Cost</div>
                            <div>100 SOL</div>
                        </div>
                        <div className="d-flex">
                            <div>Description</div>
                            <div className="desc">
                                IColor™ Standard 560/550 2 Step -A- Transfer
                                Media for Light & Dark Textiles A4
                            </div>
                        </div>
                    </div>
                </div>
                {!selectedOption && (
                    <div className="warn-block d-flex justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src={InfoImage} alt="Info" /> Please select
                            Smart Contract
                        </div>
                    </div>
                )}

                <div className="btn-block">
                    <BackButton />
                    {selectedOption ? (
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
