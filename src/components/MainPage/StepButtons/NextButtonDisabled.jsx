const NextButtonDisabled = ({ children, width }) => {
    return (
        <button
            style={{
                width: width || "145px",
                height: "37px",
                fontSize: "20px",
                color: "#FFF",
                background: "#D9D9D9",
                border: "1px solid #D9D9D9",
            }}
        >
            {children}
        </button>
    );
};

export default NextButtonDisabled;
