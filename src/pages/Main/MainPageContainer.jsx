import StepPannel from "../../components/MainPage/StepPannel";
import MainPageTitle from "../../components/MainPage/MainPageTitle";

const MainPageContainer = ({ children }) => {
    return (
        <div className="mainPage">
            <StepPannel />
            <div style={{ width: "100%", height: "100%" }}>
                <MainPageTitle />
                {children}
            </div>
        </div>
    );
};

export default MainPageContainer;
