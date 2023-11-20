// https://codesandbox.io/s/react-spinner-loader-body-example-b9xce?file=/src/App.js
// https://codesandbox.io/s/react-spinner-xfcgh3?file=/src/App.js
// https://codesandbox.io/s/react-loader-spinner-forked-gfd4no?file=/src/App.js

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementStepCount } from "../../../features/stepCounterSlice";

import DownloadComplete from "./DownloadComplete";
import LoadingSpinner from "../../LoadingSpinner";

import "./style.css";

const DownloadStep = () => {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // After 3 seconds, set isDownloading to true
        const timer = setTimeout(() => {
            setIsDownloaded(true);
            dispatch(incrementStepCount());
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => {
            // Clean up the timer if the component unmounts before 5 seconds
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="download position-relative">
            {isDownloaded ? (
                <DownloadComplete />
            ) : (
                <LoadingSpinner isDownloaded={true} />
            )}
        </div>
    );
};

export default DownloadStep;
