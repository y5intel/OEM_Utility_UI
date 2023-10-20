const NextButtonEnabled = ({ children, width, onClick }) => {
    return (
        <button
            className="bg-blue-gradient"
            style={{
                width: width || "145px",
                height: "37px",
                fontSize: "20px",
                border: "1px solid #573CFA",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default NextButtonEnabled;
