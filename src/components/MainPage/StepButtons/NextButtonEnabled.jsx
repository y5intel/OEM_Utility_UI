const NextButtonEnabled = ({ children }) => {
    return (
        <button
            style={{
                width: "145px",
                height: "37px",
                fontSize: "20px",
                color: "#FFF",
                background:
                    "linear-gradient(90deg, #573CFA 54.17%, #372794 100%)",
                border: "1px solid #573CFA",
            }}
        >
            {children}
        </button>
    );
};

export default NextButtonEnabled;
